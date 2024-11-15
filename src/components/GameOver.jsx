import s from './printGrid.module.css'
import { useState } from "react";

export function GameOver({guessedWords, hiddenWord, handleReStartGame}) {
    // const [reStartGame, setRestartGame] = useState()
  if (guessedWords.includes(hiddenWord)) {
    return (
      <div className={s.MainContainer} >
        <span className={s.spanGameOver} style= {{marginRight: '70px'}}> Congratulation! </span>
        
            <button 
        className={s.buttonPlayAgain}
        onClick = {handleReStartGame}
        > Play again</button>
        
        
      </div>
    );
  }

  if (guessedWords.length === 6) {
    return (
      <div className={s.MainContainer}>
    
            <span className={s.spanGameOver}>Was guessed: {hiddenWord.toUpperCase()} </span>
        
        
        <button
        className={s.buttonPlayAgain}
        onClick = {handleReStartGame}
        > Play again</button>
      </div>
    );
  }

  return null;
}

// export function GameOver (guessedWords, hiddenWord) {
//     return (

//         <div>

//             {guessedWords.includes(hiddenWord) && (
//                 <div>
//                     <h1> Congratulation! </h1>
//                     <button> Play again</button>
//                 </div>

//             )}
//             {guessedWords.length === 6 && guessedWords.includes(hiddenWord) && (
//                 <div>
//                     <h1> Congratulation! </h1>
//                     <button> Play again</button>
//                 </div>

//             )}

//         </div>
//     )
// }
