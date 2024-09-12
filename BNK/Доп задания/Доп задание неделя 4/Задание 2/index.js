class Dictionary {
    #name;
    #words;

    #name = name;
    #words = {};
    constructor(name) {}
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
   
  const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
      
  hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
      
  hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
      
  hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
      
  hardWordsDictionary.remove('неологизм');
      
  hardWordsDictionary.showAllWords();