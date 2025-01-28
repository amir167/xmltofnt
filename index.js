(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}})();const St=!1;var Mt=Array.isArray,pe=Array.prototype.indexOf,ge=Array.from,me=Object.defineProperty,J=Object.getOwnPropertyDescriptor,we=Object.prototype,ye=Array.prototype,xe=Object.getPrototypeOf;function be(t){for(var e=0;e<t.length;e++)t[e]()}const T=2,qt=4,vt=8,Et=16,j=32,et=64,ut=128,Y=256,st=512,k=1024,B=2048,z=4096,ot=8192,Z=16384,Ee=32768,Te=65536,Ne=1<<19,jt=1<<20,lt=Symbol("$state");function Bt(t){return t===this.v}function ke(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Fe(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ce(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ae(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Oe(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Se(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ie(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Le(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let $e=!1;const Pe=2,b=Symbol();function L(t,e){var r={f:0,v:t,reactions:null,equals:Bt,rv:0,wv:0};return r}function U(t){return Re(L(t))}function Re(t){return h!==null&&!P&&h.f&T&&(O===null?tr([t]):O.push(t)),t}function m(t,e){return h!==null&&!P&&le()&&h.f&(T|Et)&&(O===null||!O.includes(t))&&Le(),De(t,e)}function De(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=ne(),Ut(t,B),p!==null&&p.f&k&&!(p.f&(j|et))&&($===null?er([t]):$.push(t))),e}function Ut(t,e){var r=t.reactions;if(r!==null)for(var n=r.length,l=0;l<n;l++){var i=r[l],u=i.f;u&B||(R(i,e),u&(k|Y)&&(u&T?Ut(i,z):Ct(i)))}}function A(t,e=null,r){if(typeof t!="object"||t===null||lt in t)return t;const n=xe(t);if(n!==we&&n!==ye)return t;var l=new Map,i=Mt(t),u=L(0);i&&l.set("length",L(t.length));var v;return new Proxy(t,{defineProperty(f,s,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Oe();var a=l.get(s);return a===void 0?(a=L(c.value),l.set(s,a)):m(a,A(c.value,v)),!0},deleteProperty(f,s){var c=l.get(s);if(c===void 0)s in f&&l.set(s,L(b));else{if(i&&typeof s=="string"){var a=l.get("length"),o=Number(s);Number.isInteger(o)&&o<a.v&&m(a,o)}m(c,b),It(u)}return!0},get(f,s,c){var d;if(s===lt)return t;var a=l.get(s),o=s in f;if(a===void 0&&(!o||(d=J(f,s))!=null&&d.writable)&&(a=L(A(o?f[s]:b,v)),l.set(s,a)),a!==void 0){var _=g(a);return _===b?void 0:_}return Reflect.get(f,s,c)},getOwnPropertyDescriptor(f,s){var c=Reflect.getOwnPropertyDescriptor(f,s);if(c&&"value"in c){var a=l.get(s);a&&(c.value=g(a))}else if(c===void 0){var o=l.get(s),_=o==null?void 0:o.v;if(o!==void 0&&_!==b)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return c},has(f,s){var _;if(s===lt)return!0;var c=l.get(s),a=c!==void 0&&c.v!==b||Reflect.has(f,s);if(c!==void 0||p!==null&&(!a||(_=J(f,s))!=null&&_.writable)){c===void 0&&(c=L(a?A(f[s],v):b),l.set(s,c));var o=g(c);if(o===b)return!1}return a},set(f,s,c,a){var S;var o=l.get(s),_=s in f;if(i&&s==="length")for(var d=c;d<o.v;d+=1){var w=l.get(d+"");w!==void 0?m(w,b):d in f&&(w=L(b),l.set(d+"",w))}o===void 0?(!_||(S=J(f,s))!=null&&S.writable)&&(o=L(void 0),m(o,A(c,v)),l.set(s,o)):(_=o.v!==b,m(o,A(c,v)));var F=Reflect.getOwnPropertyDescriptor(f,s);if(F!=null&&F.set&&F.set.call(a,c),!_){if(i&&typeof s=="string"){var D=l.get("length"),N=Number(s);Number.isInteger(N)&&N>=D.v&&m(D,N+1)}It(u)}return!0},ownKeys(f){g(u);var s=Reflect.ownKeys(f).filter(o=>{var _=l.get(o);return _===void 0||_.v!==b});for(var[c,a]of l)a.v!==b&&!(c in f)&&s.push(c);return s},setPrototypeOf(){Se()}})}function It(t,e=1){m(t,t.v+e)}var Lt,Vt,Ht;function Me(){if(Lt===void 0){Lt=window;var t=Element.prototype,e=Node.prototype;Vt=J(e,"firstChild").get,Ht=J(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function qe(t=""){return document.createTextNode(t)}function Yt(t){return Vt.call(t)}function Kt(t){return Ht.call(t)}function K(t,e){return Yt(t)}function I(t,e=1,r=!1){let n=t;for(;e--;)n=Kt(n);return n}function je(t){var e=T|B;p===null?e|=Y:p.f|=jt;var r=h!==null&&h.f&T?h:null;const n={children:null,ctx:x,deps:null,equals:Bt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??p};return r!==null&&(r.children??(r.children=[])).push(n),n}function Wt(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&T?Tt(n):H(n)}}}function Be(t){for(var e=t.parent;e!==null;){if(!(e.f&T))return e;e=e.parent}return null}function Xt(t){var e,r=p;q(Be(t));try{Wt(t),e=ue(t)}finally{q(r)}return e}function zt(t){var e=Xt(t),r=(V||t.f&Y)&&t.deps!==null?z:k;R(t,r),t.equals(e)||(t.v=e,t.wv=ne())}function Tt(t){Wt(t),tt(t,0),R(t,Z),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ue(t){p===null&&h===null&&Ce(),h!==null&&h.f&Y&&Fe(),kt&&ke()}function Ve(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function rt(t,e,r,n=!0){var l=(t&et)!==0,i=p,u={ctx:x,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|B,first:null,fn:e,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,wv:0};if(r){var v=X;try{$t(!0),Ft(u),u.f|=Ee}catch(c){throw H(u),c}finally{$t(v)}}else e!==null&&Ct(u);var f=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&(jt|ut))===0;if(!f&&!l&&n&&(i!==null&&Ve(u,i),h!==null&&h.f&T)){var s=h;(s.children??(s.children=[])).push(u)}return u}function He(t){Ue();var e=p!==null&&(p.f&j)!==0&&x!==null&&!x.m;if(e){var r=x;(r.e??(r.e=[])).push({fn:t,effect:p,reaction:h})}else{var n=Nt(t);return n}}function Ye(t){const e=rt(et,t,!0);return(r={})=>new Promise(n=>{r.outro?Ze(e,()=>{H(e),n(void 0)}):(H(e),n(void 0))})}function Nt(t){return rt(qt,t,!1)}function Zt(t){return rt(vt,t,!0)}function Ke(t,e=[],r=je){const n=e.map(r);return We(()=>t(...n.map(g)))}function We(t,e=0){return rt(vt|Et|e,t,!0)}function Xe(t,e=!0){return rt(vt|j,t,!0,e)}function Gt(t){var e=t.teardown;if(e!==null){const r=kt,n=h;Pt(!0),M(null);try{e.call(null)}finally{Pt(r),M(n)}}}function Jt(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)Tt(e[r])}}function Qt(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;H(r,e),r=n}}function ze(t){for(var e=t.first;e!==null;){var r=e.next;e.f&j||H(e),e=r}}function H(t,e=!0){var r=!1;if((e||t.f&Ne)&&t.nodes_start!==null){for(var n=t.nodes_start,l=t.nodes_end;n!==null;){var i=n===l?null:Kt(n);n.remove(),n=i}r=!0}Qt(t,e&&!r),Jt(t),tt(t,0),R(t,Z);var u=t.transitions;if(u!==null)for(const f of u)f.stop();Gt(t);var v=t.parent;v!==null&&v.first!==null&&te(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function te(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Ze(t,e){var r=[];ee(t,r,!0),Ge(r,()=>{H(t),e()})}function Ge(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var l of t)l.out(n)}else e()}function ee(t,e,r){if(!(t.f&ot)){if(t.f^=ot,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&e.push(u);for(var n=t.first;n!==null;){var l=n.next,i=(n.f&Te)!==0||(n.f&j)!==0;ee(n,e,i?r:!1),n=l}}}let wt=!1,yt=[];function Je(){wt=!1;const t=yt.slice();yt=[],be(t)}function Qe(t){wt||(wt=!0,queueMicrotask(Je)),yt.push(t)}let it=!1,at=!1,ft=null,X=!1,kt=!1;function $t(t){X=t}function Pt(t){kt=t}let xt=[],Q=0;let h=null,P=!1;function M(t){h=t}let p=null;function q(t){p=t}let O=null;function tr(t){O=t}let y=null,E=0,$=null;function er(t){$=t}let re=1,ct=0,V=!1,x=null;function ne(){return++re}function le(){return!0}function _t(t){var s;var e=t.f;if(e&B)return!0;if(e&z){var r=t.deps,n=(e&Y)!==0;if(r!==null){var l,i,u=(e&st)!==0,v=n&&p!==null&&!V,f=r.length;if(u||v){for(l=0;l<f;l++)i=r[l],(u||!((s=i==null?void 0:i.reactions)!=null&&s.includes(t)))&&(i.reactions??(i.reactions=[])).push(t);u&&(t.f^=st)}for(l=0;l<f;l++)if(i=r[l],_t(i)&&zt(i),i.wv>t.wv)return!0}(!n||p!==null&&!V)&&R(t,k)}return!1}function rr(t,e){for(var r=e;r!==null;){if(r.f&ut)try{r.fn(t);return}catch{r.f^=ut}r=r.parent}throw it=!1,t}function nr(t){return(t.f&Z)===0&&(t.parent===null||(t.parent.f&ut)===0)}function dt(t,e,r,n){if(it){if(r===null&&(it=!1),nr(e))throw t;return}r!==null&&(it=!0);{rr(t,e);return}}function ie(t,e,r=0){var n=t.reactions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l];i.f&T?ie(i,e,r+1):e===i&&(r===0?R(i,B):i.f&k&&R(i,z),Ct(i))}}function ue(t){var _;var e=y,r=E,n=$,l=h,i=V,u=O,v=x,f=P,s=t.f;y=null,E=0,$=null,h=s&(j|et)?null:t,V=!X&&(s&Y)!==0,O=null,x=t.ctx,P=!1,ct++;try{var c=(0,t.fn)(),a=t.deps;if(y!==null){var o;if(tt(t,E),a!==null&&E>0)for(a.length=E+y.length,o=0;o<y.length;o++)a[E+o]=y[o];else t.deps=a=y;if(!V)for(o=E;o<a.length;o++)((_=a[o]).reactions??(_.reactions=[])).push(t)}else a!==null&&E<a.length&&(tt(t,E),a.length=E);if(le()&&$!==null&&!(t.f&(T|z|B)))for(o=0;o<$.length;o++)ie($[o],t);return l!==null&&ct++,c}finally{y=e,E=r,$=n,h=l,V=i,O=u,x=v,P=f}}function lr(t,e){let r=e.reactions;if(r!==null){var n=pe.call(r,t);if(n!==-1){var l=r.length-1;l===0?r=e.reactions=null:(r[n]=r[l],r.pop())}}r===null&&e.f&T&&(y===null||!y.includes(e))&&(R(e,z),e.f&(Y|st)||(e.f^=st),tt(e,0))}function tt(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)lr(t,r[n])}function Ft(t){var e=t.f;if(!(e&Z)){R(t,k);var r=p,n=x;p=t;try{e&Et?ze(t):Qt(t),Jt(t),Gt(t);var l=ue(t);t.teardown=typeof l=="function"?l:null,t.wv=re;var i=t.deps,u;St&&$e&&t.f&B}catch(v){dt(v,t,r,n||t.ctx)}finally{p=r}}}function ir(){if(Q>1e3){Q=0;try{Ae()}catch(t){if(ft!==null)dt(t,ft,null);else throw t}}Q++}function ur(t){var e=t.length;if(e!==0){ir();var r=X;X=!0;try{for(var n=0;n<e;n++){var l=t[n];l.f&k||(l.f^=k);var i=[];se(l,i),sr(i)}}finally{X=r}}}function sr(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(Z|ot)))try{_t(n)&&(Ft(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?te(n):n.fn=null))}catch(l){dt(l,n,null,n.ctx)}}}function or(){if(at=!1,Q>1001)return;const t=xt;xt=[],ur(t),at||(Q=0,ft=null)}function Ct(t){at||(at=!0,queueMicrotask(or)),ft=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(et|j)){if(!(r&k))return;e.f^=k}}xt.push(e)}function se(t,e){var r=t.first,n=[];t:for(;r!==null;){var l=r.f,i=(l&j)!==0,u=i&&(l&k)!==0,v=r.next;if(!u&&!(l&ot))if(l&vt){if(i)r.f^=k;else try{_t(r)&&Ft(r)}catch(a){dt(a,r,null,r.ctx)}var f=r.first;if(f!==null){r=f;continue}}else l&qt&&n.push(r);if(v===null){let a=r.parent;for(;a!==null;){if(t===a)break t;var s=a.next;if(s!==null){r=s;continue t}a=a.parent}}r=v}for(var c=0;c<n.length;c++)f=n[c],e.push(f),se(f,e)}function g(t){var c;var e=t.f,r=(e&T)!==0;if(r&&e&Z){var n=Xt(t);return Tt(t),n}if(h!==null&&!P){O!==null&&O.includes(t)&&Ie();var l=h.deps;t.rv<ct&&(t.rv=ct,y===null&&l!==null&&l[E]===t?E++:y===null?y=[t]:y.push(t))}else if(r&&t.deps===null)for(var i=t,u=i.parent,v=i;u!==null;)if(u.f&T){var f=u;v=f,u=f.parent}else{var s=u;(c=s.deriveds)!=null&&c.includes(v)||(s.deriveds??(s.deriveds=[])).push(v);break}return r&&(i=t,_t(i)&&zt(i)),t.v}function oe(t){var e=P;try{return P=!0,t()}finally{P=e}}const ar=-7169;function R(t,e){t.f=t.f&ar|e}function ae(t,e=!1,r){x={p:x,c:null,e:null,m:!1,s:t,x:null,l:null}}function fe(t){const e=x;if(e!==null){const u=e.e;if(u!==null){var r=p,n=h;e.e=null;try{for(var l=0;l<u.length;l++){var i=u[l];q(i.effect),M(i.reaction),Nt(i.fn)}}finally{q(r),M(n)}}x=e.p,e.m=!0}return{}}const fr=["touchstart","touchmove"];function cr(t){return fr.includes(t)}let Rt=!1;function vr(){Rt||(Rt=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function _r(t){var e=h,r=p;M(null),q(null);try{return t()}finally{M(e),q(r)}}function dr(t,e,r,n=r){t.addEventListener(e,()=>_r(r));const l=t.__on_r;l?t.__on_r=()=>{l(),n(!0)}:t.__on_r=()=>n(!0),vr()}const ce=new Set,bt=new Set;function hr(t){for(var e=0;e<t.length;e++)ce.add(t[e]);for(var r of bt)r(t)}function nt(t){var N;var e=this,r=e.ownerDocument,n=t.type,l=((N=t.composedPath)==null?void 0:N.call(t))||[],i=l[0]||t.target,u=0,v=t.__root;if(v){var f=l.indexOf(v);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var s=l.indexOf(e);if(s===-1)return;f<=s&&(u=f)}if(i=l[u]||t.target,i!==e){me(t,"currentTarget",{configurable:!0,get(){return i||r}});var c=h,a=p;M(null),q(null);try{for(var o,_=[];i!==null;){var d=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+n];if(w!==void 0&&!i.disabled)if(Mt(w)){var[F,...D]=w;F.apply(i,[t,...D])}else w.call(i,t)}catch(S){o?_.push(S):o=S}if(t.cancelBubble||d===e||d===null)break;i=d}if(o){for(let S of _)queueMicrotask(()=>{throw S});throw o}}finally{t.__root=e,delete t.currentTarget,M(c),q(a)}}}function pr(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function gr(t,e){var r=p;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function mr(t,e){var r=(e&Pe)!==0,n,l=!t.startsWith("<!>");return()=>{n===void 0&&(n=pr(l?t:"<!>"+t),n=Yt(n));var i=r?document.importNode(n,!0):n.cloneNode(!0);return gr(i,i),i}}function wr(t,e){t!==null&&t.before(e)}function yr(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function xr(t,e){return br(t,e)}const W=new Map;function br(t,{target:e,anchor:r,props:n={},events:l,context:i,intro:u=!0}){Me();var v=new Set,f=a=>{for(var o=0;o<a.length;o++){var _=a[o];if(!v.has(_)){v.add(_);var d=cr(_);e.addEventListener(_,nt,{passive:d});var w=W.get(_);w===void 0?(document.addEventListener(_,nt,{passive:d}),W.set(_,1)):W.set(_,w+1)}}};f(ge(ce)),bt.add(f);var s=void 0,c=Ye(()=>{var a=r??e.appendChild(qe());return Xe(()=>{if(i){ae({});var o=x;o.c=i}l&&(n.$$events=l),s=t(a,n)||{},i&&fe()}),()=>{var d;for(var o of v){e.removeEventListener(o,nt);var _=W.get(o);--_===0?(document.removeEventListener(o,nt),W.delete(o)):W.set(o,_)}bt.delete(f),a!==r&&((d=a.parentNode)==null||d.removeChild(a))}});return Er.set(s,c),s}let Er=new WeakMap;function pt(t,e,r=e){dr(t,"input",n=>{var l=n?t.defaultValue:t.value;if(l=gt(t)?mt(l):l,r(l),l!==(l=e())){var i=t.selectionStart,u=t.selectionEnd;t.value=l??"",u!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(u,t.value.length))}}),oe(e)==null&&t.value&&r(gt(t)?mt(t.value):t.value),Zt(()=>{var n=e();gt(t)&&n===mt(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function gt(t){var e=t.type;return e==="number"||e==="range"}function mt(t){return t===""?null:+t}function Dt(t,e){return t===e||(t==null?void 0:t[lt])===e}function Tr(t={},e,r,n){return Nt(()=>{var l,i;return Zt(()=>{l=i,i=[],oe(()=>{t!==r(...i)&&(e(t,...i),l&&Dt(r(...l),t)&&e(null,...l))})}),()=>{Qe(()=>{i&&Dt(r(...i),t)&&e(null,...i)})}}),t}const Nr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Nr);class ve{constructor(e){this.xmlString=e,this.parser=new DOMParser,this.xmlDoc=this.parser.parseFromString(this.xmlString,"text/xml")}convertToFNT(e=0){const r=this.xmlDoc.getElementsByTagName("TextureAtlas")[0],n=r.getAttribute("imagePath"),l=r.getAttribute("width"),i=r.getAttribute("height"),u=r.getElementsByTagName("sprite"),v=[],f=[];for(let c=0;c<u.length;c++){const a=u[c],o=a.getAttribute("n"),_=a.getAttribute("x"),d=a.getAttribute("y"),w=a.getAttribute("w"),F=a.getAttribute("h"),D=this.getCharId(o),N=this.getLetter(o);if(!this.isValidName(o)){console.warn(`Недопустимое имя символа: ${o}`);continue}v.push({id:D,x:parseInt(_),y:parseInt(d),width:parseInt(w),height:parseInt(F),xoffset:0,yoffset:0,xadvance:parseInt(w)+e,page:0}),f.push(N)}return{content:this.generateFNTContent(n,l,i,v),letters:f}}isValidName(e){const r=e.split(".")[0],n=["comma","dot","k","m","b","x"];return!isNaN(r)||n.includes(r)}getCharId(e){const r=e.split(".")[0];return r==="comma"?44:r==="dot"?46:r==="k"?107:r==="m"?109:r==="b"?98:r==="x"?120:48+parseInt(r)}getLetter(e){const r=e.split(".")[0];return r==="comma"?",":r==="dot"?".":r==="k"?"k":r==="m"?"m":r==="b"?"b":r==="x"?"x":String.fromCharCode(48+parseInt(r))}generateFNTContent(e,r,n,l){let i=`info face="${e.split(".")[0]}" size=${l[0].height} bold=0 italic=0 charset="" unicode=1 stretchH=100 smooth=1 aa=1 padding=0,0,0,0 spacing=1,1
`;return i+=`common lineHeight=${l[0].height} base=${l[0].height} scaleW=${r} scaleH=${n} pages=1 packed=0
`,i+=`page id=0 file="${e}"
`,i+=`chars count=${l.length}
`,l.forEach(u=>{i+=`char id=${u.id}   x=${u.x}   y=${u.y}     width=${u.width}  height=${u.height}  xoffset=${u.xoffset}  yoffset=${u.yoffset}  xadvance=${u.xadvance}  page=${u.page} 
`}),i}}function kr(t,e){g(e).click()}function Fr(t,e,r,n,l,i,u){const v=t.target.files[0];if(v&&v.type==="text/xml"){const f=new FileReader;f.onload=s=>{const c=s.target.result;m(e,A(c)),m(r,A(v.name.replace(/\.xml$/,""))),m(n,A(g(r)));const o=new ve(c).convertToFNT(g(l));m(i,A(o.content));const d=o.letters.join(", ");m(u,`Файл ${v.name} успешно загружен и преобразован в FNT! Обнаружены символы: ${d}`)},f.onerror=()=>{m(u,"Ошибка при чтении файла.")},f.readAsText(v)}else m(u,"Пожалуйста, загрузите XML-файл.")}var Cr=mr('<main class="flex flex-col items-center justify-center h-screen bg-base-200"><div class="m-2 bg-base-100 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 w-80"><span class="text-md font-semibold">XML to FNT</span> <div class="flex gap-3 items-center w-full justify-between"><span class="label text-xs">Имя шрифта:</span> <input type="text" class="input input-bordered input-xs w-25" placeholder="Имя"></div> <div class="flex gap-3 items-center w-full"><span class="label text-xs">xAdvance:</span> <input type="range" min="-100" max="100" class="range range-xs range-primary flex-1 [--range-fill:0]"> <input type="number" class="input input-bordered input-xs w-25"></div> <input type="file" accept=".xml" hidden> <div class="flex gap-3 w-full"><button class="btn btn-outline btn-primary btn-sm flex-1 w-full">Загрузить XML</button> <button class="btn btn-primary btn-sm flex-1 w-full">Скачать FNT</button></div></div> <div class="m-2 bg-base-100 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 w-80 input-sm"> </div></main>');function Ar(t,e){ae(e,!0);let r=U(null),n=U(0),l=U("Имя"),i=U(""),u=U(""),v=U("Статус: Нет файла"),f=U(null);function s(){if(!g(u)||!g(i)){m(v,"Нет данных для скачивания. Загрузите XML-файл.");return}const C=g(l).trim()||g(u),ht=new Blob([g(i)],{type:"text/plain"}),Ot=URL.createObjectURL(ht),G=document.createElement("a");G.href=Ot,G.download=`${C}.fnt`,document.body.appendChild(G),G.click(),document.body.removeChild(G),URL.revokeObjectURL(Ot)}function c(){if(g(r)){const ht=new ve(g(r)).convertToFNT(g(n));m(i,A(ht.content))}}He(()=>{c()});var a=Cr(),o=K(a),_=I(K(o),2),d=I(K(_),2),w=I(_,2),F=I(K(w),2),D=I(F,2),N=I(w,2);N.__change=[Fr,r,u,l,n,i,v],Tr(N,C=>m(f,C),()=>g(f));var S=I(N,2),At=K(S);At.__click=[kr,f];var _e=I(At,2);_e.__click=s;var de=I(o,2),he=K(de);Ke(()=>yr(he,g(v))),pt(d,()=>g(l),C=>m(l,C)),pt(F,()=>g(n),C=>m(n,C)),pt(D,()=>g(n),C=>m(n,C)),wr(t,a),fe()}hr(["change","click"]);xr(Ar,{target:document.getElementById("app")});
