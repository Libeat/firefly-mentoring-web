const bars = document.querySelector(".fas");

const minimenuItems = document.querySelectorAll("#minimenu");

function onClick() {
  minimenuItems.forEach((item) => {
    item.classList.toggle("hidden");
  });
}

bars.addEventListener("click", onClick);