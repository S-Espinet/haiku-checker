import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {
  test('should correctly create a haiku class with three lines', () => {
    let myHaiku = new Haiku("Delightful display", "Snowdrops bow their pure white heads", "To the sun's glory");
    expect(myHaiku.line1).toEqual("Delightful display");
    expect(myHaiku.line2).toEqual("Snowdrops bow their pure white heads");
    expect(myHaiku.line3).toEqual("To the sun's glory");
  });
  test('should not include the silent e in the vowel count for each line', () => {
    let myHaiku = new Haiku ("Delightful", "Snowdrops", "glory");
    expect(myHaiku.removeE()).toEqual(["Delightful", "Snowdrops", "glory"])
  });
});