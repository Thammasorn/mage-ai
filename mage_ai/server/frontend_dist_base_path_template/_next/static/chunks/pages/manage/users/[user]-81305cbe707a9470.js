(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4496],{94629:function(e,r,n){"use strict";n.d(r,{Z:function(){return _}});var t=n(82394),o=n(21831),i=n(82684),u=n(50724),s=n(82555),c=n(97618),a=n(70613),l=n(94636),d=n(68899),f=n(28598);function v(e,r){var n=e.children,t=e.noPadding;return(0,f.jsx)(d.HS,{noPadding:t,ref:r,children:n})}var p=i.forwardRef(v),h=n(62547),b=n(97927),m=n(35686),O=n(98464),j=n(46684),g=n(70515),w=n(53808),y=n(19183);function P(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function S(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?P(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function Z(e,r){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,v=e.after,P=e.afterHeader,Z=e.afterHidden,_=e.afterWidth,k=e.afterWidthOverride,x=e.appendBreadcrumbs,E=e.before,C=e.beforeWidth,I=e.breadcrumbs,M=e.children,R=e.errors,A=e.headerMenuItems,N=e.headerOffset,T=e.hideAfterCompletely,W=e.mainContainerHeader,D=e.navigationItems,H=e.setAfterHidden,U=e.setErrors,B=e.subheaderChildren,F=e.subheaderNoPadding,G=e.title,z=e.uuid,K=(0,y.i)().width,L="dashboard_after_width_".concat(z),X="dashboard_before_width_".concat(z),q=(0,i.useRef)(null),V=(0,i.useState)(k?_:(0,w.U2)(L,_)),J=V[0],Q=V[1],Y=(0,i.useState)(!1),$=Y[0],ee=Y[1],re=(0,i.useState)(E?Math.max((0,w.U2)(X,C),13*g.iI):null),ne=re[0],te=re[1],oe=(0,i.useState)(!1),ie=oe[0],ue=oe[1],se=(0,i.useState)(null)[1],ce=m.ZP.projects.list({},{revalidateOnFocus:!1}).data,ae=null===ce||void 0===ce?void 0:ce.projects,le={label:function(){var e;return null===ae||void 0===ae||null===(e=ae[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},de=[];I&&(t&&de.push(le),de.push.apply(de,(0,o.Z)(I))),(null===I||void 0===I||!I.length||x)&&(null===ae||void 0===ae?void 0:ae.length)>=1&&(null!==I&&void 0!==I&&I.length||de.unshift({bold:!x,label:function(){return G}}),de.unshift(le)),(0,i.useEffect)((function(){null===q||void 0===q||!q.current||$||ie||null===se||void 0===se||se(q.current.getBoundingClientRect().width)}),[$,J,ie,ne,q,se,K]),(0,i.useEffect)((function(){$||(0,w.t8)(L,J)}),[Z,$,J,L]),(0,i.useEffect)((function(){ie||(0,w.t8)(X,ne)}),[ie,ne,X]);var fe=(0,O.Z)(_);return(0,i.useEffect)((function(){k&&fe!==_&&Q(_)}),[k,_,fe]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:G}),(0,f.jsx)(l.Z,{breadcrumbs:de,menuItems:A,project:null===ae||void 0===ae?void 0:ae[0],version:null===ae||void 0===ae||null===(n=ae[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{ref:r,children:[0!==(null===D||void 0===D?void 0:D.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:D,showMore:!0})}),(0,f.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(h.Z,{after:v,afterHeader:P,afterHeightOffset:j.Mz,afterHidden:Z,afterMousedownActive:$,afterWidth:J,before:E,beforeHeightOffset:j.Mz,beforeMousedownActive:ie,beforeWidth:d.k1+(E?ne:0),headerOffset:N,hideAfterCompletely:!H||T,leftOffset:E?d.k1:null,mainContainerHeader:W,mainContainerRef:q,setAfterHidden:H,setAfterMousedownActive:ee,setAfterWidth:Q,setBeforeMousedownActive:ue,setBeforeWidth:te,children:[B&&(0,f.jsx)(p,{noPadding:F,children:B}),M]})})]}),R&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===U||void 0===U?void 0:U(null)},children:(0,f.jsx)(s.Z,S(S({},R),{},{onClose:function(){return null===U||void 0===U?void 0:U(null)}}))})]})}var _=i.forwardRef(Z)},75083:function(e,r,n){"use strict";n.d(r,{HF:function(){return u},L6:function(){return t}});var t,o=n(82359),i=n(72473);function u(e,r,n){var u=e.owner,s=(e.roles,[{Icon:i.Vz,id:t.WORKSPACES,isSelected:function(){return t.WORKSPACES===n},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return u&&s.push({Icon:i.NO,id:t.USERS,isSelected:function(){return t.USERS===n},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),r==o.k.MAIN&&s.push({Icon:i.Zr,id:t.SETTINGS,isSelected:function(){return t.SETTINGS===n},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),s}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(t||(t={}))},59533:function(e,r,n){"use strict";var t=n(82684),o=n(94629),i=n(35686),u=n(70515),s=n(75083),c=n(50178),a=n(28598);r.Z=function(e){var r=e.before,n=e.breadcrumbs,l=void 0===n?[]:n,d=e.children,f=e.errors,v=e.pageName,p=e.subheaderChildren,h=i.ZP.statuses.list().data,b=(0,t.useMemo)((function(){var e,r;return null===h||void 0===h||null===(e=h.statuses)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.project_type}),[h]),m=(0,c.PR)()||{};return(0,a.jsx)(o.Z,{before:r,beforeWidth:r?50*u.iI:0,breadcrumbs:l,errors:f,navigationItems:(0,s.HF)(m,b,v),subheaderChildren:p,title:"Workspaces",uuid:"workspaces/index",children:d})}},5178:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return M}});var t=n(77837),o=n(38860),i=n.n(o),u=n(82684),s=n(34376),c=n(93808),a=n(38276),l=n(36043),d=n(75582),f=n(21831),v=n(82394),p=n(21764),h=n(69864),b=n(71180),m=n(44085),O=n(75499),j=n(30160),g=n(35686),w=n(86735),y=n(72619),P=n(28598);function S(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function Z(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?S(Object(n),!0).forEach((function(r){(0,v.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var _=function(e){e.fetchUser;var r=e.user,n=e.workspaces,t=(0,s.useRouter)(),o=(0,u.useState)(),i=o[0],c=o[1],l=(0,u.useState)(!0),S=l[0],_=l[1];(0,u.useEffect)((function(){r&&c(r)}),[r]);var k=null===n||void 0===n?void 0:n.map((function(e){return e.project_uuid})),x=g.ZP.roles.list({entity:"project",entity_ids:k},{},{}),E=x.data,C=(x.mutate,(0,u.useMemo)((function(){var e=(null===E||void 0===E?void 0:E.roles)||[];return null===e||void 0===e?void 0:e.reduce((function(e,r){var n=r.permissions[0].entity_id,t=e[n]||[];return Z(Z({},e),{},(0,v.Z)({},n,[].concat((0,f.Z)(t),[r])))}),{})}),[E])),I=(0,u.useMemo)((function(){var e=i||r,n=null===e||void 0===e?void 0:e.roles_new;return null===n||void 0===n?void 0:n.reduce((function(e,r){var n,t,o=null===r||void 0===r||null===(n=r.permissions)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.entity_id;return Z(Z({},e),{},(0,v.Z)({},o,r))}),{})}),[i,r]),M=(0,h.Db)(g.ZP.users.useUpdate(null===r||void 0===r?void 0:r.id),{onSuccess:function(e){return(0,y.wD)(e,{callback:function(){t.push("/manage/users")},onErrorCallback:function(e){var r=e.error,n=r.errors,t=r.exception,o=r.message,i=r.type;p.Am.error((null===n||void 0===n?void 0:n.error)||t||o,{position:p.Am.POSITION.BOTTOM_RIGHT,toastId:i})}})}}),R=(0,d.Z)(M,2),A=R[0],N=R[1].isLoading;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(a.Z,{p:2,children:(0,P.jsx)(b.Z,{disabled:S,loading:N,onClick:function(){var e,r=Z(Z({},i),{},{roles_new:null===i||void 0===i||null===(e=i.roles_new)||void 0===e?void 0:e.map((function(e){return e.id}))});A({user:r})},primary:!0,children:"Update workspace roles"})}),(0,P.jsx)(O.Z,{columnFlex:[1,1],columns:[{uuid:"Workspace"},{uuid:"Role"}],rows:null===n||void 0===n?void 0:n.map((function(e){var r=e.name,n=e.project_uuid,t=(null===C||void 0===C?void 0:C[n])||[],o=null===I||void 0===I?void 0:I[n];return[(0,P.jsx)(j.ZP,{bold:!0,children:r},"name"),(0,P.jsx)(m.Z,{onChange:function(e){_(!1);var r=(0,w.sE)(t,(function(r){return r.id==e.target.value}));r&&c((function(e){var n,t=(null===e||void 0===e||null===(n=e.roles_new)||void 0===n?void 0:n.filter((function(e){return e.id!=(null===r||void 0===r?void 0:r.id)})))||[],o={roles_new:[].concat((0,f.Z)(t),[r])};return Z(Z({},e),o)}))},placeholder:"No access",primary:!0,setContentOnMount:!0,value:null===o||void 0===o?void 0:o.id,children:t.map((function(e){var r=e.id,n=e.name;return(0,P.jsx)("option",{value:r,children:n},n)}))},"project_role")]}))})]})},k=n(59533),x=n(70515),E=n(14875),C=n(75083);function I(e){var r=e.user,n=(0,s.useRouter)(),t=(0,u.useState)(null),o=t[0],i=t[1],c=null===r||void 0===r?void 0:r.id,d=g.ZP.users.detail(c),f=d.data,v=d.mutate,p=g.ZP.statuses.list().data,h=(0,u.useMemo)((function(){var e,r;return null===p||void 0===p||null===(e=p.statuses)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.instance_type}),[p]),b=(0,u.useMemo)((function(){return null===f||void 0===f?void 0:f.user}),[f]);(0,u.useEffect)((function(){(0,y.bB)(f,i)}),[f]);var m=g.ZP.workspaces.list({cluster_type:h,user_id:c},{refreshInterval:5e3,revalidateOnFocus:!0}).data,O=(0,u.useMemo)((function(){return(0,P.jsx)(a.Z,{p:x.cd,children:(0,P.jsx)(l.Z,{hideFields:[E.s7],onDeleteSuccess:function(){return n.push("/manage/users")},onSaveSuccess:function(){return n.push("/manage/users")},showDelete:!0,title:"Edit user",user:b})})}),[n,b]),j=(0,u.useMemo)((function(){return null===m||void 0===m?void 0:m.workspaces}),[m]);return(0,P.jsx)(k.Z,{before:O,breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{label:function(){return"Users"},linkProps:{as:"/manage/users",href:"/manage/users"}},{bold:!0,label:function(){return(null===b||void 0===b?void 0:b.username)||"User"}}],errors:o,pageName:C.L6.USERS,children:(0,P.jsx)(_,{fetchUser:v,user:b,workspaces:j})})}I.getInitialProps=function(){var e=(0,t.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.query.user,e.abrupt("return",{user:{id:n}});case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();var M=(0,c.Z)(I)},11976:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users/[user]",function(){return n(5178)}])},80022:function(e,r,n){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(r,{Z:function(){return t}})},15544:function(e,r,n){"use strict";function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}n.d(r,{Z:function(){return t}})},99177:function(e,r,n){"use strict";function t(e,r){return t=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},t(e,r)}function o(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&t(e,r)}n.d(r,{Z:function(){return o}})},93189:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(12539),o=n(80022);function i(e,r){if(r&&("object"===t(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[844,5716,8013,600,4636,8264,6833,5499,6043,9774,2888,179],(function(){return r=11976,e(e.s=r);var r}));var r=e.O();_N_E=r}]);