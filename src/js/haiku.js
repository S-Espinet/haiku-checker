export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  findSyllable() {
    // let wordArrayLine1 = this.line1.split(" ");
    // let wordArrayLine2 = this.line2.split(" ");
    // let wordArrayLine3 = this.line3.split(" ");

    // wordArrayLine1.forEach(function(word) {
    //   if (word.endsWith("e") === true) {
    //     slicedWord = word.slice(0, -1);
    //   }
    // });





    let letterArrayLine1 = this.line1.split("");
    let letterArrayLine2 = this.line2.split("");
    let letterArrayLine3 = this.line3.split("");
    let vowelArrayLine1 = [];
    let vowelArrayLine2 = [];
    let vowelArrayLine3 = [];
    
    letterArrayLine1.forEach(function(letter) {
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
      vowelArrayLine1.push(letter)
     }
    });

    letterArrayLine2.forEach(function(letter) {
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
      vowelArrayLine2.push(letter)
     }
    });

    letterArrayLine3.forEach(function(letter) {
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
      vowelArrayLine3.push(letter)
     }
    });
    let allLinesArray = [vowelArrayLine1.length, vowelArrayLine2.length, vowelArrayLine3.length];
    return allLinesArray;
  }
}