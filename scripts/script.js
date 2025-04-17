'use strict'
document.addEventListener("DOMContentLoaded", () => {
	// * 1. Начало.
    // * 2. Получаем все элементы изображений с описанием    
	// * 3. Для каждого изображения (проверяем, есть ли такие изображения)
    // *    3.1. Добавляем обработчик наведения курсора на изображение:    
	// *        3.1.1. Да:
    // *            3.1.1.1. Показываем текст при наведении.    
	// *            3.1.2. Нет: продолжаем.
    // *    3.2. Добавлдяем обработчик курсор уходит с изображения:    
	// *        3.3.1. Да:
    // *            3.1.1.1. Скрываем элемент с описанием.    
	// *        3.3.2. Нет: продолжаем.
    // * 4. Конец
    console.log('Скрипт отработал корректно')
const intensiveImg = document.querySelector(".clothes__image");
intensiveImg.addEventListener('mouseenter', () => {
		console.log('Мышка наведена на изображение, показываем текст');
});

const intensiveImg1 = document.querySelectorAll('.clothes__image');

intensiveImg1.forEach((item, index) => {
		const intensiveText = document.querySelectorAll('.clothes__description');

		item.addEventListener('mouseenter', () => {
			item.style.opacity = 0.5;
			intensiveText[index].removeAttribute('hidden');
	});

	item.addEventListener('mouseleave', () => {
		item.style.opacity = 1;
		intensiveText[index].setAttribute('hidden', true);
		});
	});
});



	//Появление модального окна
const welcоmeButtonModal = document.querySelector(".clothes__button");
const modalApplication = document.querySelector(".watchall");
if (welcоmeButtonModal && modalApplication) {
		welcоmeButtonModal.addEventListener("click", () => {
			modalApplication.removeAttribute("hidden");
		});
	}
	//Закрытие модального окна
window.addEventListener("click", (event) => {
	if (event.target === modalApplication) {
		modalApplication.setAttribute("hidden", true);
	}
const closeModalButton = document.querySelector(".watchall__close");
closeModalButton.addEventListener("click", () => {
	modalApplication.setAttribute("hidden", true);
	});
});



