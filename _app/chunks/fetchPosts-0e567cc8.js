var l=Object.defineProperty,n=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var c=(r,t,s)=>t in r?l(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,m=(r,t)=>{for(var s in t||(t={}))P.call(t,s)&&c(r,s,t[s]);if(_)for(var s of _(t))E.call(t,s)&&c(r,s,t[s]);return r},p=(r,t)=>n(r,u(t));import{_ as i}from"./preload-helper-e4860ae8.js";import{p as v}from"./config-55cc70d6.js";import{g as d}from"./formatDate-fc285d6f.js";const b=async({offset:r=0,limit:t=v,category:s=""}={})=>{let o=(await Promise.all(Object.entries({"../../posts/2022-05-29.md":()=>i(()=>import("./2022-05-29-007fb5f2.js"),["chunks/2022-05-29-007fb5f2.js","chunks/index-da827fff.js"]),"../../posts/2022-06-25.md":()=>i(()=>import("./2022-06-25-d3ff38f8.js"),["chunks/2022-06-25-d3ff38f8.js","chunks/index-da827fff.js","chunks/YoutubeVideo-9b425ed9.js","assets/YoutubeVideo-2d75ff58.css","chunks/ImgWithCaption-cfbba02e.js","assets/ImgWithCaption-aeea6e9d.css"]),"../../posts/2022-07-10.md":()=>i(()=>import("./2022-07-10-850f13b6.js"),["chunks/2022-07-10-850f13b6.js","chunks/index-da827fff.js","chunks/ImgWithCaption-cfbba02e.js","assets/ImgWithCaption-aeea6e9d.css"]),"../../posts/2022-07-31.md":()=>i(()=>import("./2022-07-31-25b998f9.js"),["chunks/2022-07-31-25b998f9.js","chunks/index-da827fff.js","chunks/YoutubeVideo-9b425ed9.js","assets/YoutubeVideo-2d75ff58.css"])}).map(async([e,a])=>{const{metadata:f}=await a(),g=e.split("/").pop().slice(0,-3);return p(m({},f),{slug:g})}))).sort((e,a)=>d(a.date)-d(e.date));return s&&(o=o.filter(e=>e.categories.includes(s))),r&&(o=o.slice(r)),t&&t<o.length&&t!=-1&&(o=o.slice(0,t)),o=o.map(e=>({title:e.title,slug:e.slug,excerpt:e.excerpt,coverImage:e.coverImage,coverWidth:e.coverWidth,coverHeight:e.coverHeight,date:e.date,categories:e.categories})),{posts:o}};export{b as f};
