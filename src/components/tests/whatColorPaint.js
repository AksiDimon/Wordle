 function whatColorPaint (hiddenWord, writtenWord) {
    const arrHiddenWord = hiddenWord.split('');
    const arrWrittenWord = writtenWord.split('');
    const result = [];
    //  result.length = 5
    //вясняем колличество букв в загаданном слове
    const objHiddenLetterCount = {};
    for(let letter of arrHiddenWord) {
        if(!(letter in objHiddenLetterCount)) {
            objHiddenLetterCount[letter] = 0;
        }
        objHiddenLetterCount[letter] += 1
    }

    // ищем точно угаданные букыв
    for(let i = 0; i < arrHiddenWord.length; i += 1) {
        if(arrHiddenWord[i] === arrWrittenWord[i]) {
            result[i] = {letter: arrWrittenWord[i], color: 'green'};
            //'#6aaa64'
            objHiddenLetterCount[arrWrittenWord[i]] -= 1;
        }
       
    }

    for(let i = 0; i < arrHiddenWord.length; i += 1) {
        if (arrHiddenWord[i] !== arrWrittenWord[i] && arrHiddenWord.includes(arrWrittenWord[i]) && objHiddenLetterCount[arrWrittenWord[i]] > 0) {
          
            // arrHiddenWord.includes(arrWrittenWord[i]) 
            result[i] = {letter: arrWrittenWord[i], color: 'yellow'}  ;
            // '#c9b458'
            objHiddenLetterCount[arrWrittenWord[i]] -= 1;
        } 
        if (typeof result[i] !== 'object') {
            result[i] = {letter: arrWrittenWord[i], color: 'grey'}
            //'#787c7e'
        }
    }
    // console.log(result, objHiddenLetterCount)
    return result
}
module.exports = {whatColorPaint}
console.log(whatColorPaint('peace' ,'award'));
//  [
//     { letter: 'a', color: 'grey' },
//     { letter: 'w', color: 'grey' },
//     { letter: 'a', color: 'green' },
//     { letter: 'r', color: 'grey' },
//     { letter: 'd', color: 'grey' }
//   ]





//  function whatColorPaint (hiddenWord, writtenWord) {
//     const result = [];
//     const local0bj = {};

//     const arrHiddenWord = hiddenWord.split('');
//     const arrWrittenWord = writtenWord.split('');
    
//     const objHiddenLetterCount = {};
//     for(let letter of arrHiddenWord) {
//         if(!(letter in objHiddenLetterCount)) {
//             objHiddenLetterCount[letter] = 0
//         }
//         objHiddenLetterCount[letter] += 1;
//     }

//     console.log(objHiddenLetterCount);


//     for(let i = 0; i < arrWrittenWord.length; i += 1) {
//         const writtenletter = arrWrittenWord[i];
//         const hiddenLetter = arrHiddenWord[i]
//         // console.log(arrHiddenWord, arrWrittenWord, '🎃')
//         if(arrHiddenWord[i] === arrWrittenWord[i]){
//           console.log(arrHiddenWord[i], arrWrittenWord[i])
//             //  console.log(arrHiddenWord.indexOf(arrHiddenWord[i]), arrWrittenWord.indexOf(arrWrittenWord[i]))
//             result.push({letter: arrWrittenWord[i], color: 'green'})
//             objHiddenLetterCount[arrWrittenWord[i]] -= 1;
//         }
//        else if(arrHiddenWord[i] !== arrWrittenWord[i] && arrHiddenWord.includes(arrWrittenWord[i]) && objHiddenLetterCount[arrWrittenWord[i]] > 0) {
//         console.log(arrHiddenWord[i], arrWrittenWord[i])
//             result.push({letter: arrWrittenWord[i], color: 'yellow'})
//             objHiddenLetterCount[arrWrittenWord[i]] -= 1
//         }
//         else {
//             result.push({letter: arrWrittenWord[i], color: 'grey'})
//         }
//     }

//     console.log(objHiddenLetterCount);

//     return result
// }

// const result2 =  [];
//     for(let i = 0; i < result.length; i += 1) {
//         let repeat = 0;
//         for(let j = 0; j < result.length; j += 1) {
//             if(result[i].letter === result[j].letter) {
//                 result[i].repeat = repeat +=1
//             }
            
//         }
//     }

// const x = 10;

// для положительных → 1
// для отрицательных четных → 2
// для отрицательных нечетных → 3

// if (x > 0) {
//     console.log(1);
// } else if (x % 2 === 0) {
//     console.log(2);
// } else {
//     console.log(3);
// }

// if (x > 0) {
//     console.log(1);
// } else {
//     if (x % 2 === 0) {
//         console.log(2);
//     } else {
//         console.log(3);
//     }
// }


// if (x > 0) {
//     console.log("A")
// } else {
//     console.log("B")
// }

// while(x > 0) x++;

// if(arrHiddenWord[i] === arrWrittenWord[i] && i === j) {
//             result.push({letter: arrWrittenWord[j], color: 'green'})
//         }
//         if(arrWrittenWord.includes(arrHiddenWord[j]) && i !== j) {
//              console.log(arrHiddenWord[i], arrWrittenWord[j])
//             result.push({letter: arrWrittenWord[j], color: 'yellow'})
//         }
//         if(!arrWrittenWord.includes(arrHiddenWord[i])) {
//             result.push({letter: arrWrittenWord[j], color: 'grey'})
//         }


// console.log(whatColorPaint('peace' ,'sport'));
//  [
//     { letter: 's', color: 'grey' },
//     { letter: 'p', color: 'yellow' },
//     { letter: 'o', color: 'grey' },
//     { letter: 'r', color: 'grey' },
//     { letter: 't', color: 'grey' }
//   ]

//  console.log(whatColorPaint('peace' ,'greed')); 
//  [
//     { letter: 'g', color: 'grey' },
//     { letter: 'r', color: 'grey' },
//     { letter: 'e', color: 'yellow' },
//     { letter: 'e', color: 'yellow' },
//     { letter: 'd', color: 'grey' }
//   ]

//  console.log(whatColorPaint('peace' ,'eagle'));
//  [
//     { letter: 'e', color: 'yellow' },
//     { letter: 'a', color: 'yellow' },
//     { letter: 'g', color: 'grey' },
//     { letter: 'l', color: 'grey' },
//     { letter: 'e', color: 'green' },
//   ]
// 
//  console.log(whatColorPaint('peace' ,'award'));
//  [
//     { letter: 'a', color: 'grey' },
//     { letter: 'w', color: 'grey' },
//     { letter: 'a', color: 'green' },
//     { letter: 'r', color: 'grey' },
//     { letter: 'd', color: 'grey' }
//   ]

// console.log(whatColorPaint('peace' ,'salad'));
// [
//     { letter: 's', color: 'grey' },
//     { letter: 'a', color: 'yellow' },
//     { letter: 'l', color: 'grey' },
//     { letter: 'a', color: 'grey' },
//     { letter: 'd', color: 'grey' }
//   ]

//   console.log(whatColorPaint('peace' ,'peace'));
//  [
//     { letter: 'p', color: 'green' },
//     { letter: 'e', color: 'green' },
//     { letter: 'a', color: 'green' },
//     { letter: 'c', color: 'green' },
//     { letter: 'e', color: 'green' },
//   ]