module.exports = function reverse (n) {
  if (!n) {return 0;}
  return parseInt(n.toString().split('').reverse().join(''));
}

// Оригинальное условие задачи и тесты не дают полного покрытия.
// Ниже представлена реализация функции более общего вида.

// module.exports = function reverse (n) {
//     if (!n) {return 0;}
  
//     let res = 0;
  
//     if (n < 0) {
//       res = parseInt((-1*n).toString().split('').reverse().join(''))*-1;
//     } else {
//       res = parseInt(n.toString().split('').reverse().join(''));
//     }
  
//     if (res < -2147483648 || res > 2147483647) {
//       return 0;
//     }
  
//     return parseInt(n.toString().split('').reverse().join(''));
  
//   }
