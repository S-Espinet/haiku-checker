import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {
  test('should correctly create a haiku class with three lines', () => {
    let myHaiku = new Haiku("Delightful display", "Snowdrops bow their pure white heads", "To the sun's glory");
    expect(myHaiku.line1).toEqual("Delightful display");
    expect(myHaiku.line2).toEqual("Snowdrops bow their pure white heads");
    expect(myHaiku.line3).toEqual("To the sun's glory");
  });

  // test('should create new altered lines without silent e', () => {
  //   let myHaiku = new Haiku("Delightful display", "Snowdrops bow their pure white heads", "To the sun's glory");
  //   expect(rule1Line1).toEqual("Delightful display");
  //   expect(rule1Line2).toEqual("Snowdrops bow their pur whit heads");
  //   expect(rule1Line3).toEqual("To the sun's glory");
  // });

  test('should correctly count vowels in each line', () => {
    let myHaiku = new Haiku ("Delightful display", "Snowdrops bow their pure white heads", "To the sun's glory");
    expect(myHaiku.findSyllable()).toBeLessOrEqual([6, 11, 5])
  });

  test('should not include the silent e in the vowel count for each line', () => {
    let myHaiku = new Haiku ("Delightful display", "Snowdrops bow their pure white heads", "To the sun's glory");
    expect(myHaiku.findSyllable()).toEqual([6, 9, 4])
  });
});
//toBeLessOrEqual