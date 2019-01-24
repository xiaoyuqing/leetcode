/**
 * @param {number} n
 * @return {number}
 */

 // 第一种
var climbStairs = function (n) {
  if (n <= 2) {
    return n
  }
  let sum = 0
  let no1 = 1
  let no2 = 2
  while (n > 2) {
    sum = no1 + no2
    no1 = no2
    no2 = sum
    n--;
  }
  return sum
};

//第二种 就是前两个台阶的种数之和
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let sumList = [1, 2];
  for (let index of Array(n).fill().keys()) {
    if (index < 2) continue;
    let sum = sumList[index - 1] + sumList[index - 2];
    sumList[index] = sum;
    if (index === n-1) {
      return sumList[n-1]
    }
  }
}

console.log(climbStairs(5)) //8
