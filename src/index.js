import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {createStore} from 'redux'
import { random, newWordleWords, bankAllWords, chosenWord } from './components/tests/bankHiddenWords';
const defaultState = {arrGuessedWords: [],
    currentInputWord: 'qwe',
    hiddenWord: newWordleWords[random],
    isItInVocabulary: false
    }

    function printReducer(state = defaultState, action) {
      switch (action.type) {
        case 'ARR_GUESSED_WORDS':
          return
        case 'CURRENT_INPUT_WORD':
          return
        case 'HIDDEN_WORD':
          return
        case "IS_IT_IN_VOCABULARY":
          return
        default:
          return state
      }
    }

// const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
 
);


