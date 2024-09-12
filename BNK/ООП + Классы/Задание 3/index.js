class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
    add(word, description) {
      if(!this.words[word]) {
        this.words[word] = {word: word, description: description};
      }
    }

    remove(key) {
      delete this.words[key];
    }

    showAllWords() {
      console.log(this.words);
    }
}
const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

// dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие