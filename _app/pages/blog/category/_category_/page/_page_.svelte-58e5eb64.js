import{S as V,i as X,s as Y,e as j,k as q,l as K,W as Z,c as A,d as _,m as d,b as I,H as c,g as k,o as C,p as $,q as H,n as x,t as b,a as L,h as y,E as T,w as U,x as W,y as F,j as N,B as G}from"../../../../../chunks/index-da827fff.js";import{f as tt}from"../../../../../chunks/fetchPosts-0e567cc8.js";import{p as M,b as et}from"../../../../../chunks/config-55cc70d6.js";import{a as Q,P as ot}from"../../../../../chunks/Pagination-ae63c1d0.js";import"../../../../../chunks/preload-helper-e4860ae8.js";import"../../../../../chunks/formatDate-fc285d6f.js";function st(a){let o,l,p,r,i,u,s,h;return{c(){o=j("h1"),l=b("Oops!"),p=q(),r=j("p"),i=b("Sorry, no posts to show here."),u=q(),s=j("a"),h=b("Back to blog"),this.h()},l(e){o=A(e,"H1",{});var g=L(o);l=y(g,"Oops!"),g.forEach(_),p=d(e),r=A(e,"P",{});var n=L(r);i=y(n,"Sorry, no posts to show here."),n.forEach(_),u=d(e),s=A(e,"A",{href:!0});var m=L(s);h=y(m,"Back to blog"),m.forEach(_),this.h()},h(){I(s,"href","/blog")},m(e,g){k(e,o,g),c(o,l),k(e,p,g),k(e,r,g),c(r,i),k(e,u,g),k(e,s,g),c(s,h)},p:T,i:T,o:T,d(e){e&&_(o),e&&_(p),e&&_(r),e&&_(u),e&&_(s)}}}function at(a){let o,l,p,r,i,u,s,h,e,g,n,m,w,D,B,O,E,R,v,S;return B=new Q({props:{currentPage:a[0],totalPosts:a[2],path:"/blog/category/"+a[1]+"/page"}}),E=new ot({props:{posts:a[3]}}),v=new Q({props:{currentPage:a[0],totalPosts:a[2],path:"/blog/category/"+a[1]+"/page"}}),{c(){o=j("h1"),l=b("Category: "),p=b(a[1]),r=q(),i=j("br"),u=q(),s=j("small"),h=b("Posts "),e=b(a[5]),g=b("\u2013"),n=b(a[4]),m=b(" of "),w=b(a[2]),D=q(),U(B.$$.fragment),O=q(),U(E.$$.fragment),R=q(),U(v.$$.fragment)},l(t){o=A(t,"H1",{});var f=L(o);l=y(f,"Category: "),p=y(f,a[1]),r=d(f),i=A(f,"BR",{}),u=d(f),s=A(f,"SMALL",{});var P=L(s);h=y(P,"Posts "),e=y(P,a[5]),g=y(P,"\u2013"),n=y(P,a[4]),m=y(P," of "),w=y(P,a[2]),P.forEach(_),f.forEach(_),D=d(t),W(B.$$.fragment,t),O=d(t),W(E.$$.fragment,t),R=d(t),W(v.$$.fragment,t)},m(t,f){k(t,o,f),c(o,l),c(o,p),c(o,r),c(o,i),c(o,u),c(o,s),c(s,h),c(s,e),c(s,g),c(s,n),c(s,m),c(s,w),k(t,D,f),F(B,t,f),k(t,O,f),F(E,t,f),k(t,R,f),F(v,t,f),S=!0},p(t,f){(!S||f&2)&&N(p,t[1]),(!S||f&32)&&N(e,t[5]),(!S||f&16)&&N(n,t[4]),(!S||f&4)&&N(w,t[2]);const P={};f&1&&(P.currentPage=t[0]),f&4&&(P.totalPosts=t[2]),f&2&&(P.path="/blog/category/"+t[1]+"/page"),B.$set(P);const J={};f&8&&(J.posts=t[3]),E.$set(J);const z={};f&1&&(z.currentPage=t[0]),f&4&&(z.totalPosts=t[2]),f&2&&(z.path="/blog/category/"+t[1]+"/page"),v.$set(z)},i(t){S||(H(B.$$.fragment,t),H(E.$$.fragment,t),H(v.$$.fragment,t),S=!0)},o(t){C(B.$$.fragment,t),C(E.$$.fragment,t),C(v.$$.fragment,t),S=!1},d(t){t&&_(o),t&&_(D),G(B,t),t&&_(O),G(E,t),t&&_(R),G(v,t)}}}function lt(a){let o,l,p,r,i,u,s;document.title=o="Blog - page "+a[0];const h=[at,st],e=[];function g(n,m){return n[3].length?0:1}return r=g(a),i=e[r]=h[r](a),{c(){l=j("meta"),p=q(),i.c(),u=K(),this.h()},l(n){const m=Z('[data-svelte="svelte-1qczpud"]',document.head);l=A(m,"META",{"data-key":!0,name:!0}),m.forEach(_),p=d(n),i.l(n),u=K(),this.h()},h(){I(l,"data-key","description"),I(l,"name",et)},m(n,m){c(document.head,l),k(n,p,m),e[r].m(n,m),k(n,u,m),s=!0},p(n,[m]){(!s||m&1)&&o!==(o="Blog - page "+n[0])&&(document.title=o);let w=r;r=g(n),r===w?e[r].p(n,m):(x(),C(e[w],1,1,()=>{e[w]=null}),$(),i=e[r],i?i.p(n,m):(i=e[r]=h[r](n),i.c()),H(i,1),i.m(u.parentNode,u))},i(n){s||(H(i),s=!0)},o(n){C(i),s=!1},d(n){_(l),n&&_(p),e[r].d(n),n&&_(u)}}}const _t=async({fetch:a,params:o})=>{try{const l=o.page?o.page:1,{category:p}=o;if(l<=1)return{status:301,redirect:`/blog/category/${p}`};let r=l*M-M;const i=await a("/api/posts/count.json"),{total:u}=await i.json(),{posts:s}=await tt({offset:r,page:l});return{status:200,props:{posts:s,page:l,category:p,totalPosts:u}}}catch(l){return{status:404,error:l.message}}};function rt(a,o,l){let p,r,{page:i}=o,{category:u}=o,{totalPosts:s}=o,{posts:h=[]}=o;return a.$$set=e=>{"page"in e&&l(0,i=e.page),"category"in e&&l(1,u=e.category),"totalPosts"in e&&l(2,s=e.totalPosts),"posts"in e&&l(3,h=e.posts)},a.$$.update=()=>{a.$$.dirty&1&&l(5,p=i*M-(M-1)||1),a.$$.dirty&5&&l(4,r=Math.min(i*M,s))},[i,u,s,h,r,p]}class ct extends V{constructor(o){super(),X(this,o,rt,lt,Y,{page:0,category:1,totalPosts:2,posts:3})}}export{ct as default,_t as load};