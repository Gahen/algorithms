/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  var line = [];
  var column = [];
  var sum = 0;
  var reverseGrid = grid.map((g,i) => g.map((e,j) => grid[j][i]));
  for (let i=0; i < grid.length; i++) {
    line[i] = Math.max(...grid[i]);
    column[i] = Math.max(...reverseGrid[i]);
  }
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      sum += Math.min(line[i], column[j]) - cell;
    });
  });

  return sum;
};

let i, o;

i = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];
o = 35
console.log(maxIncreaseKeepingSkyline(i), o, maxIncreaseKeepingSkyline(i) == o);
