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

const WatchallContainer = document.querySelector(".watchall");
if (WatchallContainer) {
	const dataTitleWatchall = [
		"Нежно-розовое платье",
		"Ярко-розовая футболка",
		"Разноцветное платье",
		"Рубашка с рыбами и небом",
	];
	const titleWatchall =
		WatchallContainer.querySelectorAll(".watchall__name");
	titleWatchall.forEach((item, index) => {
	item.textContent = dataTitleWatchall[index];
	});
}

const clothesProduct = document.querySelector('.clothes');

if (clothesProduct) {
		const clothesList = clothesProduct.querySelector('.clothes__assortment');
		const clothesProductData = {
			product1: {
				image: "images/blue_sweatshirt.png",
				name: 'Свитшот вставка клетка',
				price: '1099 ₴',
				description: 'Представь себя, закутавшись в нее с хорошей книгой на диване или создавая смелый модный образ на улицах.',
			},
			product2: {
				image: "images/dress_in_flowers.png",
				name: 'Платье прозрачное <br> в цветочек черное',
				price: '1299 ₴',
				description: 'Платье идеально подходит для солнечного пикника, вечеринки в саду или просто любого случая.',
			},
			product3: {
				image: "images/bomber.png",
				name: 'Бомбер Gone Crazy хаки',
				price: '2499 ₴',
				description: 'Мягкая ткань, свободный крой и теплый наполнитель делают эту куртку идеальной для повседневной носки.',
			},
			product4: {
				image: "images/dress_tshirt_fish.png",
				name: 'Платье-футболка рыбы в аквариуме',
				price: '899 ₴',
				description: 'Яркий оранжевый цвет – хит сезона, а принт в стиле арт-деко добавит актуальности твоему образу.',
			}
		}
		const createCard = (image, name, price, description) => {
			const card = `
			<li class="clothes__product">
				<img class="clothes__image" src="${image}" alt="Фото одежды" width="360" height="530">
				<div class="clothes__wrap">
					<a class="clothes__name" href="#">${name}</a>
					<span class="clothes__price">${price}</span>
				</div>
				<div class="clothes__description" hidden>${description}</div>
			</li>
		`;
			return card;
		}
		for (const cardKey in clothesProductData) {
			const card = clothesProductData[cardKey];
			const cardElement = createCard(card.image, card.name, card.price, card.description);
			clothesList.insertAdjacentHTML('beforeend', cardElement);
		}
	}


const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
		const headerList = headerMenu.querySelector('.menu');

		const menuData = {
			link1: {
				link: '#',
				title: 'ПЛАТЬЯ',
			},
			link2: {
				link: '#',
				title: 'ВЕРХ',
			},
			ink3: {
				link: '#',
				title: 'НИЗ',
			},
			link4: {
				link: '#',
				title: 'КУРТКИ',
			},
			link5: {
				link: '#',
				title: 'МЕЛОЧИ',
			},
			link6: {
				link: '#',
				title: 'КОСТЮМЫ',
			},
			link7: {
				link: '#',
				title: 'BOORIVAGIRLS',
			}
		}

				const createLink = (UrlLink, title) =>{
			const link = `
			<li class="menu__item"><a href="${UrlLink}" class="menu__link">${title}</a></li>
			`;
			return link;
		}

		for (const linkItem in menuData) {
			const link = menuData[linkItem];
			const linkIndex = createLink(link.UrlLink, link.title);
			headerList.insertAdjacentHTML('beforeend', linkIndex);

		}
}

const cardsImages = document.querySelector(".images");
const cardListImages = document.querySelector(".images__list");

// 2. URL для запроса данных из JSON
const apiUrl = "images.json";

// 3. Функция для создания карточки
const createCard = (imageUrl, imageAlt, imageWidth) => {
  const cardElement = document.createElement("li");
  cardElement.classList.add("images__item");

  const image1 = document.createElement("img");
  image1.classList.add("images__picture");
  image1.src =  imageUrl[0]; 
  image1.alt = imageAlt;
  image1.width = imageWidth;

  const image2 = document.createElement("img");
  image2.classList.add("images__picture");
  image2.src = imageUrl[1]; 
  image2.alt = imageAlt;
  image2.width = imageWidth;
  image2.style.display = "none"; // Скрываем вторую картинку изначально

  cardElement.appendChild(image1);
  cardElement.appendChild(image2);

  // 4. Добавляем обработчик клика на li
  cardElement.addEventListener("click", () => {
    if (image1.style.display === "none") {
      image1.style.display = "block";
      image2.style.display = "none";
    } else {
      image1.style.display = "none";
      image2.style.display = "block";
    }
  });

  return cardElement;
};

// 5. Получаем данные из JSON
fetch(apiUrl)
  .then((response) => response.json())
  .then((images) => {
    console.log(images);
    console.log(typeof images);

    // 6. Перебираем массив объектов и создаем карточки
    images.forEach((item) => {
      const cardElement = createCard(item.imageUrl, item.imageAlt, item.imageWidth);
      cardListImages.insertAdjacentElement("beforeend", cardElement);
    });
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });

	