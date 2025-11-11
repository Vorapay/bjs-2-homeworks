// Задача №1:
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); 
picknick.state = 10;
console.log(picknick.state); 
picknick.fix();
console.log(picknick.state); 


// Задача №2:
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const findedByParamBook = this.books.find(item => item[type] === value)
    return !!findedByParamBook ? findedByParamBook : null
  }
 
  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1){
        return this.books.splice(index, 1)[0];
    }
    return null
}

}


const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);
console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);



const testLibrary = new Library("Тестовая библиотека");

// Добавляем несколько печатных изданий разных типов
testLibrary.addBook(new NovelBook("Лев Толстой", "Война и мир", 1869, 1225));
testLibrary.addBook(new FantasticBook("Айзек Азимов", "Основание", 1951, 255));
testLibrary.addBook(new DetectiveBook("Агата Кристи", "Убийство в Восточном экспрессе", 1934, 256));
testLibrary.addBook(new Magazine("Наука и жизнь", 1960, 80));

console.log("Книг в библиотеке после добавления:", testLibrary.books.length);

// Находим книгу, изданную в 1919 году, или создаём её при необходимости
let oldBook = testLibrary.findBookBy("releaseDate", 1919);
if (!oldBook) {
  console.log("Книга 1919 года не найдена, создаём новую");
  oldBook = new NovelBook("Джек Лондон", "Мартин Иден", 1919, 420);
  testLibrary.addBook(oldBook);
  console.log("Добавлена книга:", oldBook.name);
}

// Выдаём любую книгу
const issuedBook = testLibrary.giveBookByName("Основание");
if (issuedBook) {
  console.log("Выдана книга:", issuedBook.name);
  console.log("Состояние выданной книги:", issuedBook.state);
  console.log("Книг осталось в библиотеке:", testLibrary.books.length);
  
  // Повреждаем выданную книгу
  issuedBook.state = 20;
  console.log("Состояние после повреждения:", issuedBook.state);
  
  // Восстанавливаем выданную книгу
  issuedBook.fix();
  console.log("Состояние после первого восстановления:", issuedBook.state);
  issuedBook.fix();
  console.log("Состояние после второго восстановления:", issuedBook.state);
  issuedBook.fix();
  console.log("Состояние после третьего восстановления:", issuedBook.state);
  
  // Пытаемся добавить восстановленную книгу обратно в библиотеку
  const returnResult = testLibrary.addBook(issuedBook);
  if (returnResult) {
    console.log("Книга успешно возвращена в библиотеку!");
    console.log("Книг в библиотеке после возврата:", testLibrary.books.length);
  } else {
    console.log("Не удалось вернуть книгу - состояние слишком плохое:", issuedBook.state);
    console.log("Книг в библиотеке после неудачного возврата:", testLibrary.books.length);
  }
} else {
  console.log("Книга для выдачи не найдена");
}
console.log("Все книги в библиотеке:");
testLibrary.books.forEach((book, index) => {
  console.log(`${index + 1}. "${book.name}" (${book.releaseDate}) - состояние: ${book.state}`);
});