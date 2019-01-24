/**
 * @param {number[]} prices
 * @return {number}
 */
//动态规划 前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
var maxProfit = function(prices) {
  var res = 0,
    min = prices[0] || 0;
  prices.forEach((item, i) => {
    if (item < min) min = item;
    res = Math.max(res, item - min);
  });
  return res;
}

// 这个是笨方法。。。
var maxProfit = function(prices) {
  var profit = [];
  for (let i = 0;i < prices.length; i++) {
    let item = prices[i];
    for (let j = i + 1;j < prices.length; j++) {
      let item1 = prices[j];
      if (item1 - item > 0) {
        profit.push(item1 - item);
      }
    }
  }
  profit = profit.sort((a, b) => a - b);
  if (profit.length > 0) return profit.pop();
  return 0;
};
