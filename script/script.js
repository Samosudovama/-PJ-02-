const links = document.getElementsByClassName("link");

for (let elem of links) {
  elem.addEventListener("click", function () {
    const current = document.querySelectorAll(".link--active");
    current.forEach((elem) => elem.classList.remove("link--active"));

    this.classList.add("link--active");     
  });
}


// пробный вариант присвоения ACTIVE

// получаем элементы кнопок-переключателей слайдов и
// элементы слайдов
const toggleButton_1 = document.getElementById("toggle_button_1");
const toggleButton_2 = document.getElementById("toggle_button_2");
const toggleButton_3 = document.getElementById("toggle_button_3");
const sliderImg_1 = document.getElementById("img_1");
const sliderImg_2 = document.getElementById("img_2");
const sliderImg_3 = document.getElementById("img_3");


toggleButton_1.addEventListener("click", function () {
  this.classList.add("toggle_button-active");
  toggleButton_2.classList.remove("toggle_button-active");
  toggleButton_3.classList.remove("toggle_button-active");
 
  sliderImg_1.style.display = "block";
  sliderImg_2.style.display = "none";
  sliderImg_3.style.display = "none";
});

toggleButton_2.addEventListener("click", function () {
  this.classList.add("toggle_button-active");
  toggleButton_1.classList.remove("toggle_button-active");
  toggleButton_3.classList.remove("toggle_button-active");
 
  sliderImg_2.style.display = "block";
  sliderImg_1.style.display = "none";
  sliderImg_3.style.display = "none";
});

toggleButton_3.addEventListener("click", function () {
  this.classList.add("toggle_button-active");
  toggleButton_1.classList.remove("toggle_button-active");
  toggleButton_2.classList.remove("toggle_button-active");
 
  sliderImg_3.style.display = "block";
  sliderImg_1.style.display = "none";
  sliderImg_2.style.display = "none";
});


// SLIDER

// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }

    if(slideIndex === 0)   {
      toggleButton_1.classList.add("toggle_button-active");
      toggleButton_2.classList.remove("toggle_button-active");
      toggleButton_3.classList.remove("toggle_button-active");
    }else

    if(slideIndex === 1)   {
      toggleButton_2.classList.add("toggle_button-active");
      toggleButton_1.classList.remove("toggle_button-active");
      toggleButton_3.classList.remove("toggle_button-active");
    }else

    if(slideIndex === 2)   {
      toggleButton_3.classList.add("toggle_button-active");
      toggleButton_2.classList.remove("toggle_button-active");
      toggleButton_1.classList.remove("toggle_button-active");
    }
  });  
}

// Инициализация слайдера
updateSlider();
