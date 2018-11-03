if (!myObj) { // 会报错
  myObj = {}
}

// 2 可正常运行
if (!myObj) {
  var myObj = {}
}

// 3 等同于 2
var myObj
if (!myObj) {
  var myObj = {}
}

// 4
if (!window.myObj) {
  myObj = {}
}

// 5 考虑规范性
if (!window.myObj) {
  var = myObj = {}
}
if (!window.myObj) {
  window.myObj = {}
}

// 6 zai v8、Rthino环境，window未必是顶层对象
if (!this.myObj) { // this关键字总是指向顶层变量的
  this.myObj = {}
}

// 7 改进
var globar = this
if (!global.myObj) {
  global.myObj = {}
}

// 8  typeof判断对象是否有定义
if (typeof myObj == 'undefined') {
  var myObj = {}
}

// 9
if (myObj == undefined) {
  var myObj = {}
}

// 使用in运算符，判断myObj是否为顶层对象的一个属性
if (!('myObj' in window)) {
  window.myObj = {}
}

// 使用hasOwnProperty方法，判断myObject是否为顶层对象的一个属性
if (!this.hasOwnProperty('myObj')) {
  this.myObj = {}
}
