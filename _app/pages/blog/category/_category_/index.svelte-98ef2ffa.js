import{S as L,i as N,s as R,k as B,e as k,t as d,W as T,d as u,m as S,c as v,a as P,h as b,b as G,g as E,H as g,j as I,o as j,p as U,q,n as V,E as O,w as $,x as D,y as H,B as A}from"../../../../chunks/index-da827fff.js";import{f as W}from"../../../../chunks/fetchPosts-ce7cdf2e.js";import{P as z,a as F}from"../../../../chunks/Pagination-811335c5.js";import"../../../../chunks/preload-helper-e4860ae8.js";import"../../../../chunks/config-1d54eb6d.js";function J(f){let e,a,o,l,t,s,m,n,c,h;return{c(){e=k("p"),a=k("strong"),o=d("Ope!"),l=d(` Sorry, couldn't find any posts in the category "`),t=d(f[1]),s=d('".'),m=B(),n=k("p"),c=k("a"),h=d("Back to blog"),this.h()},l(p){e=v(p,"P",{});var i=P(e);a=v(i,"STRONG",{});var w=P(a);o=b(w,"Ope!"),w.forEach(u),l=b(i,` Sorry, couldn't find any posts in the category "`),t=b(i,f[1]),s=b(i,'".'),i.forEach(u),m=S(p),n=v(p,"P",{});var r=P(n);c=v(r,"A",{href:!0});var _=P(c);h=b(_,"Back to blog"),_.forEach(u),r.forEach(u),this.h()},h(){G(c,"href","/blog")},m(p,i){E(p,e,i),g(e,a),g(a,o),g(e,l),g(e,t),g(e,s),E(p,m,i),E(p,n,i),g(n,c),g(c,h)},p(p,i){i&2&&I(t,p[1])},i:O,o:O,d(p){p&&u(e),p&&u(m),p&&u(n)}}}function K(f){let e,a,o,l;return e=new z({props:{posts:f[0]}}),o=new F({props:{currentPage:"1",totalPosts:f[2],path:"/blog/category/"+f[1]+"/page"}}),{c(){$(e.$$.fragment),a=B(),$(o.$$.fragment)},l(t){D(e.$$.fragment,t),a=S(t),D(o.$$.fragment,t)},m(t,s){H(e,t,s),E(t,a,s),H(o,t,s),l=!0},p(t,s){const m={};s&1&&(m.posts=t[0]),e.$set(m);const n={};s&4&&(n.totalPosts=t[2]),s&2&&(n.path="/blog/category/"+t[1]+"/page"),o.$set(n)},i(t){l||(q(e.$$.fragment,t),q(o.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),j(o.$$.fragment,t),l=!1},d(t){A(e,t),t&&u(a),A(o,t)}}}function M(f){let e,a,o,l,t,s,m,n,c,h;document.title=e="Category: "+f[1];const p=[K,J],i=[];function w(r,_){return r[0].length?0:1}return n=w(f),c=i[n]=p[n](f),{c(){a=B(),o=k("div"),l=k("h1"),t=d("Blog category: "),s=d(f[1]),m=B(),c.c(),this.h()},l(r){T('[data-svelte="svelte-2blklu"]',document.head).forEach(u),a=S(r),o=v(r,"DIV",{class:!0});var y=P(o);l=v(y,"H1",{});var C=P(l);t=b(C,"Blog category: "),s=b(C,f[1]),C.forEach(u),m=S(y),c.l(y),y.forEach(u),this.h()},h(){G(o,"class","container")},m(r,_){E(r,a,_),E(r,o,_),g(o,l),g(l,t),g(l,s),g(o,m),i[n].m(o,null),h=!0},p(r,[_]){(!h||_&2)&&e!==(e="Category: "+r[1])&&(document.title=e),(!h||_&2)&&I(s,r[1]);let y=n;n=w(r),n===y?i[n].p(r,_):(V(),j(i[y],1,1,()=>{i[y]=null}),U(),c=i[n],c?c.p(r,_):(c=i[n]=p[n](r),c.c()),q(c,1),c.m(o,null))},i(r){h||(q(c),h=!0)},o(r){j(c),h=!1},d(r){r&&u(a),r&&u(o),i[n].d()}}}const et=async({params:f,fetch:e})=>{const a=f.category,o={category:a},{posts:l}=await W(o),t=await e(`/api/posts/category/${a}/count.json`),{total:s}=await t.json();return{props:{posts:l,category:a,total:s}}};function Q(f,e,a){let{posts:o}=e,{category:l}=e,{total:t}=e;return f.$$set=s=>{"posts"in s&&a(0,o=s.posts),"category"in s&&a(1,l=s.category),"total"in s&&a(2,t=s.total)},[o,l,t]}class ot extends L{constructor(e){super(),N(this,e,Q,M,R,{posts:0,category:1,total:2})}}export{ot as default,et as load};
