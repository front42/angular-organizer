"use strict";(self.webpackChunkangular_organizer=self.webpackChunkangular_organizer||[]).push([[461],{935:()=>{const te=globalThis;function Q(t){return(te.__Zone_symbol_prefix||"__zone_symbol__")+t}const ke=Object.getOwnPropertyDescriptor,Ne=Object.defineProperty,Ie=Object.getPrototypeOf,_t=Object.create,Et=Array.prototype.slice,Le="addEventListener",Me="removeEventListener",Ze=Q(Le),Ae=Q(Me),ae="true",le="false",ve=Q("");function je(t,r){return Zone.current.wrap(t,r)}function He(t,r,i,n,s){return Zone.current.scheduleMacroTask(t,r,i,n,s)}const H=Q,we=typeof window<"u",Te=we?window:void 0,J=we&&Te||globalThis;function xe(t,r){for(let i=t.length-1;i>=0;i--)"function"==typeof t[i]&&(t[i]=je(t[i],r+"_"+i));return t}function We(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const qe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Re=!("nw"in J)&&typeof J.process<"u"&&"[object process]"===J.process.toString(),Ve=!Re&&!qe&&!(!we||!Te.HTMLElement),Xe=typeof J.process<"u"&&"[object process]"===J.process.toString()&&!qe&&!(!we||!Te.HTMLElement),Ce={},yt=H("enable_beforeunload"),Ye=function(t){if(!(t=t||J.event))return;let r=Ce[t.type];r||(r=Ce[t.type]=H("ON_PROPERTY"+t.type));const i=this||t.target||J,n=i[r];let s;return Ve&&i===Te&&"error"===t.type?(s=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===s&&t.preventDefault()):(s=n&&n.apply(this,arguments),"beforeunload"===t.type&&J[yt]&&"string"==typeof s?t.returnValue=s:null!=s&&!s&&t.preventDefault()),s};function $e(t,r,i){let n=ke(t,r);if(!n&&i&&ke(i,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const s=H("on"+r+"patched");if(t.hasOwnProperty(s)&&t[s])return;delete n.writable,delete n.value;const u=n.get,g=n.set,y=r.slice(2);let k=Ce[y];k||(k=Ce[y]=H("ON_PROPERTY"+y)),n.set=function(C){let E=this;!E&&t===J&&(E=J),E&&("function"==typeof E[k]&&E.removeEventListener(y,Ye),g&&g.call(E,null),E[k]=C,"function"==typeof C&&E.addEventListener(y,Ye,!1))},n.get=function(){let C=this;if(!C&&t===J&&(C=J),!C)return null;const E=C[k];if(E)return E;if(u){let w=u.call(this);if(w)return n.set.call(this,w),"function"==typeof C.removeAttribute&&C.removeAttribute(r),w}return null},Ne(t,r,n),t[s]=!0}function Je(t,r,i){if(r)for(let n=0;n<r.length;n++)$e(t,"on"+r[n],i);else{const n=[];for(const s in t)"on"==s.slice(0,2)&&n.push(s);for(let s=0;s<n.length;s++)$e(t,n[s],i)}}const oe=H("originalInstance");function be(t){const r=J[t];if(!r)return;J[H(t)]=r,J[t]=function(){const s=xe(arguments,t);switch(s.length){case 0:this[oe]=new r;break;case 1:this[oe]=new r(s[0]);break;case 2:this[oe]=new r(s[0],s[1]);break;case 3:this[oe]=new r(s[0],s[1],s[2]);break;case 4:this[oe]=new r(s[0],s[1],s[2],s[3]);break;default:throw new Error("Arg list too long.")}},fe(J[t],r);const i=new r(function(){});let n;for(n in i)"XMLHttpRequest"===t&&"responseBlob"===n||function(s){"function"==typeof i[s]?J[t].prototype[s]=function(){return this[oe][s].apply(this[oe],arguments)}:Ne(J[t].prototype,s,{set:function(u){"function"==typeof u?(this[oe][s]=je(u,t+"."+s),fe(this[oe][s],u)):this[oe][s]=u},get:function(){return this[oe][s]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&(J[t][n]=r[n])}function ue(t,r,i){let n=t;for(;n&&!n.hasOwnProperty(r);)n=Ie(n);!n&&t[r]&&(n=t);const s=H(r);let u=null;if(n&&(!(u=n[s])||!n.hasOwnProperty(s))&&(u=n[s]=n[r],We(n&&ke(n,r)))){const y=i(u,s,r);n[r]=function(){return y(this,arguments)},fe(n[r],u)}return u}function mt(t,r,i){let n=null;function s(u){const g=u.data;return g.args[g.cbIdx]=function(){u.invoke.apply(this,arguments)},n.apply(g.target,g.args),u}n=ue(t,r,u=>function(g,y){const k=i(g,y);return k.cbIdx>=0&&"function"==typeof y[k.cbIdx]?He(k.name,y[k.cbIdx],k,s):u.apply(g,y)})}function fe(t,r){t[H("OriginalDelegate")]=r}let Ke=!1,Ge=!1;function kt(){if(Ke)return Ge;Ke=!0;try{const t=Te.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(Ge=!0)}catch{}return Ge}function Qe(t){return"function"==typeof t}function et(t){return"number"==typeof t}let ge=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){ge=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{ge=!1}const vt={useG:!0},ne={},tt={},nt=new RegExp("^"+ve+"(\\w+)(true|false)$"),rt=H("propagationStopped");function ot(t,r){const i=(r?r(t):t)+le,n=(r?r(t):t)+ae,s=ve+i,u=ve+n;ne[t]={},ne[t][le]=s,ne[t][ae]=u}function bt(t,r,i,n){const s=n&&n.add||Le,u=n&&n.rm||Me,g=n&&n.listeners||"eventListeners",y=n&&n.rmAll||"removeAllListeners",k=H(s),C="."+s+":",E="prependListener",w="."+E+":",j=function(v,h,V){if(v.isRemoved)return;const F=v.callback;let W;"object"==typeof F&&F.handleEvent&&(v.callback=m=>F.handleEvent(m),v.originalDelegate=F);try{v.invoke(v,h,[V])}catch(m){W=m}const B=v.options;return B&&"object"==typeof B&&B.once&&h[u].call(h,V.type,v.originalDelegate?v.originalDelegate:v.callback,B),W};function x(v,h,V){if(!(h=h||t.event))return;const F=v||h.target||t,W=F[ne[h.type][V?ae:le]];if(W){const B=[];if(1===W.length){const m=j(W[0],F,h);m&&B.push(m)}else{const m=W.slice();for(let X=0;X<m.length&&(!h||!0!==h[rt]);X++){const I=j(m[X],F,h);I&&B.push(I)}}if(1===B.length)throw B[0];for(let m=0;m<B.length;m++){const X=B[m];r.nativeScheduleMicroTask(()=>{throw X})}}}const q=function(v){return x(this,v,!1)},Y=function(v){return x(this,v,!0)};function ee(v,h){if(!v)return!1;let V=!0;h&&void 0!==h.useG&&(V=h.useG);const F=h&&h.vh;let W=!0;h&&void 0!==h.chkDup&&(W=h.chkDup);let B=!1;h&&void 0!==h.rt&&(B=h.rt);let m=v;for(;m&&!m.hasOwnProperty(s);)m=Ie(m);if(!m&&v[s]&&(m=v),!m||m[k])return!1;const X=h&&h.eventNameToString,I={},R=m[k]=m[s],b=m[H(u)]=m[u],S=m[H(g)]=m[g],K=m[H(y)]=m[y];let $;h&&h.prepend&&($=m[H(h.prepend)]=m[h.prepend]);const N=V?function(o){if(!I.isExisting)return R.call(I.target,I.eventName,I.capture?Y:q,I.options)}:function(o){return R.call(I.target,I.eventName,o.invoke,I.options)},D=V?function(o){if(!o.isRemoved){const f=ne[o.eventName];let p;f&&(p=f[o.capture?ae:le]);const P=p&&o.target[p];if(P)for(let T=0;T<P.length;T++)if(P[T]===o){P.splice(T,1),o.isRemoved=!0,o.removeAbortListener&&(o.removeAbortListener(),o.removeAbortListener=null),0===P.length&&(o.allRemoved=!0,o.target[p]=null);break}}if(o.allRemoved)return b.call(o.target,o.eventName,o.capture?Y:q,o.options)}:function(o){return b.call(o.target,o.eventName,o.invoke,o.options)},he=h&&h.diff?h.diff:function(o,f){const p=typeof f;return"function"===p&&o.callback===f||"object"===p&&o.originalDelegate===f},se=Zone[H("UNPATCHED_EVENTS")],me=t[H("PASSIVE_EVENTS")],a=function(o,f,p,P,T=!1,L=!1){return function(){const M=this||t;let Z=arguments[0];h&&h.transferEventName&&(Z=h.transferEventName(Z));let z=arguments[1];if(!z)return o.apply(this,arguments);if(Re&&"uncaughtException"===Z)return o.apply(this,arguments);let U=!1;if("function"!=typeof z){if(!z.handleEvent)return o.apply(this,arguments);U=!0}if(F&&!F(o,z,M,arguments))return;const de=ge&&!!me&&-1!==me.indexOf(Z),re=function l(o){if("object"==typeof o&&null!==o){const f={...o};return o.signal&&(f.signal=o.signal),f}return o}(function A(o,f){return!ge&&"object"==typeof o&&o?!!o.capture:ge&&f?"boolean"==typeof o?{capture:o,passive:!0}:o?"object"==typeof o&&!1!==o.passive?{...o,passive:!0}:o:{passive:!0}:o}(arguments[2],de)),_e=null==re?void 0:re.signal;if(null!=_e&&_e.aborted)return;if(se)for(let ce=0;ce<se.length;ce++)if(Z===se[ce])return de?o.call(M,Z,z,re):o.apply(this,arguments);const Be=!!re&&("boolean"==typeof re||re.capture),lt=!(!re||"object"!=typeof re)&&re.once,At=Zone.current;let ze=ne[Z];ze||(ot(Z,X),ze=ne[Z]);const ut=ze[Be?ae:le];let Se,pe=M[ut],ft=!1;if(pe){if(ft=!0,W)for(let ce=0;ce<pe.length;ce++)if(he(pe[ce],z))return}else pe=M[ut]=[];const ht=M.constructor.name,dt=tt[ht];dt&&(Se=dt[Z]),Se||(Se=ht+f+(X?X(Z):Z)),I.options=re,lt&&(I.options.once=!1),I.target=M,I.capture=Be,I.eventName=Z,I.isExisting=ft;const Pe=V?vt:void 0;Pe&&(Pe.taskData=I),_e&&(I.options.signal=void 0);const ie=At.scheduleEventTask(Se,z,Pe,p,P);if(_e){I.options.signal=_e;const ce=()=>ie.zone.cancelTask(ie);o.call(_e,"abort",ce,{once:!0}),ie.removeAbortListener=()=>_e.removeEventListener("abort",ce)}return I.target=null,Pe&&(Pe.taskData=null),lt&&(I.options.once=!0),!ge&&"boolean"==typeof ie.options||(ie.options=re),ie.target=M,ie.capture=Be,ie.eventName=Z,U&&(ie.originalDelegate=z),L?pe.unshift(ie):pe.push(ie),T?M:void 0}};return m[s]=a(R,C,N,D,B),$&&(m[E]=a($,w,function(o){return $.call(I.target,I.eventName,o.invoke,I.options)},D,B,!0)),m[u]=function(){const o=this||t;let f=arguments[0];h&&h.transferEventName&&(f=h.transferEventName(f));const p=arguments[2],P=!!p&&("boolean"==typeof p||p.capture),T=arguments[1];if(!T)return b.apply(this,arguments);if(F&&!F(b,T,o,arguments))return;const L=ne[f];let M;L&&(M=L[P?ae:le]);const Z=M&&o[M];if(Z)for(let z=0;z<Z.length;z++){const U=Z[z];if(he(U,T))return Z.splice(z,1),U.isRemoved=!0,0!==Z.length||(U.allRemoved=!0,o[M]=null,P||"string"!=typeof f)||(o[ve+"ON_PROPERTY"+f]=null),U.zone.cancelTask(U),B?o:void 0}return b.apply(this,arguments)},m[g]=function(){const o=this||t;let f=arguments[0];h&&h.transferEventName&&(f=h.transferEventName(f));const p=[],P=st(o,X?X(f):f);for(let T=0;T<P.length;T++){const L=P[T];p.push(L.originalDelegate?L.originalDelegate:L.callback)}return p},m[y]=function(){const o=this||t;let f=arguments[0];if(f){h&&h.transferEventName&&(f=h.transferEventName(f));const p=ne[f];if(p){const L=o[p[le]],M=o[p[ae]];if(L){const Z=L.slice();for(let z=0;z<Z.length;z++){const U=Z[z];this[u].call(this,f,U.originalDelegate?U.originalDelegate:U.callback,U.options)}}if(M){const Z=M.slice();for(let z=0;z<Z.length;z++){const U=Z[z];this[u].call(this,f,U.originalDelegate?U.originalDelegate:U.callback,U.options)}}}}else{const p=Object.keys(o);for(let P=0;P<p.length;P++){const L=nt.exec(p[P]);let M=L&&L[1];M&&"removeListener"!==M&&this[y].call(this,M)}this[y].call(this,"removeListener")}if(B)return this},fe(m[s],R),fe(m[u],b),K&&fe(m[y],K),S&&fe(m[g],S),!0}let G=[];for(let v=0;v<i.length;v++)G[v]=ee(i[v],n);return G}function st(t,r){if(!r){const u=[];for(let g in t){const y=nt.exec(g);let k=y&&y[1];if(k&&(!r||k===r)){const C=t[g];if(C)for(let E=0;E<C.length;E++)u.push(C[E])}}return u}let i=ne[r];i||(ot(r),i=ne[r]);const n=t[i[le]],s=t[i[ae]];return n?s?n.concat(s):n.slice():s?s.slice():[]}function Pt(t,r){const i=t.Event;i&&i.prototype&&r.patchMethod(i.prototype,"stopImmediatePropagation",n=>function(s,u){s[rt]=!0,n&&n.apply(s,u)})}const De=H("zoneTask");function ye(t,r,i,n){let s=null,u=null;i+=n;const g={};function y(C){const E=C.data;E.args[0]=function(){return C.invoke.apply(this,arguments)};const w=s.apply(t,E.args);return et(w)?E.handleId=w:(E.handle=w,E.isRefreshable=Qe(w.refresh)),C}function k(C){const{handle:E,handleId:w}=C.data;return u.call(t,null!=E?E:w)}s=ue(t,r+=n,C=>function(E,w){if(Qe(w[0])){var j;const x={isRefreshable:!1,isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?w[1]||0:void 0,args:w},q=w[0];w[0]=function(){try{return q.apply(this,arguments)}finally{const{handle:F,handleId:W,isPeriodic:B,isRefreshable:m}=x;!B&&!m&&(W?delete g[W]:F&&(F[De]=null))}};const Y=He(r,w[0],x,y,k);if(!Y)return Y;const{handleId:ee,handle:G,isRefreshable:v,isPeriodic:h}=Y.data;if(ee)g[ee]=Y;else if(G&&(G[De]=Y,v&&!h)){const V=G.refresh;G.refresh=function(){const{zone:F,state:W}=Y;return"notScheduled"===W?(Y._state="scheduled",F._updateTaskCount(Y,1)):"running"===W&&(Y._state="scheduling"),V.call(this)}}return null!==(j=null!=G?G:ee)&&void 0!==j?j:Y}return C.apply(t,w)}),u=ue(t,i,C=>function(E,w){var j;const x=w[0];let q;et(x)?(q=g[x],delete g[x]):(q=null==x?void 0:x[De],q?x[De]=null:q=x),null!==(j=q)&&void 0!==j&&j.type?q.cancelFn&&q.zone.cancelTask(q):C.apply(t,w)})}function it(t,r,i){if(!i||0===i.length)return r;const n=i.filter(u=>u.target===t);if(!n||0===n.length)return r;const s=n[0].ignoreProperties;return r.filter(u=>-1===s.indexOf(u))}function ct(t,r,i,n){t&&Je(t,it(t,r,i),n)}function Fe(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Lt(t,r,i,n,s){const u=Zone.__symbol__(n);if(r[u])return;const g=r[u]=r[n];r[n]=function(y,k,C){return k&&k.prototype&&s.forEach(function(E){const w="".concat(i,".").concat(n,"::")+E,j=k.prototype;try{if(j.hasOwnProperty(E)){const x=t.ObjectGetOwnPropertyDescriptor(j,E);x&&x.value?(x.value=t.wrapWithCurrentZone(x.value,w),t._redefineProperty(k.prototype,E,x)):j[E]&&(j[E]=t.wrapWithCurrentZone(j[E],w))}else j[E]&&(j[E]=t.wrapWithCurrentZone(j[E],w))}catch{}}),g.call(r,y,k,C)},t.attachOriginToPatched(r[n],g)}const at=function Oe(){var r;const i=globalThis,n=!0===i[Q("forceDuplicateZoneCheck")];if(i.Zone&&(n||"function"!=typeof i.Zone.__symbol__))throw new Error("Zone already loaded.");return null!==(r=i.Zone)&&void 0!==r||(i.Zone=function Ue(){const t=te.performance;function r(A){t&&t.mark&&t.mark(A)}function i(A,_){t&&t.measure&&t.measure(A,_)}r("Zone");let n=(()=>{class _{static assertZonePatched(){if(te.Promise!==I.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=_.current;for(;e.parent;)e=e.parent;return e}static get current(){return b.zone}static get currentTask(){return S}static __load_patch(e,d,O=!1){if(I.hasOwnProperty(e)){const N=!0===te[Q("forceDuplicateZoneCheck")];if(!O&&N)throw Error("Already loaded patch: "+e)}else if(!te["__Zone_disable_"+e]){const N="Zone:"+e;r(N),I[e]=d(te,_,R),i(N,N)}}get parent(){return this._parent}get name(){return this._name}constructor(e,d){this._parent=e,this._name=d?d.name||"unnamed":"<root>",this._properties=d&&d.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,d)}get(e){const d=this.getZoneWith(e);if(d)return d._properties[e]}getZoneWith(e){let d=this;for(;d;){if(d._properties.hasOwnProperty(e))return d;d=d._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,d){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const O=this._zoneDelegate.intercept(this,e,d),N=this;return function(){return N.runGuarded(O,this,arguments,d)}}run(e,d,O,N){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,e,d,O,N)}finally{b=b.parent}}runGuarded(e,d=null,O,N){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,e,d,O,N)}catch(D){if(this._zoneDelegate.handleError(this,D))throw D}}finally{b=b.parent}}runTask(e,d,O){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||ee).name+"; Execution: "+this.name+")");const N=e,{type:D,data:{isPeriodic:Ee=!1,isRefreshable:he=!1}={}}=e;if(e.state===G&&(D===X||D===m))return;const se=e.state!=V;se&&N._transitionTo(V,h);const me=S;S=N,b={parent:b,zone:this};try{D==m&&e.data&&!Ee&&!he&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,N,d,O)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{const l=e.state;if(l!==G&&l!==W)if(D==X||Ee||he&&l===v)se&&N._transitionTo(h,V,v);else{const a=N._zoneDelegates;this._updateTaskCount(N,-1),se&&N._transitionTo(G,V,G),he&&(N._zoneDelegates=a)}b=b.parent,S=me}}scheduleTask(e){if(e.zone&&e.zone!==this){let O=this;for(;O;){if(O===e.zone)throw Error("can not reschedule task to ".concat(this.name," which is descendants of the original zone ").concat(e.zone.name));O=O.parent}}e._transitionTo(v,G);const d=[];e._zoneDelegates=d,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(O){throw e._transitionTo(W,v,G),this._zoneDelegate.handleError(this,O),O}return e._zoneDelegates===d&&this._updateTaskCount(e,1),e.state==v&&e._transitionTo(h,v),e}scheduleMicroTask(e,d,O,N){return this.scheduleTask(new g(B,e,d,O,N,void 0))}scheduleMacroTask(e,d,O,N,D){return this.scheduleTask(new g(m,e,d,O,N,D))}scheduleEventTask(e,d,O,N,D){return this.scheduleTask(new g(X,e,d,O,N,D))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||ee).name+"; Execution: "+this.name+")");if(e.state===h||e.state===V){e._transitionTo(F,h,V);try{this._zoneDelegate.cancelTask(this,e)}catch(d){throw e._transitionTo(W,F),this._zoneDelegate.handleError(this,d),d}return this._updateTaskCount(e,-1),e._transitionTo(G,F),e.runCount=-1,e}}_updateTaskCount(e,d){const O=e._zoneDelegates;-1==d&&(e._zoneDelegates=null);for(let N=0;N<O.length;N++)O[N]._updateTaskCount(e.type,d)}}return _.__symbol__=Q,_})();const s={name:"",onHasTask:(A,_,c,e)=>A.hasTask(c,e),onScheduleTask:(A,_,c,e)=>A.scheduleTask(c,e),onInvokeTask:(A,_,c,e,d,O)=>A.invokeTask(c,e,d,O),onCancelTask:(A,_,c,e)=>A.cancelTask(c,e)};class u{get zone(){return this._zone}constructor(_,c,e){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=_,this._parentDelegate=c,this._forkZS=e&&(e&&e.onFork?e:c._forkZS),this._forkDlgt=e&&(e.onFork?c:c._forkDlgt),this._forkCurrZone=e&&(e.onFork?this._zone:c._forkCurrZone),this._interceptZS=e&&(e.onIntercept?e:c._interceptZS),this._interceptDlgt=e&&(e.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=e&&(e.onIntercept?this._zone:c._interceptCurrZone),this._invokeZS=e&&(e.onInvoke?e:c._invokeZS),this._invokeDlgt=e&&(e.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=e&&(e.onInvoke?this._zone:c._invokeCurrZone),this._handleErrorZS=e&&(e.onHandleError?e:c._handleErrorZS),this._handleErrorDlgt=e&&(e.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=e&&(e.onHandleError?this._zone:c._handleErrorCurrZone),this._scheduleTaskZS=e&&(e.onScheduleTask?e:c._scheduleTaskZS),this._scheduleTaskDlgt=e&&(e.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=e&&(e.onScheduleTask?this._zone:c._scheduleTaskCurrZone),this._invokeTaskZS=e&&(e.onInvokeTask?e:c._invokeTaskZS),this._invokeTaskDlgt=e&&(e.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=e&&(e.onInvokeTask?this._zone:c._invokeTaskCurrZone),this._cancelTaskZS=e&&(e.onCancelTask?e:c._cancelTaskZS),this._cancelTaskDlgt=e&&(e.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=e&&(e.onCancelTask?this._zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const d=e&&e.onHasTask;(d||c&&c._hasTaskZS)&&(this._hasTaskZS=d?e:s,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,e.onScheduleTask||(this._scheduleTaskZS=s,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this._zone),e.onInvokeTask||(this._invokeTaskZS=s,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this._zone),e.onCancelTask||(this._cancelTaskZS=s,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this._zone))}fork(_,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,_,c):new n(_,c)}intercept(_,c,e){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,_,c,e):c}invoke(_,c,e,d,O){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,_,c,e,d,O):c.apply(e,d)}handleError(_,c){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,_,c)}scheduleTask(_,c){let e=c;if(this._scheduleTaskZS)this._hasTaskZS&&e._zoneDelegates.push(this._hasTaskDlgtOwner),e=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,_,c),e||(e=c);else if(c.scheduleFn)c.scheduleFn(c);else{if(c.type!=B)throw new Error("Task is missing scheduleFn.");q(c)}return e}invokeTask(_,c,e,d){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,_,c,e,d):c.callback.apply(e,d)}cancelTask(_,c){let e;if(this._cancelTaskZS)e=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,_,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");e=c.cancelFn(c)}return e}hasTask(_,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,_,c)}catch(e){this.handleError(_,e)}}_updateTaskCount(_,c){const e=this._taskCounts,d=e[_],O=e[_]=d+c;if(O<0)throw new Error("More tasks executed then were scheduled.");0!=d&&0!=O||this.hasTask(this._zone,{microTask:e.microTask>0,macroTask:e.macroTask>0,eventTask:e.eventTask>0,change:_})}}class g{constructor(_,c,e,d,O,N){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=_,this.source=c,this.data=d,this.scheduleFn=O,this.cancelFn=N,!e)throw new Error("callback is not defined");this.callback=e;const D=this;this.invoke=_===X&&d&&d.useG?g.invokeTask:function(){return g.invokeTask.call(te,D,this,arguments)}}static invokeTask(_,c,e){_||(_=this),K++;try{return _.runCount++,_.zone.runTask(_,c,e)}finally{1==K&&Y(),K--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(G,v)}_transitionTo(_,c,e){if(this._state!==c&&this._state!==e)throw new Error("".concat(this.type," '").concat(this.source,"': can not transition to '").concat(_,"', expecting state '").concat(c,"'").concat(e?" or '"+e+"'":"",", was '").concat(this._state,"'."));this._state=_,_==G&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const y=Q("setTimeout"),k=Q("Promise"),C=Q("then");let j,E=[],w=!1;function x(A){if(j||te[k]&&(j=te[k].resolve(0)),j){let _=j[C];_||(_=j.then),_.call(j,A)}else te[y](A,0)}function q(A){0===K&&0===E.length&&x(Y),A&&E.push(A)}function Y(){if(!w){for(w=!0;E.length;){const A=E;E=[];for(let _=0;_<A.length;_++){const c=A[_];try{c.zone.runTask(c,null,null)}catch(e){R.onUnhandledError(e)}}}R.microtaskDrainDone(),w=!1}}const ee={name:"NO ZONE"},G="notScheduled",v="scheduling",h="scheduled",V="running",F="canceling",W="unknown",B="microTask",m="macroTask",X="eventTask",I={},R={symbol:Q,currentZoneFrame:()=>b,onUnhandledError:$,microtaskDrainDone:$,scheduleMicroTask:q,showUncaughtError:()=>!n[Q("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:$,patchMethod:()=>$,bindArguments:()=>[],patchThen:()=>$,patchMacroTask:()=>$,patchEventPrototype:()=>$,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>$,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>$,wrapWithCurrentZone:()=>$,filterProperties:()=>[],attachOriginToPatched:()=>$,_redefineProperty:()=>$,patchCallbacks:()=>$,nativeScheduleMicroTask:x};let b={parent:null,zone:new n(null,null)},S=null,K=0;function $(){}return i("Zone","Zone"),n}()),i.Zone}();(function Zt(t){(function Nt(t){t.__load_patch("ZoneAwarePromise",(r,i,n)=>{const s=Object.getOwnPropertyDescriptor,u=Object.defineProperty,y=n.symbol,k=[],C=!1!==r[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],E=y("Promise"),w=y("then");n.onUnhandledError=l=>{if(n.showUncaughtError()){const a=l&&l.rejection;a?console.error("Unhandled Promise rejection:",a instanceof Error?a.message:a,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",a,a instanceof Error?a.stack:void 0):console.error(l)}},n.microtaskDrainDone=()=>{for(;k.length;){const l=k.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(a){q(a)}}};const x=y("unhandledPromiseRejectionHandler");function q(l){n.onUnhandledError(l);try{const a=i[x];"function"==typeof a&&a.call(this,l)}catch{}}function Y(l){return l&&l.then}function ee(l){return l}function G(l){return D.reject(l)}const v=y("state"),h=y("value"),V=y("finally"),F=y("parentPromiseValue"),W=y("parentPromiseState"),m=null,X=!0,I=!1;function b(l,a){return o=>{try{A(l,a,o)}catch(f){A(l,!1,f)}}}const S=function(){let l=!1;return function(o){return function(){l||(l=!0,o.apply(null,arguments))}}},K="Promise resolved with itself",$=y("currentTaskTrace");function A(l,a,o){const f=S();if(l===o)throw new TypeError(K);if(l[v]===m){let p=null;try{("object"==typeof o||"function"==typeof o)&&(p=o&&o.then)}catch(P){return f(()=>{A(l,!1,P)})(),l}if(a!==I&&o instanceof D&&o.hasOwnProperty(v)&&o.hasOwnProperty(h)&&o[v]!==m)c(o),A(l,o[v],o[h]);else if(a!==I&&"function"==typeof p)try{p.call(o,f(b(l,a)),f(b(l,!1)))}catch(P){f(()=>{A(l,!1,P)})()}else{l[v]=a;const P=l[h];if(l[h]=o,l[V]===V&&a===X&&(l[v]=l[W],l[h]=l[F]),a===I&&o instanceof Error){const T=i.currentTask&&i.currentTask.data&&i.currentTask.data.__creationTrace__;T&&u(o,$,{configurable:!0,enumerable:!1,writable:!0,value:T})}for(let T=0;T<P.length;)e(l,P[T++],P[T++],P[T++],P[T++]);if(0==P.length&&a==I){l[v]=0;let T=o;try{throw new Error("Uncaught (in promise): "+function g(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(o)+(o&&o.stack?"\n"+o.stack:""))}catch(L){T=L}C&&(T.throwOriginal=!0),T.rejection=o,T.promise=l,T.zone=i.current,T.task=i.currentTask,k.push(T),n.scheduleMicroTask()}}}return l}const _=y("rejectionHandledHandler");function c(l){if(0===l[v]){try{const a=i[_];a&&"function"==typeof a&&a.call(this,{rejection:l[h],promise:l})}catch{}l[v]=I;for(let a=0;a<k.length;a++)l===k[a].promise&&k.splice(a,1)}}function e(l,a,o,f,p){c(l);const P=l[v],T=P?"function"==typeof f?f:ee:"function"==typeof p?p:G;a.scheduleMicroTask("Promise.then",()=>{try{const L=l[h],M=!!o&&V===o[V];M&&(o[F]=L,o[W]=P);const Z=a.run(T,void 0,M&&T!==G&&T!==ee?[]:[L]);A(o,!0,Z)}catch(L){A(o,!1,L)}},o)}const O=function(){},N=r.AggregateError;class D{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(a){return a instanceof D?a:A(new this(null),X,a)}static reject(a){return A(new this(null),I,a)}static withResolvers(){const a={};return a.promise=new D((o,f)=>{a.resolve=o,a.reject=f}),a}static any(a){if(!a||"function"!=typeof a[Symbol.iterator])return Promise.reject(new N([],"All promises were rejected"));const o=[];let f=0;try{for(let T of a)f++,o.push(D.resolve(T))}catch{return Promise.reject(new N([],"All promises were rejected"))}if(0===f)return Promise.reject(new N([],"All promises were rejected"));let p=!1;const P=[];return new D((T,L)=>{for(let M=0;M<o.length;M++)o[M].then(Z=>{p||(p=!0,T(Z))},Z=>{P.push(Z),f--,0===f&&(p=!0,L(new N(P,"All promises were rejected")))})})}static race(a){let o,f,p=new this((L,M)=>{o=L,f=M});function P(L){o(L)}function T(L){f(L)}for(let L of a)Y(L)||(L=this.resolve(L)),L.then(P,T);return p}static all(a){return D.allWithCallback(a)}static allSettled(a){return(this&&this.prototype instanceof D?this:D).allWithCallback(a,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(a,o){let f,p,P=new this((Z,z)=>{f=Z,p=z}),T=2,L=0;const M=[];for(let Z of a){Y(Z)||(Z=this.resolve(Z));const z=L;try{Z.then(U=>{M[z]=o?o.thenCallback(U):U,T--,0===T&&f(M)},U=>{o?(M[z]=o.errorCallback(U),T--,0===T&&f(M)):p(U)})}catch(U){p(U)}T++,L++}return T-=2,0===T&&f(M),P}constructor(a){const o=this;if(!(o instanceof D))throw new Error("Must be an instanceof Promise.");o[v]=m,o[h]=[];try{const f=S();a&&a(f(b(o,X)),f(b(o,I)))}catch(f){A(o,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return D}then(a,o){var f;let p=null===(f=this.constructor)||void 0===f?void 0:f[Symbol.species];(!p||"function"!=typeof p)&&(p=this.constructor||D);const P=new p(O),T=i.current;return this[v]==m?this[h].push(T,P,a,o):e(this,T,P,a,o),P}catch(a){return this.then(null,a)}finally(a){var o;let f=null===(o=this.constructor)||void 0===o?void 0:o[Symbol.species];(!f||"function"!=typeof f)&&(f=D);const p=new f(O);p[V]=V;const P=i.current;return this[v]==m?this[h].push(P,p,a,a):e(this,P,p,a,a),p}}D.resolve=D.resolve,D.reject=D.reject,D.race=D.race,D.all=D.all;const Ee=r[E]=r.Promise;r.Promise=D;const he=y("thenPatched");function se(l){const a=l.prototype,o=s(a,"then");if(o&&(!1===o.writable||!o.configurable))return;const f=a.then;a[w]=f,l.prototype.then=function(p,P){return new D((L,M)=>{f.call(this,L,M)}).then(p,P)},l[he]=!0}return n.patchThen=se,Ee&&(se(Ee),ue(r,"fetch",l=>function me(l){return function(a,o){let f=l.apply(a,o);if(f instanceof D)return f;let p=f.constructor;return p[he]||se(p),f}}(l))),Promise[i.__symbol__("uncaughtPromiseErrors")]=k,D})})(t),function It(t){t.__load_patch("toString",r=>{const i=Function.prototype.toString,n=H("OriginalDelegate"),s=H("Promise"),u=H("Error"),g=function(){if("function"==typeof this){const E=this[n];if(E)return"function"==typeof E?i.call(E):Object.prototype.toString.call(E);if(this===Promise){const w=r[s];if(w)return i.call(w)}if(this===Error){const w=r[u];if(w)return i.call(w)}}return i.call(this)};g[n]=i,Function.prototype.toString=g;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}})}(t),function Mt(t){t.__load_patch("util",(r,i,n)=>{const s=Fe(r);n.patchOnProperties=Je,n.patchMethod=ue,n.bindArguments=xe,n.patchMacroTask=mt;const u=i.__symbol__("BLACK_LISTED_EVENTS"),g=i.__symbol__("UNPATCHED_EVENTS");r[g]&&(r[u]=r[g]),r[u]&&(i[u]=i[g]=r[u]),n.patchEventPrototype=Pt,n.patchEventTarget=bt,n.isIEOrEdge=kt,n.ObjectDefineProperty=Ne,n.ObjectGetOwnPropertyDescriptor=ke,n.ObjectCreate=_t,n.ArraySlice=Et,n.patchClass=be,n.wrapWithCurrentZone=je,n.filterProperties=it,n.attachOriginToPatched=fe,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Lt,n.getGlobalObjects=()=>({globalSources:tt,zoneSymbolEventNames:ne,eventNames:s,isBrowser:Ve,isMix:Xe,isNode:Re,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:ve,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:Me})})}(t)})(at),function Ot(t){t.__load_patch("legacy",r=>{const i=r[t.__symbol__("legacyPatch")];i&&i()}),t.__load_patch("timers",r=>{const i="set",n="clear";ye(r,i,n,"Timeout"),ye(r,i,n,"Interval"),ye(r,i,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{ye(r,"request","cancel","AnimationFrame"),ye(r,"mozRequest","mozCancel","AnimationFrame"),ye(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,i)=>{const n=["alert","prompt","confirm"];for(let s=0;s<n.length;s++)ue(r,n[s],(g,y,k)=>function(C,E){return i.current.run(g,r,E,k)})}),t.__load_patch("EventTarget",(r,i,n)=>{(function Dt(t,r){r.patchEventPrototype(t,r)})(r,n),function Ct(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:n,TRUE_STR:s,FALSE_STR:u,ZONE_SYMBOL_PREFIX:g}=r.getGlobalObjects();for(let k=0;k<i.length;k++){const C=i[k],j=g+(C+u),x=g+(C+s);n[C]={},n[C][u]=j,n[C][s]=x}const y=t.EventTarget;y&&y.prototype&&r.patchEventTarget(t,r,[y&&y.prototype])}(r,n);const s=r.XMLHttpRequestEventTarget;s&&s.prototype&&n.patchEventTarget(r,n,[s.prototype])}),t.__load_patch("MutationObserver",(r,i,n)=>{be("MutationObserver"),be("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,i,n)=>{be("IntersectionObserver")}),t.__load_patch("FileReader",(r,i,n)=>{be("FileReader")}),t.__load_patch("on_property",(r,i,n)=>{!function St(t,r){if(Re&&!Xe||Zone[t.symbol("patchEvents")])return;const i=r.__Zone_ignore_on_properties;let n=[];if(Ve){const s=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const u=function pt(){try{const t=Te.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:s,ignoreProperties:["error"]}]:[];ct(s,Fe(s),i&&i.concat(u),Ie(s))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let s=0;s<n.length;s++){const u=r[n[s]];u&&u.prototype&&ct(u.prototype,Fe(u.prototype),i)}}(n,r)}),t.__load_patch("customElements",(r,i,n)=>{!function Rt(t,r){const{isBrowser:i,isMix:n}=r.getGlobalObjects();(i||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,i)=>{!function C(E){const w=E.XMLHttpRequest;if(!w)return;const j=w.prototype;let q=j[Ze],Y=j[Ae];if(!q){const R=E.XMLHttpRequestEventTarget;if(R){const b=R.prototype;q=b[Ze],Y=b[Ae]}}const ee="readystatechange",G="scheduled";function v(R){const b=R.data,S=b.target;S[g]=!1,S[k]=!1;const K=S[u];q||(q=S[Ze],Y=S[Ae]),K&&Y.call(S,ee,K);const $=S[u]=()=>{if(S.readyState===S.DONE)if(!b.aborted&&S[g]&&R.state===G){const _=S[i.__symbol__("loadfalse")];if(0!==S.status&&_&&_.length>0){const c=R.invoke;R.invoke=function(){const e=S[i.__symbol__("loadfalse")];for(let d=0;d<e.length;d++)e[d]===R&&e.splice(d,1);!b.aborted&&R.state===G&&c.call(R)},_.push(R)}else R.invoke()}else!b.aborted&&!1===S[g]&&(S[k]=!0)};return q.call(S,ee,$),S[n]||(S[n]=R),X.apply(S,b.args),S[g]=!0,R}function h(){}function V(R){const b=R.data;return b.aborted=!0,I.apply(b.target,b.args)}const F=ue(j,"open",()=>function(R,b){return R[s]=0==b[2],R[y]=b[1],F.apply(R,b)}),B=H("fetchTaskAborting"),m=H("fetchTaskScheduling"),X=ue(j,"send",()=>function(R,b){if(!0===i.current[m]||R[s])return X.apply(R,b);{const S={target:R,url:R[y],isPeriodic:!1,args:b,aborted:!1},K=He("XMLHttpRequest.send",h,S,v,V);R&&!0===R[k]&&!S.aborted&&K.state===G&&K.invoke()}}),I=ue(j,"abort",()=>function(R,b){const S=function x(R){return R[n]}(R);if(S&&"string"==typeof S.type){if(null==S.cancelFn||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(!0===i.current[B])return I.apply(R,b)})}(r);const n=H("xhrTask"),s=H("xhrSync"),u=H("xhrListener"),g=H("xhrScheduled"),y=H("xhrURL"),k=H("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function gt(t,r){const i=t.constructor.name;for(let n=0;n<r.length;n++){const s=r[n],u=t[s];if(u){if(!We(ke(t,s)))continue;t[s]=(y=>{const k=function(){return y.apply(this,xe(arguments,i+"."+s))};return fe(k,y),k})(u)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,i)=>{function n(s){return function(u){st(r,s).forEach(y=>{const k=r.PromiseRejectionEvent;if(k){const C=new k(s,{promise:u.promise,reason:u.rejection});y.invoke(C)}})}}r.PromiseRejectionEvent&&(i[H("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),i[H("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,i,n)=>{!function wt(t,r){r.patchMethod(t,"queueMicrotask",i=>function(n,s){Zone.current.scheduleMicroTask("queueMicrotask",s[0])})}(r,n)})}(at)}},te=>{te(te.s=935)}]);