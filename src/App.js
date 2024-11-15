import s from './components/printGrid.module.css'
import './App.css';
import { LocalPrintWord } from './components/LocalPrintWord';
import { PrintGrid } from './components/PrintGrid';
import { KeyBoard } from './components/KeyBoard';
import { Rules } from './components/Rules';
import { whatColorPaint } from './components/tests/whatColorPaint';
import { useState } from 'react';
import { GameOver } from './components/GameOver';
import { EnteredWrongWord } from './components/EnteredWrongWord';
import { random, newWordleWords, bankAllWords, chosenWord } from './components/tests/bankHiddenWords';
import { useReducer } from 'react';

function reducer (state, action) {
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

  if(action.type === 'RESTART_GAME') {
    return {...state, arrGuessedWords: [],
      currentInputWord: '',
      hiddenWord: action.newHiddedWord
    }
  }
  
}

function App() {
  //const [state, setState] = useState({arrGuessedWords: [], currentInputWord: 'qwe', hiddenWord: newWordleWords[random] ,  isItInVocabulary: false});
  const [state, dispatch] = useReducer(reducer, {arrGuessedWords: [], currentInputWord: 'qwe', hiddenWord: newWordleWords[random] ,  isItInVocabulary: false})


  // console.log(hiddenWord,'🦾', currentInputWord,'🥸', state.arrGuessedWords)
  console.log(state, '🤯', state.hiddenWord)
  function handleInputWord (letter) {
      //  setState((prev) => {
      //  if(prev.currentInputWord.length < 5) {
      //   console.log(letter, '±±', prev)
      //   return {arrGuessedWords: prev.arrGuessedWords, currentInputWord: prev.currentInputWord + letter.toLowerCase(), hiddenWord: prev.hiddenWord , isItInVocabulary: false} 
      //  } else {
      //   return {arrGuessedWords: prev.arrGuessedWords, currentInputWord: prev.currentInputWord, hiddenWord: prev.hiddenWord  , isItInVocabulary: false} 
      //  }
      //  })
      dispatch({type: 'INPUT WORD', letter: letter})
  }
  
  function handleEnter () {
      // setState((prev) => {
      //   const {currentInputWord, arrGuessedWords} = prev
      //   if (currentInputWord.length !== 5) {
      //     return prev;
      //   }
      //   if(bankAllWords.has(currentInputWord.toUpperCase())) {
      //     return { 
      //       arrGuessedWords: [...arrGuessedWords, currentInputWord],
      //       currentInputWord: '',
      //       hiddenWord: prev.hiddenWord,
      //       isItInVocabulary: false
      //     }
      //   }
      //   return {
      //     ...prev,
      //     isItInVocabulary: true
      //   }
      // })
    dispatch({type : 'ENTER'})
  }

  function handleDelete () { 
    // setState(prev => {
    //   return {
    //     ...prev,
    //     currentInputWord: prev.currentInputWord.slice(0, -1)
    //   }
      
    // })
    dispatch({type: 'DELETE'})
  }

  function handleReStartGame () {
    // setState((prev) => {
    //   return {...prev, arrGuessedWords: [],
    //     currentInputWord: '',
    //     hiddenWord: newWordleWords[Math.floor(Math.random() * 156)]
    //   }
    // })
    const newHiddedWord  = newWordleWords[Math.floor(Math.random() * 156)]
    dispatch({type: 'RESTART_GAME', newHiddedWord})
  }


  return (
    <div>
      <nav><h1>Wordle</h1></nav>
      <div className= {s.appContainer} >
      <GameOver
      state = {state}
      guessedWords= {state.arrGuessedWords}
      hiddenWord = {state.hiddenWord}
      handleReStartGame = {handleReStartGame}
      />
      <PrintGrid
      hiddenWord = {state.hiddenWord}
      state = {state}
      guessedWords= {state.arrGuessedWords}
      currentInputWord = {state.currentInputWord}
      isItInVocabulary = {state.isItInVocabulary}
      />
      {/* < LocalPrintWord/> */}
      <KeyBoard
      hiddenWord = {state.hiddenWord}
      state = {state}
      guessedWords= {state.arrGuessedWords}
      handleInputWord = {handleInputWord}
      handleEnter = {handleEnter }
      handleDelete = {handleDelete }
      currentInputWord = {state.currentInputWord}
      />
    </div>
    <Rules/>
    </div>
    
  );
}

export default App;







// Решение через строки у currentInputWord
// function App() {
//   const [state, setGuessedWords] = useState(['sport','greed','eagle', 'award'])
//   const [currentInputWord, setCurrentInputWord] = useState('asl  ')


//   function handleInputWord (letter) {
//     const findEmptyIndex = currentInputWord.split('').findIndex(le => le === ' ')
//     // console.log(currentInputWord, '👹', findEmptyIndex)
//     if(findEmptyIndex !== -1) {
//       const newStr = currentInputWord.slice(0,[findEmptyIndex]) + letter + currentInputWord.slice([findEmptyIndex + 1])
//       // console.log(newStr, '💩')
//       setCurrentInputWord(newStr)
      
//     } 
//   }
  
//   function handleEnter () {
//     if(currentInputWord.length === 5) {
//       setGuessedWords([...guessedWords, currentInputWord])
//       setCurrentInputWord('     ')
//       console.log(guessedWords, '🤮')
//     }
//   }

//   function handleDelete () { 
//     //ПОка не правильно работает
//     const findLastFuiledIndex = currentInputWord.split('').findLastIndex(le => le !== ' ')
//     console.log(findLastFuiledIndex,   '💩')
//     const newStr = currentInputWord.slice(0,findLastFuiledIndex) + ' ' + currentInputWord.slice(findLastFuiledIndex + 1)
    
//     setCurrentInputWord(newStr)
//   }

//   const hiddenWord = 'peace';
//   const guessedWords1 = ['sport','greed','eagle', 'award'];

//   return (
//     <div className= {s.appContainer} >
//       <PrintGrid
//       hiddenWord = {hiddenWord}
//       guessedWords = {guessedWords}
//       currentInputWord = {currentInputWord}
//       />
//       {/* < LocalPrintWord/> */}
//       <KeyBoard
//       hiddenWord = {hiddenWord}
//       guessedWords = {guessedWords}
//       handleInputWord = {handleInputWord}
//       handleEnter = {handleEnter }
//       handleDelete = {handleDelete }
//       />
//     </div>
//   );
// }

// export default App;



 //Решение через массив у currentInputWord  Рабочее
// function App() {
//   const [guessedWords, setGuessedWords] = useState(['sport','greed','eagle', 'award'])
//   const [currentInputWord, setCurrentInputWord] = useState(['s','a','l', '' , ''])


//   function handleInputWord (letter) {
//     const findEmptyIndex = currentInputWord.findIndex(le => le === '')
//     if(findEmptyIndex !== -1) {
//       // currentInputWord[findEmptyIndex] = letter
//       // setCurrentInputWord([...currentInputWord])
//       setCurrentInputWord(currentInputWord.with(findEmptyIndex, letter))
//       // setCurrentInputWord(...currentInputWord)
//     } 
//   }
  
//   function handleEnter () {
//     if(currentInputWord.length === 5) {
//       setGuessedWords([...guessedWords, currentInputWord.join('')])
//       setCurrentInputWord(['', '' , '' , '', ''])
//       console.log(guessedWords, '🤮')
//     }
//   }

//   function handleDelete () {
//     const findLastFuiledIndex = currentInputWord.reverse().findIndex(le => le !== '')

//     if(findLastFuiledIndex !== -1) {
//       console.log(findLastFuiledIndex, '👿', currentInputWord[findLastFuiledIndex])
//       // console.log(currentInputWord.with(findLastFuiledIndex, '').reverse(), '🥶')
//        setCurrentInputWord( currentInputWord.with(findLastFuiledIndex, '').reverse())
//        console.log('🤠', currentInputWord)
//     }
   
//   }

//   const hiddenWord = 'peace';
//   const guessedWords1 = ['sport','greed','eagle', 'award'];

//   return (
//     <div className= {s.appContainer} >
//       <PrintGrid
//       hiddenWord = {hiddenWord}
//       guessedWords = {guessedWords}
//       currentInputWord = {currentInputWord}
//       />
//       {/* < LocalPrintWord/> */}
//       <KeyBoard
//       hiddenWord = {hiddenWord}
//       guessedWords = {guessedWords}
//       handleInputWord = {handleInputWord}
//       handleEnter = {handleEnter }
//       handleDelete = {handleDelete }
//       />
//     </div>
//   );
// }

// export default App;
