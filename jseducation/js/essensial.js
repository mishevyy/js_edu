// Запуск функции по времени
// Если нужно удалить таймер, то сохраняем его id
const timerId = setTimeout(logger, 2000);
function logger() {
	console.log('text');
}

// Циклический запуск функции
// Запускает фунцкию каждые 100 секунд
// Если запускаемая функция тяжелая и она может выполнятся дольше чем интервал,
// то лучше использовать рекурсивный запуск setTimeout
const timerIdTwo = setInterval(logger, 100);

// удаление таймера
// clearInterval(timerId);

/* ------------------------------------------------------------------------------------------------------------------ */

// Работа с датой и временем
const now = new Date();
console.log(now);

const nowA = new Date('2021-02-12');
console.log(nowA);

console.log(now.getFullYear());

/* ------------------------------------------------------------------------------------------------------------------ */

// Функция конструктор и this контекст

// функция конструктор
function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = () => {
		console.log(`Hello ${this.name}`);
	};
}

User.prototype.exit = function () {
	console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
console.log(ivan);

ivan.hello();
ivan.exit();

// Передача контекста объекта в функцию методы call, apply, bind
const user = {
	name: 'Ivan',
};
function sayName() {
	console.log(this.name);
}
sayName.call(user);
sayName.apply(user);

//
function count(num) {
	return this * num;
}
const double = count.bind(2);
console.log(double(5));

/* ------------------------------------------------------------------------------------------------------------------ */

// классы ES6 стандарт

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10, 10);
console.log(square.calcArea());

// Наследование
class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, bgColor) {
		super(height, width); // передача параметров в базовый класс
		this.text = text;
		this.bgColor = bgColor;
	}
}

// rest оператор (...)
const log = function (a, b, ...rest) {
	console.log(a, b, rest);
};
log('basic', 'rest', 'operastor', 'usage');

function calcOrDouble(number, basis = 2) {
	console.log(number * basis);
}

/* ------------------------------------------------------------------------------------------------------------------ */

// Ацессоры get и set

const person = {
	name: 'Alex',
	age: 25,

	get userAge() {
		return this.age;
	},
	set userAge(value) {
		this.age = value;
	},
};

console.log(person.userAge);
console.log((person.userAge = 30));

class UserTest {
	constructor(name, age) {
		this.name = name;
		this._age = age; // установка приватной переменной
		//(на самом деле символ _ просто говорит программисут, что это переменная приватная,
		//и нужно работать с ней чере методы аксессоры, по факту переменно остается доступным по имени _age)
	}
	get age() {
		return this._age;
	}
	set age(value) {
		this._age = value;
	}
}

const alex = new UserTest('Alex', 27);
console.log(alex.age);

/* ------------------------------------------------------------------------------------------------------------------ */

//анонимная самовызывающаяся функция
const number = 1;

// анонимная самовызывающаяся функция
(function () {
	let number = 2;
	console.log(number);
})();

const test = (function () {
	const private = function () {
		console.log('Helo i am private');
	};

	return {
		sayHello: private,
	};
})();

test.sayHello();
