"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3932],{55283:function(n,t,e){e.d(t,{HC:function(){return S},HS:function(){return E},IN:function(){return l},Kf:function(){return p},Nk:function(){return A},PB:function(){return h},PY:function(){return T},WC:function(){return s},fk:function(){return C},gE:function(){return g},j1:function(){return N},jv:function(){return b},nz:function(){return R},oh:function(){return u},qn:function(){return f},t1:function(){return m},y9:function(){return O}});var o=e(38626),r=e(44897),i=e(44425),c=e(42631),d=e(70515),a=e(91437),u=68,l=1.5*d.iI,s=3*d.iI;function f(n,t){var e,o,c=((null===t||void 0===t||null===(e=t.theme)||void 0===e?void 0:e.borders)||r.Z.borders).light,d=((null===t||void 0===t||null===(o=t.theme)||void 0===o?void 0:o.monotone)||r.Z.monotone).grey500,a=t||{},u=a.blockColor,l=a.isSelected,s=a.theme;return l?c=(s||r.Z).content.active:i.tf.TRANSFORMER===n||u===i.Lq.PURPLE?(c=(s||r.Z).accent.purple,d=(s||r.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||u===i.Lq.YELLOW?(c=(s||r.Z).accent.yellow,d=(s||r.Z).accent.yellowLight):i.tf.DATA_LOADER===n||u===i.Lq.BLUE?(c=(s||r.Z).accent.blue,d=(s||r.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||r.Z).accent.sky,d=(s||r.Z).accent.skyLight):i.tf.SENSOR===n||u===i.Lq.PINK?(c=(s||r.Z).accent.pink,d=(s||r.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||r.Z).accent.dbt,d=(s||r.Z).accent.dbtLight):i.tf.EXTENSION===n||u===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).teal,d=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).rose,d=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).roseLight):i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||u===i.Lq.GREY||i.tf.CUSTOM===n&&!u?(c=(s||r.Z).content.default,d=(s||r.Z).accent.contentDefaultTransparent):i.tf.GLOBAL_DATA_PRODUCT!==n||u||(c=(s||r.Z).monotone.white,d=(s||r.Z).monotone.whiteTransparent),{accent:c,accentLight:d}}var p=(0,o.css)([""," "," "," "," "," "," ",""],(0,a.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(f(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(f(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||r.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||r.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),A=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),T=o.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],p,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(f(n.blockType,n).accent,";\n    }\n  ")})),h=o.default.div.withConfig({displayName:"indexstyle__HeaderHorizontalBorder",componentId:"sc-s5rj34-2"})(["",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme||r.Z).borders.darkLight,";\n  ")})),R=o.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-3"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;"," "," ",""],p,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,d.iI,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")}),(function(n){return"undefined"!==typeof n.zIndex&&null!==n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")}),(function(n){return!n.noSticky&&"\n    // This is to hide the horizontal scrollbar in the block header when sideBySide is enabled,\n    // and the screen width is too small.\n    position: sticky;\n    top: -5px;\n  "})),E=o.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-s5rj34-4"})([""," "," ",""],(function(n){return!n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).darkLight,";\n  ")}),(function(n){return n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n  ")}),(function(n){return!n.noBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")})),b=o.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-5"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;position:relative;"," "," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],p,c.M8,c.mP,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme.background||r.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.noPadding&&"\n    padding-bottom: ".concat(d.iI,"px;\n    padding-top: ").concat(d.iI,"px;\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n  ")}),(function(n){return!n.hideBorderBottom&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),g=o.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-6"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;&:hover{"," .block-divider-inner{","}}"," "," "," ",""],2*d.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||r.Z.text).fileBrowser,";\n      ")}),(function(n){return!n.height&&"\n    height: ".concat(2*d.iI,"px;\n  ")}),(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")}),(function(n){return!n.bottom&&"\n    bottom: ".concat(.5*d.iI,"px;\n  ")}),(function(n){return"undefined"!==typeof n.bottom&&"\n    bottom: ".concat(n.bottom,"px;\n  ")})),m=o.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-7"})(["height 1px;width:100%;position:absolute;z-index:-1;"," ",""],(function(n){return!n.top&&"\n    top: ".concat(1.5*d.iI,"px;\n  ")}),(function(n){return"undefined"!==typeof n.top&&"\n    top: ".concat(n.top,"px;\n  ")})),O=o.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-8"})([""," ",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?d.iI:u,"px;\n  ")}),(function(n){return!n.noMargin&&"\n    margin-bottom: ".concat(1*d.iI,"px;\n    padding-bottom: ").concat(1*d.iI,"px;\n  ")})),S=o.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-9"})(["bottom:","px;left:","px;position:absolute;"],1*d.iI,u),C=o.default.div.withConfig({displayName:"indexstyle__ScrollColunnsContainerStyle",componentId:"sc-s5rj34-10"})(["position:relative;z-index:1;"]),N=o.default.div.attrs((function(n){var t=n.height,e=n.left,o=n.right,r=n.top;return{style:{position:"fixed",height:t,width:n.width,left:e,right:o,top:r,zIndex:(n.zIndex||0)+2}}})).withConfig({displayName:"indexstyle__ScrollColunnStyle",componentId:"sc-s5rj34-11"})([""])},44425:function(n,t,e){e.d(t,{$W:function(){return R},DA:function(){return T},HX:function(){return m},J8:function(){return g},L8:function(){return d},LE:function(){return f},Lk:function(){return C},Lq:function(){return p},M5:function(){return A},Q3:function(){return E},Qj:function(){return O},Ut:function(){return D},V4:function(){return _},VZ:function(){return b},dO:function(){return s},f2:function(){return N},iZ:function(){return S},t6:function(){return a},tf:function(){return l}});var o,r,i,c,d,a,u=e(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(d||(d={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(a||(a={}));var l,s=(o={},(0,u.Z)(o,a.MARKDOWN,"MD"),(0,u.Z)(o,a.PYTHON,"PY"),(0,u.Z)(o,a.R,"R"),(0,u.Z)(o,a.SQL,"SQL"),(0,u.Z)(o,a.YAML,"YAML"),o),f=(r={},(0,u.Z)(r,a.MARKDOWN,"Markdown"),(0,u.Z)(r,a.PYTHON,"Python"),(0,u.Z)(r,a.R,"R"),(0,u.Z)(r,a.SQL,"SQL"),(0,u.Z)(r,a.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(l||(l={}));var p,A=[l.CALLBACK,l.CONDITIONAL,l.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(p||(p={}));var T,h,R=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],E=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],b=[l.DATA_EXPORTER,l.DATA_LOADER],g=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],m=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],O=[l.CHART,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN],S=[l.CALLBACK,l.CHART,l.EXTENSION,l.SCRATCHPAD,l.MARKDOWN],C=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SENSOR,l.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(T||(T={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(h||(h={}));var N=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],_=(i={},(0,u.Z)(i,l.CALLBACK,"Callback"),(0,u.Z)(i,l.CHART,"Chart"),(0,u.Z)(i,l.CONDITIONAL,"Conditional"),(0,u.Z)(i,l.CUSTOM,"Custom"),(0,u.Z)(i,l.DATA_EXPORTER,"Data exporter"),(0,u.Z)(i,l.DATA_LOADER,"Data loader"),(0,u.Z)(i,l.DBT,"DBT"),(0,u.Z)(i,l.EXTENSION,"Extension"),(0,u.Z)(i,l.GLOBAL_DATA_PRODUCT,"Global data product"),(0,u.Z)(i,l.MARKDOWN,"Markdown"),(0,u.Z)(i,l.SCRATCHPAD,"Scratchpad"),(0,u.Z)(i,l.SENSOR,"Sensor"),(0,u.Z)(i,l.TRANSFORMER,"Transformer"),i),D=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER,l.SENSOR];c={},(0,u.Z)(c,l.DATA_EXPORTER,"DE"),(0,u.Z)(c,l.DATA_LOADER,"DL"),(0,u.Z)(c,l.SCRATCHPAD,"SP"),(0,u.Z)(c,l.SENSOR,"SR"),(0,u.Z)(c,l.MARKDOWN,"MD"),(0,u.Z)(c,l.TRANSFORMER,"TF")},57653:function(n,t,e){e.d(t,{$1:function(){return l},G7:function(){return f},LM:function(){return p},Mj:function(){return A},QK:function(){return u},a_:function(){return h},kA:function(){return T},qL:function(){return c},r0:function(){return s}});var o,r,i,c,d=e(82394),a=e(72473);!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(c||(c={}));var u,l,s,f=(o={},(0,d.Z)(o,c.INTEGRATION,"Integration"),(0,d.Z)(o,c.PYTHON,"Standard"),(0,d.Z)(o,c.PYSPARK,"PySpark"),(0,d.Z)(o,c.STREAMING,"Streaming"),o),p="all",A=(c.PYTHON,c.INTEGRATION,c.STREAMING,r={},(0,d.Z)(r,p,a.ie),(0,d.Z)(r,c.INTEGRATION,a.YC),(0,d.Z)(r,c.PYTHON,a.El),(0,d.Z)(r,c.STREAMING,a.dB),r);!function(n){n.ACTIVE="active",n.INACTIVE="inactive",n.NO_SCHEDULES="no_schedules",n.RETRY="retry",n.RETRY_INCOMPLETE_BLOCK_RUNS="retry_incomplete_block_runs"}(u||(u={})),function(n){n.GROUP="group_by",n.HISTORY_DAYS="from_history_days",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(l||(l={})),function(n){n.STATUS="status",n.TAG="tag",n.TYPE="type"}(s||(s={}));var T=[u.ACTIVE,u.INACTIVE,u.NO_SCHEDULES],h=(i={},(0,d.Z)(i,c.PYTHON,"python3"),(0,d.Z)(i,c.PYSPARK,"pysparkkernel"),i)},90299:function(n,t,e){e.d(t,{Z:function(){return b}});var o=e(82684),r=e(71180),i=e(55485),c=e(64888),d=e(38276),a=e(30160),u=e(8059),l=e(38626),s=e(44897),f=e(70515),p=e(47041),A=l.default.div.withConfig({displayName:"indexstyle__TabsContainerStyle",componentId:"sc-segf7l-0"})(["padding-left:","px;padding-right:","px;"," "," ",""],f.cd*f.iI,f.cd*f.iI,(function(n){return n.noPadding&&"\n    padding: 0;\n  "}),(function(n){return n.allowScroll&&"\n    overflow: auto;\n  "}),p.w5),T=l.default.div.withConfig({displayName:"indexstyle__SelectedUnderlineStyle",componentId:"sc-segf7l-1"})(["border-radius:6px;height:","px;"," "," ",""],2,(function(n){return!n.selected&&"\n    background-color: transparent;\n  "}),(function(n){return n.selected&&!n.backgroundColor&&"\n    background-color: ".concat((n.theme||s.Z).borders.darkLight,";\n  ")}),(function(n){return n.selected&&n.backgroundColor&&"\n    background-color: ".concat(n.backgroundColor,";\n  ")})),h=e(3314),R=e(28598);function E(n,t){var e=n.allowScroll,l=n.compact,s=n.contained,p=n.noPadding,E=n.onClickTab,b=n.regularSizeText,g=n.selectedTabUUID,m=n.small,O=n.tabs,S=n.underlineColor,C=n.underlineStyle,N=(0,o.useMemo)((function(){var n=O.length,t=[];return O.forEach((function(e,o){var s=e.Icon,p=e.IconSelected,A=e.label,O=e.uuid,N=O===g,_=N&&p||s,D=A?A():O,y=(0,R.jsxs)(i.ZP,{alignItems:"center",children:[_&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(_,{default:!N,size:2*f.iI}),(0,R.jsx)(d.Z,{mr:1})]}),(0,R.jsx)(a.ZP,{bold:!0,default:!N,noWrapping:!0,small:!b,children:D})]});o>=1&&n>=2&&t.push((0,R.jsx)("div",{style:{marginLeft:(b?2:1.5)*f.iI}},"spacing-".concat(O))),N&&!C?t.push((0,R.jsx)(c.Z,{backgroundGradient:u.yr,backgroundPanel:!0,borderLess:!0,borderWidth:2,compact:l||m,onClick:function(n){(0,h.j)(n),E(e)},paddingUnitsHorizontal:1.75,paddingUnitsVertical:1.25,small:m,children:y},O)):t.push((0,R.jsxs)(i.ZP,{flexDirection:"column",style:{paddingLeft:2,paddingRight:2,paddingBottom:C?0:2,paddingTop:C?0:2},children:[(0,R.jsxs)(r.Z,{borderLess:!0,compact:l||m,default:!0,noBackground:C,noPadding:C,onClick:function(n){(0,h.j)(n),E(e)},outline:!C,small:m,children:[!C&&y,C&&(0,R.jsx)("div",{style:{paddingBottom:(l||m?f.iI/2:f.iI)+2,paddingTop:(l||m?f.iI/2:f.iI)+2+2},children:y})]}),C&&(0,R.jsx)(T,{backgroundColor:S,selected:N})]},"button-tab-".concat(O)))})),t}),[l,E,g,m,O,C]),_=(0,R.jsx)(i.ZP,{alignItems:"center",children:N});return s?_:(0,R.jsx)(A,{allowScroll:e,noPadding:p,ref:t,children:_})}var b=o.forwardRef(E)}}]);