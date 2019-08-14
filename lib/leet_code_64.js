// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
  const table = new Array(grid.length).fill(0).map((e,i) => grid[i].slice(0));
  for (let row=0,rowFin=grid.length; row<rowFin; row++) {
    for (let col=0,colFin=grid[0].length; col<colFin; col++) {
      if (col === 0 && row === 0) {
        continue
      }
      const currCell = grid[row][col];
      let sumFromTopPath = Infinity;
      let sumFromLeftPath = Infinity;
      if (row > 0) {
        sumFromTopPath = table[row-1][col];
      }
      if (col > 0) {
        sumFromLeftPath =table[row][col - 1];
      }
      const bestSum = sumFromLeftPath < sumFromTopPath ? sumFromLeftPath:sumFromTopPath;
      table[row][col] = currCell + bestSum;
    }
  }
  return table[table.length - 1][table[0].length - 1]
}

// const grid = [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ];

// const a = minPathSum(grid);
// console.log(a);