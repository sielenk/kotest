package com.sksamuel.kotest

import io.kotest.core.config.AbstractProjectConfig
import io.kotest.core.extensions.Extension
import io.kotest.core.spec.SpecExecutionOrder
import io.kotest.extensions.junitxml.JunitXmlReporter

class ProjectConfig : AbstractProjectConfig() {

   override val specExecutionOrder = SpecExecutionOrder.Annotated

   override fun extensions(): List<Extension> {
      return listOf(
         JunitXmlReporter(
            includeContainers = false,
            useTestPathAsName = true,
            outputDir = "test-results/without_containers"
         ),
         JunitXmlReporter(
            includeContainers = true,
            useTestPathAsName = false,
            outputDir = "test-results/with_containers"
         )
      )
   }
}
