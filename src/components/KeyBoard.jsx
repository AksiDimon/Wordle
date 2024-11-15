import s from './printGrid.module.css'
import { useEffect, useMemo } from "react";
import { guessedWordsOnKeyBoards } from './tests/guessedWordsOnKayBoard';


export function KeyBoard ({hiddenWord, guessedWords, handleInputWord, handleEnter, handleDelete, currentInputWord }) {
  const objLettersColors = useMemo(
    () => guessedWordsOnKeyBoards(hiddenWord, guessedWords),
    [hiddenWord, guessedWords],
  );


  function handlePhysicKeyBoard (event) {
    const pressedButton = event.key;
    if(pressedButton.length === 1 && pressedButton >= 'a' && pressedButton <= 'z' && currentInputWord.length < 5) {
      // console.log(pressedButton, '💩')
      handleInputWord(pressedButton)
    }
   else if(pressedButton === 'Enter') {
      handleEnter()
    }
   else if(pressedButton === 'Backspace') {
      console.log('|||')
      handleDelete()
    }
    console.log(`Нажал ${pressedButton}`)
  }

  useEffect(function() {
  window.addEventListener('keydown', handlePhysicKeyBoard);

  // return () => {
  //   window.removeEventListener('keyup', handlePhysicKeyBoard)
  // }

  }, [])
  

    const firstLine = ['Q', 'W','E','R','T','Y','U','I','O','P']
    const secondLine = ['A','S','D','F','G','H','J','K','L']
    const thirdLine = ['Z','X','C','V','B','N','M']
    
    return (
      <div className={s.mainBoard}>
        <div className={s.containerBoard1}>
          {firstLine.map(letter => {
            // console.log(objLettersColors.letter, '👅')
  
            return ( //1line
              <button
                className={s.letterKeyBoard1}
                style={{ background: objLettersColors[letter] }}
                onClick={() => handleInputWord(letter)}
              > {letter}</button>
            )
  
          })}
        </div>
        <div className={s.containerBoard2}>
          {secondLine.map(letter => {
            // console.log(letter, '👅')
            return ( //2line
              <button
                className={s.letterKeyBoard2}
                style={{ background: objLettersColors[letter] }}
                onClick={() => handleInputWord(letter)}
              > {letter}</button>
            )
  
          })}
        </div>
        <div className={s.containerBoard3}>
          <button
            className={s.letterKeyBoard3}
            // style = {{background: objLettersColors[letter]}}
            onClick={handleEnter}
          >Enter</button>
          {thirdLine.map(letter => { // 3line
            return (
              <button
                className={s.letterKeyBoard3}
                style={{ background: objLettersColors[letter] }}
                onClick={() => handleInputWord(letter)}
              > {letter}</button>
            )
  
          })}
          <button
            className={s.letterKeyBoard3}
            // style = {{background: objLettersColors[letter]}}
            onClick={handleDelete}
          >⇦</button>
        </div>
      </div>
  
    )
}





// useEffect(function() {
//   window.addEventListener('keydown', function (event) {
//     const pressedButton = event.key;
    
//     if(pressedButton.length === 1 && pressedButton >= 'a' && pressedButton <= 'z' && currentInputWord.length < 5) {
//       console.log(pressedButton, '💩')
//       handleInputWord(pressedButton)
//     }
//     if(pressedButton === 'Enter') {
//       handleEnter()
//     }
//     if(pressedButton === 'Backspace') {
//       console.log('|||')
//       handleDelete()
//     }
//       // Используем объект события,
//       // чтобы получить информацию о нажатой клавише
//       console.log(`Вы нажали на кнопку: ${event.key}`)
//     })
    

//   }, [])