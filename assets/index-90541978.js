(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}})();let o=1;const c=document.getElementsByClassName("carrousel__container"),l=document.querySelectorAll(".carrousel__item");document.querySelector("#carrousel__arrow_left");document.querySelector("#carrousel__arrow_right");const d=l[0].clientWidth;c[0].scrollLeft+=d;document.querySelector("#carrousel__arrow_right").addEventListener("click",i=>{o===l.length-1&&(o=0);const t=l[0].clientWidth;c[0].scrollLeft-=t});document.querySelector("#carrousel__arrow_left").addEventListener("click",i=>{o===0?o=l.length-1:o-=100;const t=l[0].clientWidth;c[0].scrollLeft+=t});
