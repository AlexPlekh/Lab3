// Создаем объект слайдер
const slider = {};

// Добавляем массив ссылок на картинки
slider.urls = [
    "images/Rostov-on-Don Admiral.jpg",
    "images/Sochi Thieves.jpg",
    "images/Rostov-on-Don Patriotic.jpg",
];

// Добавляем массив содержимого текстовой части для слайдов
slider.textVariants = [
    ["Rostov-on-Don<br>LCD admiral", "81 m2", "3.5 months", "Upon request"],
    ["Sochi<br>Thieves", "105 m2", "4 months", "Upon request"],
    ["Rostov-on-Don<br>Patriotic", "93 m2", "3 months", "Upon request"],
];

// Указатель номера слайда
slider.imageIndex = 0;

// Определяем ноды, используемые в слайдере
slider.image = document.querySelector("#j-slider");
slider.leftArrows = document.querySelectorAll(".j-slider__left-arrow");
slider.rightArrows = document.querySelectorAll(".j-slider__right-arrow");
slider.dots = document.querySelectorAll(".j-slider__dot");
slider.lis = document.querySelectorAll(".j-slider__li");
slider.textNodes = document.querySelectorAll(".j-slider__text");

// Добавляем обработчики на элементы управления
slider.leftArrows.forEach(element => {
    element.addEventListener("click", () => slider.slidePrevious());
});

slider.rightArrows.forEach(element => {
    element.addEventListener("click", () => slider.slideNext());
});

for (let i = 0; i < slider.dots.length; i++) {
    slider.dots[i].addEventListener("click", () => slider.slideToNumber(i));
};

for (let i = 0; i < slider.lis.length; i++) {
    slider.lis[i].addEventListener("click", () => slider.slideToNumber(i));
};

// Метод для отображения слайда по номеру
slider.slideToNumber = function(i) {
    slider.imageIndex = i;
    slider.image.src = slider.urls[i];
    for (let j = 0; j < slider.textNodes.length; j++) {
        slider.textNodes[j].innerHTML = slider.textVariants[i][j];
    };

    slider.dots.forEach(element => {   
        element.classList.remove(("j-active")) 
    });
    slider.dots[i].classList.add("j-active");

    slider.lis.forEach(element => {   
        element.classList.remove(("j-active")) 
    });
    slider.lis[i].classList.add("j-active");
};

// Методы для отображения следующего и преедыдущего слайда
slider.slideNext = function() {
    if (slider.imageIndex + 1 >= slider.urls.length) {
        slider.slideToNumber(0);
    } else {
        slider.slideToNumber(slider.imageIndex + 1);
    };
};

slider.slidePrevious = function() {
    if (slider.imageIndex - 1 < 0) {
        slider.slideToNumber(slider.urls.length - 1);
    } else {
        slider.slideToNumber(slider.imageIndex - 1);
    };
};

