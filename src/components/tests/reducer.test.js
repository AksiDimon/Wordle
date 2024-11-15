import  {reducer, newHiddedWord  } from './reducer.js'
test('Добавление буквы  A в текущий currentInputWord Если длинна слова меньше 5',()=> {
    const state = {arrGuessedWords: [], currentInputWord: 'qwe', hiddenWord: 'light' ,  isItInVocabulary: false}
    const action = {type: 'INPUT WORD', letter: 'a'};

    expect(reducer(state,action)).toEqual({arrGuessedWords: [], currentInputWord: 'qwea', hiddenWord: 'light' ,  isItInVocabulary: false})
})

test('Добавление буквы A в текущий currentInputWord Если длинна слова ровна  5', () => {
    const state = {arrGuessedWords: [], currentInputWord: 'shout', hiddenWord: 'light', isItInVocabulary: false}
    const action = {type: 'INPUT WORD', letter: 'a'}

    expect(reducer(state, action)).toEqual({arrGuessedWords: [], currentInputWord: 'shout', hiddenWord: 'light', isItInVocabulary: false})
})


test('ENTER, Если ввели меньше 5 букв, при нажатии вернем тот же стэйт', () => {
    const state = {arrGuessedWords: [], currentInputWord: 'qwe', hiddenWord: 'light' ,  isItInVocabulary: false}
    const action = {type : 'ENTER'}

    expect(reducer(state, action)).toEqual({arrGuessedWords: [], currentInputWord: 'qwe', hiddenWord: 'light' ,  isItInVocabulary: false})
})



test ('ENTER, Если в банке слов есть загаданное слово, Мы его добавим в arrGuessedWords и обновим состояние currentInputWord на пустую строку. ', () => {
    const state = {arrGuessedWords: [], currentInputWord: 'sport', hiddenWord: 'light' ,  isItInVocabulary: false}
    const action = {type : 'ENTER'}
    expect(reducer(state, action)).toEqual({arrGuessedWords: ['sport'], currentInputWord: '', hiddenWord: 'light' ,  isItInVocabulary: false})
})

test ('ENTER, Если загадонное слово игроком не существует, Вывесит предупреждение Word not exist', () => {
    const state = {arrGuessedWords: ['light', 'right', 'yacht'], currentInputWord: 'qwert', hiddenWord: 'shout', isItInVocabulary: false}
    const action = {type: 'ENTER'}

    expect(reducer(state,action)).toEqual({arrGuessedWords: ['light', 'right', 'yacht'], currentInputWord: 'qwert', hiddenWord: 'shout', isItInVocabulary: true})


    // const state = {arrGuessedWords: ['light', 'right', 'yacht'], currentInputWord: 'qwert', hiddenWord: 'shout' ,  isItInVocabulary: false}
    // const action = {type : 'ENTER'}

    // expect(reducer(state, action)).toEqual({arrGuessedWords: ['light', 'right', 'yacht'], currentInputWord: 'qwert', hiddenWord: 'shout' ,  isItInVocabulary: true})
})


test('Удаление последней текущей буквы в currentInputWord', ()=> {
    const state = {arrGuessedWords: [], currentInputWord: 'qweq', hiddenWord: 'light' ,  isItInVocabulary: false}
    const action = {type: 'DELETE'}

    expect(reducer(state, action)).toEqual({arrGuessedWords: [], currentInputWord: 'qwe', hiddenWord: 'light' ,  isItInVocabulary: false})
})

test('Restart game, приводим в первоначальное состояние все данные в стэйте', () => {
    const state = { arrGuessedWords: ['light', 'right', 'yacht', 'shout'], currentInputWord: '', hiddenWord: 'shout', isItInVocabulary: false}
    const action = {type: 'RESTART_GAME'}
    expect(reducer(state, action)).toEqual({arrGuessedWords: [], currentInputWord: '', hiddenWord: action.newHiddedWord , isItInVocabulary: false})
})