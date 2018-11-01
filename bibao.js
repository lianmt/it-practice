// 函数内部，可以读取全局变量
var n = 99
function f1() {
  console.log(n);
}
f1()

// 函数外部自然无法读取函数内部的局部变量
// function f2() {
//   var m = 11
// }
// console.log(m);

// 函数内部变量，如果不用var，实际上生命了一个全局变量
function f3() {
  x = 999
}
f3()
console.log(x)

// 外部读取函数内的变量，通过方法
// return 子函数的局部变量，父函数就可以读取了
function fu4() {
  var a = 999
  function fu5() {
    console.log(a)
  }
  return fu5
}
var result = fu4()
result()

// 闭包就是能够读取其他函数内部变量的函数。
// 在js中，可以理解成 “定义在一个函数内部的函数”，其本质，就是讲函数内部和函数外部连接起来的一座桥梁。
function fun1() {
  var a = 999
  newAdd = function() { a++ }
  function fun2() {
    console.log(a)
  }

  return fun2
}
var result = fun1()
result()
newAdd()
result()

// 在函数里面构建函数的时候，闭包产生。

(function() {
  var a = 1;
  setA = function(val) {
    a = val;
  }
  getA = function() {
    return a
  }
})()

function outer() {
  var a = 1;
  return {
    setA: function(val) {
      a = val
    },
    getA: function() {
      return a
    }
  }
}
