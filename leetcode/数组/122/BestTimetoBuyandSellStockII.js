/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法
var maxProfit = function(prices) {
  var profit = 0;
  for (let i = 0;i < prices.length; i++) {
    let differ = prices[i + 1] - prices[i];
    // 有钱赚就卖
    if (differ > 0) {
      profit += differ;
    }
  }
  return profit;
};


//  
var maxProfit = function (prices) {
  let len = prices.length
  let max = 0
  let low = null
  let high = null
  for (let i = 0; i < len; i++) {
    let next = prices[i + 1] || -1
    if (low !== null && high !== null) {
      max += (high - low)
      low = high = null
    }
    if (low === null && next > prices[i]) {
      low = prices[i]
    } else if (low !== null && next < prices[i]) {
      high = prices[i]
    }
  }
  if (low !== null && high !== null) {
    max += (high - low)
    low = high = null
  }
  return max
};