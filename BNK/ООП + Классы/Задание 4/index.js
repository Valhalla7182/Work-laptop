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

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super();
  }

  add(word, description) {
    if(!this.words[word]) {
      this.words[word] = {word: word, description: description, isDifficult: true};
    }
  }
}
// const dictionary = new Dictionary('Толковый словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

// // dictionary.remove('JavaScript');
// dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();