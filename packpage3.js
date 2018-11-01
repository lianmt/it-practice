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
