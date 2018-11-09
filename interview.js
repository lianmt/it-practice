// 判断一个数字是否为整数？
function isNum(num) {
  if (typeof num != 'number') return false
  return num % 1 === 0
}

console.log(isNum(1.3))
console.log(isNum(13))
console.log(isNum('sfs'))
console.log(isNum(null))
console.log(isNum(undefined))

