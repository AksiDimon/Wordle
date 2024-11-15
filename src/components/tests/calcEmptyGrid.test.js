import { calcEmptyGrid } from "./calcEmptyGrid";

test('Вычисляем сколько нужно отрисовывать пустых полей. Если человек отгадал загаданное слово, то мы даем 7 полей так как после отгадывания поле куда чел вводит слово убирается, до тех пор пока чел не отградал мы даем 6 полей', () => {
    const arrGuessedWords = ['sport','greed','eagle' ]
    const hiddenWord = 'eagle'

    expect(calcEmptyGrid(arrGuessedWords,hiddenWord)).toEqual([ '', '', '' ])

    //Без расписывания в константы, вставляю на прямую данные в переменные.
    expect(calcEmptyGrid(['light', 'fight', 'greab'], 'gread')).toEqual(['',''])
    expect(calcEmptyGrid(['light', 'fight'], 'yacht')).toEqual([ '', '', '' ])
})