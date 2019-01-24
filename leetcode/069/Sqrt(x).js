/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x));
};

// 牛顿迭代法
var mySqrt = function (x) {
  let m = x;
  let r = x;
  while (true) {
    if (m * m === x) {
      return m;
    } else if (m * m < x) {
      m = (m + r) / 2;
    } else if (m * m > x) {
      r = m;
      if (Math.floor(r) * Math.floor(r) < x) {
        return Math.floor(r);
      }
      m = m / 2;
    }
  }
};