package com.sksamuel.kotest.runner.junit5

import io.kotest.core.descriptors.append
import io.kotest.core.sourceRef
import io.kotest.core.spec.style.DescribeSpec
import io.kotest.core.descriptors.toDescriptor
import io.kotest.core.names.TestName
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.core.test.TestType
import io.kotest.engine.test.createTestResult
import io.kotest.matchers.shouldBe
import io.kotest.runner.junit.platform.JUnitTestEngineListener
import io.kotest.runner.junit.platform.KotestEngineDescriptor
import org.junit.platform.engine.EngineExecutionListener
import org.junit.platform.engine.TestDescriptor
import org.junit.platform.engine.TestExecutionResult
import org.junit.platform.engine.UniqueId
import org.junit.platform.engine.reporting.ReportEntry

class JUnitTestRunnerListenerTest : DescribeSpec({

   describe("as per the JUnit spec") {
      it("a failing test should not fail the parent test or parent spec") {

         val root = KotestEngineDescriptor(
            UniqueId.forEngine("kotest"),
            emptyList(),
            emptyList(),
            emptyList(),
            null,
         )

         val finished = mutableMapOf<String, TestExecutionResult.Status>()

         val engineListener = object : EngineExecutionListener {
            override fun executionFinished(testDescriptor: TestDescriptor, testExecutionResult: TestExecutionResult) {
               finished[testDescriptor.displayName] = testExecutionResult.status
            }

            override fun reportingEntryPublished(testDescriptor: TestDescriptor?, entry: ReportEntry?) {}
            override fun executionSkipped(testDescriptor: TestDescriptor?, reason: String?) {}
            override fun executionStarted(testDescriptor: TestDescriptor?) {}
            override fun dynamicTestRegistered(testDescriptor: TestDescriptor?) {}
         }

         val test1 = TestCase(
            JUnitTestRunnerListenerTest::class.toDescriptor().append("test1"),
            TestName("test1"),
            JUnitTestRunnerListenerTest(),
            { },
            sourceRef(),
            TestType.Container,
            parent = null,
         )

         val test2 = TestCase(
            test1.descriptor.append("test2"),
            TestName("test2"),
            JUnitTestRunnerListenerTest(),
            { },
            sourceRef(),
            TestType.Test,
            parent = test1,
         )

         val listener = JUnitTestEngineListener(engineListener, root)
         listener.engineStarted(emptyList())
         listener.specEnter(JUnitTestRunnerListenerTest::class)
         listener.specStarted(JUnitTestRunnerListenerTest::class)
         listener.testStarted(test1)
         listener.testStarted(test2)
         listener.testFinished(test2, createTestResult(0, AssertionError("boom")))
         listener.testFinished(test1, TestResult.success(0))
         listener.specFinished(JUnitTestRunnerListenerTest::class, emptyMap())
         listener.specExit(JUnitTestRunnerListenerTest::class, null)
         listener.engineFinished(emptyList())

         finished.toMap() shouldBe mapOf(
            "test2" to TestExecutionResult.Status.FAILED,
            "test1" to TestExecutionResult.Status.SUCCESSFUL,
            "com.sksamuel.kotest.runner.junit5.JUnitTestRunnerListenerTest" to TestExecutionResult.Status.SUCCESSFUL,
            "Kotest" to TestExecutionResult.Status.SUCCESSFUL
         )
      }
   }
})
