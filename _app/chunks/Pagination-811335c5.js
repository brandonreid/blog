import{S as O,i as Q,s as M,e as v,k as w,t as y,c as d,a as b,m as C,h as N,d as h,X as T,b as u,f as V,g as H,H as _,j as q,E as G,P as Y,l as S}from"./index-da827fff.js";import{p as Z}from"./config-1d54eb6d.js";function X(i,a,l){const e=i.slice();return e[1]=a[l],e}function z(i){let a,l,e,t,r,n,s,o,k,P=i[1].title+"",I,E,p,c,f=i[1].excerpt+"",A,L;return{c(){a=v("li"),l=v("article"),e=v("a"),t=v("img"),o=w(),k=v("h2"),I=y(P),p=w(),c=v("p"),A=y(f),L=w(),this.h()},l(m){a=d(m,"LI",{});var g=b(a);l=d(g,"ARTICLE",{});var U=b(l);e=d(U,"A",{href:!0});var W=b(e);t=d(W,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),o=C(W),k=d(W,"H2",{});var j=b(k);I=N(j,P),j.forEach(h),W.forEach(h),U.forEach(h),p=C(g),c=d(g,"P",{});var R=b(c);A=N(R,f),R.forEach(h),L=C(g),g.forEach(h),this.h()},h(){T(t.src,r=i[1].coverImage)||u(t,"src",r),u(t,"alt",""),u(t,"width",n=i[1].coverWidth),u(t,"height",s=i[1].coverHeight),V(t,"ratio",i[1].coverWidth+" / "+i[1].coverHeight),u(e,"href",E="/blog/"+i[1].slug)},m(m,g){H(m,a,g),_(a,l),_(l,e),_(e,t),_(e,o),_(e,k),_(k,I),_(a,p),_(a,c),_(c,A),_(a,L)},p(m,g){g&1&&!T(t.src,r=m[1].coverImage)&&u(t,"src",r),g&1&&n!==(n=m[1].coverWidth)&&u(t,"width",n),g&1&&s!==(s=m[1].coverHeight)&&u(t,"height",s),g&1&&V(t,"ratio",m[1].coverWidth+" / "+m[1].coverHeight),g&1&&P!==(P=m[1].title+"")&&q(I,P),g&1&&E!==(E="/blog/"+m[1].slug)&&u(e,"href",E),g&1&&f!==(f=m[1].excerpt+"")&&q(A,f)},d(m){m&&h(a)}}}function $(i){let a,l=i[0],e=[];for(let t=0;t<l.length;t+=1)e[t]=z(X(i,l,t));return{c(){a=v("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){a=d(t,"UL",{class:!0});var r=b(a);for(let n=0;n<e.length;n+=1)e[n].l(r);r.forEach(h),this.h()},h(){u(a,"class","posts-list")},m(t,r){H(t,a,r);for(let n=0;n<e.length;n+=1)e[n].m(a,null)},p(t,[r]){if(r&1){l=t[0];let n;for(n=0;n<l.length;n+=1){const s=X(t,l,n);e[n]?e[n].p(s,r):(e[n]=z(s),e[n].c(),e[n].m(a,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=l.length}},i:G,o:G,d(t){t&&h(a),Y(e,t)}}}function x(i,a,l){let{posts:e=[]}=a;return i.$$set=t=>{"posts"in t&&l(0,e=t.posts)},[e]}class ne extends O{constructor(a){super(),Q(this,a,x,$,M,{posts:0})}}function B(i,a,l){const e=i.slice();return e[5]=a[l],e}function D(i){let a,l,e=Array.from({length:i[2]},K),t=[];for(let r=0;r<e.length;r+=1)t[r]=F(B(i,e,r));return{c(){a=v("nav"),l=v("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){a=d(r,"NAV",{"aria-label":!0,class:!0});var n=b(a);l=d(n,"UL",{});var s=b(l);for(let o=0;o<t.length;o+=1)t[o].l(s);s.forEach(h),n.forEach(h),this.h()},h(){u(a,"aria-label","Pagination navigation"),u(a,"class","pagination")},m(r,n){H(r,a,n),_(a,l);for(let s=0;s<t.length;s+=1)t[s].m(l,null)},p(r,n){if(n&14){e=Array.from({length:r[2]},K);let s;for(s=0;s<e.length;s+=1){const o=B(r,e,s);t[s]?t[s].p(o,n):(t[s]=F(o),t[s].c(),t[s].m(l,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=e.length}},d(r){r&&h(a),Y(t,r)}}}function ee(i){let a;return{c(){a=y("Go to page")},l(l){a=N(l,"Go to page")},m(l,e){H(l,a,e)},d(l){l&&h(a)}}}function te(i){let a;return{c(){a=y("Current page:")},l(l){a=N(l,"Current page:")},m(l,e){H(l,a,e)},d(l){l&&h(a)}}}function F(i){let a,l,e,t,r,n=i[5]+"",s,o,k,P;function I(c,f){return f&4&&(t=null),t==null&&(t=!!c[3](c[5])),t?te:ee}let E=I(i,-1),p=E(i);return{c(){a=v("li"),l=v("a"),e=v("span"),p.c(),r=w(),s=y(n),P=w(),this.h()},l(c){a=d(c,"LI",{});var f=b(a);l=d(f,"A",{href:!0,"aria-current":!0});var A=b(l);e=d(A,"SPAN",{class:!0});var L=b(e);p.l(L),L.forEach(h),r=C(A),s=N(A,n),A.forEach(h),P=C(f),f.forEach(h),this.h()},h(){u(e,"class","sr-only"),u(l,"href",o=i[1]+"/"+i[5]),u(l,"aria-current",k=i[3](i[5]))},m(c,f){H(c,a,f),_(a,l),_(l,e),p.m(e,null),_(l,r),_(l,s),_(a,P)},p(c,f){E!==(E=I(c,f))&&(p.d(1),p=E(c),p&&(p.c(),p.m(e,null))),f&4&&n!==(n=c[5]+"")&&q(s,n),f&6&&o!==(o=c[1]+"/"+c[5])&&u(l,"href",o),f&4&&k!==(k=c[3](c[5]))&&u(l,"aria-current",k)},d(c){c&&h(a),p.d()}}}function J(i){let a,l=i[2]>1&&D(i);return{c(){l&&l.c(),a=S()},l(e){l&&l.l(e),a=S()},m(e,t){l&&l.m(e,t),H(e,a,t)},p(e,t){e[2]>1?l?l.p(e,t):(l=D(e),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(e){l&&l.d(e),e&&h(a)}}}function le(i){let a=i[0],l,e=J(i);return{c(){e.c(),l=S()},l(t){e.l(t),l=S()},m(t,r){e.m(t,r),H(t,l,r)},p(t,[r]){r&1&&M(a,a=t[0])?(e.d(1),e=J(t),e.c(),e.m(l.parentNode,l)):e.p(t,r)},i:G,o:G,d(t){t&&h(l),e.d(t)}}}const K=(i,a)=>a+1;function ae(i,a,l){let{currentPage:e}=a,{totalPosts:t}=a,{path:r="/blog/page"}=a,n;const s=o=>o==e;return i.$$set=o=>{"currentPage"in o&&l(0,e=o.currentPage),"totalPosts"in o&&l(4,t=o.totalPosts),"path"in o&&l(1,r=o.path)},i.$$.update=()=>{i.$$.dirty&16&&l(2,n=Math.ceil(t/Z))},[e,r,n,s,t]}class se extends O{constructor(a){super(),Q(this,a,ae,le,M,{currentPage:0,totalPosts:4,path:1})}}export{ne as P,se as a};