// script.js

const tooltip = document.getElementById("tooltip");
const areas = document.querySelectorAll("area");

areas.forEach(area => {
  area.addEventListener("mousemove", (e) => {
    tooltip.style.display = "block";

    tooltip.textContent = area.alt;

    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  });

  area.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});