var num = function(x) {
  return (y) => x + y
}
var a = num(10)
a(3) // 13
a(3) // 16

function count() {
  var a = 1
  return _ => a++
}
var count1 = count()
console.log(count1());
console.log(count1());

