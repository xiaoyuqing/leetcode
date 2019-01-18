/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 逆康托展开公式
var getPermutation = function (n, k) {
  let indexList = [],
    len = n
  while (indexList.length < len) {
    n--
    let fac = factorial(n)
    let index = parseInt(k / fac)
    if (k === 0) {
      indexList.push(0)
      continue
    }
    let more = k - fac * index
    let isNoMore = more === 0
    index = isNoMore ? Math.max(0, index - 1) : index
    k = isNoMore ? fac : more
    indexList.push(index)
  }
  function factorial(num) {
    let sum = 1
    while (num > 1) {
      sum *= num
      num--
    }
    return sum
  }
  let str = ''
  let numList = Array(len).fill(1).map((_, index) => index + 1)
  indexList.forEach(index => {
    let newStr = numList.splice(index, 1)
    str = str + newStr
  })
  return str
};
