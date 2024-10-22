import{s as n,i as l}from"./assets/vendor-DnUmO7qu.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function c(i){const a=new URLSearchParams({key:"3632143-ebeee10190d206f1a5cb99fa1",q:encodeURIComponent(i),image_type:"photo",orientation:"horizontal",safesearch:!0}),s=await fetch(`https://pixabay.com/api/?${a}`);if(!s.ok)throw new Error(s.status);return await s.json()}function m(i){const a=document.querySelector(".images-list"),s=i.hits.map(e=>`
      <li class="images-item">
        <a class="images-link" href="${e.largeImageURL}" onclick="return false">
          <img
            class="image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>
        <div class="image-statistics">
          <ul class="stat-list stat-titles-list">
            <li class="stat-titles-item">
              <span class="stat-title">Likes</span>
              <span class="stat-value">${e.likes}</span>
            </li>
            <li class="stat-titles-item">
              <span class="stat-title">Views</span>
              <span class="stat-value">${e.views}</span>
            </li>
            <li class="stat-titles-item">
              <span class="stat-title">Comments</span>
              <span class="stat-value">${e.comments}</span>
            </li>
            <li class="stat-titles-item">
              <span class="stat-title">Downloads</span>
              <span class="stat-value">${e.downloads}</span>
            </li>
          </ul>
        </div>
      </li>`).join("");a.insertAdjacentHTML("beforeend",s),new n(".images-list a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const u=document.querySelector("form");u.addEventListener("submit",i=>{i.preventDefault(),document.querySelector(".images-list").innerHTML="";const s=i.target.elements.query.value,r=document.querySelector(".loader");r.classList.remove("hidden"),c(s).then(e=>{r.classList.add("hidden"),e.hits.length?m(e):l.error({class:"error-alert",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",maxWidth:432})}).catch(e=>console.log(e))});
//# sourceMappingURL=index.js.map
