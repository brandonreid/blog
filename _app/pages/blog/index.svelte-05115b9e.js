import{S as D,i as H,s as R,e as $,k as v,t as S,w as P,W as A,c as w,d as p,m as y,a as B,h as C,x as j,b as _,H as f,g as E,y as k,q,o as x,B as b}from"../../chunks/index-da827fff.js";import{P as I,a as L}from"../../chunks/Pagination-811335c5.js";import{b as M}from"../../chunks/config-1d54eb6d.js";function T(i){let e,n,s,a,r,h,l,g,c,d;return l=new I({props:{posts:i[0]}}),c=new L({props:{currentPage:1,totalPosts:i[1]}}),{c(){e=$("meta"),n=v(),s=$("div"),a=$("h1"),r=S("Blog"),h=v(),P(l.$$.fragment),g=v(),P(c.$$.fragment),this.h()},l(t){const m=A('[data-svelte="svelte-a95988"]',document.head);e=w(m,"META",{"data-key":!0,name:!0,content:!0}),m.forEach(p),n=y(t),s=w(t,"DIV",{class:!0});var o=B(s);a=w(o,"H1",{});var u=B(a);r=C(u,"Blog"),u.forEach(p),h=y(o),j(l.$$.fragment,o),g=y(o),j(c.$$.fragment,o),o.forEach(p),this.h()},h(){document.title="Blog",_(e,"data-key","description"),_(e,"name","description"),_(e,"content",M),_(s,"class","container")},m(t,m){f(document.head,e),E(t,n,m),E(t,s,m),f(s,a),f(a,r),f(s,h),k(l,s,null),f(s,g),k(c,s,null),d=!0},p(t,[m]){const o={};m&1&&(o.posts=t[0]),l.$set(o);const u={};m&2&&(u.totalPosts=t[1]),c.$set(u)},i(t){d||(q(l.$$.fragment,t),q(c.$$.fragment,t),d=!0)},o(t){x(l.$$.fragment,t),x(c.$$.fragment,t),d=!1},d(t){p(e),t&&p(n),t&&p(s),b(l),b(c)}}}const G=async({fetch:i})=>{const e=await i("/api/posts.json"),{posts:n}=await e.json(),s=await i("/api/posts/count.json"),{total:a}=await s.json();return{props:{posts:n,total:a}}};function V(i,e,n){let{posts:s}=e,{total:a}=e;return i.$$set=r=>{"posts"in r&&n(0,s=r.posts),"total"in r&&n(1,a=r.total)},[s,a]}class J extends D{constructor(e){super(),H(this,e,V,T,R,{posts:0,total:1})}}export{J as default,G as load};