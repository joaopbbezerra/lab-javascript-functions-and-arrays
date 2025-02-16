// Iteration #1: Find the maximum
function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2){
      return n1;
  } else if (n2 > n1){
      return n2;
  } else {
      return n1;
    }
}
console.log(maxOfTwoNumbers(5, 6))

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  let maior = 0;
  let palavra = "";
  if (array.length === 0){
    return null;
  }
  else{
    for (let i = 0; i < array.length; i++){
      if (array[i].length > maior){
        maior = array[i].length;
        palavra = array[i];
      }
      else if (array[i] === maior) {
        continue;
      }
  
    }
  }
  
  return palavra;
}

console.log(findLongestWord(words))

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNum) {

    let soma = 0
    for (let i = 0; i < arrayNum.length; i++){
        soma = soma + arrayNum[i];
    }
    return soma;
}

console.log(sumNumbers(numbers))

// Iteration #3.1 Bonus:
function sum(arraySum) {
  let soma = 0;
  for (let i = 0; i < arraySum.length; i++){
    if (typeof arraySum[i] === "object") {
      throw new Error("Unsupported data type sir or ma'am")
    }
    if (typeof arraySum[i]==="string"){
      soma += arraySum[i].length;
      //console.log(`Soma de len: ${arraySum[i]} e total ${soma}`) 
    } else{
      soma += arraySum[i];
      //console.log(soma)
    }
  }
  return soma;
}
const mixedArr = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false];
console.log(sum(mixedArr));

/*Tests - 
    if (typeof arraySum[i] !== true || typeof arraySum[i] !== "string" || typeof arraySum[i] !== 2){
      return null;
    }
*/


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [9, 10, 82, 92, 32, 102, 58];

function averageNumbers(arrayAvg) {
  if (arrayAvg.length === 0){
    return null;
  }
  else{
    let somaArray = sumNumbers(arrayAvg);
  //console.log(somaArray);
    let divArr = arrayAvg.length;
  //console.log(divArr);
    let media = somaArray/divArr;
    return Number(media.toFixed(2));
  }
  
}
console.log("expected", averageNumbers(numbersAvg));


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrayLen) {
  let soma = 0;
  if (arrayLen.length === 0){
    return null;
  }
  else{
    for (let i = 0; i < arrayLen.length; i++){
      soma += arrayLen[i].length;
    }
    media = soma/arrayLen.length;
    return media;
   }
  }
console.log(averageWordLength(wordsArr));
console.log("-=".repeat(25));

// Bonus - Iteration #4.1
function avg(arrayMix) {
  if (arrayMix.length === 0){
    return null;
  }
  else {
    let soma = sum(arrayMix);
    console.log('mixsoma', soma);
    let tam = arrayMix.length;
    console.log('mixtam', tam);

    let media = soma/tam;
   
    return Number(media.toFixed(2));
  }
}
console.log("expected2", avg(mixedArr));
// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  if (array.length === 0){
    return null;
  }
  else{
    return Array.from(new Set(array)); //? From internet - Set is a new function (ES6) that removes repeated words
  }
}

console.log(uniquifyArray(wordsUnique));

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, word) { //indexOf returns -1 if does not exist
  if (array.length === 0){
    return null;
  }
  else{
    for (let i = 0; i < array.length; i++){
      if (array.indexOf(word)=== -1){
        return false
      }
      else {
        return true
      }
    }
  }
  
}

console.log(doesWordExist(wordsFind, "subset"))

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(array, word) {
  let counter = 0;
  if (array.length === 0){
    return 0;
  }
  else{
    for (let i = 0; i < array.length; i++){
      if (array[i]===word){
        counter++
      }
    }
    return counter;
  }
}

console.log(howManyTimes(wordsCount, "matter"))

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

//Matriz 20x20
console.log("-=".repeat(25))
function greatestProduct(array) {
  let maior = 0;
  let resultado = 0;
  let resulCol = 0;
  //Primeira parte -> Multiplicar os laterais
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      //console.log(array[i][j])
      if (j<17 & i<17){
        resultado = array[i][j] * array[i][j+1] * array[i][j+2] *array[i][j+3]
        resulCol = array[i][j] * array[i+1][j] * array[i+2][j] * array[i+3][j]
        //console.log(resultado)
        if (resultado > resulCol){
          maior = resultado;
        } else{
          maior = resulCol
        }
      }
    }
  }
  return maior;
}

greatestProduct(matrix)


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
