const list = document.querySelector(".list");
const fragment = new DocumentFragment();
for (let i = 0; i < 9; i++) {
  const li = document.createElement("li");
  li.classList.add(`line-${i + 1}`);
  li.style.setProperty("--line-index", i + 1);
  fragment.appendChild(li);
}
list.appendChild(fragment);
