const carousel = [
  {
    src: "/local/carousel-image1.png",
    text: "“The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.”",
  },
  {
    src: "/local/carousel-image2.png",
    text: "“If you’re an over-cleaner, like myself, you’ll nerd out on all of the functions. If you avoid this chore at all costs, you’ll appreciate how simple Samsung makes it.”",
  },
  {
    src: "/local/carousel-image3.png",
    text: "“Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)”",
  },
  {
    src: "/local/carousel-image4.png",
    text: "“When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that’s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after every use. It’s like a vacuum for your vacuum.”",
  },
  {
    src: "/local/carousel-image5.png",
    text: "“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”",
  },
];

let currentIndex = 0;
let breathAnimation;

const imageElement = document.querySelector(".carousel-image");
const textElement = document.querySelector(".carousel-text");
const counterElement = document.querySelector(".carousel-pages");

function updateCarousel() {
  const currentImage = carousel[currentIndex];
  imageElement.src = currentImage.src;
  textElement.textContent = currentImage.text;
  counterElement.textContent = `${currentIndex + 1} / ${carousel.length}`;
}

function startBreathingEffect() {
  breathAnimation = gsap.to(".buy-button", {
    scale: 1.1,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });
}
function animateCarouselButton(buttonClass, direction) {
  gsap.to(buttonClass, {
    scale: 0.6,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
  });

  gsap.fromTo(
    ".carousel-text",
    { x: direction * 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, ease: "power1.out" }
  );

  gsap.fromTo(
    ".carousel-read-more-button",
    { x: direction * 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, ease: "power1.out" }
  );

  gsap.fromTo(
    ".carousel-image",
    { opacity: 0 },
    { opacity: 1, duration: 0.7, ease: "power1.out" }
  );
}

document
  .querySelector(".carousel-read-more-button")
  .addEventListener("click", () => {
    window.location.assign("load-more.html");
  });

document.querySelector(".buy-button").addEventListener("click", () => {
  window.location.assign("purchase.html");
});

document.querySelector(".buy-button").addEventListener("mouseenter", () => {
  breathAnimation.pause();
  gsap.to(".buy-button", { scale: 1.1, duration: 0.4 });
});

document.querySelector(".buy-button").addEventListener("mouseleave", () => {
  breathAnimation.resume();
});

document
  .querySelector(".carousel-prev-button")
  .addEventListener("click", () => {
    animateCarouselButton(".carousel-prev-button", -1);
    currentIndex = (currentIndex - 1 + carousel.length) % carousel.length;
    updateCarousel();
  });

document
  .querySelector(".carousel-next-button")
  .addEventListener("click", () => {
    animateCarouselButton(".carousel-next-button", 1);
    currentIndex = (currentIndex + 1) % carousel.length;
    updateCarousel();
  });

updateCarousel();

const logoTimeLine = gsap.timeline();

logoTimeLine.from(".logo-image", {
  x: -300,
  duration: 1,
});

logoTimeLine.to(".logo-image", {
  y: -100,
  duration: 1,
});

gsap.from(".sub-article-product", {
  x: -300,
  duration: 1,
});

gsap.from(".sub-article-discount", {
  x: -300,
  duration: 1,
});

gsap.from(".main-article-text-line", {
  x: -600,
  delay: 1,
  duration: 1,
  stagger: 0.5,
});

gsap.to(".main-image-block", {
  width: "0",
  delay: 3,
  duration: 1,
});

gsap.to(".white-block", {
  width: "55%",
  delay: 3,
  duration: 1,
});

gsap.to(".carousel-images-block", {
  width: "45%",
  delay: 3,
  duration: 1,
});

gsap.to(".sub-article-product", {
  display: "none",
  delay: 3,
  duration: 0.2,
});

gsap.to(".sub-article-discount", {
  display: "none",
  delay: 3,
  duration: 0.2,
});

gsap.fromTo(
  ".remark-text",
  { opacity: 1 },
  { opacity: 0, delay: 3, duration: 0.1 }
);

gsap.to(".remark-text", {
  opacity: 1,
  duration: 1,
  delay: 4.2,
});

gsap.to(".buy-button", {
  display: "block",
  opacity: 1,
  duration: 1,
  delay: 4.2,
  onComplete: () => {
    startBreathingEffect();
  },
});

gsap.to(".carousel-text-block", {
  opacity: 1,
  duration: 1,
  delay: 4.2,
});
gsap.to(".carousel-pagination", {
  opacity: 1,
  duration: 1,
  delay: 4.2,
});
