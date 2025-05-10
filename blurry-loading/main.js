const container = document.querySelector(".container");
const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");

const timer = setInterval(() => {
  const style = window.getComputedStyle(loading);
  const opacity = 100 - parseInt(style.opacity * 100);
  console.log("opacity:", opacity);
  if (opacity >= 99) clearInterval(timer);
  loading.textContent = `${opacity}%`;
}, 30);
