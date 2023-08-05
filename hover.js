const imageSets = [
  ["./img/1.jpg", "./img/2.jpg"],
  ["./img/3.jpg", "./img/4.jpg"],
  ["./img/5.jpg", "./img/6.jpg"],
  ["./img/2.jpg", "./img/8.jpg"],
  ["./img/1.jpg", "./img/6.jpg"],
];

const accordionItems = document.querySelectorAll(".accordion-list-item");
let currentIndex = 0;
let currentSetIndex = 0;
let cumulativeDistance = 0;
let hoverImage = null;
let first = false;

function showHoverImage() {
  if (!hoverImage) {
    hoverImage = document.createElement("img");
    hoverImage.src = imageSets[currentSetIndex][currentIndex];
    hoverImage.classList.add(
      "hover-image",
      "animate__animated",
      "animate__faster",
      "animate__fadeIn",
      "animate__zoomIn"
    );
    this.appendChild(hoverImage);
  }

  cumulativeDistance = 0;
  this.addEventListener("mousemove", moveHoverImage);
}

function removeHoverImage() {
  if (hoverImage) {
    hoverImage.classList.remove("animate__fadeIn", "animate__zoomIn");
    hoverImage.classList.add(
      "animate__faster",
      "animate__fadeOut",
      "animate__scaleDown"
    );
    hoverImage.addEventListener("animationend", onFadeOutAnimationEnd, {
      once: true,
    });
    first = false;
  }
}

function onFadeOutAnimationEnd() {
  if (hoverImage && hoverImage.parentNode) {
    hoverImage.parentNode.removeChild(hoverImage);
    hoverImage = null;
  }
}

function moveHoverImage(event) {
  if (!hoverImage) return;
  const accordionRect = this.getBoundingClientRect();
  const x = event.clientX - accordionRect.left + 20;
  const y = event.clientY - accordionRect.top + 20;
  if (x < 0 || x > accordionRect.width || y < 0 || y > accordionRect.height) {
    removeHoverImage.call(this);
    return;
  }
  cumulativeDistance +=
    Math.abs(x - hoverImage.offsetLeft) + Math.abs(y - hoverImage.offsetTop);
  if (!first) {
    cumulativeDistance = 0;
    first = true;
  }
  if (cumulativeDistance >= 400) {
    cumulativeDistance = 0;
    changeImageWithAnimation.call(this);
  }

  hoverImage.style.left = `${x}px`;
  hoverImage.style.top = `${y}px`;
}

function changeImageWithAnimation() {
  if (hoverImage) {
    hoverImage.classList.remove("animate__fadeIn", "animate__zoomIn");
    hoverImage.classList.add(
      "animate__faster",
      "animate__fadeOut",
      "animate__scaleDown"
    );
    hoverImage.addEventListener(
      "animationend",
      () => {
        currentIndex = (currentIndex + 1) % imageSets[currentSetIndex].length;
        hoverImage.src = imageSets[currentSetIndex][currentIndex];
        hoverImage.classList.remove("animate__fadeOut", "animate__scaleDown");
        hoverImage.classList.add(
          "animate__faster",
          "animate__fadeIn",
          "animate__zoomIn"
        );
        this.appendChild(hoverImage);
      },
      { once: true }
    );
  }
}

accordionItems.forEach((accordionItem, index) => {
  let hasEntered = false;

  accordionItem.addEventListener("mouseenter", () => {
    currentSetIndex = index % imageSets.length;
    if (!hasEntered) {
      hasEntered = true;
      showHoverImage.call(accordionItem);
    }
  });

  accordionItem.addEventListener("mouseleave", () => {
    hasEntered = false;
    removeHoverImage.call(accordionItem);
  });
});
