// 实现类的私有变量
class A {
  constructor() {
    this.a = 5
  }
  getA() {
    return this.a
  }
}
const a = new A()
console.log(a.getA());
console.log(a.a)
