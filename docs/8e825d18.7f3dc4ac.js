(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(163)),s=n(187),i=n(188),l={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},c={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Quick Start",description:"Kotest is divided into several, stand alone, subprojects, each of which can be used independently:",source:"@site/docs/quick_start.mdx",slug:"/quickstart",permalink:"/docs/quickstart",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/quick_start.mdx",version:"current",sidebar_label:"Quick Start",sidebar:"docs",next:{title:"Changelog",permalink:"/docs/changelog.html"}},b=[{value:"Test Framework",id:"test-framework",children:[]},{value:"Assertions Library",id:"assertions-library",children:[]},{value:"Property Testing",id:"property-testing",children:[]},{value:"Snapshots",id:"snapshots",children:[]}],u={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Kotest is divided into several, stand alone, subprojects, each of which can be used independently:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/framework/framework.html"}),"Test framework")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/assertions/assertions.html"}),"Assertions library")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/proptest/property-based-testing.html"}),"Property testing"))),Object(o.b)("p",null,"You can decide to go ",Object(o.b)("em",{parentName:"p"},"all in")," on Kotest, and use all three together, or you can choose to one or more modules in conjunction with other projects.\nFor example, you could use the assertions library with JUnit, or you could use the test framework with another assertions library like assertj."),Object(o.b)("p",null,"This page gives setup instructions for various combinations of projects and targets."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Kotest is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kotlinlang.org/docs/reference/multiplatform.html"}),"multi-platform project"),".\nIf you are unfamiliar with this, then Kotlin compiles to different targets - JVM, JS, Native, iOS and so on. If you are doing server side or android development then you want the modules that end with JVM, such as ",Object(o.b)("inlineCode",{parentName:"p"},"kotest-property-jvm"),"."))),Object(o.b)("h2",{id:"test-framework"},"Test Framework"),Object(o.b)("p",null,"The Kotest test framework is supported on JVM, Android and Javascript."),Object(o.b)(s.a,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Kotlin/JS",value:"JS"},{label:"Android",value:"Android"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"JVM/Gradle",mdxType:"TabItem"},Object(o.b)("p",null,"Kotest on the JVM uses the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://junit.org/junit5/docs/current/user-guide/#running-tests-build-gradle"}),"JUnit Platform")," gradle plugin.\nFor Gradle 4.6 and higher this is as simple as adding ",Object(o.b)("inlineCode",{parentName:"p"},"useJUnitPlatform()")," inside the tasks with type ",Object(o.b)("inlineCode",{parentName:"p"},"Test")," and then adding the Kotest junit5 runner dependency."),Object(o.b)("p",null,"If you are using Gradle + Groovy then:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"test {\n   useJUnitPlatform()\n}\n")),Object(o.b)("p",null,"Or if you are using Gradle + Kotlin then:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"tasks.withType<Test> {\n   useJUnitPlatform()\n}\n")),Object(o.b)("p",null,"And then the dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"testImplementation 'io.kotest:kotest-runner-junit5:$version'\n"))),Object(o.b)(i.a,{value:"JS",mdxType:"TabItem"},Object(o.b)("p",null,"Add the following dependency to your commonTest dependencies block:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'io.kotest:kotest-framework-engine:$version'\n")),Object(o.b)("p",null,"Alternatively, add the dependency to the Javascript specific target."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-framework-engine:$version")\n         }\n      }\n   }\n}\n'))),Object(o.b)(i.a,{value:"JVM/Maven",mdxType:"TabItem"},Object(o.b)("p",null,"For maven you must configure the surefire plugin for junit tests."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n   <groupId>org.apache.maven.plugins</groupId>\n   <artifactId>maven-surefire-plugin</artifactId>\n   <version>2.22.2</version>\n</plugin>\n")),Object(o.b)("p",null,"And then add the Kotest JUnit5 runner to your dependencies section."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-runner-junit5-jvm</artifactId>\n   <version>{version}</version>\n   <scope>test</scope>\n</dependency>\n"))),Object(o.b)(i.a,{value:"Android",mdxType:"TabItem"},Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Currently, only JVM tests are officially supported in Kotest. Experimental support for instrumented and Robolectric tests is currently under work."),Object(o.b)("p",{parentName:"div"},"The following steps enable Kotest to be used for unit and integration tests, where the Android framework is not needed or is mocked that usually reside in the\n",Object(o.b)("inlineCode",{parentName:"p"},"src/test")," folder of your module."))),Object(o.b)("p",null,"Kotest on Android uses the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://junit.org/junit5/docs/current/user-guide/#running-tests-build-gradle"}),"JUnit Platform")," gradle plugin.\nThis requires configuring the android test options block in your build file and then adding the Kotest junit5 runner dependency."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"android.testOptions {\n   unitTests.all {\n      useJUnitPlatform()\n   }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"dependencies {\n   testImplementation 'io.kotest:kotest-runner-junit5:version'\n}\n"))),Object(o.b)(i.a,{value:"Multiplatform",mdxType:"TabItem"},Object(o.b)("p",null,"To configure the test framework for both JS and JVM, you just combine copy the steps for JVM and JS."))),Object(o.b)("h2",{id:"assertions-library"},"Assertions Library"),Object(o.b)("p",null,"The core assertions library framework is supported on all targets. Submodules are supported on the platforms that applicable.\nFor example, the JDBC matchers only work for JVM since JDBC is a Java library."),Object(o.b)(s.a,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"JVM/Gradle",mdxType:"TabItem"},Object(o.b)("p",null,"Add the following dependency to your build:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"testImplementation 'io.kotest:kotest-assertions-core:$version'\n"))),Object(o.b)(i.a,{value:"JVM/Maven",mdxType:"TabItem"},Object(o.b)("p",null,"Add the following dependency to your build."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-assertions-core-jvm</artifactId>\n   <version>{version}</version>\n   <scope>test</scope>\n</dependency>\n"))),Object(o.b)(i.a,{value:"Multiplatform",mdxType:"TabItem"},Object(o.b)("p",null,"Add the following dependency to your commonTest dependencies block:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'io.kotest:kotest-assertions-core:$version'\n")),Object(o.b)("p",null,"Alternatively, add the dependency to a specific target. For example, we could add to the Javascript target only."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-assertions-core:$version")\n         }\n      }\n   }\n}\n')))),Object(o.b)("h2",{id:"property-testing"},"Property Testing"),Object(o.b)("p",null,"The property test framework is supported on all targets."),Object(o.b)(s.a,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"JVM/Gradle",mdxType:"TabItem"},Object(o.b)("p",null,"Add the following dependency to your build:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"testImplementation 'io.kotest:kotest-property:$version'\n"))),Object(o.b)(i.a,{value:"JVM/Maven",mdxType:"TabItem"},Object(o.b)("p",null,"Add the following dependency to your build."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-property-jvm</artifactId>\n   <version>${version}</version>\n   <scope>test</scope>\n</dependency>\n"))),Object(o.b)(i.a,{value:"Multiplatform",mdxType:"TabItem"},Object(o.b)("p",null,"Add the following dependency to your commonTest dependencies block:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"implementation 'io.kotest:kotest-property:$version'\n")),Object(o.b)("p",null,"Alternatively, add the dependency to a specific target. For example, we could add to the Javascript target only."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-property:$version")\n         }\n      }\n   }\n}\n')))),Object(o.b)("h2",{id:"snapshots"},"Snapshots"),Object(o.b)("p",null,"Snapshot are automatically published on each commit to master.\nIf you want to test the latest snapshot build, setup the same way described above, change the version to the current snapshot version and add the following repository to your ",Object(o.b)("inlineCode",{parentName:"p"},"repositories")," block:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"https://oss.sonatype.org/content/repositories/snapshots\n")))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,i(i({ref:t},c),{},{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},164:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},171:function(e,t,n){"use strict";var a=n(0),r=n(172);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},172:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},187:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(171),s=n(164),i=n(52),l=n.n(i),c=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,j=Object(o.a)(),O=j.tabGroupChoices,f=j.setTabGroupChoices,v=Object(a.useState)(u),g=v[0],h=v[1];if(null!=d){var y=O[d];null!=y&&y!==g&&p.some((function(e){return e.value===y}))&&h(y)}var k=function(e){h(e),null!=d&&f(d,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(a.cloneElement)(i.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},188:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);