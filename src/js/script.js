require('../css/style.css');

const slider = document.querySelector(".slider");
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");

// Количество слайдов на экране (можно менять)
let slidesPerView = 3;
let currentIndex = 0;

// Устанавливаем ширину слайдов
function setSlideWidth() {
     const slideWidth = 100 / slidesPerView;
     slides.forEach(slide => {
          slide.style.flex = `0 0 ${slideWidth}%`;
     });
}

// Обновляем состояние кнопок
function updateButtons() {
     prevBtn.disabled = currentIndex === 0;
     nextBtn.disabled = currentIndex >= slides.length - slidesPerView;
}

// Перемещаем слайды
function moveSlides() {
     const slideWidth = slider.clientWidth / slidesPerView;
     slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Обработчики событий
prevBtn.addEventListener("click", () => {
     if (currentIndex > 0) {
          currentIndex--;
          moveSlides();
          updateButtons();
     }
});

nextBtn.addEventListener("click", () => {
     if (currentIndex < slides.length - slidesPerView) {
          currentIndex++;
          moveSlides();
          updateButtons();
     }
});

// Поддержка прокрутки колёсиком
slider.addEventListener("wheel", (e) => {
     e.preventDefault();
     if (e.deltaY > 0 && currentIndex < slides.length - slidesPerView) {
          currentIndex++;
     } else if (e.deltaY < 0 && currentIndex > 0) {
          currentIndex--;
     }
     moveSlides();
     updateButtons();
});

// Инициализация
setSlideWidth();
updateButtons();
moveSlides();

// Адаптация при изменении размера окна
window.addEventListener("resize", () => {
     setSlideWidth();
     moveSlides();
});