// Работа с JSON
const persone = {
	name: 'Alex',
	age: 18,
};

// превратить объект в JSON текст
console.log(JSON.stringify(persone));

// првератить JOSN текст в объект
console.log(JSON.parse(JSON.stringify(persone)));

// глубокое клонирование с помощью JSON
const clone = JSON.parse(JSON.stringify(persone));
clone.age = 30;
console.log(persone);
console.log(clone);

/* ------------------------------------------------------------------------------------------------------------------ */

// GET и POST запросы (XMLHttpRequest)
const inputRub = document.querySelector('#rub'),
	inputUSD = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
	const request = new XMLHttpRequest();

	request.open('GET', '/js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	request.addEventListener('load', () => {
		if (request.status === 200) {
			console.log(request.response);
			const data = JSON.parse(request.response);
			inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
		} else {
			inputUSD.value = 'Что-то пошло не так';
		}
	});
});

// отправка данных с формы
const form = document.querySelector('form');
postData(form);

function postData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const request = new XMLHttpRequest();

		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'application/json');
		const formData = new FormData(form);
		const object = {};
		formData.forEach(function (value, key) {
			object[key] = value;
		});
		const json = JSON.stringify(object);

		request.send(json);
		request.addEventListener('load', () => {
			if (request.status === 200) {
				console.log(request.response);
				form.reset();
			}
		});
	});
}

/* ------------------------------------------------------------------------------------------------------------------ */

// GET и POST запросы fetch API

// get запрос
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => console.log(json));

// post запрос
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({ name: 'Alex' }),
	headers: {
		'Content-type': 'application/json',
	},
})
	.then((response) => response.json())
	.then((json) => console.log(json));

/* ------------------------------------------------------------------------------------------------------------------ */

// Promise (обещания)
const req = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Подготовка данных...');
		const product = {
			name: 'TV',
			price: 3000,
		};
		resolve(product);
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
		}, 2000);
	});
})
	.then((data) => {
		data.modify = true;
		return data;
	})
	.then((data) => {
		console.log(data);
	})
	.catch(() => {
		console.error('Произошла ошибка');
	})
	.finally(() => {
		console.log('finaly');
	});

//
const test = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), time);
	});
};
// Ждет выполнение всех промисов
Promise.all([test(1000), test(2000)]).then(() => {
	console.log('All');
});
// Выполняется после завершения первого промиса
Promise.race([test(1000), test(2000)]).then(() => {
	console.log('Race');
});

/* ------------------------------------------------------------------------------------------------------------------ */

// Async await
// post
const postDataAsync = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: data,
	});

	return await res.json();
};

// get
const getResult = async (url) => {
	const res = fetch(url);

	if (!res.OK) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}
	return await res.json();
};

/* ------------------------------------------------------------------------------------------------------------------ */

// Получить JSON из формы
function bindPostData(form) {
	form.addEventListener('submit', (e) => {
		const formData = new FormData(form);
		const jsonForm = JSON.stringify(Object.fromEntries(formData.entries()));
	});
}

/* ------------------------------------------------------------------------------------------------------------------ */

// получение данных и преобразование в объект
getResult('http')
.then(data => {
	// Делаем деструктуризацию объекта
	data.forEach(({img, altimg, title}) =>{
			new MyObject(img, altimg, title).render(); // MyObject - некий класс
	});
});
