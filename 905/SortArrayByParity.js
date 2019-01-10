/**
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParity = function (A) {
  let even = [];
  let odd = [];
  A.forEach(item => {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  });
  return even.concat(odd);
};