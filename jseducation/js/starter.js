// Переменные и типы данных
// JS - Динамический язык программирования, с динамической типизацией

// объявление переменных
// var - не имеет блочной области видимости, и обрабатывается пераой при запуске скрипта
// var является устаревшой конструкцией
// var value = 10;

// let и const - имеют блочную зону видимости,
// let - изменяемя переменная
// const - неизменяемая переменная, но это применимо только к обычным типам. Объекты не могут быть неизменяемыми
// рекомендуется всегда объявлять переменные через const, и при необходимости изменять на let

// Типы данных
// В JS существуют простые типы, такие как число, строка, логический тип и т.д
// и типы объектов: функции, массивыв, объект, дата и тд.
// так же есть специальные простые типы:
// null - объект не имеющий значения,
// NaN(глобальный признак того что переменная является не числом),
// undefined - переменная не имеющая значения
// Infinity - является числом, представляющее бесконечное значение

// js объект
const myTestObject = {
	name: 'Alex',
	age: 20,
	isMarried: false,
	arr: [1, 2, 3, 4, 5],
	stuff: {
		a: 1,
		b: 2,
	},
	sayHello: function () {
		console.log(`Hello ${this.name}`);
	},
};

myTestObject.sayHello();
console.log(myTestObject);
console.log(typeof myTestObject); // оператор typeof - возвращает тип данных
console.dir(myTestObject);

/* ------------------------------------------------------------------------------------------------------------------ */

// Функции
// Обычная функция (создается до начала вызова)
function foo() {
	console.log('Hello, World');
}
foo();

// Функция выражения, создается в иесте вызова
const func = function () {
	console.log('Hello, world');
};

// Стрелочная функция, (не имеет своего контекста this),
// сокращенный вариант анонимной функции
const lambda = () => console.log('Hello, world');

// Callback - функция, передающаяся в качестве параметра и выполняющаяся после выполнения основного кода функции
function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

learnJS('JavaScript', function () {
	console.log('Я прошел курс!');
});

/* ------------------------------------------------------------------------------------------------------------------ */

// Условные конструкции

// условие выбора if - else
// == - стравнение по значению, === - сравнение по значению и типу данных
if (5 === 6) {
	console.log('true');
} else {
	console.log('false');
}

// тернарный оператор (сокращенный if)
// условие ? true : false;
const val = 6 > 8 ? 6 : 8;

// конструкция выбора switch - case
switch (3) {
	case 1:
		console.log(1);
		break;
	case 2:
		console.log(2);
		break;
	case 3:
		console.log(3);
		break;
	default:
		console.log(0);
		break;
}

/* ------------------------------------------------------------------------------------------------------------------ */

// Циклы
let k = 5;

// While
while (k > 5) {
	console.log(k);
	k--;
}

// do - while
do {
	console.log(k);
	k--;
} while (k < 5);

// for
for (let i = 0; i < 10; i++) {
	console.log(i);
}

/* ------------------------------------------------------------------------------------------------------------------ */
// Работа с массивом

// перебор массива
const stuff = [1, 2, 3, 4, 5, 6];
// принимает 3 параметра, итем, индекс, массив
stuff.forEach((elem, j, arr) =>
	console.log(`${j}-ый эдемент ${elem} массива ${arr}`)
);
for (let val of stuff) {
	console.log(val);
}

stuff.pop(); // удаление последнего элемента
stuff.push(0); // добавляет в конец массива элемента

// сортировка
stuff.sort(compareNum);
console.log(stuff);
function compareNum(a, b) {
	return a - b;
}

// filter
const names = ['Alex', 'Ivan', 'Ann', 'Vsevolod'];
const shortName = names.filter((name) => {
	return name.length < 5;
});
console.log(shortName);

// map
const answers = ['IvAn', 'AnA', 'heLLo'];
const result = answers.map((item) => item.toLocaleLowerCase());
console.log(result);

// every/some
const some = [4, 'qwq', 'asde34523sfsd'];
console.log(some.some((item) => typeof item === 'number')); // если один из элементов число
console.log(some.every((item) => typeof item === 'number')); // если все элементы число

// reduce
const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current);
console.log(res);

/* ------------------------------------------------------------------------------------------------------------------ */

// Работа с объектом
const colors = {
	red: '#red',
	black: '#black',
	white: '#white',
};

// перебор объекта
for (let key in colors) {
	console.log(`${key} имеет значение ${colors[key]}`);
}

// добавление значения в объект
colors.blue = '#blue';
console.log(colors);

// удаление значения из объекта
delete colors.blue;
console.log(colors);

// деструктуризация объекта в значения переменных
const { red, black } = colors;
console.log(red);
console.log(black);

// передача данных по ссылке
const obj = {
	a: 5,
	b: 10,
};

const copy = obj; // передача объекта по ссылке
obj.a = 55;
console.log(copy);
console.log(obj);
// появляется проблемя, из-за того что мы передаем ссылку а не объект,
// в двух переменных используется один и тот же объект

// что бы копировать объект, необходимо применять технику клонирования
// вариант 1, поверхностное клонирование (не захватвает вложенные объекты)
const clone = Object.assign({}, obj);

// вариант 2, через спред оператор (так же работает с массивами)(работает с версии es9)
//const newObj = { ...obj };

// вариант 3, использовать сериализация JSON

// Прототипирование
// Прототипирование, добавление прототипа объекту
const soldier = {
	health: 500,
	armor: 100,
	sayHello: function () {
		console.log('Hello');
	},
}; // soldier - глобальный объект, который будет прототипом

// Добавление прототипа объекту jhon
const john = {
	health: 100,
};
Object.setPrototypeOf(john, soldier);
john.sayHello();

// Установка прототипа в новый объект
const alex = Object.create(soldier);
alex.sayHello();

/* ------------------------------------------------------------------------------------------------------------------ */

// задачи с собеседования
console.log([] + false - null + true);
console.log([] + 1 + 2);
console.log('1'[0]);
console.log(2 && 3 && null && undefined);

/* ------------------------------------------------------------------------------------------------------------------ */

// подключение скрипта
// <script defer src="/js/dom.js"></script>
// <script async src="/js/dom.js"></script>
