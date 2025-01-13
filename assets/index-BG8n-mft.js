(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a=[{category:"Reaction",score:80,icon:"./images/icon-reaction.svg"},{category:"Memory",score:92,icon:"./images/icon-memory.svg"},{category:"Verbal",score:61,icon:"./images/icon-verbal.svg"},{category:"Visual",score:73,icon:"./images/icon-visual.svg"}],d=document.querySelector(".summary-card"),n=document.createDocumentFragment(),l=String.raw;function u(){a.forEach((t,c)=>{const o=document.createElement("div");o.setAttribute("class","summary-item-wrapper"),o.innerHTML=l`
      <dt class="summary-item">
        <img
          width="20"
          height="20"
          src=${t.icon}
          alt="A ${t.category.toLowerCase()} logo."
        />
        <h3>${t.category}</h3>
      </dt>
      <dd><span class="summary-score-value">${t.score}</span> / 100</dd>
    `,n.appendChild(o)}),d.appendChild(n)}u();
