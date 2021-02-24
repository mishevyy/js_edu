// Регулярные выражения
// new RegExp('pattern', 'flags');
// /паттерн/флаги
// флаги
/*
i - не учитывать регистр
g - ищет несколько вхождений
m - многострочный режим
*/

const str = 'Hello, world';
const reg = /l/i;

console.log(str.search(reg)); // поиск вхождений
console.log(str.match(reg)); // поиск совпадений
console.log(str.replace(/h/g, '*'));

console.log(reg.test(str)); // тест паттерна

// \d - поиск цифр
// \w - поиск слов
// \s - поиск пробелов



