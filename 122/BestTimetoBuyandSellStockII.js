/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法
var maxProfit = function(prices) {
  var profit = 0;
  for (let i = 0;i < prices.length; i++) {
    let differ = prices[i + 1] - prices[i];
    if (differ > 0) {
      profit += differ;
    }
  }
  return profit;
};