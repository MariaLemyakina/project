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
});


//Будущая разработка:
//Обработка элементов одежды по нажатию на блок
//let clothesElements = document.querySelectorAll('.clothes__product'); //get all elements
//clothesElements.forEach(function(element)
//{
//	element.addEventListener('click', function()
//	{
//		//alert('clothes form'); Тут будет код ХТМЛ формы с описанием одежды
//	});
//});

