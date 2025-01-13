(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a=[{category:"Reaction",score:80,icon:"./src/assets/images/icon-reaction.svg"},{category:"Memory",score:92,icon:"./src/assets/images/icon-memory.svg"},{category:"Verbal",score:61,icon:"./src/assets/images/icon-verbal.svg"},{category:"Visual",score:73,icon:"./src/assets/images/icon-visual.svg"}],d=document.querySelector(".summary-card"),n=document.createDocumentFragment(),l=String.raw;function u(){a.forEach((t,o)=>{const s=document.createElement("div");s.setAttribute("class","summary-item-wrapper"),s.innerHTML=l`
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
    `,n.appendChild(s)}),d.appendChild(n)}u();
