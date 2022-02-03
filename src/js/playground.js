class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  findSyllable () {
    let haikuArray = [this.line1, this.line2, this.line3];
    let haikuArrayMinusE = []
    haikuArray.forEach(function(line) {
      let wordArray = line.split(" ");
      wordArray.forEach(function(word) {
        if (word.endsWith("e") === true) {
          fixedWordArrayLine1.push(word.slice(0, -1))
        } else {
          fixedWordArrayLine1.push(word)
        }
      }
    });
  });
}