import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {
  test('should correctly create a haiku class with three lines', () => {
    let myHaiku = new Haiku("Delightful display", "Snowdrops bow their pure white heads", "To the sun's glory");
    expect(myHaiku.line1).toEqual("Delightful display");
    expect(myHaiku.line2).toEqual("Snowdrops bow their pure white heads");
    expect(myHaiku.line3).toEqual("To the sun's glory");
  });

  test('should correctly count vowels in each line', () => {
    let myHaiku = new Haiku ("Delightful display", "Snowdrops bow their pure white heads", "To the sun's glory");
    expect(myHaiku.findSyllable()).toEqual([6, 11, 5])
  });
});