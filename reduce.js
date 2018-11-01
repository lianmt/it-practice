/* 求最大最小值 */
const a = [1, 5, 3, 4, 2]
console.log(a.reduce((x, y) => x > y ? x : y))