//Завдання 1
// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
// Використовуємо try для обробки помилок
// Використовуємо await для очікування виконання Promise.
// Дані виводимо в консоль після отримання їх з Promise.
// Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.

// Асинхронна функція getData, яка використовує await для обробки Promise.
async function getData() {
  try {
    // Використовуємо await для очікування виконання Promise.
    const data = await fetchFakeData();
    // Дані виводимо в консоль після отримання їх з Promise.
    console.log(data);
  } catch (error) {
    // Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.
    console.error("Помилка при отриманні даних:", error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
getData();

//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}

// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
// Використовуємо try для обробки помилок
// Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
// В функцію потрібно передати в seconds в якості аргументу
// Результат виконання функції присвоюється константі randomNumber.
// Виводимо отримане випадкове число в консоль
// Якщо сталася помилка під час виконання Promise, виводимо її в консоль.

// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
async function logRandomNumberAfterSeconds(seconds) {
  try {
    // Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
    const randomNumber = await getRandomNumberAfterSeconds(seconds);
    // Виводимо отримане випадкове число в консоль.
    console.log("Отримане випадкове число:", randomNumber);
  } catch (error) {
    // Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
    console.error("Сталася помилка:", error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds();

//Завдання 3
// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки GET-запиту на вказаний URL

// Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль

// Конвертуємо відповідь у формат JSON

// Виводимо дані в консоль
// Виводимо помилки в консоль якщо вони є

async function getDataFromUrl(URL) {
  try {
    // Використовуємо fetch для відправки GET-запиту на вказаний URL.
    const response = await fetch(URL);

    // Перевіряємо через властивість ok, чи є відповідь вдалою.
    if (!response.ok) {
      throw new Error("Помилка отримання даних:", response.statusText);
    }

    // Конвертуємо відповідь у формат JSON.
    const data = await response.json();

    // Виводимо дані в консоль.
    console.log("Отримані дані:", data);
  } catch (error) {
    // Виводимо помилки в консоль, якщо вони є.
    console.error("Сталася помилка:", error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації, маємо аргумент url, data, authToken
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки POST-запиту на вказаний URL
// Вказуємо метод запиту POST в конфігурацію параметрів запиту
// Вказуємо заголовок (header) "Content-Type" зі значенням "application/json"

// Вказуємо заголовок Authorization в який передаємо authToken
// Передаємо дані data в body, які перед цим перетворились в JSON

// Перевіряємо через властивість ok, чи є відповідь вдалою

// Конвертуємо відповідь у формат JSON

// Виводимо відповідь в консоль
// Виводимо помилки в консоль якщо вони є

async function postDataWithAuth(url, data, authToken) {
  try {
    // Використовуємо fetch для відправки POST-запиту на вказаний URL.
    const response = await fetch(url, {
      method: "POST", // Вказуємо метод запиту POST.
      headers: {
        "Content-Type": "application/json", // Вказуємо заголовок "Content-Type".
        Authorization: `Bearer ${authToken}`, // Вказуємо заголовок "Authorization" з токеном авторизації.
      },
      body: JSON.stringify(data), // Передаємо дані у форматі JSON у тілі запиту.
    });

    // Перевіряємо через властивість ok, чи є відповідь вдалою.
    if (!response.ok) {
      throw new Error("Помилка при відправці даних:", response.statusText);
    }

    // Конвертуємо відповідь у формат JSON.
    const responseData = await response.json();

    // Виводимо відповідь в консоль.
    console.log("Отримана відповідь:", responseData);
  } catch (error) {
    // Виводимо помилки в консоль, якщо вони є.
    console.error("Сталася помилка:", error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 4 ==============================");
postDataWithAuth(
  "https://petstore.swagger.io/v2/store/order",
  {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-07-23T19:28:06.229Z",
    status: "placed",
    complete: true,
  },
  "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

//Завдання 5
// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
// Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
// Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
// Чекаємо поки виконається проміс якому встановимо затримку 1 секунду за допомогою setTimeout
// Віддаємо значення лічильника та збільшуємо його на один

// Використовуємо асинхронний генератор та записуємо його значення в константу gen

// Створюємо асинхрону функцію printFiveItems
// Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
// Перебираємо значення gen
// Виводимо в консоль поточне значення
// Умова "if (value === 4) break" зупиняє цикл після виведення п'яти чисел (від 0 до 4).

// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
async function* asyncGenerator() {
  let i = 0;
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Чекаємо 1 секунду
    yield i++; // Віддаємо поточне значення і збільшуємо його на один
  }
}

// Використовуємо асинхронний генератор та записуємо його значення в константу gen
const gen = asyncGenerator();

// Створюємо асинхронну функцію printFiveItems
async function printFiveItems() {
  // Ключове слово "for await" використовується для ітерації по асинхронним ітерабельним об'єктам.
  for await (const value of gen) {
    console.log(value); // Виводимо поточне значення в консоль
    if (value === 4) break; // Зупиняємо цикл після виведення п'яти чисел
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
// Використовуємо try для обробки помилок
// Викликаємо асинхронну функцію getDataFromDB() і чекаємо, поки вона завершиться
// Результат роботи функції зберігаємо у змінну dbData

// yield використовується для того, щоб повернути значення dbData

// Те саме робимо для асинхронної функції getDataFromAPI(), результат зберігаємо в apiData

// І знову для асинхронної функції getDataFromCache(), результат зберігаємо в cacheData
// Виводимо помилки в консоль якщо вони є

// Створюємо асинхрону функцію displayData
// Створюємо екземпляр генератора gatherData
// Три рази виводимо виводимо поточне значення генератора в консоль

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
async function* gatherData() {
  try {
    const dbData = await getDataFromDB(); // Отримуємо дані з бази даних
    yield dbData; // Повертаємо дані

    const apiData = await getDataFromAPI(); // Отримуємо дані з API
    yield apiData; // Повертаємо дані

    const cacheData = await getDataFromCache(); // Отримуємо дані з кешу
    yield cacheData; // Повертаємо дані
  } catch (error) {
    console.error("Сталася помилка:", error); // Виводимо помилки в консоль, якщо вони є
  }
}

// Створюємо асинхрону функцію displayData
async function displayData() {
  const generator = gatherData(); // Створюємо екземпляр генератора
  console.log(await generator.next().then((result) => result.value)); // Виводимо перше значення генератора в консоль
  console.log(await generator.next().then((result) => result.value)); // Виводимо друге значення генератора в консоль
  console.log(await generator.next().then((result) => result.value)); // Виводимо третє значення генератора в консоль
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 6 ==============================");

displayData();

//Завдання 7
// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0, має параметр start
// Ініціюємо лічильник змінну count зі стартовим значенням параметра start

// Цикл, що триває доки лічильник більший або рівний 0
// Використовуємо ключове слово yield, щоб повернути поточне значення лічильника

// Зменшуємо лічильник на 1

// console.log("Завдання: 7 ==============================");
// Створюємо екземпляр генератора countdown з лічильниковм 5

// Запускаємо генератор та отримуємо перше значення яку записуємо в змінну nextValue
// Цикл while, що виводить значення з генератора, та працює поки не є генератор вичерпаним.
// Якщо властивість done == false, генератор ще має значення для повернення.

// Виводимо поточне значення
// Отримуємо наступне значення з генератора

// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0
function* countdownGenerator(start) {
  let count = start; // Ініціюємо лічильник
  while (count >= 0) {
    yield count; // Використовуємо yield, щоб повернути поточне значення лічильника
    count--; // Зменшуємо лічильник на 1
  }
}

// console.log("Завдання: 7 ==============================");

// Створюємо екземпляр генератора countdown з лічильником 5
const countdown = countdownGenerator(5);

// Запускаємо генератор та отримуємо перше значення
let nextValue = countdown.next().value;

// Цикл while, що виводить значення з генератора, працює, поки генератор не буде вичерпаним
while (!countdown.next().done) {
  // Виводимо поточне значення
  console.log(nextValue);
  // Отримуємо наступне значення з генератора
  nextValue = countdown.next().value;
}

// Останнє значення 0 також потрібно вивести окремо
console.log(nextValue);
