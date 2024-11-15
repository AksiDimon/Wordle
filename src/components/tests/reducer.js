import { bankAllWords, newWordleWords } from "./bankHiddenWords"

export function reducer (state, action) {
    if(action.type === 'INPUT WORD') {
      if(state.currentInputWord.length < 5) {
      console.log(action.letter, '±±', state)
      return {arrGuessedWords: state.arrGuessedWords, currentInputWord: state.currentInputWord + action.letter.toLowerCase(), hiddenWord: state.hiddenWord , isItInVocabulary: false} 
     } else {
      return {arrGuessedWords: state.arrGuessedWords, currentInputWord: state.currentInputWord, hiddenWord: state.hiddenWord  , isItInVocabulary: false} 
     }
    }
  
    if(action.type === 'ENTER') {
      const {currentInputWord, arrGuessedWords} = state
          if (currentInputWord.length !== 5) {
            return state;
          }
          if(bankAllWords.has(currentInputWord.toUpperCase())) {
            return { 
              arrGuessedWords: [...arrGuessedWords, currentInputWord],
              currentInputWord: '',
              hiddenWord: state.hiddenWord,
              isItInVocabulary: false
            }
          }
          return {
            ...state,
            isItInVocabulary: true
          }
    }
    if(action.type === 'DELETE') {
      return {
            ...state,
            currentInputWord: state.currentInputWord.slice(0, -1)
          }
    }

    if(action.type  === 'RESTART_GAME') {
      return {
        // ...state,
        arrGuessedWords: [],
        currentInputWord: '',
        hiddenWord: action.newHiddedWord,
        isItInVocabulary: false
      }
    }
    
  }