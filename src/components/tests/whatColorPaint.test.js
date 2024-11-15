import { whatColorPaint } from './whatColorPaint';

//Если в загаданном слове только одна какая либо буква а в том что написал пользователь эта буква может повтаряться несколько раз, и он их написал в не правильном месте, то мы должны отметить только одну букву желтым.
test('Если бука отгадана на правильном месте, красим ее в Зеленый, если отгадана и на не правильном месет, красим в Желтый, если такой буквы нет, в Cерый.', () => {
  const hiddenWord = 'peace';

  expect(whatColorPaint(hiddenWord, 'sport')).toEqual(
  [
    { letter: 's', color: 'grey' },
    { letter: 'p', color: 'yellow' },
    { letter: 'o', color: 'grey' },
    { letter: 'r', color: 'grey' },
    { letter: 't', color: 'grey' },
  ]);

  expect(whatColorPaint(hiddenWord, 'greed')).toEqual(
  [
    { letter: 'g', color: 'grey' },
    { letter: 'r', color: 'grey' },
    { letter: 'e', color: 'yellow' },
    { letter: 'e', color: 'yellow' },
    { letter: 'd', color: 'grey' },
  ]);
  expect(whatColorPaint(hiddenWord, 'eagle')).toEqual(
  [
    { letter: 'e', color: 'yellow' },
    { letter: 'a', color: 'yellow' },
    { letter: 'g', color: 'grey' },
    { letter: 'l', color: 'grey' },
    { letter: 'e', color: 'green' },
  ]);
  expect(whatColorPaint(hiddenWord, 'award')).toEqual(
    [
    { letter: 'a', color: 'grey' },
    { letter: 'w', color: 'grey' },
    { letter: 'a', color: 'green' },
    { letter: 'r', color: 'grey' },
    { letter: 'd', color: 'grey' },
  ]);
  expect(whatColorPaint(hiddenWord, 'salad')).toEqual(
  [
    { letter: 's', color: 'grey' },
    { letter: 'a', color: 'yellow' },
    { letter: 'l', color: 'grey' },
    { letter: 'a', color: 'grey' },
    { letter: 'd', color: 'grey' },
  ]);
  expect(whatColorPaint(hiddenWord, 'peace')).toEqual(
  [
    { letter: 'p', color: 'green' },
    { letter: 'e', color: 'green' },
    { letter: 'a', color: 'green' },
    { letter: 'c', color: 'green' },
    { letter: 'e', color: 'green' },
  ]);
});
