import s from './printGrid.module.css';
import { useState } from 'react';
import { whatColorPaint } from './tests/whatColorPaint';

//дописать функцию whatColorPrint что бы логика соответствовала картинке
// есделать маленький компонент ExperementalPrintGrid без стэйтов  и в мего передавать в виде пропсов что что загаданно и то что написал чел.
// а для этого  написать логику, функцию или в константу, которая всегда высчитывает сколько заполнено а сколько еще свободно для заполнения.

export function LocalPrintWord ({hiddenWord, guessedWord}) {

    const colors = whatColorPaint(hiddenWord, guessedWord)


    // function handleEnteredLetters (event) {
    //     const writedLetter = event.target.value
    //     if(enteredLetters.length < enteredLetters.length + writedLetter.length) {
    //         setEnteredLetters([...enteredLetters, writedLetter])
    //     } else {
    //         setEnteredLetters(enteredLetters.slice(0,-1)) 
    //     }
        
    // }

    

   return (
        <div className={s.wordContainer}>
            {colors.map(obj => {
                return <div
                // type={'text'}
                // maxLength = '1'
                className = {s.letterContainer}
                style = {{background: obj.color, border: 'none'}}
                //  onChange = {handleEnteredLetters }
                // disabled = {enteredLetters.length > 4}
                > {obj.letter.toUpperCase()} </div>
            })}
        </div>
        
    )
} 
