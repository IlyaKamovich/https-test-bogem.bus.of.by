var L=Object.defineProperty,_=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var N=(t,e,s)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,A=(t,e)=>{for(var s in e||(e={}))B.call(e,s)&&N(t,s,e[s]);if(E)for(var s of E(e))O.call(e,s)&&N(t,s,e[s]);return t},I=(t,e)=>_(t,C(e));import{j as u,t as M}from"./index-08929282.js";import{r as l}from"./react-9770042a.js";import{u as D}from"./useTypeDispatch-dae163b7.js";import{u as $}from"./useTypeSelector-deb66726.js";import{i as z}from"./selectors-f1422f93.js";import"./reactDom-76a1a9f3.js";import"./antd-506106c0.js";const G=[{src:"images/4.mp4",html:'<strong class="info-title">Ортопедическая стелька</strong>'},{src:"images/vd.jpg",html:'<strong class="info-title">Водонепроницаемый верх</strong> <p class="info-text">Изготовленные из <strong>высококачественного водонепроницаемого материала</strong>. Вы сможете <strong>сохранять ноги сухими весь день</strong> в снежную и дождливую погоду.</p>'},{src:"images/bu2.png",html:'<strong class="info-title">Легкие и удобные</strong> <p class="info-text">Подходит <strong>для всех типов ног</strong>. Эта обувь позволит вам чувствовать себя так, словно вы <strong>ходите по воздуху</strong>. Это максимально <b>уменьшит боль в ногах</b> при стоянии или ходьбе в течение длительного периода времени.</p>'},{src:"images/bu1.png",html:'<strong class="info-title">Подошва нового поколения</strong> <p class="info-text">Изготовлена <strong>из ультра-износостойкого полиуретана, нескользящая, эластичная, противоударная</strong>. Специальная конструкция подошвы обеспечивает <strong>надежное сцепление</strong>, что значительно повышает <strong>безопасность.</strong></p>'},{src:"images/44.jpg",html:'<strong class="info-title">ПРОТИВОСКОЛЬЗЯЩАЯ ПОДОШВА</strong> <p class="info-text">Изготовленные из <strong>высококачественного водонепроницаемого материала</strong>. Вы сможете сохранять <strong>ноги сухими весь день</strong> в снежную и дождливую погоду.</p>'},{src:"images/55.jpeg",html:'<strong class="info-title">УЮТНАЯ И ТЕПЛАЯ ПОДКЛАДКА</strong> <p class="info-text">Полностью меховая подкладка , которая позволит вам чувствовать себя так, словно вы ходите по воздуху.</p>'}];var j=new Map,p=new WeakMap,T=0,H=void 0;function P(t){return t?(p.has(t)||(T+=1,p.set(t,T.toString())),p.get(t)):"0"}function W(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?P(t.root):t[e]}`).toString()}function q(t){let e=W(t),s=j.get(e);if(!s){const r=new Map;let n;const i=new IntersectionObserver(a=>{a.forEach(o=>{var c;const m=o.isIntersecting&&n.some(d=>o.intersectionRatio>=d);t.trackVisibility&&typeof o.isVisible=="undefined"&&(o.isVisible=m),(c=r.get(o.target))==null||c.forEach(d=>{d(m,o)})})},t);n=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),s={id:e,observer:i,elements:r},j.set(e,s)}return s}function F(t,e,s={},r=H){if(typeof window.IntersectionObserver=="undefined"&&r!==void 0){const c=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:n,observer:i,elements:a}=q(s);let o=a.get(t)||[];return a.has(t)||a.set(t,o),o.push(e),i.observe(t),function(){o.splice(o.indexOf(e),1),o.length===0&&(a.delete(t),i.unobserve(t)),a.size===0&&(i.disconnect(),j.delete(n))}}function J({threshold:t,delay:e,trackVisibility:s,rootMargin:r,root:n,triggerOnce:i,skip:a,initialInView:o,fallbackInView:c,onChange:m}={}){var d;const[v,V]=l.useState(null),h=l.useRef(),[b,y]=l.useState({inView:!!o,entry:void 0});h.current=m,l.useEffect(()=>{if(a||!v)return;let f;return f=F(v,(S,w)=>{y({inView:S,entry:w}),h.current&&h.current(S,w),w.isIntersecting&&i&&f&&(f(),f=void 0)},{root:n,rootMargin:r,threshold:t,trackVisibility:s,delay:e},c),()=>{f&&f()}},[Array.isArray(t)?t.toString():t,v,n,r,i,a,s,c,e]);const x=(d=b.entry)==null?void 0:d.target,R=l.useRef();!v&&x&&!i&&!a&&R.current!==x&&(R.current=x,y({inView:!!o,entry:void 0}));const g=[V,b.inView,b.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const K=({src:t,html:e})=>{const{ref:s,inView:r,entry:n}=J({trackVisibility:!0,delay:100});return l.useEffect(()=>{if(r){if(!t.includes("mp4"))return;(n==null?void 0:n.target).play()}},[r]),console.log(t),u.jsxs("div",{className:"advantages-card",children:[t.includes("mp4")?u.jsx("video",{ref:s,className:"img",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,src:t}):u.jsx("img",{className:"img",ref:s,src:t}),e&&u.jsx("div",{className:"info",dangerouslySetInnerHTML:{__html:e}})]})},st=()=>{const t=D(),e=$(z),s=l.useRef(null),r=()=>{if(s.current&&!e){const{top:n}=s.current.getBoundingClientRect();n<=80?t(M(!0)):t(M(!1))}};return l.useEffect(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[]),u.jsx("section",{id:"advantages",className:"advantages",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{ref:s,className:"advantages-title",children:"преимущества"}),u.jsx("div",{className:"advantages-grid",children:G.map((n,i)=>l.createElement(K,I(A({},n),{key:i})))})]})})};export{st as default};
