import{S as D,i as H,s as R,e as $,k as y,t as S,w,W as A,c as P,d as p,m as v,a as B,h as C,x as j,b as f,H as d,g as E,y as k,q,o as x,B as b}from"../../chunks/index-da827fff.js";import{P as I,a as L}from"../../chunks/Pagination-f9c5f504.js";import{b as M}from"../../chunks/config-4d1d4a44.js";import"../../chunks/formatDate-fc285d6f.js";function T(i){let e,n,s,a,r,_,l,g,c,h;return l=new I({props:{posts:i[0]}}),c=new L({props:{currentPage:1,totalPosts:i[1]}}),{c(){e=$("meta"),n=y(),s=$("div"),a=$("h1"),r=S("Blog Posts"),_=y(),w(l.$$.fragment),g=y(),w(c.$$.fragment),this.h()},l(t){const m=A('[data-svelte="svelte-a95988"]',document.head);e=P(m,"META",{"data-key":!0,name:!0,content:!0}),m.forEach(p),n=v(t),s=P(t,"DIV",{class:!0});var o=B(s);a=P(o,"H1",{class:!0});var u=B(a);r=C(u,"Blog Posts"),u.forEach(p),_=v(o),j(l.$$.fragment,o),g=v(o),j(c.$$.fragment,o),o.forEach(p),this.h()},h(){document.title="Blog",f(e,"data-key","description"),f(e,"name","description"),f(e,"content",M),f(a,"class","sr-only"),f(s,"class","main-height")},m(t,m){d(document.head,e),E(t,n,m),E(t,s,m),d(s,a),d(a,r),d(s,_),k(l,s,null),d(s,g),k(c,s,null),h=!0},p(t,[m]){const o={};m&1&&(o.posts=t[0]),l.$set(o);const u={};m&2&&(u.totalPosts=t[1]),c.$set(u)},i(t){h||(q(l.$$.fragment,t),q(c.$$.fragment,t),h=!0)},o(t){x(l.$$.fragment,t),x(c.$$.fragment,t),h=!1},d(t){p(e),t&&p(n),t&&p(s),b(l),b(c)}}}const J=async({fetch:i})=>{const e=await i("/api/posts.json"),{posts:n}=await e.json(),s=await i("/api/posts/count.json"),{total:a}=await s.json();return{props:{posts:n,total:a}}};function V(i,e,n){let{posts:s}=e,{total:a}=e;return i.$$set=r=>{"posts"in r&&n(0,s=r.posts),"total"in r&&n(1,a=r.total)},[s,a]}class K extends D{constructor(e){super(),H(this,e,V,T,R,{posts:0,total:1})}}export{K as default,J as load};
