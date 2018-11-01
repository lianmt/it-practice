/* 非构造函数继承 */
// object原型链继承方法
var Chinese = {
  nation: 'china'
}

function object(o) {
  var F = function() {}
  F.prototype  = o
  return new F()
}

var Doctor = object(Chinese)
console.log('doctor', Doctor);

// 浅拷贝，这是早期JQuery实现继承的方式
// 遇到数组或对象就不行了，保存的内存都相同，父对象容易被篡改
var Chinese = {
  nation: 'china'
}
function extendCopy(p) {
  var c = {}
  for(var i in p) {
    c[i] = p[i]
  }
  c.uber = p
  return c
}
var Doctor = extendCopy(Chinese)
Doctor.career = 'doctor'
console.log(Doctor.nation)

// 递归浅拷贝
var Chinese = {
  nation: 'china'
}
function deepCopy(p, c) {
  var c = c || {}
  for(var i in p) {
    if (typeof p[i] === 'object') {
      c[i] = (p[i].constructor === Array) ? [] : {}
      deepCopy(p[i], c[i])
    } else {
      c[i] = p[i]
    }
  }
  return c
}
Chinese.birthPlaces = ['1', '3']

var Doctor = deepCopy(Chinese)
Doctor.birthPlaces.push('2')
console.log(Doctor.birthPlaces, Chinese.birthPlaces)


