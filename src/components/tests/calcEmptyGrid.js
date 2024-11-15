//функция для вычисления количества полей которые еще не были заполнены.
export function calcEmptyGrid (guessedWords, hiddenWord) {

     
    const quantityWords = guessedWords.includes(hiddenWord)? 7 : 6
    const writingword = 1
    const counterFreeFields = quantityWords - guessedWords.length - writingword;
   // console.log(guessedWords[2] === hiddenWord, '🧠', counterFreeFields)
    return Array(counterFreeFields).fill('');
}


// console.log(calcEmptyGrid(['sport','greed','eagle' ],'eagle' ))