import { accordeon } from "./modules/accordeon";
import { carousel } from "./modules/carousel";
import { formValidation } from "./modules/formValidation";
import { modalWindow } from "./modules/modalWindow";
import { modalWindow2 } from "./modules/modalWindow2";
import { scrollUp } from "./modules/scrollUp";
import { sendingData } from "./modules/sendingData";
import { slider } from "./modules/slider";

// Модальное окно и подложка
modalWindow();

// Главный слайдер
slider();

// Карусель
carousel();

// Зеленая кнопка вызова модального окна
modalWindow2();

// Аккордион
accordeon();

// Прокрутка страницы
scrollUp();

// Валидация данных
formValidation();

// Отправка данных
sendingData();