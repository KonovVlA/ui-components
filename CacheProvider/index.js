!function(root,factory){if("object"==typeof exports&&"object"==typeof module)module.exports=factory(require("react"),require("@emotion/react"),require("@emotion/cache"));else if("function"==typeof define&&define.amd)define(["react","@emotion/react","@emotion/cache"],factory);else{var a="object"==typeof exports?factory(require("react"),require("@emotion/react"),require("@emotion/cache")):factory(root.react,root["@emotion/react"],root["@emotion/cache"]);for(var i in a)("object"==typeof exports?exports:root)[i]=a[i]}}(self,((__WEBPACK_EXTERNAL_MODULE__8156__,__WEBPACK_EXTERNAL_MODULE__55435__,__WEBPACK_EXTERNAL_MODULE__78836__)=>(()=>{"use strict";var __webpack_modules__={78836:module=>{module.exports=__WEBPACK_EXTERNAL_MODULE__78836__},55435:module=>{module.exports=__WEBPACK_EXTERNAL_MODULE__55435__},8156:module=>{module.exports=__WEBPACK_EXTERNAL_MODULE__8156__}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CacheProvider:()=>CacheProvider});var external_react_=__webpack_require__(8156),external_react_default=__webpack_require__.n(external_react_),react_=__webpack_require__(55435),cache_=__webpack_require__(78836),cache_default=__webpack_require__.n(cache_),head=document.querySelector("head"),insertionPoint=document.createElement("meta");function getCache(key,container){return cache_default()({key,container})}head.prepend(insertionPoint);var defaultProps={key:"ui-components",container:insertionPoint};function CacheProvider(props){var children=props.children,key=props.key,container=props.container;return external_react_default().createElement(react_.CacheProvider,{value:getCache(key,container)},children)}CacheProvider.defaultProps=defaultProps})(),__webpack_exports__})()));
//# sourceMappingURL=index.js.map