/*
 * @lc app=leetcode.cn id=926 lang=javascript
 *
 * [926] 将字符串翻转到单调递增
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function (S) {
    let dp = [0]
    let c1 = 0
    if (S[0] == 1) c1 = 1
  
    for (let i = 1; i < S.length; i++) {
      let c = Number(S[i])
      c1 += c
      if (c == 1) {
        dp[i] = dp[i - 1]
      }
      else {
        dp[i] = Math.min(dp[i - 1] + 1, c1)
      }
    }
    return dp[S.length - 1]
  };

// @lc code=end

