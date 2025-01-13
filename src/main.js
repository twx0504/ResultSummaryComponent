import "./style.css";
import data from "./data.json";

const dlElement = document.querySelector(".summary-card");
const docFrag = document.createDocumentFragment();
const html = String.raw;
function setData() {
  data.forEach((it, idx) => {
    const div = document.createElement("div");
    div.setAttribute("class", "summary-item-wrapper");
    /* html tag here is for prettier to work. */
    div.innerHTML = html`
      <dt class="summary-item">
        <img
          width="20"
          height="20"
          src=${it.icon}
          alt="A ${it.category.toLowerCase()} logo."
        />
        <h3>${it.category}</h3>
      </dt>
      <dd><span class="summary-score-value">${it.score}</span> / 100</dd>
    `;
    docFrag.appendChild(div);
  });
  dlElement.appendChild(docFrag);
}
setData();
