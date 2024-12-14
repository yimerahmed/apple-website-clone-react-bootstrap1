function scrollCarousel(direction) {
    const wrapper = document.querySelector('.favoriteWrapper');
    const itemWidth = wrapper.querySelector(".favorites").offsetWidth;
    const scrollAmount = itemWidth * direction; 
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}



// function scrollCarousel(event, direction) {
//   const button = event.currentTarget;
//   const carousel = button.closest(".carousel");
//   const wrapper = carousel.querySelector(".carousel-wrapper");
//   const itemWidth = wrapper.querySelector(".carousel-item").offsetWidth; // Get the width of the first item
//   const scrollAmount = itemWidth * direction; // Calculate the amount to scroll
//   wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
// }

// // Add event listeners to buttons
// document.querySelectorAll(".carousel-control-next").forEach((button) => {
//   button.addEventListener("click", (event) => scrollCarousel(event, 1));
// });

// document.querySelectorAll(".carousel-control-prev").forEach((button) => {
//   button.addEventListener("click", (event) => scrollCarousel(event, -1));
// });
// const cardContainer = document.getElementById('cardContainer');
//         const cards = document.querySelectorAll('.card');
//         const prevButton = document.getElementById('prevButton');
//         const nextButton = document.getElementById('nextButton');

//         let currentIndex = 0;

//         function updateActiveButton() {
//             cards.forEach((card, index) => {
//                 card.classList.toggle('carousel-control-active', index === currentIndex);
//             });
//         }

//         function scrollToIndex(index) {
//             const cardWidth = cards[0].offsetWidth;
//             cardContainer.scrollTo({
//                 left: cardWidth * index,
//                 behavior: 'smooth'
//             });
//             currentIndex = index;
//             updateActiveButton();
//         }

//         prevButton.addEventListener('click', () => {
//             if (currentIndex > 0) {
//                 scrollToIndex(currentIndex - 1);
//             }
//         });

//         nextButton.addEventListener('click', () => {
//             if (currentIndex < cards.length - 1) {
//                 scrollToIndex(currentIndex + 1);
//             }
//         });

//         // Initialize active button
//         updateActiveButton();
    




 const carouselContainer = document.getElementById("carouselContainer");
 const prevButton = document.getElementById("prevButton");
 const nextButton = document.getElementById("nextButton");
 const items = document.querySelectorAll(".favorites");
 const itemWidth = items[0].offsetWidth; // Width of each item

 let currentIndex = 0;

 function updateCarousel() {
   carouselContainer.scrollLeft = itemWidth * currentIndex;
 }

 prevButton.addEventListener("click", () => {
   if (currentIndex > 0) {
     currentIndex--;
     updateCarousel();
   }
 });

 nextButton.addEventListener("click", () => {
   if (currentIndex < items.length - 1) {
     currentIndex++;
     updateCarousel();
   }
 });

////////////////////////////////////////////////////

  let carouselContainers = document.getElementById('carouselContainers');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        const item = document.querySelectorAll('.favorites');
        const itemsWidth = item[0].offsetWidth; // Width of each item

        let currentIndexs = 0;

        function updateCarousel() {
            carouselContainers.scrollLeft = itemsWidth * currentIndexs;
        }

        prev.addEventListener('click', () => {
            if (currentIndexs > 0) {
                currentIndexs--;
                updateCarousel();
            }
        });

        next.addEventListener('click', () => {
            if (currentIndexs < item.length - 1) {
                currentIndexs++;
                updateCarousel();
            }
        });