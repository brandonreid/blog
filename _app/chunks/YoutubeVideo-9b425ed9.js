import{S as m,i as _,s as p,e as o,c as n,a as u,d as i,X as d,b as a,g as h,H as v,E as f}from"./index-da827fff.js";function b(c){let r,e,s;return{c(){r=o("div"),e=o("iframe"),this.h()},l(t){r=n(t,"DIV",{class:!0});var l=u(r);e=n(l,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),u(e).forEach(i),l.forEach(i),this.h()},h(){d(e.src,s=c[0])||a(e,"src",s),a(e,"title","YouTube video player"),a(e,"frameborder","0"),a(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),e.allowFullscreen=!0,a(e,"class","svelte-5j5dcl"),a(r,"class","youtube-embed svelte-5j5dcl")},m(t,l){h(t,r,l),v(r,e)},p(t,[l]){l&1&&!d(e.src,s=t[0])&&a(e,"src",s)},i:f,o:f,d(t){t&&i(r)}}}function y(c,r,e){let{src:s=""}=r;return c.$$set=t=>{"src"in t&&e(0,s=t.src)},[s]}class w extends m{constructor(r){super(),_(this,r,y,b,p,{src:0})}}export{w as Y};