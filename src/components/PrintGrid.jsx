// import { useState } from 'react';
import s from './printGrid.module.css'

import { LocalPrintWord } from './LocalPrintWord';
import { useState } from 'react';
import { calcEmptyGrid } from './tests/calcEmptyGrid';
import { KeyBoard } from './KeyBoard';
import { EnteredWrongWord } from './EnteredWrongWord';
 export function PrintGrid ({hiddenWord ,guessedWords,  currentInputWord, isItInVocabulary}) {

    // const notFiledGrids = calcEmptyGrid(guessedWords)
    const arrCurrentInputWord = currentInputWord.split('').concat(new Array(5 - currentInputWord.length).fill(''))
    //  console.log(new Array (5).fill('', 2), Array (3) , '###')
    const maxLengthGrids = 6

    
    // console.log(guessedWords, '🫁')
    return (
        <div >
            
            <div className= {s.wordleContainer} >PrintGrid
            <EnteredWrongWord
            currentInputWord = {currentInputWord}
            isItInVocabulary = {isItInVocabulary}
            />
            { guessedWords.map(guessedWord => {
              return(
                <LocalPrintWord
                hiddenWord = {hiddenWord}
                guessedWord = {guessedWord}
                
                />
              )  
            })}
            {guessedWords.length < 6 && !guessedWords.includes(hiddenWord) && (
                <div className= {` ${s.wordContainer}`}>
                {arrCurrentInputWord.map(letter => {
                    // console.log(currentInputWord, '🤡')
                    //currentInputWord.split('')  Это нужно вставить в map выше если использовать закоменченый компонент со строками в App.js 
                    return (
                        <div 
                        className= {s.letterContainer} 
                        style = {{color: 'black', border:  '2px solid black'}} 
                        > {letter.toUpperCase()}</div>
                    )
                })}
            </div>
            )}
            
        
        {guessedWords.length < 6 && (
            <div>
            {calcEmptyGrid(guessedWords, hiddenWord).map(filed => {
                return (
                    <div className= {`${s.wordleContainer} ${s.wordContainer}`}>
                    {Array.from(hiddenWord).map((letter, i) => {
                    
                        return (
                            <div className= {s.letterContainer} >  </div>
                        )
                        
                    })}
                    </div>
                )
            })}
            </div>
        )}
        </div>
        </div>
        
    )
 }
 
//  return (<div className={s.wordContainer}>line
//                     {whatColorPaint(hiddenWord, guessedWord).map(obj => <div
//                      className = {s.letterContainer}
//                      > {obj.letter}                    </div>)}
//                 </div>)