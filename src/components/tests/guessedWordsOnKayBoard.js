// import { whatColorPaint } from "./whatColorPaint";
const {whatColorPaint} = require('./whatColorPaint');
 export function guessedWordsOnKeyBoards (hiddenWord, guessedWords) {
    // console.log("🎨 guessedWordsOnKeyBoards");
    const allWrittenWordsColors = []
    for(let word of guessedWords) {
        const arrObjs = whatColorPaint(hiddenWord, word);
        allWrittenWordsColors.push(...arrObjs)
    }
    const filterGreen = allWrittenWordsColors.filter(obj => obj.color === 'green');
    const filterYellow = allWrittenWordsColors.filter(obj => obj.color === 'yellow')
    const filterGrey = allWrittenWordsColors.filter(obj => obj.color === 'grey')
    // console.log(filterGreen, filterYellow, filterGrey);

    const result = {};
    for(let obj of filterGrey) {
        result[obj.letter.toUpperCase()] = obj.color
    }
    for(let obj of filterYellow) {
        result[obj.letter.toUpperCase()] = obj.color
    }
    for(let obj of filterGreen) {
        result[obj.letter.toUpperCase()] = obj.color
    }
    // console.log(result)
    return result;
}

// console.log(guessedWordsOnKeyBoards('peace',['sport','greed','eagle', 'award'] ), '')
