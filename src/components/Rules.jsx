import { useState } from 'react'
import s from './printGrid.module.css'
export function Rules () {
    const [isClose, setIsclose] = useState(false);
    if(isClose === false) {
        return (
        <div className={s.mainRulesContainer} >
            <div style={{display: 'flex'}}>
                
                <h1 style={{flex: '2'}} >How To Play</h1>
                <button 
                className={s.btnCloseRules}
                onClick = {() => setIsclose(true)}
                >⊗</button>
                
                
            </div>
            
            <h1 style={{fontWeight: 'normal'}} >Guess the Wordle in 6 tries.</h1>
            <ul>
                <li>Each guess must be a valid 5-letter word.</li>
                <li>The color of the tiles will change to show how close your guess was to the word.</li>
            </ul>
            <div style={{fontWeight: 'bold', margin: '20px 0px'}} >Examples</div>
            <div>
                <div className= {` ${s.wordContainer}`} >
                    {'WORDY'.split('').map((letter, i) => {
                        // {i === 0 && (<div style={{background: 'green'}}>{letter}</div>)}
                        return (
                            
                            <div
                            className= {s.lettersContainerRules}
                            style = {{background: letter === 'W' ? 'green' : 'none'}}
                            // style= {{fontSize: '0.9rem', width:'30px', height: '30px'}}
                            >{letter}</div>
                        )
                    })}
                </div>
            </div>
            <p>
            <span style={{fontWeight: 'bold'}} >W</span> is in the word and in the correct spot.
            </p>
            <div>
                <div className= {` ${s.wordContainer}`} >
                {'LIGHT'.split('').map(letter => {
                        return (
                            <div
                             className= {s.lettersContainerRules}
                             style = {{background: letter === 'I' ? 'yellow' : 'none'}}
                            >{letter}</div>
                        )
                    })}
                </div>
            </div>
            <p>
                <span style={{fontWeight: '900'}}>I</span> is in the word but in the wrong spot.
            </p>
            <div>
                <div className= {` ${s.wordContainer}`}>
                    {'ROGUE'.split('').map(letter => {
                        return (
                            <div 
                            className= {s.lettersContainerRules}
                            style = {{background: letter === 'U' ? 'grey' : 'none'}}
                            >{letter}</div>
                        )
                    })}
                </div>
            </div>
            <p>
                <span style={{fontWeight: 'bold'}} >U</span> is not in the word in any spot
            </p>
        </div>
    )
    }
    return null;
    
}