import{S as R,i as $,s as A,k as y,l as I,n as _,L as x,b as O,J as k,h as d,q as C,m as E,r as L,F as f,u as J,C as M,a as D,c as T,G as P,H as G,I as N,g as W,d as X}from"./index.f5cfb2c1.js";/* empty css                                                */function j(s){let e,l;return{c(){e=y("img"),this.h()},l(t){e=I(t,"IMG",{loading:!0,class:!0,src:!0,alt:!0}),this.h()},h(){_(e,"loading","lazy"),_(e,"class","wide-img svelte-10be6b5"),x(e.src,l=s[0])||_(e,"src",l),_(e,"alt",s[1])},m(t,a){O(t,e,a)},p(t,[a]){a&1&&!x(e.src,l=t[0])&&_(e,"src",l),a&2&&_(e,"alt",t[1])},i:k,o:k,d(t){t&&d(e)}}}function B(s,e,l){let{imgSrc:t=""}=e,{imgAlt:a=""}=e;return s.$$set=n=>{"imgSrc"in n&&l(0,t=n.imgSrc),"imgAlt"in n&&l(1,a=n.imgAlt)},[t,a]}class oe extends R{constructor(e){super(),$(this,e,B,j,A,{imgSrc:0,imgAlt:1})}}function K(s){let e,l;return{c(){e=y("div"),l=C(s[0]),this.h()},l(t){e=I(t,"DIV",{class:!0});var a=E(e);l=L(a,s[0]),a.forEach(d),this.h()},h(){_(e,"class","title svelte-4ykkmm")},m(t,a){O(t,e,a),f(e,l)},p(t,[a]){a&1&&J(l,t[0])},i:k,o:k,d(t){t&&d(e)}}}function Q(s,e,l){let{title:t=""}=e;return s.$$set=a=>{"title"in a&&l(0,t=a.title)},[t]}class re extends R{constructor(e){super(),$(this,e,Q,K,A,{title:0})}}const U=s=>({}),z=s=>({}),Z=s=>({}),F=s=>({});function ee(s){let e,l,t,a,n,c,h,o,r,g,m;const b=s[1].myRole,v=M(b,s,s[0],F),q=s[1].context,u=M(q,s,s[0],z);return{c(){e=y("div"),l=y("div"),t=y("div"),a=C("MY ROLE"),n=D(),v&&v.c(),c=D(),h=y("div"),o=y("div"),r=C("CONTEXT"),g=D(),u&&u.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var p=E(e);l=I(p,"DIV",{class:!0});var S=E(l);t=I(S,"DIV",{class:!0});var Y=E(t);a=L(Y,"MY ROLE"),Y.forEach(d),n=T(S),v&&v.l(S),S.forEach(d),c=T(p),h=I(p,"DIV",{class:!0});var V=E(h);o=I(V,"DIV",{class:!0});var w=E(o);r=L(w,"CONTEXT"),w.forEach(d),g=T(V),u&&u.l(V),V.forEach(d),p.forEach(d),this.h()},h(){_(t,"class","section-label svelte-gogygg"),_(l,"class","my-role-container svelte-gogygg"),_(o,"class","section-label svelte-gogygg"),_(h,"class","context-container svelte-gogygg"),_(e,"class","context-section-container svelte-gogygg")},m(i,p){O(i,e,p),f(e,l),f(l,t),f(t,a),f(l,n),v&&v.m(l,null),f(e,c),f(e,h),f(h,o),f(o,r),f(h,g),u&&u.m(h,null),m=!0},p(i,[p]){v&&v.p&&(!m||p&1)&&P(v,b,i,i[0],m?N(b,i[0],p,Z):G(i[0]),F),u&&u.p&&(!m||p&1)&&P(u,q,i,i[0],m?N(q,i[0],p,U):G(i[0]),z)},i(i){m||(W(v,i),W(u,i),m=!0)},o(i){X(v,i),X(u,i),m=!1},d(i){i&&d(e),v&&v.d(i),u&&u.d(i)}}}function te(s,e,l){let{$$slots:t={},$$scope:a}=e;return s.$$set=n=>{"$$scope"in n&&l(0,a=n.$$scope)},[a,t]}class ce extends R{constructor(e){super(),$(this,e,te,ee,A,{})}}const se=s=>({}),H=s=>({class:"paragraph svelte-kn9nyi"});function le(s){let e,l,t,a,n,c;const h=s[2].paragraph,o=M(h,s,s[1],H);return{c(){e=y("div"),l=y("div"),t=C(s[0]),a=D(),n=y("div"),o&&o.c(),this.h()},l(r){e=I(r,"DIV",{class:!0});var g=E(e);l=I(g,"DIV",{class:!0});var m=E(l);t=L(m,s[0]),m.forEach(d),a=T(g),n=I(g,"DIV",{class:!0});var b=E(n);o&&o.l(b),b.forEach(d),g.forEach(d),this.h()},h(){_(l,"class","section-label svelte-kn9nyi"),_(n,"class","paragraph svelte-kn9nyi"),_(e,"class","paragraph-container svelte-kn9nyi")},m(r,g){O(r,e,g),f(e,l),f(l,t),f(e,a),f(e,n),o&&o.m(n,null),c=!0},p(r,[g]){(!c||g&1)&&J(t,r[0]),o&&o.p&&(!c||g&2)&&P(o,h,r,r[1],c?N(h,r[1],g,se):G(r[1]),H)},i(r){c||(W(o,r),c=!0)},o(r){X(o,r),c=!1},d(r){r&&d(e),o&&o.d(r)}}}function ae(s,e,l){let{$$slots:t={},$$scope:a}=e,{sectionLabel:n=""}=e;return s.$$set=c=>{"sectionLabel"in c&&l(0,n=c.sectionLabel),"$$scope"in c&&l(1,a=c.$$scope)},[n,a,t]}class _e extends R{constructor(e){super(),$(this,e,ae,le,A,{sectionLabel:0})}}export{ce as C,_e as P,re as T,oe as W};
