const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

// utilizar el método reduce para sumar todos los elementos
// 21


const duplicateNumbers = arr.map(myFunction)
console.log(duplicateNumbers)
function myFunction(num) {
  return num * 2;
}

const oddNumbers = arr.filter(x => x%2 ===0 )
console.log(oddNumbers)

const sumNumbers = arr.reduce(functionSum)
console.log(sumNumbers)
function functionSum(x,y) {
    return x + y;
}