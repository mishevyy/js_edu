// Работа с объектами DOM дерева
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.dir(document);

/* ------------------------------------------------------------------------------------------------------------------ */

// Получение элемента в дереве

// Получение всех объектов (селекторы: класс(.), теги, ид(#), дата атрибуты([data]))
// Возвращает псевдо массив(коллекцию) элементов
const elements = document.querySelectorAll('.classSelector');

// Получение первого найденного
const element = document.querySelector('.classSelector');

// получение различных родительских и дочерних элементов
console.log(element.childNodes);
console.log(element.firstElementChild);
console.log(element.lastElementChild);
console.log(element.parentElement);

/* ------------------------------------------------------------------------------------------------------------------ */

// Работа с элементами

// Добавление inline стилей
element.style.backgroundColor = 'blue';
element.style.width = '500px';
// или
element.style.cssText = 'backgroundColor: blue';

// Управление стилями из css
// Добавление стиля
element.classList.add('className');
// Удаление стиля
element.classList.remove('className');
// Проверяет содержит ли элемент стиль
element.classList.contains('className');
// Удаляет/Добавляет класс если он Есть/Нету
element.classList.toggle('className');

// Создание элемента
const div = document.createElement('div');

// Добавление элемента в DOM
// Добавляет в конец родителя элемент (не обязательно body, может быть любой объект в DOM)
document.body.append(div);
// или
document.body.after(div);

// Добавляет в начало родителя элемент (не обязательно body, может быть любой объект в DOM)
document.body.prepend(div);
// или
document.body.before(div);

// Удаление элемента (не обязательно body, может быть любой объект в DOM)
document.body.remove();

// Замена элемента
document.body.replaceWith(element);

// Вставка прстого HTML
document.body.innerHTML = '<h1>Hello, World!</h1>';

// Вставка элементов, через управление первого параметра
document.body.insertAdjacentElement('afterbegin', div);
document.body.insertAdjacentHTML('afterbegin', '<h1>Hello, World!</h1>');

/* ------------------------------------------------------------------------------------------------------------------ */
