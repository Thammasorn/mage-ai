(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1009],{94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(82394),i=t(21831),o=t(82684),u=t(50724),c=t(82555),l=t(97618),a=t(70613),s=t(94636),d=t(68899),f=t(28598);function p(e,n){var t=e.children,r=e.noPadding;return(0,f.jsx)(d.HS,{noPadding:r,ref:n,children:t})}var h=o.forwardRef(p),b=t(62547),v=t(97927),g=t(35686),j=t(98464),O=t(46684),m=t(70515),y=t(53808),P=t(19183);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function w(e,n){var t,r=e.addProjectBreadcrumbToCustomBreadcrumbs,p=e.after,x=e.afterHeader,w=e.afterHidden,k=e.afterWidth,_=e.afterWidthOverride,C=e.appendBreadcrumbs,E=e.before,I=e.beforeWidth,D=e.breadcrumbs,M=e.children,A=e.errors,S=e.headerMenuItems,N=e.headerOffset,B=e.hideAfterCompletely,L=e.mainContainerHeader,R=e.navigationItems,T=e.setAfterHidden,H=e.setErrors,F=e.subheaderChildren,U=e.subheaderNoPadding,z=e.title,V=e.uuid,W=(0,P.i)().width,q="dashboard_after_width_".concat(V),Q="dashboard_before_width_".concat(V),K=(0,o.useRef)(null),G=(0,o.useState)(_?k:(0,y.U2)(q,k)),X=G[0],Y=G[1],$=(0,o.useState)(!1),J=$[0],ee=$[1],ne=(0,o.useState)(E?Math.max((0,y.U2)(Q,I),13*m.iI):null),te=ne[0],re=ne[1],ie=(0,o.useState)(!1),oe=ie[0],ue=ie[1],ce=(0,o.useState)(null)[1],le=g.ZP.projects.list({},{revalidateOnFocus:!1}).data,ae=null===le||void 0===le?void 0:le.projects,se={label:function(){var e;return null===ae||void 0===ae||null===(e=ae[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},de=[];D&&(r&&de.push(se),de.push.apply(de,(0,i.Z)(D))),(null===D||void 0===D||!D.length||C)&&(null===ae||void 0===ae?void 0:ae.length)>=1&&(null!==D&&void 0!==D&&D.length||de.unshift({bold:!C,label:function(){return z}}),de.unshift(se)),(0,o.useEffect)((function(){null===K||void 0===K||!K.current||J||oe||null===ce||void 0===ce||ce(K.current.getBoundingClientRect().width)}),[J,X,oe,te,K,ce,W]),(0,o.useEffect)((function(){J||(0,y.t8)(q,X)}),[w,J,X,q]),(0,o.useEffect)((function(){oe||(0,y.t8)(Q,te)}),[oe,te,Q]);var fe=(0,j.Z)(k);return(0,o.useEffect)((function(){_&&fe!==k&&Y(k)}),[_,k,fe]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:z}),(0,f.jsx)(s.Z,{breadcrumbs:de,menuItems:S,project:null===ae||void 0===ae?void 0:ae[0],version:null===ae||void 0===ae||null===(t=ae[0])||void 0===t?void 0:t.version}),(0,f.jsxs)(d.Nk,{ref:n,children:[0!==(null===R||void 0===R?void 0:R.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(v.Z,{navigationItems:R,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:p,afterHeader:x,afterHeightOffset:O.Mz,afterHidden:w,afterMousedownActive:J,afterWidth:X,before:E,beforeHeightOffset:O.Mz,beforeMousedownActive:oe,beforeWidth:d.k1+(E?te:0),headerOffset:N,hideAfterCompletely:!T||B,leftOffset:E?d.k1:null,mainContainerHeader:L,mainContainerRef:K,setAfterHidden:T,setAfterMousedownActive:ee,setAfterWidth:Y,setBeforeMousedownActive:ue,setBeforeWidth:re,children:[F&&(0,f.jsx)(h,{noPadding:U,children:F}),M]})})]}),A&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===H||void 0===H?void 0:H(null)},children:(0,f.jsx)(c.Z,Z(Z({},A),{},{onClose:function(){return null===H||void 0===H?void 0:H(null)}}))})]})}var k=o.forwardRef(w)},70320:function(e,n,t){"use strict";t.d(n,{h:function(){return u},q:function(){return o}});var r=t(78419),i=t(53808);function o(){return(0,i.U2)(r.am,null)||!1}function u(e){return"undefined"!==typeof e&&(0,i.t8)(r.am,e),e}},55072:function(e,n,t){"use strict";t.d(n,{Et:function(){return f},Q:function(){return d}});t(82684);var r=t(71180),i=t(55485),o=t(38276),u=t(31748),c=t(72473),l=t(79633),a=t(70515),s=t(28598),d=30,f=9;n.ZP=function(e){var n=e.page,t=e.maxPages,d=e.onUpdate,f=e.totalPages,p=[],h=t;if(h>f)p=Array.from({length:f},(function(e,n){return n}));else{var b=Math.floor(h/2),v=n-b;n+b>=f?(v=f-h+2,h-=2):n-b<=0?(v=0,h-=2):(h-=4,v=n-Math.floor(h/2)),p=Array.from({length:h},(function(e,n){return n+v}))}return(0,s.jsx)(s.Fragment,{children:f>0&&(0,s.jsxs)(i.ZP,{alignItems:"center",children:[(0,s.jsx)(r.Z,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,s.jsx)(c.Hd,{size:1.5*a.iI,stroke:u.Av})}),!p.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!p.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),p.map((function(e){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!p.includes(f-1)&&(0,s.jsxs)(s.Fragment,{children:[!p.includes(f-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{borderLess:!0,noBackground:!0,onClick:function(){return d(f-1)},children:f})},f-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(r.Z,{disabled:n===f-1,onClick:function(){return d(n+1)},children:(0,s.jsx)(c.Kw,{size:1.5*a.iI,stroke:u.Av})})]})})}},41143:function(e,n,t){"use strict";var r;t.d(n,{V:function(){return r}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running",e.UPSTREAM_FAILED="upstream_failed",e.CONDITION_FAILED="condition_failed"}(r||(r={}))},79757:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(38626)),u=t(44897),c=t(42631),l=t(95363),a=t(70515),s=t(61896),d=t(28598),f=["children"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=o.default.p.withConfig({displayName:"Badge__BadgeStyle",componentId:"sc-tfqsp0-0"})(["border-radius:","px;display:inline;font-family:",";margin:0;white-space:nowrap;",";"," "," ",";",";"," "," "," "," "," "," "," ",""],c.BG,l.ry,s.iD,(function(e){return e.small&&"\n    ".concat(s.HC,";\n  ")}),(function(e){return e.xxsmall&&"\n    font-size: ".concat(s.VK,"px;\n    line-height: ").concat(s.VK,"px;\n  ")}),(function(e){return!e.regular&&"\n    padding: 2px 4px;\n  "}),(function(e){return e.regular&&"\n    padding: ".concat(1*a.iI,"px ").concat(1.25*a.iI,"px;\n  ")}),(function(e){return e.noVerticalPadding&&"\n    padding-bottom: 0;\n    padding-top: 0;\n  "}),(function(e){return!e.disabled&&!e.inverted&&"\n    background-color: ".concat((e.theme||u.Z).background.row,";\n    color: ").concat((e.theme||u.Z).content.default,";\n  ")}),(function(e){return!e.disabled&&e.inverted&&"\n    background-color: ".concat((e.theme||u.Z).background.dark,";\n    color: ").concat((e.theme||u.Z).content.inverted,";\n  ")}),(function(e){return e.cyan&&"\n    background-color: ".concat((e.theme||u.Z).accent.cyan,";\n    color: ").concat((e.theme||u.Z).monotone.black,";\n  ")}),(function(e){return e.disabled&&"\n    background-color: ".concat((e.theme||u.Z).feature.disabled,";\n    color: ").concat((e.theme||u.Z).content.disabled,";\n  ")}),(function(e){return e.color&&"\n    background-color: ".concat(e.color," !important;\n    color: ").concat((e.theme||u.Z).content.active,";\n  ")}),(function(e){return e.quantifier&&"\n    border-radius: 34px;\n    line-height: 10px;\n    padding: 4px 6px;\n  "}),(function(e){return e.monospace&&"\n    font-family: ".concat(l.Vp,";\n    word-break: break-all;\n  ")}));n.Z=function(e){var n=e.children,t=(0,i.Z)(e,f);return(0,d.jsx)(b,h(h({},t),{},{children:n}))}},46732:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(50724)),u=t(70374),c=t(28598),l=["children","items","open","onClickCallback","onClickOutside","parentRef","uuid","zIndex"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.items,r=e.open,a=e.onClickCallback,d=e.onClickOutside,f=e.parentRef,p=e.uuid,h=e.zIndex,b=(0,i.Z)(e,l),v=(0,c.jsxs)("div",{style:{position:"relative",zIndex:(d?3:2)+(h||0)},children:[(0,c.jsx)("div",{ref:f,children:n}),(0,c.jsx)(u.Z,s(s({},b),{},{items:t,onClickCallback:a,open:r,parentRef:f,uuid:p}))]});return d?(0,c.jsx)(o.Z,{onClickOutside:d,open:!0,children:v}):v}},78234:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(82394),o=t(38860),u=t.n(o),c=t(82684),l=t(34376),a=t(94629),s=t(55072),d=t(53943),f=t(93808),p=t(82359),h=t(38276),b=t(4190),v=t(85544),g=t(35686),j=t(44265),O=t(70515),m=t(69419),y=t(86735),P=t(70320),x=t(28598);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(){var e=(0,l.useRouter)(),n=(0,c.useState)(null),t=n[0],r=n[1],o=(0,m.iV)(),u=null!==o&&void 0!==o&&o.page?o.page:0,f=(0,m.DQ)(o,[j.P0.PIPELINE_UUID,j.P0.STATUS,j.P0.TAG]),Z=g.ZP.projects.list().data,k=(0,c.useMemo)((function(){var e;return null===Z||void 0===Z||null===(e=Z.projects)||void 0===e?void 0:e[0]}),[Z]),_=((0,c.useMemo)((function(){var e;return(0,P.h)(null===k||void 0===k||null===(e=k.features)||void 0===e?void 0:e[p.d.LOCAL_TIMEZONE])}),[null===k||void 0===k?void 0:k.features]),w(w({},f),{},{_limit:s.Q,_offset:u*s.Q,disable_retries_grouping:!0,include_pipeline_tags:!0,include_pipeline_uuids:!0}));null!==o&&void 0!==o&&o.status&&(_.status=o.status);var C=g.ZP.pipeline_runs.list(_,{refreshInterval:3e3,revalidateOnFocus:!0}),E=C.data,I=C.mutate,D=g.ZP.tags.list().data,M=(0,c.useMemo)((function(){return(0,y.YC)((null===D||void 0===D?void 0:D.tags)||[],(function(e){return e.uuid}))}),[D]),A=(0,c.useMemo)((function(){return(null===E||void 0===E?void 0:E.pipeline_runs)||[]}),[E]),S=(0,c.useMemo)((function(){var e;return(null===E||void 0===E||null===(e=E.metadata)||void 0===e?void 0:e.count)||[]}),[E]),N=(0,c.useMemo)((function(){var e;return(null===E||void 0===E||null===(e=E.metadata)||void 0===e?void 0:e.pipeline_uuids)||[]}),[E]),B=(0,c.useMemo)((function(){return(0,x.jsx)(v.Z,{filterOptions:{pipeline_uuid:N,pipeline_tag:M.map((function(e){return e.uuid})),status:j.IK},filterValueLabelMapping:{pipeline_tag:M.reduce((function(e,n){var t=n.uuid;return w(w({},e),{},(0,i.Z)({},t,t))}),{}),status:j.Do},onClickFilterDefaults:function(){e.push("/pipeline-runs")},query:f,resetPageOnFilterApply:!0})}),[N,f,e,M]);return(0,x.jsx)(a.Z,{errors:t,setErrors:r,subheaderChildren:B,title:"Pipeline runs",uuid:"pipeline_runs/index",children:E?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Z,{fetchPipelineRuns:I,includePipelineTags:!0,pipelineRuns:A,setErrors:r}),(0,x.jsx)(h.Z,{p:2,children:(0,x.jsx)(s.ZP,{maxPages:s.Et,onUpdate:function(n){var t=Number(n),r=w(w({},o),{},{page:t>=0?t:0});e.push("/pipeline-runs","/pipeline-runs?".concat((0,m.uM)(r)))},page:Number(u),totalPages:Math.ceil(S/s.Q)})})]}):(0,x.jsx)(h.Z,{p:O.Mq,children:(0,x.jsx)(b.Z,{inverted:!0,large:!0})})})}k.getInitialProps=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,f.Z)(k)},60710:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipeline-runs",function(){return t(78234)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},99177:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return i}})},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(12539),i=t(80022);function o(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[844,5716,8013,600,4636,8264,6833,5499,3943,5544,9774,2888,179],(function(){return n=60710,e(e.s=n);var n}));var n=e.O();_N_E=n}]);