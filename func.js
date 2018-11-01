function A() {
  var a = 5
  this.getA = function() {
    return a
  }
}

const a = new A()
console.log(a.getA())
console.log(a.a)
