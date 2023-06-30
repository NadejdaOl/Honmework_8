// 1.Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// function min (a, b) {
    // if (a <= b) {
        // return a;
    // } else 
        // return b;   
    // console.log(min(3, 65))
    

// 2.Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function evenNum(a, b) {
    // let start = Math.max(a, b);
    // let end = Math.min(a, b);

    // for (let i = start; i >= end; i--) {
        // if (i % 2 === 0) {
        // console.log(i);
        // }
    // }
// }
// evenNum(3, 10)

// 3.Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// function power(base, exponent = 2) {
    // return Math.pow(base, exponent);
// }

  // console.log(power(10)); 
  // console.log(power(3, 3)); 
  // console.log(power(8)); 

// 4.Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function sumTo(n) {
    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
        // sum += i;
    // }
    // return sum;
// }

// console.log( sumTo(50) );

// 5.Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function sumEvenOddNum(n, m) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = n; i < m; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        
        } else {
            sumOdd += i;
        }
        return sumEven;
        return sumOdd;
    }
}
console.log(sumEven);
console.log(sumOdd);
sumEvenOddNum (2, 20);


// 6.Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'


// const longestString = (arr) => {
   //  if (arr.length === 0) {
        // return null
    // }
    
    // let arrLengths = [] 
    
    // for (let i = 0; i < arr.length; i++) {
      // arrLengths.push(arr[i].length)
    // }
    
    // const max = Math.max.apply(null, arrLengths)
  
    
    // for (let i = 0; i < arr.length; i++) {
      // if (arr[i].length === max){
        // return arr[i]
      // }  
    // }
 // }
  
  
  // console.log(longestString(['one', 'two', 'three', 'fife']))












