(self.webpackChunkboilerplate=self.webpackChunkboilerplate||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,decorators:()=>decorators});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),react=__webpack_require__("./node_modules/react/index.js");const global=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").vJ)(["*{margin:0;padding:0;box-sizing:border-box;}html{font-size:62.5%;}html,body,#__next{height:100%;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),decorators=(react.createElement,[function(Story){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(global,{}),(0,jsx_runtime.jsx)(Story,{})]})}]),__namedExportsOrder=["decorators"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/Main/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Default:()=>Default,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),Wrapper=styled_components_browser_esm.ZP.main.withConfig({displayName:"styles__Wrapper"})(["background-color:#06092b;color:#fff;width:100%;height:100%;padding:3rem;display:flex;flex-direction:column;text-align:center;align-items:center;justify-content:center;"]),Logo=styled_components_browser_esm.ZP.img.withConfig({displayName:"styles__Logo"})(["width:25rem;margin-bottom:2rem;"]),Title=styled_components_browser_esm.ZP.h1.withConfig({displayName:"styles__Title"})(["font-size:2.5rem;"]),Description=styled_components_browser_esm.ZP.h2.withConfig({displayName:"styles__Description"})(["font-size:2rem;font-weight:400;"]),Illustatrion=styled_components_browser_esm.ZP.img.withConfig({displayName:"styles__Illustatrion"})(["margin-top:3rem;width:min(30rem,100%);"]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Main=(react.createElement,function Main(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"React Avancado":_ref$title,_ref$description=_ref.description,description=void 0===_ref$description?"TS, React, Next and Styled Components":_ref$description;return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Logo,{src:"/img/logo.svg",alt:"Imagem de um atomo e react avancado escrito ao lado"}),(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(Description,{children:description}),(0,jsx_runtime.jsx)(Illustatrion,{src:"/img/hero-illustration.svg",alt:"Um desenvolvedor de frente para uma tela com codigo"})]})});Main.displayName="Main";const components_Main=Main;try{Main.displayName="Main",Main.__docgenInfo={description:"",displayName:"Main",props:{title:{defaultValue:{value:"React Avancado"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:"TS, React, Next and Styled Components"},description:"",name:"description",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Main/index.tsx#Main"]={docgenInfo:Main.__docgenInfo,name:"Main",path:"src/components/Main/index.tsx#Main"})}catch(__react_docgen_typescript_loader_error){}react.createElement;const stories={title:"Main",component:components_Main,args:{title:"title default",description:"description default"}};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(components_Main,Object.assign({},args))};Basic.displayName="Basic",Basic.args={title:"title basic 2",description:"description basic 2"};var Default=function Default(args){return(0,jsx_runtime.jsx)(components_Main,Object.assign({},args))};Default.displayName="Default"},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Main/stories.tsx":"./src/components/Main/stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"?510f":()=>{},"?7253":()=>{},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[856],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);