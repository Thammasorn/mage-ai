(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8789],{38789:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}function d(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}function p(e){return{}.toString.call(e).includes("Object")}function g(e){return"function"===typeof e}t.d(n,{ZP:function(){return de},_m:function(){return Y}});var h=d((function(e,n){throw new Error(e[n]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),y={changes:function(e,n){return p(n)||h("changeType"),Object.keys(n).some((function(n){return t=e,r=n,!Object.prototype.hasOwnProperty.call(t,r);var t,r}))&&h("changeField"),n},selector:function(e){g(e)||h("selectorType")},handler:function(e){g(e)||p(e)||h("handlerType"),p(e)&&Object.values(e).some((function(e){return!g(e)}))&&h("handlersType")},initial:function(e){var n;e||h("initialIsRequired"),p(e)||h("initialType"),n=e,Object.keys(n).length||h("initialContent")}};function v(e,n){return g(n)?n(e.current):n}function m(e,n){return e.current=s(s({},e.current),n),n}function b(e,n,t){return g(n)?n(e.current):Object.keys(t).forEach((function(t){var r;return null===(r=n[t])||void 0===r?void 0:r.call(n,e.current[t])})),t}var O={create:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.initial(e),y.handler(n);var t={current:e},r=d(b)(t,n),o=d(m)(t),i=d(y.changes)(e),c=d(v)(t);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return y.selector(e),e(t.current)}function a(e){f(r,o,i,c)(e)}return[u,a]}},w=O,j={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};var M=function(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}};var P=function(e){return{}.toString.call(e).includes("Object")};var E={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},T=M((function(e,n){throw new Error(e[n]||e.default)}))(E),k={config:function(e){return e||T("configIsRequired"),P(e)||T("configType"),e.urls?(console.warn(E.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},R=k,S=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}};var C=function e(n,t){return Object.keys(t).forEach((function(r){t[r]instanceof Object&&n[r]&&Object.assign(t[r],e(n[r],t[r]))})),i(i({},n),t)},I={type:"cancelation",msg:"operation is manually canceled"};var V,_,L=function(e){var n=!1,t=new Promise((function(t,r){e.then((function(e){return n?r(I):t(e)})),e.catch(r)}));return t.cancel=function(){return n=!0},t},x=w.create({config:j,isInitialized:!1,resolve:null,reject:null,monaco:null}),A=(_=2,function(e){if(Array.isArray(e))return e}(V=x)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}}(V,_)||function(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(V,_)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),D=A[0],q=A[1];function N(e){return document.body.appendChild(e)}function z(e){var n=D((function(e){return{config:e.config,reject:e.reject}})),t=function(e){var n=document.createElement("script");return e&&(n.src=e),n}("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function F(){var e=D((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],(function(n){U(n),e.resolve(n)}),(function(n){e.reject(n)}))}function U(e){D().monaco||q({monaco:e})}var W=new Promise((function(e,n){return q({resolve:e,reject:n})})),B={config:function(e){var n=R.config(e),t=n.monaco,r=c(n,["monaco"]);q((function(e){return{config:C(e.config,r),monaco:t}}))},init:function(){var e=D((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(q({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),L(W);if(window.monaco&&window.monaco.editor)return U(window.monaco),e.resolve(window.monaco),L(W);S(N,z)(F)}return L(W)},__getMonacoInstance:function(){return D((function(e){return e.monaco}))}},Y=B,H=t(82684),Z=t(47329),$=t.n(Z);function G(){return G=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(this,arguments)}const J={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var K=function({content:e}){return H.createElement("div",{style:J},e)};var Q={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function X({width:e,height:n,isEditorReady:t,loading:r,_ref:o,className:i,wrapperProps:c}){return H.createElement("section",G({style:{...Q.wrapper,width:e,height:n}},c),!t&&H.createElement(K,{content:r}),H.createElement("div",{ref:o,style:{...Q.fullWidth,...!t&&Q.hide},className:i}))}X.propTypes={width:$().oneOfType([$().number,$().string]).isRequired,height:$().oneOfType([$().number,$().string]).isRequired,loading:$().oneOfType([$().element,$().string]).isRequired,isEditorReady:$().bool.isRequired,className:$().string,wrapperProps:$().object};var ee=X,ne=(0,H.memo)(ee);var te=function(e){(0,H.useEffect)(e,[])};var re=function(e,n,t=!0){const r=(0,H.useRef)(!0);(0,H.useEffect)(r.current||!t?()=>{r.current=!1}:e,n)};function oe(){}function ie(e,n,t,r){return function(e,n){return e.editor.getModel(ce(e,n))}(e,r)||function(e,n,t,r){return e.editor.createModel(n,t,r&&ce(e,r))}(e,n,t,r)}function ce(e,n){return e.Uri.parse(n)}function ue({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:c,keepCurrentOriginalModel:u,keepCurrentModifiedModel:a,theme:l,loading:s,options:f,height:d,width:p,className:g,wrapperProps:h,beforeMount:y,onMount:v}){const[m,b]=(0,H.useState)(!1),[O,w]=(0,H.useState)(!0),j=(0,H.useRef)(null),M=(0,H.useRef)(null),P=(0,H.useRef)(null),E=(0,H.useRef)(v),T=(0,H.useRef)(y);te((()=>{const e=Y.init();return e.then((e=>(M.current=e)&&w(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>j.current?function(){const e=j.current.getModel();var n,t;u||null===(n=e.original)||void 0===n||n.dispose();a||null===(t=e.modified)||void 0===t||t.dispose();j.current.dispose()}():e.cancel()})),re((()=>{const e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(n):n!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),e.pushUndoStop())}),[n],m),re((()=>{j.current.getModel().original.setValue(e)}),[e],m),re((()=>{const{original:e,modified:n}=j.current.getModel();M.current.editor.setModelLanguage(e,r||t),M.current.editor.setModelLanguage(n,o||t)}),[t,r,o],m),re((()=>{M.current.editor.setTheme(l)}),[l],m),re((()=>{j.current.updateOptions(f)}),[f],m);const k=(0,H.useCallback)((()=>{T.current(M.current);const u=ie(M.current,e,r||t,i),a=ie(M.current,n,o||t,c);j.current.setModel({original:u,modified:a})}),[t,n,o,e,r,i,c]),R=(0,H.useCallback)((()=>{j.current=M.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...f}),k(),M.current.editor.setTheme(l),b(!0)}),[f,l,k]);return(0,H.useEffect)((()=>{m&&E.current(j.current,M.current)}),[m]),(0,H.useEffect)((()=>{!O&&!m&&R()}),[O,m,R]),H.createElement(ne,{width:p,height:d,isEditorReady:m,loading:s,_ref:P,className:g,wrapperProps:h})}ue.propTypes={original:$().string,modified:$().string,language:$().string,originalLanguage:$().string,modifiedLanguage:$().string,originalModelPath:$().string,modifiedModelPath:$().string,keepCurrentOriginalModel:$().bool,keepCurrentModifiedModel:$().bool,theme:$().string,loading:$().oneOfType([$().element,$().string]),options:$().object,width:$().oneOfType([$().number,$().string]),height:$().oneOfType([$().number,$().string]),className:$().string,wrapperProps:$().object,beforeMount:$().func,onMount:$().func},ue.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe};var ae=function(e){const n=(0,H.useRef)();return(0,H.useEffect)((()=>{n.current=e}),[e]),n.current};const le=new Map;function se({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:o,path:i,theme:c,line:u,loading:a,options:l,overrideServices:s,saveViewState:f,keepCurrentModel:d,width:p,height:g,className:h,wrapperProps:y,beforeMount:v,onMount:m,onChange:b,onValidate:O}){const[w,j]=(0,H.useState)(!1),[M,P]=(0,H.useState)(!0),E=(0,H.useRef)(null),T=(0,H.useRef)(null),k=(0,H.useRef)(null),R=(0,H.useRef)(m),S=(0,H.useRef)(v),C=(0,H.useRef)(null),I=(0,H.useRef)(r),V=ae(i),_=(0,H.useRef)(!1);te((()=>{const e=Y.init();return e.then((e=>(E.current=e)&&P(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>T.current?function(){var e,n;null===(e=C.current)||void 0===e||e.dispose(),d?f&&le.set(i,T.current.saveViewState()):null===(n=T.current.getModel())||void 0===n||n.dispose();T.current.dispose()}():e.cancel()})),re((()=>{const t=ie(E.current,e||r,n||o,i);t!==T.current.getModel()&&(f&&le.set(V,T.current.saveViewState()),T.current.setModel(t),f&&T.current.restoreViewState(le.get(i)))}),[i],w),re((()=>{T.current.updateOptions(l)}),[l],w),re((()=>{T.current.getOption(E.current.editor.EditorOption.readOnly)?T.current.setValue(r):r!==T.current.getValue()&&(T.current.executeEdits("",[{range:T.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),T.current.pushUndoStop())}),[r],w),re((()=>{E.current.editor.setModelLanguage(T.current.getModel(),o)}),[o],w),re((()=>{void 0!==u&&T.current.revealLine(u)}),[u],w),re((()=>{E.current.editor.setTheme(c)}),[c],w);const L=(0,H.useCallback)((()=>{if(!_.current){S.current(E.current);const u=i||t,a=ie(E.current,r||e,n||o,u);T.current=E.current.editor.create(k.current,{model:a,automaticLayout:!0,...l},s),f&&T.current.restoreViewState(le.get(u)),E.current.editor.setTheme(c),j(!0),_.current=!0}}),[e,n,t,r,o,i,l,s,f,c]);return(0,H.useEffect)((()=>{w&&R.current(T.current,E.current)}),[w]),(0,H.useEffect)((()=>{!M&&!w&&L()}),[M,w,L]),I.current=r,(0,H.useEffect)((()=>{var e,n;w&&b&&(null===(e=C.current)||void 0===e||e.dispose(),C.current=null===(n=T.current)||void 0===n?void 0:n.onDidChangeModelContent((e=>{b(T.current.getValue(),e)})))}),[w,b]),(0,H.useEffect)((()=>{if(w){const e=E.current.editor.onDidChangeMarkers((e=>{var n;const t=null===(n=T.current.getModel())||void 0===n?void 0:n.uri;if(t){if(e.find((e=>e.path===t.path))){const e=E.current.editor.getModelMarkers({resource:t});null===O||void 0===O||O(e)}}}));return()=>{null===e||void 0===e||e.dispose()}}}),[w,O]),H.createElement(ne,{width:p,height:g,isEditorReady:w,loading:a,_ref:k,className:h,wrapperProps:y})}se.propTypes={defaultValue:$().string,defaultPath:$().string,defaultLanguage:$().string,value:$().string,language:$().string,path:$().string,theme:$().string,line:$().number,loading:$().oneOfType([$().element,$().string]),options:$().object,overrideServices:$().object,saveViewState:$().bool,keepCurrentModel:$().bool,width:$().oneOfType([$().number,$().string]),height:$().oneOfType([$().number,$().string]),className:$().string,wrapperProps:$().object,beforeMount:$().func,onMount:$().func,onChange:$().func,onValidate:$().func},se.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe,onValidate:oe};var fe=se,de=(0,H.memo)(fe)},59739:function(e,n,t){"use strict";var r=t(56669);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);