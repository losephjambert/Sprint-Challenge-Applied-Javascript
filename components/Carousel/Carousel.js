/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const CarouselContainer = document.querySelector('.carousel-container');
const carouselImages = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg',
];

function Carousel(images) {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');
  const imagesArr = images.map(image => {
    const newImg = document.createElement('img');
    newImg.src = image;
    return newImg;
  });

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  carousel.append(leftButton, ...imagesArr, rightButton);

  /* Functionality
    As a user:
    When I click or tap the left button,
    the Carousel should decrease the current index by 1
    and the Carousel should display the previous image in the carousel image list
    and if the current index is 0, the current index should update to the length of the carousel image list - 1
    and the carousel should display the last image in the carousel image list.

    When I click or tap the right button,
    the Carousel should increase the current index by 1
    and the Carousel should display the next image in the carousel image list
    and if the current index is the length of the carousel image list - 1, the current index should update to 0
    and the carousel should display the last image in the carousel image list.

  */

  let currentIndex = 0;
  const currentImage = imagesArr[currentIndex];
  console.log(currentImage);
  currentImage.classList.toggle('active');

  return carousel;
}

CarouselContainer.appendChild(Carousel(carouselImages));
