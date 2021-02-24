// создание и использование модулей

function myModule() {
	this.hello = function () {
		console.log('hello');
	};

	this.goodbye = function () {
		console.log('bye');
	};
}

// експорт
export { myModule };
export let one = 1;
// или
export default function sayHi() {
	console.log('Hello, world');
}

// импорт в другом файле
// import {myModule as mm, one} from './modulesDemo';
// import * as data from './modulesDemo';
// import sayHi from './modulesDemo';

// что бы собрать скрипты нужно использовать webpack
