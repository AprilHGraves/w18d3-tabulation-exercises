// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
  const table = new Array(n);
  table[0] = 1;
  table[1] = 1;
  for (let step=2,numSteps=n; step<=numSteps; step++) {
    const oneStep = table[step - 1] || 0;
    const twoStep = table[step - 2] || 0;
    table[step] = oneStep + twoStep;
  }
  return table[table.length - 1]
}

// const a = climbStairs(22);
// console.log(a); //28657