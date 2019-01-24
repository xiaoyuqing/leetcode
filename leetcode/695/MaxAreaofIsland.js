/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0
  let x = grid.length
  let y = grid[0].length
  for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
          let gg = sum(i, j, grid)
          if ( gg > max) {
              max = gg
          }
      }
  }
  return max
  function sum(i, j, grid) {
      let num = 0
      if (grid[i][j] === 1) {
          num = 1
          grid[i][j] = 0
          if (i + 1 < x && grid[i + 1][j] === 1) {
              num += sum(i + 1, j, grid)
          }
          if (i - 1 >= 0 && grid[i - 1][j] === 1) {
              num += sum(i - 1, j, grid)
          }
          if (j + 1 < y && grid[i][j + 1] === 1) {
              num += sum(i, j + 1, grid)
          }
          if (j - 1 >= 0 && grid[i][j - 1] === 1) {
              num += sum(i, j - 1, grid)
          }
      }
      return num
  }
}; 