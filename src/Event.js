const cardContainer = document.querySelector(".cardContainer");
const leftArrow = document.querySelector(".LLEFT");
const rightArrow = document.querySelector(".RRIGHT");

function scrollContainer(direction) {
  const scrollAmount = 300;
  if (direction === "right") {
    cardContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  } else {
    cardContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
}

rightArrow.addEventListener("click", () => scrollContainer("right"));
leftArrow.addEventListener("click", () => scrollContainer("left"));





