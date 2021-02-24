// События
// Получаем элемент на которое будем вешать событие
const btn = document.querySelector('button');

// Вешаем обработчик события, и добавляем анонимную функцию или стрелочную функцию,
// так же можно передать аргумент события (event, другие аргументы) => {}
// Обработчиков можно вешать несколько и разных
btn.addEventListener('click', () => {
	console.log('clicked');
});

// удаляем обработчик события
btn.removeEventListener('click');

// удаление стандартного события
const link = document.querySelector('a');
link.addEventListener('click', function (event) {
	event.preventDefault();
	// далее пишем свое действие на это событие
	console.log('link - clicked');
});

/* ------------------------------------------------------------------------------------------------------------------ */

//
btnsContainer.addEventListener('click', (event) => {
	const target = event.target;
	if (target && target.classList.contains('tabheader__item')) {
		btns.forEach((item, i) => {
			if (target == item) {
				hideTabs();
				showTabs(i);
			}
		});
	}
});