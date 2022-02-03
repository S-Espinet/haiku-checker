import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {
  test('should correctly create a haiku class with three lines', () => {
    let myHaiku = new Haiku("Delightful display", "Snowdrops bow their pure white heads", "To the sun's glory");
    expect(myHaiku.line1).toEqual("Delightful display");
    expect(myHaiku.line2).toEqual("Snowdrops bow their pure white heads");
    expect(myHaiku.line3).toEqual("To the sun's glory");
  });
  test('should return word if it does not end with e', () => {
    let myHaiku = new Haiku ("Delightful");
    expect(myHaiku.removeE()).toEqual("Delightful")
  });
  test('should not include the silent e at the end of a word', () => {
    let myHaiku = new Haiku ("white");
    expect(myHaiku.removeE()).toEqual("whit")
  });
});