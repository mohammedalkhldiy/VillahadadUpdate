import{r as k,R as gs}from"./vendor-react-Ce27NbrU.js";const ee=k.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),ne=k.createContext({}),se=k.createContext(null),ie=typeof document<"u",Bt=ie?k.useLayoutEffect:k.useEffect,ks=k.createContext({strict:!1}),Oe=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Ii="framerAppearId",xs="data-"+Oe(Ii);function Hi(t,e,n,s){const{visualElement:i}=k.useContext(ne),o=k.useContext(ks),r=k.useContext(se),a=k.useContext(ee).reducedMotion,c=k.useRef();s=s||o.renderer,!c.current&&s&&(c.current=s(t,{visualState:e,parent:i,props:n,presenceContext:r,blockInitialAnimation:r?r.initial===!1:!1,reducedMotionConfig:a}));const l=c.current;k.useInsertionEffect(()=>{l&&l.update(n,r)});const h=k.useRef(!!(n[xs]&&!window.HandoffComplete));return Bt(()=>{l&&(l.render(),h.current&&l.animationState&&l.animationState.animateChanges())}),k.useEffect(()=>{l&&(l.updateFeatures(),!h.current&&l.animationState&&l.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),l}function mt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function qi(t,e,n){return k.useCallback(s=>{s&&t.mount&&t.mount(s),e&&(s?e.mount(s):e.unmount()),n&&(typeof n=="function"?n(s):mt(n)&&(n.current=s))},[e])}function Rt(t){return typeof t=="string"||Array.isArray(t)}function re(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Ie=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],He=["initial",...Ie];function oe(t){return re(t.animate)||He.some(e=>Rt(t[e]))}function vs(t){return!!(oe(t)||t.variants)}function Ui(t,e){if(oe(t)){const{initial:n,animate:s}=t;return{initial:n===!1||Rt(n)?n:void 0,animate:Rt(s)?s:void 0}}return t.inherit!==!1?e:{}}function Ni(t){const{initial:e,animate:n}=Ui(t,k.useContext(ne));return k.useMemo(()=>({initial:e,animate:n}),[fn(e),fn(n)])}function fn(t){return Array.isArray(t)?t.join(" "):t}const pn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},jt={};for(const t in pn)jt[t]={isEnabled:e=>pn[t].some(n=>!!e[n])};function Wi(t){for(const e in t)jt[e]={...jt[e],...t[e]}}const qe=k.createContext({}),Ms=k.createContext({}),Gi=Symbol.for("motionComponentSymbol");function Zi({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:s,Component:i}){t&&Wi(t);function o(a,c){let l;const h={...k.useContext(ee),...a,layoutId:$i(a)},{isStatic:u}=h,f=Ni(a),p=s(a,u);if(!u&&ie){f.visualElement=Hi(i,p,h,e);const y=k.useContext(Ms),m=k.useContext(ks).strict;f.visualElement&&(l=f.visualElement.loadFeatures(h,m,t,y))}return k.createElement(ne.Provider,{value:f},l&&f.visualElement?k.createElement(l,{visualElement:f.visualElement,...h}):null,n(i,a,qi(p,f.visualElement,c),p,u,f.visualElement))}const r=k.forwardRef(o);return r[Gi]=i,r}function $i({layoutId:t}){const e=k.useContext(qe).id;return e&&t!==void 0?e+"-"+t:t}function Ki(t){function e(s,i={}){return Zi(t(s,i))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(s,i)=>(n.has(i)||n.set(i,e(i)),n.get(i))})}const _i=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ue(t){return typeof t!="string"||t.includes("-")?!1:!!(_i.indexOf(t)>-1||/[A-Z]/.test(t))}const Kt={};function Xi(t){Object.assign(Kt,t)}const zt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ut=new Set(zt);function bs(t,{layout:e,layoutId:n}){return ut.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Kt[t]||t==="opacity")}const F=t=>!!(t&&t.getVelocity),Yi={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Qi=zt.length;function Ji(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},s,i){let o="";for(let r=0;r<Qi;r++){const a=zt[r];if(t[a]!==void 0){const c=Yi[a]||a;o+=`${c}(${t[a]}) `}}return e&&!t.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(t,s?"":o):n&&s&&(o="none"),o}const ws=t=>e=>typeof e=="string"&&e.startsWith(t),Ps=ws("--"),Ce=ws("var(--"),tr=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,er=(t,e)=>e&&typeof t=="number"?e.transform(t):t,tt=(t,e,n)=>Math.min(Math.max(n,t),e),dt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Vt={...dt,transform:t=>tt(0,1,t)},Ut={...dt,default:1},St=t=>Math.round(t*1e5)/1e5,ae=/(-)?([\d]*\.?[\d])+/g,Cs=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,nr=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ot(t){return typeof t=="string"}const It=t=>({test:e=>Ot(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Y=It("deg"),W=It("%"),w=It("px"),sr=It("vh"),ir=It("vw"),yn={...W,parse:t=>W.parse(t)/100,transform:t=>W.transform(t*100)},mn={...dt,transform:Math.round},Ts={borderWidth:w,borderTopWidth:w,borderRightWidth:w,borderBottomWidth:w,borderLeftWidth:w,borderRadius:w,radius:w,borderTopLeftRadius:w,borderTopRightRadius:w,borderBottomRightRadius:w,borderBottomLeftRadius:w,width:w,maxWidth:w,height:w,maxHeight:w,size:w,top:w,right:w,bottom:w,left:w,padding:w,paddingTop:w,paddingRight:w,paddingBottom:w,paddingLeft:w,margin:w,marginTop:w,marginRight:w,marginBottom:w,marginLeft:w,rotate:Y,rotateX:Y,rotateY:Y,rotateZ:Y,scale:Ut,scaleX:Ut,scaleY:Ut,scaleZ:Ut,skew:Y,skewX:Y,skewY:Y,distance:w,translateX:w,translateY:w,translateZ:w,x:w,y:w,z:w,perspective:w,transformPerspective:w,opacity:Vt,originX:yn,originY:yn,originZ:w,zIndex:mn,fillOpacity:Vt,strokeOpacity:Vt,numOctaves:mn};function Ne(t,e,n,s){const{style:i,vars:o,transform:r,transformOrigin:a}=t;let c=!1,l=!1,h=!0;for(const u in e){const f=e[u];if(Ps(u)){o[u]=f;continue}const p=Ts[u],y=er(f,p);if(ut.has(u)){if(c=!0,r[u]=y,!h)continue;f!==(p.default||0)&&(h=!1)}else u.startsWith("origin")?(l=!0,a[u]=y):i[u]=y}if(e.transform||(c||s?i.transform=Ji(t.transform,n,h,s):i.transform&&(i.transform="none")),l){const{originX:u="50%",originY:f="50%",originZ:p=0}=a;i.transformOrigin=`${u} ${f} ${p}`}}const We=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Vs(t,e,n){for(const s in e)!F(e[s])&&!bs(s,n)&&(t[s]=e[s])}function rr({transformTemplate:t},e,n){return k.useMemo(()=>{const s=We();return Ne(s,e,{enableHardwareAcceleration:!n},t),Object.assign({},s.vars,s.style)},[e])}function or(t,e,n){const s=t.style||{},i={};return Vs(i,s,t),Object.assign(i,rr(t,e,n)),t.transformValues?t.transformValues(i):i}function ar(t,e,n){const s={},i=or(t,e,n);return t.drag&&t.dragListener!==!1&&(s.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(s.tabIndex=0),s.style=i,s}const cr=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _t(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||cr.has(t)}let Ss=t=>!_t(t);function lr(t){t&&(Ss=e=>e.startsWith("on")?!_t(e):t(e))}try{lr(require("@emotion/is-prop-valid").default)}catch{}function hr(t,e,n){const s={};for(const i in t)i==="values"&&typeof t.values=="object"||(Ss(i)||n===!0&&_t(i)||!e&&!_t(i)||t.draggable&&i.startsWith("onDrag"))&&(s[i]=t[i]);return s}function gn(t,e,n){return typeof t=="string"?t:w.transform(e+n*t)}function ur(t,e,n){const s=gn(e,t.x,t.width),i=gn(n,t.y,t.height);return`${s} ${i}`}const dr={offset:"stroke-dashoffset",array:"stroke-dasharray"},fr={offset:"strokeDashoffset",array:"strokeDasharray"};function pr(t,e,n=1,s=0,i=!0){t.pathLength=1;const o=i?dr:fr;t[o.offset]=w.transform(-s);const r=w.transform(e),a=w.transform(n);t[o.array]=`${r} ${a}`}function Ge(t,{attrX:e,attrY:n,attrScale:s,originX:i,originY:o,pathLength:r,pathSpacing:a=1,pathOffset:c=0,...l},h,u,f){if(Ne(t,l,h,f),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:y,dimensions:m}=t;p.transform&&(m&&(y.transform=p.transform),delete p.transform),m&&(i!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=ur(m,i!==void 0?i:.5,o!==void 0?o:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),s!==void 0&&(p.scale=s),r!==void 0&&pr(p,r,a,c,!1)}const As=()=>({...We(),attrs:{}}),Ze=t=>typeof t=="string"&&t.toLowerCase()==="svg";function yr(t,e,n,s){const i=k.useMemo(()=>{const o=As();return Ge(o,e,{enableHardwareAcceleration:!1},Ze(s),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};Vs(o,t.style,t),i.style={...o,...i.style}}return i}function mr(t=!1){return(n,s,i,{latestValues:o},r)=>{const c=(Ue(n)?yr:ar)(s,o,r,n),h={...hr(s,typeof n=="string",t),...c,ref:i},{children:u}=s,f=k.useMemo(()=>F(u)?u.get():u,[u]);return k.createElement(n,{...h,children:f})}}function Ls(t,{style:e,vars:n},s,i){Object.assign(t.style,e,i&&i.getProjectionStyles(s));for(const o in n)t.style.setProperty(o,n[o])}const Ds=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Rs(t,e,n,s){Ls(t,e,void 0,s);for(const i in e.attrs)t.setAttribute(Ds.has(i)?i:Oe(i),e.attrs[i])}function $e(t,e){const{style:n}=t,s={};for(const i in n)(F(n[i])||e.style&&F(e.style[i])||bs(i,t))&&(s[i]=n[i]);return s}function js(t,e){const n=$e(t,e);for(const s in t)if(F(t[s])||F(e[s])){const i=zt.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;n[i]=t[s]}return n}function Ke(t,e,n,s={},i={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,s,i)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,s,i)),e}function ce(t){const e=k.useRef(null);return e.current===null&&(e.current=t()),e.current}const Xt=t=>Array.isArray(t),gr=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),kr=t=>Xt(t)?t[t.length-1]||0:t;function Zt(t){const e=F(t)?t.get():t;return gr(e)?e.toValue():e}function xr({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},s,i,o){const r={latestValues:vr(s,i,o,t),renderState:e()};return n&&(r.mount=a=>n(s,a,r)),r}const Es=t=>(e,n)=>{const s=k.useContext(ne),i=k.useContext(se),o=()=>xr(t,e,s,i);return n?o():ce(o)};function vr(t,e,n,s){const i={},o=s(t,{});for(const f in o)i[f]=Zt(o[f]);let{initial:r,animate:a}=t;const c=oe(t),l=vs(t);e&&l&&!c&&t.inherit!==!1&&(r===void 0&&(r=e.initial),a===void 0&&(a=e.animate));let h=n?n.initial===!1:!1;h=h||r===!1;const u=h?a:r;return u&&typeof u!="boolean"&&!re(u)&&(Array.isArray(u)?u:[u]).forEach(p=>{const y=Ke(t,p);if(!y)return;const{transitionEnd:m,transition:v,...b}=y;for(const x in b){let g=b[x];if(Array.isArray(g)){const M=h?g.length-1:0;g=g[M]}g!==null&&(i[x]=g)}for(const x in m)i[x]=m[x]}),i}const R=t=>t;class kn{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function Mr(t){let e=new kn,n=new kn,s=0,i=!1,o=!1;const r=new WeakSet,a={schedule:(c,l=!1,h=!1)=>{const u=h&&i,f=u?e:n;return l&&r.add(c),f.add(c)&&u&&i&&(s=e.order.length),c},cancel:c=>{n.remove(c),r.delete(c)},process:c=>{if(i){o=!0;return}if(i=!0,[e,n]=[n,e],n.clear(),s=e.order.length,s)for(let l=0;l<s;l++){const h=e.order[l];h(c),r.has(h)&&(a.schedule(h),t())}i=!1,o&&(o=!1,a.process(c))}};return a}const Nt=["prepare","read","update","preRender","render","postRender"],br=40;function wr(t,e){let n=!1,s=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Nt.reduce((u,f)=>(u[f]=Mr(()=>n=!0),u),{}),r=u=>o[u].process(i),a=()=>{const u=performance.now();n=!1,i.delta=s?1e3/60:Math.max(Math.min(u-i.timestamp,br),1),i.timestamp=u,i.isProcessing=!0,Nt.forEach(r),i.isProcessing=!1,n&&e&&(s=!1,t(a))},c=()=>{n=!0,s=!0,i.isProcessing||t(a)};return{schedule:Nt.reduce((u,f)=>{const p=o[f];return u[f]=(y,m=!1,v=!1)=>(n||c(),p.schedule(y,m,v)),u},{}),cancel:u=>Nt.forEach(f=>o[f].cancel(u)),state:i,steps:o}}const{schedule:V,cancel:Z,state:E,steps:de}=wr(typeof requestAnimationFrame<"u"?requestAnimationFrame:R,!0),Pr={useVisualState:Es({scrapeMotionValuesFromProps:js,createRenderState:As,onMount:(t,e,{renderState:n,latestValues:s})=>{V.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),V.render(()=>{Ge(n,s,{enableHardwareAcceleration:!1},Ze(e.tagName),t.transformTemplate),Rs(e,n)})}})},Cr={useVisualState:Es({scrapeMotionValuesFromProps:$e,createRenderState:We})};function Tr(t,{forwardMotionProps:e=!1},n,s){return{...Ue(t)?Pr:Cr,preloadedFeatures:n,useRender:mr(e),createVisualElement:s,Component:t}}function K(t,e,n,s={passive:!0}){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n)}const Fs=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function le(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const Vr=t=>e=>Fs(e)&&t(e,le(e));function _(t,e,n,s){return K(t,e,Vr(n),s)}const Sr=(t,e)=>n=>e(t(n)),J=(...t)=>t.reduce(Sr);function Bs(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const xn=Bs("dragHorizontal"),vn=Bs("dragVertical");function zs(t){let e=!1;if(t==="y")e=vn();else if(t==="x")e=xn();else{const n=xn(),s=vn();n&&s?e=()=>{n(),s()}:(n&&n(),s&&s())}return e}function Os(){const t=zs(!0);return t?(t(),!1):!0}class nt{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Mn(t,e){const n="pointer"+(e?"enter":"leave"),s="onHover"+(e?"Start":"End"),i=(o,r)=>{if(o.pointerType==="touch"||Os())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[s]&&V.update(()=>a[s](o,r))};return _(t.current,n,i,{passive:!t.getProps()[s]})}class Ar extends nt{mount(){this.unmount=J(Mn(this.node,!0),Mn(this.node,!1))}unmount(){}}class Lr extends nt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=J(K(this.node.current,"focus",()=>this.onFocus()),K(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Is=(t,e)=>e?t===e?!0:Is(t,e.parentElement):!1;function fe(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,le(n))}class Dr extends nt{constructor(){super(...arguments),this.removeStartListeners=R,this.removeEndListeners=R,this.removeAccessibleListeners=R,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const s=this.node.getProps(),o=_(window,"pointerup",(a,c)=>{if(!this.checkPressEnd())return;const{onTap:l,onTapCancel:h,globalTapTarget:u}=this.node.getProps();V.update(()=>{!u&&!Is(this.node.current,a.target)?h&&h(a,c):l&&l(a,c)})},{passive:!(s.onTap||s.onPointerUp)}),r=_(window,"pointercancel",(a,c)=>this.cancelPress(a,c),{passive:!(s.onTapCancel||s.onPointerCancel)});this.removeEndListeners=J(o,r),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=o=>{if(o.key!=="Enter"||this.isPressing)return;const r=a=>{a.key!=="Enter"||!this.checkPressEnd()||fe("up",(c,l)=>{const{onTap:h}=this.node.getProps();h&&V.update(()=>h(c,l))})};this.removeEndListeners(),this.removeEndListeners=K(this.node.current,"keyup",r),fe("down",(a,c)=>{this.startPress(a,c)})},n=K(this.node.current,"keydown",e),s=()=>{this.isPressing&&fe("cancel",(o,r)=>this.cancelPress(o,r))},i=K(this.node.current,"blur",s);this.removeAccessibleListeners=J(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:s,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),s&&V.update(()=>s(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Os()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:s}=this.node.getProps();s&&V.update(()=>s(e,n))}mount(){const e=this.node.getProps(),n=_(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),s=K(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=J(n,s)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Te=new WeakMap,pe=new WeakMap,Rr=t=>{const e=Te.get(t.target);e&&e(t)},jr=t=>{t.forEach(Rr)};function Er({root:t,...e}){const n=t||document;pe.has(n)||pe.set(n,{});const s=pe.get(n),i=JSON.stringify(e);return s[i]||(s[i]=new IntersectionObserver(jr,{root:t,...e})),s[i]}function Fr(t,e,n){const s=Er(e);return Te.set(t,n),s.observe(t),()=>{Te.delete(t),s.unobserve(t)}}const Br={some:0,all:1};class zr extends nt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:s,amount:i="some",once:o}=e,r={root:n?n.current:void 0,rootMargin:s,threshold:typeof i=="number"?i:Br[i]},a=c=>{const{isIntersecting:l}=c;if(this.isInView===l||(this.isInView=l,o&&!l&&this.hasEnteredView))return;l&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",l);const{onViewportEnter:h,onViewportLeave:u}=this.node.getProps(),f=l?h:u;f&&f(c)};return Fr(this.node.current,r,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Or(e,n))&&this.startObserver()}unmount(){}}function Or({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Ir={inView:{Feature:zr},tap:{Feature:Dr},focus:{Feature:Lr},hover:{Feature:Ar}};function Hs(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1;return!0}function Hr(t){const e={};return t.values.forEach((n,s)=>e[s]=n.get()),e}function qr(t){const e={};return t.values.forEach((n,s)=>e[s]=n.getVelocity()),e}function he(t,e,n){const s=t.getProps();return Ke(s,e,n!==void 0?n:s.custom,Hr(t),qr(t))}let _e=R;const lt=t=>t*1e3,G=t=>t/1e3,Ur={current:!1},qs=t=>Array.isArray(t)&&typeof t[0]=="number";function Us(t){return!!(!t||typeof t=="string"&&Ns[t]||qs(t)||Array.isArray(t)&&t.every(Us))}const Tt=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`,Ns={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Tt([0,.65,.55,1]),circOut:Tt([.55,0,1,.45]),backIn:Tt([.31,.01,.66,-.59]),backOut:Tt([.33,1.53,.69,.99])};function Ws(t){if(t)return qs(t)?Tt(t):Array.isArray(t)?t.map(Ws):Ns[t]}function Nr(t,e,n,{delay:s=0,duration:i,repeat:o=0,repeatType:r="loop",ease:a,times:c}={}){const l={[e]:n};c&&(l.offset=c);const h=Ws(a);return Array.isArray(h)&&(l.easing=h),t.animate(l,{delay:s,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:r==="reverse"?"alternate":"normal"})}function Wr(t,{repeat:e,repeatType:n="loop"}){const s=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[s]}const Gs=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Gr=1e-7,Zr=12;function $r(t,e,n,s,i){let o,r,a=0;do r=e+(n-e)/2,o=Gs(r,s,i)-t,o>0?n=r:e=r;while(Math.abs(o)>Gr&&++a<Zr);return r}function Ht(t,e,n,s){if(t===e&&n===s)return R;const i=o=>$r(o,0,1,t,n);return o=>o===0||o===1?o:Gs(i(o),e,s)}const Kr=Ht(.42,0,1,1),_r=Ht(0,0,.58,1),Zs=Ht(.42,0,.58,1),Xr=t=>Array.isArray(t)&&typeof t[0]!="number",$s=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ks=t=>e=>1-t(1-e),Xe=t=>1-Math.sin(Math.acos(t)),_s=Ks(Xe),Yr=$s(Xe),Xs=Ht(.33,1.53,.69,.99),Ye=Ks(Xs),Qr=$s(Ye),Jr=t=>(t*=2)<1?.5*Ye(t):.5*(2-Math.pow(2,-10*(t-1))),to={linear:R,easeIn:Kr,easeInOut:Zs,easeOut:_r,circIn:Xe,circInOut:Yr,circOut:_s,backIn:Ye,backInOut:Qr,backOut:Xs,anticipate:Jr},bn=t=>{if(Array.isArray(t)){_e(t.length===4);const[e,n,s,i]=t;return Ht(e,n,s,i)}else if(typeof t=="string")return to[t];return t},Qe=(t,e)=>n=>!!(Ot(n)&&nr.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Ys=(t,e,n)=>s=>{if(!Ot(s))return s;const[i,o,r,a]=s.match(ae);return{[t]:parseFloat(i),[e]:parseFloat(o),[n]:parseFloat(r),alpha:a!==void 0?parseFloat(a):1}},eo=t=>tt(0,255,t),ye={...dt,transform:t=>Math.round(eo(t))},ct={test:Qe("rgb","red"),parse:Ys("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+ye.transform(t)+", "+ye.transform(e)+", "+ye.transform(n)+", "+St(Vt.transform(s))+")"};function no(t){let e="",n="",s="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const Ve={test:Qe("#"),parse:no,transform:ct.transform},gt={test:Qe("hsl","hue"),parse:Ys("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+W.transform(St(e))+", "+W.transform(St(n))+", "+St(Vt.transform(s))+")"},O={test:t=>ct.test(t)||Ve.test(t)||gt.test(t),parse:t=>ct.test(t)?ct.parse(t):gt.test(t)?gt.parse(t):Ve.parse(t),transform:t=>Ot(t)?t:t.hasOwnProperty("red")?ct.transform(t):gt.transform(t)},D=(t,e,n)=>-n*t+n*e+t;function me(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function so({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let i=0,o=0,r=0;if(!e)i=o=r=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;i=me(c,a,t+1/3),o=me(c,a,t),r=me(c,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(r*255),alpha:s}}const ge=(t,e,n)=>{const s=t*t;return Math.sqrt(Math.max(0,n*(e*e-s)+s))},io=[Ve,ct,gt],ro=t=>io.find(e=>e.test(t));function wn(t){const e=ro(t);let n=e.parse(t);return e===gt&&(n=so(n)),n}const Qs=(t,e)=>{const n=wn(t),s=wn(e),i={...n};return o=>(i.red=ge(n.red,s.red,o),i.green=ge(n.green,s.green,o),i.blue=ge(n.blue,s.blue,o),i.alpha=D(n.alpha,s.alpha,o),ct.transform(i))};function oo(t){var e,n;return isNaN(t)&&Ot(t)&&(((e=t.match(ae))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Cs))===null||n===void 0?void 0:n.length)||0)>0}const Js={regex:tr,countKey:"Vars",token:"${v}",parse:R},ti={regex:Cs,countKey:"Colors",token:"${c}",parse:O.parse},ei={regex:ae,countKey:"Numbers",token:"${n}",parse:dt.parse};function ke(t,{regex:e,countKey:n,token:s,parse:i}){const o=t.tokenised.match(e);o&&(t["num"+n]=o.length,t.tokenised=t.tokenised.replace(e,s),t.values.push(...o.map(i)))}function Yt(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ke(n,Js),ke(n,ti),ke(n,ei),n}function ni(t){return Yt(t).values}function si(t){const{values:e,numColors:n,numVars:s,tokenised:i}=Yt(t),o=e.length;return r=>{let a=i;for(let c=0;c<o;c++)c<s?a=a.replace(Js.token,r[c]):c<s+n?a=a.replace(ti.token,O.transform(r[c])):a=a.replace(ei.token,St(r[c]));return a}}const ao=t=>typeof t=="number"?0:t;function co(t){const e=ni(t);return si(t)(e.map(ao))}const et={test:oo,parse:ni,createTransformer:si,getAnimatableNone:co},ii=(t,e)=>n=>`${n>0?e:t}`;function ri(t,e){return typeof t=="number"?n=>D(t,e,n):O.test(t)?Qs(t,e):t.startsWith("var(")?ii(t,e):ai(t,e)}const oi=(t,e)=>{const n=[...t],s=n.length,i=t.map((o,r)=>ri(o,e[r]));return o=>{for(let r=0;r<s;r++)n[r]=i[r](o);return n}},lo=(t,e)=>{const n={...t,...e},s={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(s[i]=ri(t[i],e[i]));return i=>{for(const o in s)n[o]=s[o](i);return n}},ai=(t,e)=>{const n=et.createTransformer(e),s=Yt(t),i=Yt(e);return s.numVars===i.numVars&&s.numColors===i.numColors&&s.numNumbers>=i.numNumbers?J(oi(s.values,i.values),n):ii(t,e)},Et=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s},Pn=(t,e)=>n=>D(t,e,n);function ho(t){return typeof t=="number"?Pn:typeof t=="string"?O.test(t)?Qs:ai:Array.isArray(t)?oi:typeof t=="object"?lo:Pn}function uo(t,e,n){const s=[],i=n||ho(t[0]),o=t.length-1;for(let r=0;r<o;r++){let a=i(t[r],t[r+1]);if(e){const c=Array.isArray(e)?e[r]||R:e;a=J(c,a)}s.push(a)}return s}function Je(t,e,{clamp:n=!0,ease:s,mixer:i}={}){const o=t.length;if(_e(o===e.length),o===1)return()=>e[0];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const r=uo(e,s,i),a=r.length,c=l=>{let h=0;if(a>1)for(;h<t.length-2&&!(l<t[h+1]);h++);const u=Et(t[h],t[h+1],l);return r[h](u)};return n?l=>c(tt(t[0],t[o-1],l)):c}function fo(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=Et(0,e,s);t.push(D(n,1,i))}}function po(t){const e=[0];return fo(e,t.length-1),e}function yo(t,e){return t.map(n=>n*e)}function mo(t,e){return t.map(()=>e||Zs).splice(0,t.length-1)}function Qt({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const i=Xr(s)?s.map(bn):bn(s),o={done:!1,value:e[0]},r=yo(n&&n.length===e.length?n:po(e),t),a=Je(r,e,{ease:Array.isArray(i)?i:mo(e,i)});return{calculatedDuration:t,next:c=>(o.value=a(c),o.done=c>=t,o)}}function ci(t,e){return e?t*(1e3/e):0}const go=5;function li(t,e,n){const s=Math.max(e-go,0);return ci(n-t(s),e-s)}const xe=.001,ko=.01,xo=10,vo=.05,Mo=1;function bo({duration:t=800,bounce:e=.25,velocity:n=0,mass:s=1}){let i,o,r=1-e;r=tt(vo,Mo,r),t=tt(ko,xo,G(t)),r<1?(i=l=>{const h=l*r,u=h*t,f=h-n,p=Se(l,r),y=Math.exp(-u);return xe-f/p*y},o=l=>{const u=l*r*t,f=u*n+n,p=Math.pow(r,2)*Math.pow(l,2)*t,y=Math.exp(-u),m=Se(Math.pow(l,2),r);return(-i(l)+xe>0?-1:1)*((f-p)*y)/m}):(i=l=>{const h=Math.exp(-l*t),u=(l-n)*t+1;return-xe+h*u},o=l=>{const h=Math.exp(-l*t),u=(n-l)*(t*t);return h*u});const a=5/t,c=Po(i,o,a);if(t=lt(t),isNaN(c))return{stiffness:100,damping:10,duration:t};{const l=Math.pow(c,2)*s;return{stiffness:l,damping:r*2*Math.sqrt(s*l),duration:t}}}const wo=12;function Po(t,e,n){let s=n;for(let i=1;i<wo;i++)s=s-t(s)/e(s);return s}function Se(t,e){return t*Math.sqrt(1-e*e)}const Co=["duration","bounce"],To=["stiffness","damping","mass"];function Cn(t,e){return e.some(n=>t[n]!==void 0)}function Vo(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Cn(t,To)&&Cn(t,Co)){const n=bo(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function hi({keyframes:t,restDelta:e,restSpeed:n,...s}){const i=t[0],o=t[t.length-1],r={done:!1,value:i},{stiffness:a,damping:c,mass:l,duration:h,velocity:u,isResolvedFromDuration:f}=Vo({...s,velocity:-G(s.velocity||0)}),p=u||0,y=c/(2*Math.sqrt(a*l)),m=o-i,v=G(Math.sqrt(a/l)),b=Math.abs(m)<5;n||(n=b?.01:2),e||(e=b?.005:.5);let x;if(y<1){const g=Se(v,y);x=M=>{const P=Math.exp(-y*v*M);return o-P*((p+y*v*m)/g*Math.sin(g*M)+m*Math.cos(g*M))}}else if(y===1)x=g=>o-Math.exp(-v*g)*(m+(p+v*m)*g);else{const g=v*Math.sqrt(y*y-1);x=M=>{const P=Math.exp(-y*v*M),S=Math.min(g*M,300);return o-P*((p+y*v*m)*Math.sinh(S)+g*m*Math.cosh(S))/g}}return{calculatedDuration:f&&h||null,next:g=>{const M=x(g);if(f)r.done=g>=h;else{let P=p;g!==0&&(y<1?P=li(x,g,M):P=0);const S=Math.abs(P)<=n,A=Math.abs(o-M)<=e;r.done=S&&A}return r.value=r.done?o:M,r}}}function Tn({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:r,min:a,max:c,restDelta:l=.5,restSpeed:h}){const u=t[0],f={done:!1,value:u},p=C=>a!==void 0&&C<a||c!==void 0&&C>c,y=C=>a===void 0?c:c===void 0||Math.abs(a-C)<Math.abs(c-C)?a:c;let m=n*e;const v=u+m,b=r===void 0?v:r(v);b!==v&&(m=b-u);const x=C=>-m*Math.exp(-C/s),g=C=>b+x(C),M=C=>{const T=x(C),H=g(C);f.done=Math.abs(T)<=l,f.value=f.done?b:H};let P,S;const A=C=>{p(f.value)&&(P=C,S=hi({keyframes:[f.value,y(f.value)],velocity:li(g,C,f.value),damping:i,stiffness:o,restDelta:l,restSpeed:h}))};return A(0),{calculatedDuration:null,next:C=>{let T=!1;return!S&&P===void 0&&(T=!0,M(C),A(C)),P!==void 0&&C>P?S.next(C-P):(!T&&M(C),f)}}}const So=t=>{const e=({timestamp:n})=>t(n);return{start:()=>V.update(e,!0),stop:()=>Z(e),now:()=>E.isProcessing?E.timestamp:performance.now()}},Vn=2e4;function Sn(t){let e=0;const n=50;let s=t.next(e);for(;!s.done&&e<Vn;)e+=n,s=t.next(e);return e>=Vn?1/0:e}const Ao={decay:Tn,inertia:Tn,tween:Qt,keyframes:Qt,spring:hi};function Ft({autoplay:t=!0,delay:e=0,driver:n=So,keyframes:s,type:i="keyframes",repeat:o=0,repeatDelay:r=0,repeatType:a="loop",onPlay:c,onStop:l,onComplete:h,onUpdate:u,...f}){let p=1,y=!1,m,v;const b=()=>{v=new Promise(L=>{m=L})};b();let x;const g=Ao[i]||Qt;let M;g!==Qt&&typeof s[0]!="number"&&(M=Je([0,100],s,{clamp:!1}),s=[0,100]);const P=g({...f,keyframes:s});let S;a==="mirror"&&(S=g({...f,keyframes:[...s].reverse(),velocity:-(f.velocity||0)}));let A="idle",C=null,T=null,H=null;P.calculatedDuration===null&&o&&(P.calculatedDuration=Sn(P));const{calculatedDuration:ft}=P;let N=1/0,$=1/0;ft!==null&&(N=ft+r,$=N*(o+1)-r);let z=0;const pt=L=>{if(T===null)return;p>0&&(T=Math.min(T,L)),p<0&&(T=Math.min(L-$/p,T)),C!==null?z=C:z=Math.round(L-T)*p;const bt=z-e*(p>=0?1:-1),ln=p>=0?bt<0:bt>$;z=Math.max(bt,0),A==="finished"&&C===null&&(z=$);let hn=z,un=P;if(o){const ue=Math.min(z,$)/N;let qt=Math.floor(ue),st=ue%1;!st&&ue>=1&&(st=1),st===1&&qt--,qt=Math.min(qt,o+1),!!(qt%2)&&(a==="reverse"?(st=1-st,r&&(st-=r/N)):a==="mirror"&&(un=S)),hn=tt(0,1,st)*N}const wt=ln?{done:!1,value:s[0]}:un.next(hn);M&&(wt.value=M(wt.value));let{done:dn}=wt;!ln&&ft!==null&&(dn=p>=0?z>=$:z<=0);const Oi=C===null&&(A==="finished"||A==="running"&&dn);return u&&u(wt.value),Oi&&Mt(),wt},B=()=>{x&&x.stop(),x=void 0},X=()=>{A="idle",B(),m(),b(),T=H=null},Mt=()=>{A="finished",h&&h(),B(),m()},yt=()=>{if(y)return;x||(x=n(pt));const L=x.now();c&&c(),C!==null?T=L-C:(!T||A==="finished")&&(T=L),A==="finished"&&b(),H=T,C=null,A="running",x.start()};t&&yt();const cn={then(L,bt){return v.then(L,bt)},get time(){return G(z)},set time(L){L=lt(L),z=L,C!==null||!x||p===0?C=L:T=x.now()-L/p},get duration(){const L=P.calculatedDuration===null?Sn(P):P.calculatedDuration;return G(L)},get speed(){return p},set speed(L){L===p||!x||(p=L,cn.time=G(z))},get state(){return A},play:yt,pause:()=>{A="paused",C=z},stop:()=>{y=!0,A!=="idle"&&(A="idle",l&&l(),X())},cancel:()=>{H!==null&&pt(H),X()},complete:()=>{A="finished"},sample:L=>(T=0,pt(L))};return cn}function Lo(t){let e;return()=>(e===void 0&&(e=t()),e)}const Do=Lo(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ro=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Wt=10,jo=2e4,Eo=(t,e)=>e.type==="spring"||t==="backgroundColor"||!Us(e.ease);function Fo(t,e,{onUpdate:n,onComplete:s,...i}){if(!(Do()&&Ro.has(e)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let r=!1,a,c,l=!1;const h=()=>{c=new Promise(g=>{a=g})};h();let{keyframes:u,duration:f=300,ease:p,times:y}=i;if(Eo(e,i)){const g=Ft({...i,repeat:0,delay:0});let M={done:!1,value:u[0]};const P=[];let S=0;for(;!M.done&&S<jo;)M=g.sample(S),P.push(M.value),S+=Wt;y=void 0,u=P,f=S-Wt,p="linear"}const m=Nr(t.owner.current,e,u,{...i,duration:f,ease:p,times:y}),v=()=>{l=!1,m.cancel()},b=()=>{l=!0,V.update(v),a(),h()};return m.onfinish=()=>{l||(t.set(Wr(u,i)),s&&s(),b())},{then(g,M){return c.then(g,M)},attachTimeline(g){return m.timeline=g,m.onfinish=null,R},get time(){return G(m.currentTime||0)},set time(g){m.currentTime=lt(g)},get speed(){return m.playbackRate},set speed(g){m.playbackRate=g},get duration(){return G(f)},play:()=>{r||(m.play(),Z(v))},pause:()=>m.pause(),stop:()=>{if(r=!0,m.playState==="idle")return;const{currentTime:g}=m;if(g){const M=Ft({...i,autoplay:!1});t.setWithVelocity(M.sample(g-Wt).value,M.sample(g).value,Wt)}b()},complete:()=>{l||m.finish()},cancel:b}}function Bo({keyframes:t,delay:e,onUpdate:n,onComplete:s}){const i=()=>(n&&n(t[t.length-1]),s&&s(),{time:0,speed:1,duration:0,play:R,pause:R,stop:R,then:o=>(o(),Promise.resolve()),cancel:R,complete:R});return e?Ft({keyframes:[0,1],duration:0,delay:e,onComplete:i}):i()}const zo={type:"spring",stiffness:500,damping:25,restSpeed:10},Oo=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Io={type:"keyframes",duration:.8},Ho={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qo=(t,{keyframes:e})=>e.length>2?Io:ut.has(t)?t.startsWith("scale")?Oo(e[1]):zo:Ho,Ae=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(et.test(e)||e==="0")&&!e.startsWith("url(")),Uo=new Set(["brightness","contrast","saturate","opacity"]);function No(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(ae)||[];if(!s)return t;const i=n.replace(s,"");let o=Uo.has(e)?1:0;return s!==n&&(o*=100),e+"("+o+i+")"}const Wo=/([a-z-]*)\(.*?\)/g,Le={...et,getAnimatableNone:t=>{const e=t.match(Wo);return e?e.map(No).join(" "):t}},Go={...Ts,color:O,backgroundColor:O,outlineColor:O,fill:O,stroke:O,borderColor:O,borderTopColor:O,borderRightColor:O,borderBottomColor:O,borderLeftColor:O,filter:Le,WebkitFilter:Le},tn=t=>Go[t];function ui(t,e){let n=tn(t);return n!==Le&&(n=et),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const di=t=>/^0[^.\s]+$/.test(t);function Zo(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||di(t)}function $o(t,e,n,s){const i=Ae(e,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const r=s.from!==void 0?s.from:t.get();let a;const c=[];for(let l=0;l<o.length;l++)o[l]===null&&(o[l]=l===0?r:o[l-1]),Zo(o[l])&&c.push(l),typeof o[l]=="string"&&o[l]!=="none"&&o[l]!=="0"&&(a=o[l]);if(i&&c.length&&a)for(let l=0;l<c.length;l++){const h=c[l];o[h]=ui(e,a)}return o}function Ko({when:t,delay:e,delayChildren:n,staggerChildren:s,staggerDirection:i,repeat:o,repeatType:r,repeatDelay:a,from:c,elapsed:l,...h}){return!!Object.keys(h).length}function en(t,e){return t[e]||t.default||t}const _o={skipAnimations:!1},nn=(t,e,n,s={})=>i=>{const o=en(s,t)||{},r=o.delay||s.delay||0;let{elapsed:a=0}=s;a=a-lt(r);const c=$o(e,t,n,o),l=c[0],h=c[c.length-1],u=Ae(t,l),f=Ae(t,h);let p={keyframes:c,velocity:e.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:y=>{e.set(y),o.onUpdate&&o.onUpdate(y)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(Ko(o)||(p={...p,...qo(t,p)}),p.duration&&(p.duration=lt(p.duration)),p.repeatDelay&&(p.repeatDelay=lt(p.repeatDelay)),!u||!f||Ur.current||o.type===!1||_o.skipAnimations)return Bo(p);if(!s.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const y=Fo(e,t,p);if(y)return y}return Ft(p)};function Jt(t){return!!(F(t)&&t.add)}const fi=t=>/^\-?\d*\.?\d+$/.test(t);function sn(t,e){t.indexOf(e)===-1&&t.push(e)}function rn(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class on{constructor(){this.subscriptions=[]}add(e){return sn(this.subscriptions,e),()=>rn(this.subscriptions,e)}notify(e,n,s){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,s);else for(let o=0;o<i;o++){const r=this.subscriptions[o];r&&r(e,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xo=t=>!isNaN(parseFloat(t)),At={current:void 0};class Yo{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(s,i=!0)=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:r}=E;this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r,V.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>V.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{s!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=Xo(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new on);const s=this.events[e].add(n);return e==="change"?()=>{s(),V.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,s){this.set(n),this.prev=e,this.timeDelta=s}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return At.current&&At.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ci(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ht(t,e){return new Yo(t,e)}const pi=t=>e=>e.test(t),Qo={test:t=>t==="auto",parse:t=>t},yi=[dt,w,W,Y,ir,sr,Qo],Pt=t=>yi.find(pi(t)),Jo=[...yi,O,et],ta=t=>Jo.find(pi(t));function ea(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ht(n))}function na(t,e){const n=he(t,e);let{transitionEnd:s={},transition:i={},...o}=n?t.makeTargetAnimatable(n,!1):{};o={...o,...s};for(const r in o){const a=kr(o[r]);ea(t,r,a)}}function sa(t,e,n){var s,i;const o=Object.keys(e).filter(a=>!t.hasValue(a)),r=o.length;if(r)for(let a=0;a<r;a++){const c=o[a],l=e[c];let h=null;Array.isArray(l)&&(h=l[0]),h===null&&(h=(i=(s=n[c])!==null&&s!==void 0?s:t.readValue(c))!==null&&i!==void 0?i:e[c]),h!=null&&(typeof h=="string"&&(fi(h)||di(h))?h=parseFloat(h):!ta(h)&&et.test(l)&&(h=ui(c,l)),t.addValue(c,ht(h,{owner:t})),n[c]===void 0&&(n[c]=h),h!==null&&t.setBaseTarget(c,h))}}function ia(t,e){return e?(e[t]||e.default||e).from:void 0}function ra(t,e,n){const s={};for(const i in t){const o=ia(i,e);if(o!==void 0)s[i]=o;else{const r=n.getValue(i);r&&(s[i]=r.get())}}return s}function oa({protectedKeys:t,needsAnimating:e},n){const s=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,s}function aa(t,e){const n=t.get();if(Array.isArray(e)){for(let s=0;s<e.length;s++)if(e[s]!==n)return!0}else return n!==e}function mi(t,e,{delay:n=0,transitionOverride:s,type:i}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:r,...a}=t.makeTargetAnimatable(e);const c=t.getValue("willChange");s&&(o=s);const l=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const u in a){const f=t.getValue(u),p=a[u];if(!f||p===void 0||h&&oa(h,u))continue;const y={delay:n,elapsed:0,...en(o||{},u)};if(window.HandoffAppearAnimations){const b=t.getProps()[xs];if(b){const x=window.HandoffAppearAnimations(b,u,f,V);x!==null&&(y.elapsed=x,y.isHandoff=!0)}}let m=!y.isHandoff&&!aa(f,p);if(y.type==="spring"&&(f.getVelocity()||y.velocity)&&(m=!1),f.animation&&(m=!1),m)continue;f.start(nn(u,f,p,t.shouldReduceMotion&&ut.has(u)?{type:!1}:y));const v=f.animation;Jt(c)&&(c.add(u),v.then(()=>c.remove(u))),l.push(v)}return r&&Promise.all(l).then(()=>{r&&na(t,r)}),l}function De(t,e,n={}){const s=he(t,e,n.custom);let{transition:i=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(i=n.transitionOverride);const o=s?()=>Promise.all(mi(t,s,n)):()=>Promise.resolve(),r=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:l=0,staggerChildren:h,staggerDirection:u}=i;return ca(t,e,l+c,h,u,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,l]=a==="beforeChildren"?[o,r]:[r,o];return c().then(()=>l())}else return Promise.all([o(),r(n.delay)])}function ca(t,e,n=0,s=0,i=1,o){const r=[],a=(t.variantChildren.size-1)*s,c=i===1?(l=0)=>l*s:(l=0)=>a-l*s;return Array.from(t.variantChildren).sort(la).forEach((l,h)=>{l.notify("AnimationStart",e),r.push(De(l,e,{...o,delay:n+c(h)}).then(()=>l.notify("AnimationComplete",e)))}),Promise.all(r)}function la(t,e){return t.sortNodePosition(e)}function ha(t,e,n={}){t.notify("AnimationStart",e);let s;if(Array.isArray(e)){const i=e.map(o=>De(t,o,n));s=Promise.all(i)}else if(typeof e=="string")s=De(t,e,n);else{const i=typeof e=="function"?he(t,e,n.custom):e;s=Promise.all(mi(t,i,n))}return s.then(()=>t.notify("AnimationComplete",e))}const ua=[...Ie].reverse(),da=Ie.length;function fa(t){return e=>Promise.all(e.map(({animation:n,options:s})=>ha(t,n,s)))}function pa(t){let e=fa(t);const n=ma();let s=!0;const i=(c,l)=>{const h=he(t,l);if(h){const{transition:u,transitionEnd:f,...p}=h;c={...c,...p,...f}}return c};function o(c){e=c(t)}function r(c,l){const h=t.getProps(),u=t.getVariantContext(!0)||{},f=[],p=new Set;let y={},m=1/0;for(let b=0;b<da;b++){const x=ua[b],g=n[x],M=h[x]!==void 0?h[x]:u[x],P=Rt(M),S=x===l?g.isActive:null;S===!1&&(m=b);let A=M===u[x]&&M!==h[x]&&P;if(A&&s&&t.manuallyAnimateOnMount&&(A=!1),g.protectedKeys={...y},!g.isActive&&S===null||!M&&!g.prevProp||re(M)||typeof M=="boolean")continue;let T=ya(g.prevProp,M)||x===l&&g.isActive&&!A&&P||b>m&&P,H=!1;const ft=Array.isArray(M)?M:[M];let N=ft.reduce(i,{});S===!1&&(N={});const{prevResolvedValues:$={}}=g,z={...$,...N},pt=B=>{T=!0,p.has(B)&&(H=!0,p.delete(B)),g.needsAnimating[B]=!0};for(const B in z){const X=N[B],Mt=$[B];if(y.hasOwnProperty(B))continue;let yt=!1;Xt(X)&&Xt(Mt)?yt=!Hs(X,Mt):yt=X!==Mt,yt?X!==void 0?pt(B):p.add(B):X!==void 0&&p.has(B)?pt(B):g.protectedKeys[B]=!0}g.prevProp=M,g.prevResolvedValues=N,g.isActive&&(y={...y,...N}),s&&t.blockInitialAnimation&&(T=!1),T&&(!A||H)&&f.push(...ft.map(B=>({animation:B,options:{type:x,...c}})))}if(p.size){const b={};p.forEach(x=>{const g=t.getBaseTarget(x);g!==void 0&&(b[x]=g)}),f.push({animation:b})}let v=!!f.length;return s&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(v=!1),s=!1,v?e(f):Promise.resolve()}function a(c,l,h){var u;if(n[c].isActive===l)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(p=>{var y;return(y=p.animationState)===null||y===void 0?void 0:y.setActive(c,l)}),n[c].isActive=l;const f=r(h,c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:r,setActive:a,setAnimateFunction:o,getState:()=>n}}function ya(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Hs(e,t):!1}function it(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ma(){return{animate:it(!0),whileInView:it(),whileHover:it(),whileTap:it(),whileDrag:it(),whileFocus:it(),exit:it()}}class ga extends nt{constructor(e){super(e),e.animationState||(e.animationState=pa(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),re(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let ka=0;class xa extends nt{constructor(){super(...arguments),this.id=ka++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:s}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const o=this.node.animationState.setActive("exit",!e,{custom:s??this.node.getProps().custom});n&&!e&&o.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const va={animation:{Feature:ga},exit:{Feature:xa}},An=(t,e)=>Math.abs(t-e);function Ma(t,e){const n=An(t.x,e.x),s=An(t.y,e.y);return Math.sqrt(n**2+s**2)}class gi{constructor(e,n,{transformPagePoint:s,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Me(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=Ma(u.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:y}=u,{timestamp:m}=E;this.history.push({...y,timestamp:m});const{onStart:v,onMove:b}=this.handlers;f||(v&&v(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,u)},this.handlePointerMove=(u,f)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=ve(f,this.transformPagePoint),V.update(this.updatePoint,!0)},this.handlePointerUp=(u,f)=>{this.end();const{onEnd:p,onSessionEnd:y,resumeAnimation:m}=this.handlers;if(this.dragSnapToOrigin&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Me(u.type==="pointercancel"?this.lastMoveEventInfo:ve(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(u,v),y&&y(u,v)},!Fs(e))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=s,this.contextWindow=i||window;const r=le(e),a=ve(r,this.transformPagePoint),{point:c}=a,{timestamp:l}=E;this.history=[{...c,timestamp:l}];const{onSessionStart:h}=n;h&&h(e,Me(a,this.history)),this.removeListeners=J(_(this.contextWindow,"pointermove",this.handlePointerMove),_(this.contextWindow,"pointerup",this.handlePointerUp),_(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Z(this.updatePoint)}}function ve(t,e){return e?{point:e(t.point)}:t}function Ln(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Me({point:t},e){return{point:t,delta:Ln(t,ki(e)),offset:Ln(t,ba(e)),velocity:wa(e,.1)}}function ba(t){return t[0]}function ki(t){return t[t.length-1]}function wa(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,s=null;const i=ki(t);for(;n>=0&&(s=t[n],!(i.timestamp-s.timestamp>lt(e)));)n--;if(!s)return{x:0,y:0};const o=G(i.timestamp-s.timestamp);if(o===0)return{x:0,y:0};const r={x:(i.x-s.x)/o,y:(i.y-s.y)/o};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function I(t){return t.max-t.min}function Re(t,e=0,n=.01){return Math.abs(t-e)<=n}function Dn(t,e,n,s=.5){t.origin=s,t.originPoint=D(e.min,e.max,t.origin),t.scale=I(n)/I(e),(Re(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=D(n.min,n.max,t.origin)-t.originPoint,(Re(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Lt(t,e,n,s){Dn(t.x,e.x,n.x,s?s.originX:void 0),Dn(t.y,e.y,n.y,s?s.originY:void 0)}function Rn(t,e,n){t.min=n.min+e.min,t.max=t.min+I(e)}function Pa(t,e,n){Rn(t.x,e.x,n.x),Rn(t.y,e.y,n.y)}function jn(t,e,n){t.min=e.min-n.min,t.max=t.min+I(e)}function Dt(t,e,n){jn(t.x,e.x,n.x),jn(t.y,e.y,n.y)}function Ca(t,{min:e,max:n},s){return e!==void 0&&t<e?t=s?D(e,t,s.min):Math.max(t,e):n!==void 0&&t>n&&(t=s?D(n,t,s.max):Math.min(t,n)),t}function En(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Ta(t,{top:e,left:n,bottom:s,right:i}){return{x:En(t.x,n,i),y:En(t.y,e,s)}}function Fn(t,e){let n=e.min-t.min,s=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,s]=[s,n]),{min:n,max:s}}function Va(t,e){return{x:Fn(t.x,e.x),y:Fn(t.y,e.y)}}function Sa(t,e){let n=.5;const s=I(t),i=I(e);return i>s?n=Et(e.min,e.max-s,t.min):s>i&&(n=Et(t.min,t.max-i,e.min)),tt(0,1,n)}function Aa(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const je=.35;function La(t=je){return t===!1?t=0:t===!0&&(t=je),{x:Bn(t,"left","right"),y:Bn(t,"top","bottom")}}function Bn(t,e,n){return{min:zn(t,e),max:zn(t,n)}}function zn(t,e){return typeof t=="number"?t:t[e]||0}const On=()=>({translate:0,scale:1,origin:0,originPoint:0}),kt=()=>({x:On(),y:On()}),In=()=>({min:0,max:0}),j=()=>({x:In(),y:In()});function U(t){return[t("x"),t("y")]}function xi({top:t,left:e,right:n,bottom:s}){return{x:{min:e,max:n},y:{min:t,max:s}}}function Da({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Ra(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),s=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function be(t){return t===void 0||t===1}function Ee({scale:t,scaleX:e,scaleY:n}){return!be(t)||!be(e)||!be(n)}function rt(t){return Ee(t)||vi(t)||t.z||t.rotate||t.rotateX||t.rotateY}function vi(t){return Hn(t.x)||Hn(t.y)}function Hn(t){return t&&t!=="0%"}function te(t,e,n){const s=t-n,i=e*s;return n+i}function qn(t,e,n,s,i){return i!==void 0&&(t=te(t,i,s)),te(t,n,s)+e}function Fe(t,e=0,n=1,s,i){t.min=qn(t.min,e,n,s,i),t.max=qn(t.max,e,n,s,i)}function Mi(t,{x:e,y:n}){Fe(t.x,e.translate,e.scale,e.originPoint),Fe(t.y,n.translate,n.scale,n.originPoint)}function ja(t,e,n,s=!1){const i=n.length;if(!i)return;e.x=e.y=1;let o,r;for(let a=0;a<i;a++){o=n[a],r=o.projectionDelta;const c=o.instance;c&&c.style&&c.style.display==="contents"||(s&&o.options.layoutScroll&&o.scroll&&o!==o.root&&xt(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,Mi(t,r)),s&&rt(o.latestValues)&&xt(t,o.latestValues))}e.x=Un(e.x),e.y=Un(e.y)}function Un(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Q(t,e){t.min=t.min+e,t.max=t.max+e}function Nn(t,e,[n,s,i]){const o=e[i]!==void 0?e[i]:.5,r=D(t.min,t.max,o);Fe(t,e[n],e[s],r,e.scale)}const Ea=["x","scaleX","originX"],Fa=["y","scaleY","originY"];function xt(t,e){Nn(t.x,e,Ea),Nn(t.y,e,Fa)}function bi(t,e){return xi(Ra(t.getBoundingClientRect(),e))}function Ba(t,e,n){const s=bi(t,n),{scroll:i}=e;return i&&(Q(s.x,i.offset.x),Q(s.y,i.offset.y)),s}const wi=({current:t})=>t?t.ownerDocument.defaultView:null,za=new WeakMap;class Oa{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=j(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:u}=this.getProps();u?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(le(h,"page").point)},o=(h,u)=>{const{drag:f,dragPropagation:p,onDragStart:y}=this.getProps();if(f&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=zs(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),U(v=>{let b=this.getAxisMotionValue(v).get()||0;if(W.test(b)){const{projection:x}=this.visualElement;if(x&&x.layout){const g=x.layout.layoutBox[v];g&&(b=I(g)*(parseFloat(b)/100))}}this.originPoint[v]=b}),y&&V.update(()=>y(h,u),!1,!0);const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},r=(h,u)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:y,onDrag:m}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:v}=u;if(p&&this.currentDirection===null){this.currentDirection=Ia(v),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",u.point,v),this.updateAxis("y",u.point,v),this.visualElement.render(),m&&m(h,u)},a=(h,u)=>this.stop(h,u),c=()=>U(h=>{var u;return this.getAnimationState(h)==="paused"&&((u=this.getAxisMotionValue(h).animation)===null||u===void 0?void 0:u.play())}),{dragSnapToOrigin:l}=this.getProps();this.panSession=new gi(e,{onSessionStart:i,onStart:o,onMove:r,onSessionEnd:a,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,contextWindow:wi(this.visualElement)})}stop(e,n){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&V.update(()=>o(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,s){const{drag:i}=this.getProps();if(!s||!Gt(e,i,this.currentDirection))return;const o=this.getAxisMotionValue(e);let r=this.originPoint[e]+s[e];this.constraints&&this.constraints[e]&&(r=Ca(r,this.constraints[e],this.elastic[e])),o.set(r)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:s}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,o=this.constraints;n&&mt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Ta(i.layoutBox,n):this.constraints=!1,this.elastic=La(s),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&U(r=>{this.getAxisMotionValue(r)&&(this.constraints[r]=Aa(i.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!mt(e))return!1;const s=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Ba(s,i.root,this.visualElement.getTransformPagePoint());let r=Va(i.layout.layoutBox,o);if(n){const a=n(Da(r));this.hasMutatedConstraints=!!a,a&&(r=xi(a))}return r}startAnimation(e){const{drag:n,dragMomentum:s,dragElastic:i,dragTransition:o,dragSnapToOrigin:r,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},l=U(h=>{if(!Gt(h,n,this.currentDirection))return;let u=c&&c[h]||{};r&&(u={min:0,max:0});const f=i?200:1e6,p=i?40:1e7,y={type:"inertia",velocity:s?e[h]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...u};return this.startAxisValueAnimation(h,y)});return Promise.all(l).then(a)}startAxisValueAnimation(e,n){const s=this.getAxisMotionValue(e);return s.start(nn(e,s,0,n))}stopAnimation(){U(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){U(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),s=this.visualElement.getProps(),i=s[n];return i||this.visualElement.getValue(e,(s.initial?s.initial[e]:void 0)||0)}snapToCursor(e){U(n=>{const{drag:s}=this.getProps();if(!Gt(n,s,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:r,max:a}=i.layout.layoutBox[n];o.set(e[n]-D(r,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!mt(n)||!s||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};U(r=>{const a=this.getAxisMotionValue(r);if(a){const c=a.get();i[r]=Sa({min:c,max:c},this.constraints[r])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),U(r=>{if(!Gt(r,e,null))return;const a=this.getAxisMotionValue(r),{min:c,max:l}=this.constraints[r];a.set(D(c,l,i[r]))})}addListeners(){if(!this.visualElement.current)return;za.set(this.visualElement,this);const e=this.visualElement.current,n=_(e,"pointerdown",c=>{const{drag:l,dragListener:h=!0}=this.getProps();l&&h&&this.start(c)}),s=()=>{const{dragConstraints:c}=this.getProps();mt(c)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",s);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),s();const r=K(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:l})=>{this.isDragging&&l&&(U(h=>{const u=this.getAxisMotionValue(h);u&&(this.originPoint[h]+=c[h].translate,u.set(u.get()+c[h].translate))}),this.visualElement.render())}));return()=>{r(),n(),o(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:r=je,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:s,dragPropagation:i,dragConstraints:o,dragElastic:r,dragMomentum:a}}}function Gt(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Ia(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Ha extends nt{constructor(e){super(e),this.removeGroupControls=R,this.removeListeners=R,this.controls=new Oa(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||R}unmount(){this.removeGroupControls(),this.removeListeners()}}const Wn=t=>(e,n)=>{t&&V.update(()=>t(e,n))};class qa extends nt{constructor(){super(...arguments),this.removePointerDownListener=R}onPointerDown(e){this.session=new gi(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:wi(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:s,onPanEnd:i}=this.node.getProps();return{onSessionStart:Wn(e),onStart:Wn(n),onMove:s,onEnd:(o,r)=>{delete this.session,i&&V.update(()=>i(o,r))}}}mount(){this.removePointerDownListener=_(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Ua(){const t=k.useContext(se);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:s}=t,i=k.useId();return k.useEffect(()=>s(i),[]),!e&&n?[!1,()=>n&&n(i)]:[!0]}const $t={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Gn(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ct={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(w.test(t))t=parseFloat(t);else return t;const n=Gn(t,e.target.x),s=Gn(t,e.target.y);return`${n}% ${s}%`}},Na={correct:(t,{treeScale:e,projectionDelta:n})=>{const s=t,i=et.parse(t);if(i.length>5)return s;const o=et.createTransformer(t),r=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,c=n.y.scale*e.y;i[0+r]/=a,i[1+r]/=c;const l=D(a,c,.5);return typeof i[2+r]=="number"&&(i[2+r]/=l),typeof i[3+r]=="number"&&(i[3+r]/=l),o(i)}};class Wa extends gs.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s,layoutId:i}=this.props,{projection:o}=e;Xi(Ga),o&&(n.group&&n.group.add(o),s&&s.register&&i&&s.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),$t.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:s,drag:i,isPresent:o}=this.props,r=s.projection;return r&&(r.isPresent=o,i||e.layoutDependency!==n||n===void 0?r.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?r.promote():r.relegate()||V.postRender(()=>{const a=r.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),s&&s.deregister&&s.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Pi(t){const[e,n]=Ua(),s=k.useContext(qe);return gs.createElement(Wa,{...t,layoutGroup:s,switchLayoutGroup:k.useContext(Ms),isPresent:e,safeToRemove:n})}const Ga={borderRadius:{...Ct,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ct,borderTopRightRadius:Ct,borderBottomLeftRadius:Ct,borderBottomRightRadius:Ct,boxShadow:Na},Ci=["TopLeft","TopRight","BottomLeft","BottomRight"],Za=Ci.length,Zn=t=>typeof t=="string"?parseFloat(t):t,$n=t=>typeof t=="number"||w.test(t);function $a(t,e,n,s,i,o){i?(t.opacity=D(0,n.opacity!==void 0?n.opacity:1,Ka(s)),t.opacityExit=D(e.opacity!==void 0?e.opacity:1,0,_a(s))):o&&(t.opacity=D(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,s));for(let r=0;r<Za;r++){const a=`border${Ci[r]}Radius`;let c=Kn(e,a),l=Kn(n,a);if(c===void 0&&l===void 0)continue;c||(c=0),l||(l=0),c===0||l===0||$n(c)===$n(l)?(t[a]=Math.max(D(Zn(c),Zn(l),s),0),(W.test(l)||W.test(c))&&(t[a]+="%")):t[a]=l}(e.rotate||n.rotate)&&(t.rotate=D(e.rotate||0,n.rotate||0,s))}function Kn(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Ka=Ti(0,.5,_s),_a=Ti(.5,.95,R);function Ti(t,e,n){return s=>s<t?0:s>e?1:n(Et(t,e,s))}function _n(t,e){t.min=e.min,t.max=e.max}function q(t,e){_n(t.x,e.x),_n(t.y,e.y)}function Xn(t,e,n,s,i){return t-=e,t=te(t,1/n,s),i!==void 0&&(t=te(t,1/i,s)),t}function Xa(t,e=0,n=1,s=.5,i,o=t,r=t){if(W.test(e)&&(e=parseFloat(e),e=D(r.min,r.max,e/100)-r.min),typeof e!="number")return;let a=D(o.min,o.max,s);t===o&&(a-=e),t.min=Xn(t.min,e,n,a,i),t.max=Xn(t.max,e,n,a,i)}function Yn(t,e,[n,s,i],o,r){Xa(t,e[n],e[s],e[i],e.scale,o,r)}const Ya=["x","scaleX","originX"],Qa=["y","scaleY","originY"];function Qn(t,e,n,s){Yn(t.x,e,Ya,n?n.x:void 0,s?s.x:void 0),Yn(t.y,e,Qa,n?n.y:void 0,s?s.y:void 0)}function Jn(t){return t.translate===0&&t.scale===1}function Vi(t){return Jn(t.x)&&Jn(t.y)}function Ja(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Si(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function ts(t){return I(t.x)/I(t.y)}class tc{constructor(){this.members=[]}add(e){sn(this.members,e),e.scheduleRender()}remove(e){if(rn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let s;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){s=o;break}}return s?(this.promote(s),!0):!1}promote(e,n){const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.instance&&s.scheduleRender(),e.scheduleRender(),e.resumeFrom=s,n&&(e.resumeFrom.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:s}=e;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function es(t,e,n){let s="";const i=t.x.translate/e.x,o=t.y.translate/e.y;if((i||o)&&(s=`translate3d(${i}px, ${o}px, 0) `),(e.x!==1||e.y!==1)&&(s+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:c,rotateX:l,rotateY:h}=n;c&&(s+=`rotate(${c}deg) `),l&&(s+=`rotateX(${l}deg) `),h&&(s+=`rotateY(${h}deg) `)}const r=t.x.scale*e.x,a=t.y.scale*e.y;return(r!==1||a!==1)&&(s+=`scale(${r}, ${a})`),s||"none"}const ec=(t,e)=>t.depth-e.depth;class nc{constructor(){this.children=[],this.isDirty=!1}add(e){sn(this.children,e),this.isDirty=!0}remove(e){rn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ec),this.isDirty=!1,this.children.forEach(e)}}function sc(t,e){const n=performance.now(),s=({timestamp:i})=>{const o=i-n;o>=e&&(Z(s),t(o-e))};return V.read(s,!0),()=>Z(s)}function ic(t){window.MotionDebug&&window.MotionDebug.record(t)}function rc(t){return t instanceof SVGElement&&t.tagName!=="svg"}function oc(t,e,n){const s=F(t)?t:ht(t);return s.start(nn("",s,e,n)),s.animation}const ns=["","X","Y","Z"],ac={visibility:"hidden"},ss=1e3;let cc=0;const ot={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Ai({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:s,resetTransform:i}){return class{constructor(r={},a=e==null?void 0:e()){this.id=cc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ot.totalNodes=ot.resolvedTargetDeltas=ot.recalculatedProjection=0,this.nodes.forEach(uc),this.nodes.forEach(mc),this.nodes.forEach(gc),this.nodes.forEach(dc),ic(ot)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new nc)}addEventListener(r,a){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new on),this.eventHandlers.get(r).add(a)}notifyListeners(r,...a){const c=this.eventHandlers.get(r);c&&c.notify(...a)}hasListeners(r){return this.eventHandlers.has(r)}mount(r,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=rc(r),this.instance=r;const{layoutId:c,layout:l,visualElement:h}=this.options;if(h&&!h.current&&h.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(l||c)&&(this.isLayoutDirty=!0),t){let u;const f=()=>this.root.updateBlockedByResize=!1;t(r,()=>{this.root.updateBlockedByResize=!0,u&&u(),u=sc(f,250),$t.hasAnimatedSinceResize&&($t.hasAnimatedSinceResize=!1,this.nodes.forEach(rs))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&h&&(c||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||h.getDefaultTransition()||bc,{onLayoutAnimationStart:v,onLayoutAnimationComplete:b}=h.getProps(),x=!this.targetLayout||!Si(this.targetLayout,y)||p,g=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||f&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(u,g);const M={...en(m,"layout"),onPlay:v,onComplete:b};(h.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else f||rs(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Z(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kc),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const u=this.path[h];u.shouldResetTransform=!0,u.updateScroll("snapshot"),u.options.layoutRoot&&u.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const l=this.getTransformTemplate();this.prevTransformTemplateValue=l?l(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(is);return}this.isUpdating||this.nodes.forEach(pc),this.isUpdating=!1,this.nodes.forEach(yc),this.nodes.forEach(lc),this.nodes.forEach(hc),this.clearAllSnapshots();const a=performance.now();E.delta=tt(0,1e3/60,a-E.timestamp),E.timestamp=a,E.isProcessing=!0,de.update.process(E),de.preRender.process(E),de.render.process(E),E.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(fc),this.sharedNodes.forEach(xc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,V.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){V.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutCorrected=j(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:r,isRoot:s(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const r=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Vi(this.projectionDelta),c=this.getTransformTemplate(),l=c?c(this.latestValues,""):void 0,h=l!==this.prevTransformTemplateValue;r&&(a||rt(this.latestValues)||h)&&(i(this.instance,l),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return r&&(c=this.removeTransform(c)),wc(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:r}=this.options;if(!r)return j();const a=r.measureViewportBox(),{scroll:c}=this.root;return c&&(Q(a.x,c.offset.x),Q(a.y,c.offset.y)),a}removeElementScroll(r){const a=j();q(a,r);for(let c=0;c<this.path.length;c++){const l=this.path[c],{scroll:h,options:u}=l;if(l!==this.root&&h&&u.layoutScroll){if(h.isRoot){q(a,r);const{scroll:f}=this.root;f&&(Q(a.x,-f.offset.x),Q(a.y,-f.offset.y))}Q(a.x,h.offset.x),Q(a.y,h.offset.y)}}return a}applyTransform(r,a=!1){const c=j();q(c,r);for(let l=0;l<this.path.length;l++){const h=this.path[l];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&xt(c,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),rt(h.latestValues)&&xt(c,h.latestValues)}return rt(this.latestValues)&&xt(c,this.latestValues),c}removeTransform(r){const a=j();q(a,r);for(let c=0;c<this.path.length;c++){const l=this.path[c];if(!l.instance||!rt(l.latestValues))continue;Ee(l.latestValues)&&l.updateSnapshot();const h=j(),u=l.measurePageBox();q(h,u),Qn(a,l.latestValues,l.snapshot?l.snapshot.layoutBox:void 0,h)}return rt(this.latestValues)&&Qn(a,this.latestValues),a}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==E.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){var a;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==c;if(!(r||l&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:u,layoutId:f}=this.options;if(!(!this.layout||!(u||f))){if(this.resolvedRelativeTargetAt=E.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=j(),this.relativeTargetOrigin=j(),Dt(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),q(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=j(),this.targetWithTransforms=j()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Pa(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):q(this.target,this.layout.layoutBox),Mi(this.target,this.targetDelta)):q(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=j(),this.relativeTargetOrigin=j(),Dt(this.relativeTargetOrigin,this.target,p.target),q(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ot.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ee(this.parent.latestValues)||vi(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var r;const a=this.getLead(),c=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||!((r=this.parent)===null||r===void 0)&&r.isProjectionDirty)&&(l=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===E.timestamp&&(l=!1),l)return;const{layout:h,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||u))return;q(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;ja(this.layoutCorrected,this.treeScale,this.path,c),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:y}=a;if(!y){this.projectionTransform&&(this.projectionDelta=kt(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=kt(),this.projectionDeltaWithTransform=kt());const m=this.projectionTransform;Lt(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=es(this.projectionDelta,this.treeScale),(this.projectionTransform!==m||this.treeScale.x!==f||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),ot.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),r){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(r,a=!1){const c=this.snapshot,l=c?c.latestValues:{},h={...this.latestValues},u=kt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=j(),p=c?c.source:void 0,y=this.layout?this.layout.source:void 0,m=p!==y,v=this.getStack(),b=!v||v.members.length<=1,x=!!(m&&!b&&this.options.crossfade===!0&&!this.path.some(Mc));this.animationProgress=0;let g;this.mixTargetDelta=M=>{const P=M/1e3;os(u.x,r.x,P),os(u.y,r.y,P),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Dt(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),vc(this.relativeTarget,this.relativeTargetOrigin,f,P),g&&Ja(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=j()),q(g,this.relativeTarget)),m&&(this.animationValues=h,$a(h,l,this.latestValues,P,x,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Z(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=V.update(()=>{$t.hasAnimatedSinceResize=!0,this.currentAnimation=oc(0,ss,{...r,onUpdate:a=>{this.mixTargetDelta(a),r.onUpdate&&r.onUpdate(a)},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ss),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:a,target:c,layout:l,latestValues:h}=r;if(!(!a||!c||!l)){if(this!==r&&this.layout&&l&&Li(this.options.animationType,this.layout.layoutBox,l.layoutBox)){c=this.target||j();const u=I(this.layout.layoutBox.x);c.x.min=r.target.x.min,c.x.max=c.x.min+u;const f=I(this.layout.layoutBox.y);c.y.min=r.target.y.min,c.y.max=c.y.min+f}q(a,c),xt(a,h),Lt(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(r,a){this.sharedNodes.has(r)||this.sharedNodes.set(r,new tc),this.sharedNodes.get(r).add(a);const l=a.options.initialPromotionConfig;a.promote({transition:l?l.transition:void 0,preserveFollowOpacity:l&&l.shouldPreserveFollowOpacity?l.shouldPreserveFollowOpacity(a):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){var r;const{layoutId:a}=this.options;return a?((r=this.getStack())===null||r===void 0?void 0:r.lead)||this:this}getPrevLead(){var r;const{layoutId:a}=this.options;return a?(r=this.getStack())===null||r===void 0?void 0:r.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:a,preserveFollowOpacity:c}={}){const l=this.getStack();l&&l.promote(this,c),r&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetRotation(){const{visualElement:r}=this.options;if(!r)return;let a=!1;const{latestValues:c}=r;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(a=!0),!a)return;const l={};for(let h=0;h<ns.length;h++){const u="rotate"+ns[h];c[u]&&(l[u]=c[u],r.setStaticValue(u,0))}r.render();for(const h in l)r.setStaticValue(h,l[h]);r.scheduleRender()}getProjectionStyles(r){var a,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ac;const l={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,l.opacity="",l.pointerEvents=Zt(r==null?void 0:r.pointerEvents)||"",l.transform=h?h(this.latestValues,""):"none",l;const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){const m={};return this.options.layoutId&&(m.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,m.pointerEvents=Zt(r==null?void 0:r.pointerEvents)||""),this.hasProjected&&!rt(this.latestValues)&&(m.transform=h?h({},""):"none",this.hasProjected=!1),m}const f=u.animationValues||u.latestValues;this.applyTransformsToTarget(),l.transform=es(this.projectionDeltaWithTransform,this.treeScale,f),h&&(l.transform=h(f,l.transform));const{x:p,y}=this.projectionDelta;l.transformOrigin=`${p.origin*100}% ${y.origin*100}% 0`,u.animationValues?l.opacity=u===this?(c=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:l.opacity=u===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const m in Kt){if(f[m]===void 0)continue;const{correct:v,applyTo:b}=Kt[m],x=l.transform==="none"?f[m]:v(f[m],u);if(b){const g=b.length;for(let M=0;M<g;M++)l[b[M]]=x}else l[m]=x}return this.options.layoutId&&(l.pointerEvents=u===this?Zt(r==null?void 0:r.pointerEvents)||"":"none"),l}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>{var a;return(a=r.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(is),this.root.sharedNodes.clear()}}}function lc(t){t.updateLayout()}function hc(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:i}=t.layout,{animationType:o}=t.options,r=n.source!==t.layout.source;o==="size"?U(u=>{const f=r?n.measuredBox[u]:n.layoutBox[u],p=I(f);f.min=s[u].min,f.max=f.min+p}):Li(o,n.layoutBox,s)&&U(u=>{const f=r?n.measuredBox[u]:n.layoutBox[u],p=I(s[u]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[u].max=t.relativeTarget[u].min+p)});const a=kt();Lt(a,s,n.layoutBox);const c=kt();r?Lt(c,t.applyTransform(i,!0),n.measuredBox):Lt(c,s,n.layoutBox);const l=!Vi(a);let h=!1;if(!t.resumeFrom){const u=t.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:f,layout:p}=u;if(f&&p){const y=j();Dt(y,n.layoutBox,f.layoutBox);const m=j();Dt(m,s,p.layoutBox),Si(y,m)||(h=!0),u.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=y,t.relativeParent=u)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:n,delta:c,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function uc(t){ot.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function dc(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function fc(t){t.clearSnapshot()}function is(t){t.clearMeasurements()}function pc(t){t.isLayoutDirty=!1}function yc(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function rs(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function mc(t){t.resolveTargetDelta()}function gc(t){t.calcProjection()}function kc(t){t.resetRotation()}function xc(t){t.removeLeadSnapshot()}function os(t,e,n){t.translate=D(e.translate,0,n),t.scale=D(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function as(t,e,n,s){t.min=D(e.min,n.min,s),t.max=D(e.max,n.max,s)}function vc(t,e,n,s){as(t.x,e.x,n.x,s),as(t.y,e.y,n.y,s)}function Mc(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const bc={duration:.45,ease:[.4,0,.1,1]},cs=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),ls=cs("applewebkit/")&&!cs("chrome/")?Math.round:R;function hs(t){t.min=ls(t.min),t.max=ls(t.max)}function wc(t){hs(t.x),hs(t.y)}function Li(t,e,n){return t==="position"||t==="preserve-aspect"&&!Re(ts(e),ts(n),.2)}const Pc=Ai({attachResizeListener:(t,e)=>K(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),we={current:void 0},Di=Ai({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!we.current){const t=new Pc({});t.mount(window),t.setOptions({layoutScroll:!0}),we.current=t}return we.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Cc={pan:{Feature:qa},drag:{Feature:Ha,ProjectionNode:Di,MeasureLayout:Pi}},Tc=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Vc(t){const e=Tc.exec(t);if(!e)return[,];const[,n,s]=e;return[n,s]}function Be(t,e,n=1){const[s,i]=Vc(t);if(!s)return;const o=window.getComputedStyle(e).getPropertyValue(s);if(o){const r=o.trim();return fi(r)?parseFloat(r):r}else return Ce(i)?Be(i,e,n+1):i}function Sc(t,{...e},n){const s=t.current;if(!(s instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(i=>{const o=i.get();if(!Ce(o))return;const r=Be(o,s);r&&i.set(r)});for(const i in e){const o=e[i];if(!Ce(o))continue;const r=Be(o,s);r&&(e[i]=r,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:e,transitionEnd:n}}const Ac=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ri=t=>Ac.has(t),Lc=t=>Object.keys(t).some(Ri),us=t=>t===dt||t===w,ds=(t,e)=>parseFloat(t.split(", ")[e]),fs=(t,e)=>(n,{transform:s})=>{if(s==="none"||!s)return 0;const i=s.match(/^matrix3d\((.+)\)$/);if(i)return ds(i[1],e);{const o=s.match(/^matrix\((.+)\)$/);return o?ds(o[1],t):0}},Dc=new Set(["x","y","z"]),Rc=zt.filter(t=>!Dc.has(t));function jc(t){const e=[];return Rc.forEach(n=>{const s=t.getValue(n);s!==void 0&&(e.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const vt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:fs(4,13),y:fs(5,14)};vt.translateX=vt.x;vt.translateY=vt.y;const Ec=(t,e,n)=>{const s=e.measureViewportBox(),i=e.current,o=getComputedStyle(i),{display:r}=o,a={};r==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(l=>{a[l]=vt[l](s,o)}),e.render();const c=e.measureViewportBox();return n.forEach(l=>{const h=e.getValue(l);h&&h.jump(a[l]),t[l]=vt[l](c,o)}),t},Fc=(t,e,n={},s={})=>{e={...e},s={...s};const i=Object.keys(e).filter(Ri);let o=[],r=!1;const a=[];if(i.forEach(c=>{const l=t.getValue(c);if(!t.hasValue(c))return;let h=n[c],u=Pt(h);const f=e[c];let p;if(Xt(f)){const y=f.length,m=f[0]===null?1:0;h=f[m],u=Pt(h);for(let v=m;v<y&&f[v]!==null;v++)p?_e(Pt(f[v])===p):p=Pt(f[v])}else p=Pt(f);if(u!==p)if(us(u)&&us(p)){const y=l.get();typeof y=="string"&&l.set(parseFloat(y)),typeof f=="string"?e[c]=parseFloat(f):Array.isArray(f)&&p===w&&(e[c]=f.map(parseFloat))}else u!=null&&u.transform&&(p!=null&&p.transform)&&(h===0||f===0)?h===0?l.set(p.transform(h)):e[c]=u.transform(f):(r||(o=jc(t),r=!0),a.push(c),s[c]=s[c]!==void 0?s[c]:e[c],l.jump(f))}),a.length){const c=a.indexOf("height")>=0?window.pageYOffset:null,l=Ec(e,t,a);return o.length&&o.forEach(([h,u])=>{t.getValue(h).set(u)}),t.render(),ie&&c!==null&&window.scrollTo({top:c}),{target:l,transitionEnd:s}}else return{target:e,transitionEnd:s}};function Bc(t,e,n,s){return Lc(e)?Fc(t,e,n,s):{target:e,transitionEnd:s}}const zc=(t,e,n,s)=>{const i=Sc(t,e,s);return e=i.target,s=i.transitionEnd,Bc(t,e,n,s)},ze={current:null},ji={current:!1};function Oc(){if(ji.current=!0,!!ie)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ze.current=t.matches;t.addListener(e),e()}else ze.current=!1}function Ic(t,e,n){const{willChange:s}=e;for(const i in e){const o=e[i],r=n[i];if(F(o))t.addValue(i,o),Jt(s)&&s.add(i);else if(F(r))t.addValue(i,ht(o,{owner:t})),Jt(s)&&s.remove(i);else if(r!==o)if(t.hasValue(i)){const a=t.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=t.getStaticValue(i);t.addValue(i,ht(a!==void 0?a:o,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const ps=new WeakMap,Ei=Object.keys(jt),Hc=Ei.length,ys=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],qc=He.length;class Uc{constructor({parent:e,props:n,presenceContext:s,reducedMotionConfig:i,visualState:o},r={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>V.render(this.render,!1,!0);const{latestValues:a,renderState:c}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=s,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=r,this.isControllingVariants=oe(n),this.isVariantNode=vs(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:l,...h}=this.scrapeMotionValuesFromProps(n,{});for(const u in h){const f=h[u];a[u]!==void 0&&F(f)&&(f.set(a[u],!1),Jt(l)&&l.add(u))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,ps.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),ji.current||Oc(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ze.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ps.delete(this.current),this.projection&&this.projection.unmount(),Z(this.notifyUpdate),Z(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const s=ut.has(e),i=n.on("change",r=>{this.latestValues[e]=r,this.props.onUpdate&&V.update(this.notifyUpdate,!1,!0),s&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{i(),o()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},s,i,o){let r,a;for(let c=0;c<Hc;c++){const l=Ei[c],{isEnabled:h,Feature:u,ProjectionNode:f,MeasureLayout:p}=jt[l];f&&(r=f),h(n)&&(!this.features[l]&&u&&(this.features[l]=new u(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&r){this.projection=new r(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:l,drag:h,dragConstraints:u,layoutScroll:f,layoutRoot:p}=n;this.projection.setOptions({layoutId:c,layout:l,alwaysMeasureLayout:!!h||u&&mt(u),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof l=="string"?l:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):j()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<ys.length;s++){const i=ys[s];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=e["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Ic(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const s=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(s.initial=this.props.initial),s}const n={};for(let s=0;s<qc;s++){const i=He[s],o=this.props[i];(Rt(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let s=this.values.get(e);return s===void 0&&n!==void 0&&(s=ht(n,{owner:this}),this.addValue(e,s)),s}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:s}=this.props,i=typeof s=="string"||typeof s=="object"?(n=Ke(this.props,s))===null||n===void 0?void 0:n[e]:void 0;if(s&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!F(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new on),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Fi extends Uc{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:s}){delete n[e],delete s[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...s},{transformValues:i},o){let r=ra(s,e||{},this);if(i&&(n&&(n=i(n)),s&&(s=i(s)),r&&(r=i(r))),o){sa(this,s,r);const a=zc(this,s,r,n);n=a.transitionEnd,s=a.target}return{transition:e,transitionEnd:n,...s}}}function Nc(t){return window.getComputedStyle(t)}class Wc extends Fi{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(ut.has(n)){const s=tn(n);return s&&s.default||0}else{const s=Nc(e),i=(Ps(n)?s.getPropertyValue(n):s[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return bi(e,n)}build(e,n,s,i){Ne(e,n,s,i.transformTemplate)}scrapeMotionValuesFromProps(e,n){return $e(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;F(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,s,i){Ls(e,n,s,i)}}class Gc extends Fi{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ut.has(n)){const s=tn(n);return s&&s.default||0}return n=Ds.has(n)?n:Oe(n),e.getAttribute(n)}measureInstanceViewportBox(){return j()}scrapeMotionValuesFromProps(e,n){return js(e,n)}build(e,n,s,i){Ge(e,n,s,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,s,i){Rs(e,n,s,i)}mount(e){this.isSVGTag=Ze(e.tagName),super.mount(e)}}const Zc=(t,e)=>Ue(t)?new Gc(e,{enableHardwareAcceleration:!1}):new Wc(e,{enableHardwareAcceleration:!0}),$c={layout:{ProjectionNode:Di,MeasureLayout:Pi}},Kc={...va,...Ir,...Cc,...$c},ul=Ki((t,e)=>Tr(t,e,Kc,Zc));function Bi(){const t=k.useRef(!1);return Bt(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function _c(){const t=Bi(),[e,n]=k.useState(0),s=k.useCallback(()=>{t.current&&n(e+1)},[e]);return[k.useCallback(()=>V.postRender(s),[s]),e]}class Xc extends k.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Yc({children:t,isPresent:e}){const n=k.useId(),s=k.useRef(null),i=k.useRef({width:0,height:0,top:0,left:0});return k.useInsertionEffect(()=>{const{width:o,height:r,top:a,left:c}=i.current;if(e||!s.current||!o||!r)return;s.current.dataset.motionPopId=n;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[e]),k.createElement(Xc,{isPresent:e,childRef:s,sizeRef:i},k.cloneElement(t,{ref:s}))}const Pe=({children:t,initial:e,isPresent:n,onExitComplete:s,custom:i,presenceAffectsLayout:o,mode:r})=>{const a=ce(Qc),c=k.useId(),l=k.useMemo(()=>({id:c,initial:e,isPresent:n,custom:i,onExitComplete:h=>{a.set(h,!0);for(const u of a.values())if(!u)return;s&&s()},register:h=>(a.set(h,!1),()=>a.delete(h))}),o?void 0:[n]);return k.useMemo(()=>{a.forEach((h,u)=>a.set(u,!1))},[n]),k.useEffect(()=>{!n&&!a.size&&s&&s()},[n]),r==="popLayout"&&(t=k.createElement(Yc,{isPresent:n},t)),k.createElement(se.Provider,{value:l},t)};function Qc(){return new Map}function Jc(t){return k.useEffect(()=>()=>t(),[])}const at=t=>t.key||"";function tl(t,e){t.forEach(n=>{const s=at(n);e.set(s,n)})}function el(t){const e=[];return k.Children.forEach(t,n=>{k.isValidElement(n)&&e.push(n)}),e}const dl=({children:t,custom:e,initial:n=!0,onExitComplete:s,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:r="sync"})=>{const a=k.useContext(qe).forceRender||_c()[0],c=Bi(),l=el(t);let h=l;const u=k.useRef(new Map).current,f=k.useRef(h),p=k.useRef(new Map).current,y=k.useRef(!0);if(Bt(()=>{y.current=!1,tl(l,p),f.current=h}),Jc(()=>{y.current=!0,p.clear(),u.clear()}),y.current)return k.createElement(k.Fragment,null,h.map(x=>k.createElement(Pe,{key:at(x),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:r},x)));h=[...h];const m=f.current.map(at),v=l.map(at),b=m.length;for(let x=0;x<b;x++){const g=m[x];v.indexOf(g)===-1&&!u.has(g)&&u.set(g,void 0)}return r==="wait"&&u.size&&(h=[]),u.forEach((x,g)=>{if(v.indexOf(g)!==-1)return;const M=p.get(g);if(!M)return;const P=m.indexOf(g);let S=x;if(!S){const A=()=>{u.delete(g);const C=Array.from(p.keys()).filter(T=>!v.includes(T));if(C.forEach(T=>p.delete(T)),f.current=l.filter(T=>{const H=at(T);return H===g||C.includes(H)}),!u.size){if(c.current===!1)return;a(),s&&s()}};S=k.createElement(Pe,{key:at(M),isPresent:!1,onExitComplete:A,custom:e,presenceAffectsLayout:o,mode:r},M),u.set(g,S)}h.splice(P,0,S)}),h=h.map(x=>{const g=x.key;return u.has(g)?x:k.createElement(Pe,{key:at(x),isPresent:!0,presenceAffectsLayout:o,mode:r},x)}),k.createElement(k.Fragment,null,u.size?h:h.map(x=>k.cloneElement(x)))};function zi(t){const e=ce(()=>ht(t)),{isStatic:n}=k.useContext(ee);if(n){const[,s]=k.useState(t);k.useEffect(()=>e.on("change",s),[])}return e}const nl=t=>t&&typeof t=="object"&&t.mix,sl=t=>nl(t)?t.mix:void 0;function il(...t){const e=!Array.isArray(t[0]),n=e?0:-1,s=t[0+n],i=t[1+n],o=t[2+n],r=t[3+n],a=Je(i,o,{mixer:sl(o[0]),...r});return e?a(s):a}function an(t,e){const n=zi(e()),s=()=>n.set(e());return s(),Bt(()=>{const i=()=>V.update(s,!1,!0),o=t.map(r=>r.on("change",i));return()=>{o.forEach(r=>r()),Z(s)}}),n}function rl(t){At.current=[],t();const e=an(At.current,t);return At.current=void 0,e}function fl(t,e,n,s){if(typeof t=="function")return rl(t);const i=typeof e=="function"?e:il(e,n,s);return Array.isArray(t)?ms(t,i):ms([t],([o])=>i(o))}function ms(t,e){const n=ce(()=>[]);return an(t,()=>{n.length=0;const s=t.length;for(let i=0;i<s;i++)n[i]=t[i].get();return e(n)})}function pl(t,...e){const n=t.length;function s(){let i="";for(let o=0;o<n;o++){i+=t[o];const r=e[o];r&&(i+=F(r)?r.get():r)}return i}return an(e.filter(F),s)}function yl(t,e={}){const{isStatic:n}=k.useContext(ee),s=k.useRef(null),i=zi(F(t)?t.get():t),o=()=>{s.current&&s.current.stop()};return k.useInsertionEffect(()=>i.attach((r,a)=>{if(n)return a(r);if(o(),s.current=Ft({keyframes:[i.get(),r],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:a}),!E.isProcessing){const c=performance.now()-E.timestamp;c<30&&(s.current.time=G(c))}return i.get()},o),[JSON.stringify(e)]),Bt(()=>{if(F(t))return t.on("change",r=>i.set(parseFloat(r)))},[i]),i}/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ol={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),d=(t,e)=>{const n=k.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:a="",children:c,...l},h)=>k.createElement("svg",{ref:h,...ol,width:i,height:i,stroke:s,strokeWidth:r?Number(o)*24/Number(i):o,className:["lucide",`lucide-${al(t)}`,a].join(" "),...l},[...e.map(([u,f])=>k.createElement(u,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=d("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=d("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=d("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=d("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"14.31",x2:"20.05",y1:"8",y2:"17.94",key:"jdes2e"}],["line",{x1:"9.69",x2:"21.17",y1:"8",y2:"8",key:"1gubuk"}],["line",{x1:"7.38",x2:"13.12",y1:"12",y2:"2.06",key:"1m4d1n"}],["line",{x1:"9.69",x2:"3.95",y1:"16",y2:"6.06",key:"1wye2p"}],["line",{x1:"14.31",x2:"2.83",y1:"16",y2:"16",key:"1l9f4x"}],["line",{x1:"16.62",x2:"10.88",y1:"12",y2:"21.94",key:"1jjvfs"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=d("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=d("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=d("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=d("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=d("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=d("ArrowRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=d("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=d("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=d("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=d("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=d("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=d("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=d("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=d("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=d("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=d("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=d("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=d("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=d("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=d("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=d("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=d("CalendarCheck2",[["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=d("CalendarCheck",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=d("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=d("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=d("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=d("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=d("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=d("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=d("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=d("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=d("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=d("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=d("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=d("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=d("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=d("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=d("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=d("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=d("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=d("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=d("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=d("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=d("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=d("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=d("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=d("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=d("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=d("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=d("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=d("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=d("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=d("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=d("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=d("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=d("FileImage",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["circle",{cx:"10",cy:"13",r:"2",key:"6v46hv"}],["path",{d:"m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22",key:"17vly1"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=d("FileSpreadsheet",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=d("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=d("FileType",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=d("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=d("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=d("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=d("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=d("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=d("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=d("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=d("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=d("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=d("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=d("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=d("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=d("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=d("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=d("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=d("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=d("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=d("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=d("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=d("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=d("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=d("KanbanSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=d("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=d("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=d("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=d("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=d("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=d("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=d("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=d("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=d("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=d("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=d("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=d("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=d("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=d("Meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=d("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=d("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=d("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=d("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=d("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=d("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=d("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=d("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=d("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=d("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=d("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=d("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=d("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=d("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=d("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=d("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=d("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=d("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=d("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=d("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=d("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=d("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=d("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=d("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=d("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=d("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=d("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=d("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=d("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=d("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=d("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=d("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=d("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",key:"wqdwcb"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17V7",key:"pyj7ub"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=d("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=d("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=d("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=d("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=d("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=d("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=d("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=d("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=d("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=d("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=d("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=d("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=d("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=d("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=d("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=d("Siren",[["path",{d:"M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z",key:"rmc51c"}],["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z",key:"yyvmjy"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=d("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=d("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=d("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=d("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=d("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=d("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=d("StickyNote",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M15 3v6h6",key:"edgan2"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=d("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=d("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=d("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=d("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=d("TableProperties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=d("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=d("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=d("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=d("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=d("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=d("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=d("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=d("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=d("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=d("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=d("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=d("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=d("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=d("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=d("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=d("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=d("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=d("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=d("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=d("WifiOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 4.17-2.65",key:"11utq1"}],["path",{d:"M10.66 5c4.01-.36 8.14.9 11.34 3.76",key:"hxefdu"}],["path",{d:"M16.85 11.25a10 10 0 0 1 2.22 1.68",key:"q734kn"}],["path",{d:"M5 13a10 10 0 0 1 5.24-2.76",key:"piq4yl"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=d("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=d("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=d("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=d("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=d("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=d("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);export{ju as $,kl as A,El as B,hh as C,mh as D,kh as E,wh as F,Nu as G,Bh as H,Wh as I,du as J,yh as K,_l as L,yu as M,Eh as N,Xl as O,Bu as P,C1 as Q,Hu as R,Qu as S,Nh as T,S1 as U,Tl as V,E1 as W,B1 as X,Wu as Y,z1 as Z,Lu as _,dl as a,Vl as a$,su as a0,Qh as a1,zu as a2,Iu as a3,Ju as a4,eu as a5,Gl as a6,Ch as a7,zi as a8,fl as a9,Xu as aA,M1 as aB,v1 as aC,th as aD,Tu as aE,Eu as aF,Bl as aG,Vu as aH,Mu as aI,wl as aJ,cu as aK,c1 as aL,wu as aM,Su as aN,Nl as aO,Dl as aP,Yu as aQ,$h as aR,Xh as aS,gu as aT,yl as aU,pl as aV,Hh as aW,jh as aX,ku as aY,Kh as aZ,Yh as a_,V1 as aa,Jl as ab,Ql as ac,Cu as ad,fh as ae,A1 as af,xh as ag,vh as ah,R1 as ai,$u as aj,Pl as ak,pu as al,w1 as am,Rh as an,Uh as ao,iu as ap,vu as aq,L1 as ar,Ol as as,tu as at,Il as au,x1 as av,l1 as aw,_u as ax,h1 as ay,u1 as az,qu as b,p1 as b$,Th as b0,y1 as b1,lu as b2,ru as b3,P1 as b4,uu as b5,Mh as b6,mu as b7,Sh as b8,zh as b9,Zh as bA,eh as bB,k1 as bC,rh as bD,sh as bE,ih as bF,Au as bG,Gh as bH,Oh as bI,Fh as bJ,xu as bK,Fu as bL,hu as bM,Pu as bN,Du as bO,O1 as bP,n1 as bQ,Ah as bR,Ph as bS,gh as bT,Jh as bU,I1 as bV,nu as bW,lh as bX,vl as bY,fu as bZ,g1 as b_,bu as ba,ah as bb,Hl as bc,t1 as bd,i1 as be,ou as bf,Lh as bg,_h as bh,T1 as bi,Rl as bj,e1 as bk,au as bl,ch as bm,s1 as bn,Ou as bo,uh as bp,ql as bq,Al as br,m1 as bs,b1 as bt,zl as bu,jl as bv,xl as bw,Ru as bx,Gu as by,Ul as bz,o1 as c,Sl as c0,bl as c1,d1 as c2,Ll as c3,Dh as c4,Fl as c5,f1 as c6,Uu as c7,Ml as c8,bh as c9,$l as d,Yl as e,Ku as f,oh as g,Vh as h,j1 as i,F1 as j,Kl as k,ml as l,ul as m,ph as n,Zu as o,r1 as p,Ih as q,a1 as r,Zl as s,Cl as t,dh as u,Wl as v,D1 as w,gl as x,nh as y,qh as z};
