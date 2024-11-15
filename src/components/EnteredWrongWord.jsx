import s from './printGrid.module.css'
import { bankAllWords, newWordleWords } from "./tests/bankHiddenWords";

export function EnteredWrongWord ({currentInputWord, isItInVocabulary}) {
    if(!bankAllWords.has(currentInputWord) && currentInputWord.length === 5 && isItInVocabulary === true) {
        return (
            <div
             className={s.massageWrongWord}

              > Word not exist </div>
        )
    }
}