import{S as V,i as b,s as x,k as d,q as I,a as q,l as v,m as p,r as C,h,c as D,n as l,L as y,b as S,F as u,u as w,J as E}from"./index.f5cfb2c1.js";import"./Video.svelte_svelte_type_style_lang.5c4f76ff.js";function O(n){let t,s,c,o,e,i,_,f;return{c(){t=d("div"),s=d("div"),c=I(n[1]),o=q(),e=d("video"),i=d("source"),f=d("track"),this.h()},l(r){t=v(r,"DIV",{class:!0});var a=p(t);s=v(a,"DIV",{class:!0});var k=p(s);c=C(k,n[1]),k.forEach(h),o=D(a),e=v(a,"VIDEO",{class:!0,"webkit-playsinline":!0});var m=p(e);i=v(m,"SOURCE",{src:!0,type:!0}),f=v(m,"TRACK",{kind:!0}),m.forEach(h),a.forEach(h),this.h()},h(){l(s,"class","section-label svelte-16vxr94"),y(i.src,_=n[0])||l(i,"src",_),l(i,"type","video/mp4"),l(f,"kind","captions"),l(e,"class","video-loop svelte-16vxr94"),e.autoplay=!0,e.loop=!0,e.muted=!0,l(e,"webkit-playsinline",""),e.playsInline=!0,l(t,"class","video-container svelte-16vxr94")},m(r,a){S(r,t,a),u(t,s),u(s,c),u(t,o),u(t,e),u(e,i),u(e,f)},p(r,[a]){a&2&&w(c,r[1]),a&1&&!y(i.src,_=r[0])&&l(i,"src",_)},i:E,o:E,d(r){r&&h(t)}}}function R(n,t,s){let{src:c=""}=t,{title:o=""}=t;return n.$$set=e=>{"src"in e&&s(0,c=e.src),"title"in e&&s(1,o=e.title)},[c,o]}class F extends V{constructor(t){super(),b(this,t,R,O,x,{src:0,title:1})}}export{F as V};
