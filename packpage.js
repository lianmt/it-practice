// 最简单的封装，抽象对象
var cat1 = {}
cat1.name = '大毛'
cat1.color = '黄色'

var cat2 = {}
cat2.name = '二毛'
cat2.color = '黑色'

// 没有解决代码重复问题；没看出有什么联系
// 同一个原型对象的实例
function Cat(name, color) {
  return {
    naem: name,
    color: color
  }
}

var cat1 = Cat('name', 'black')
var cat2 = Cat('two', 'yellow')

// 构造函数模式
function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var cat1 = new Cat('da', 'ye')
var cat2 = new Cat('er', 'bl')
// alert(cat1.name)
// alert(cat2.name)
alert(cat1 instanceof Cat)
alert(cat2 instanceof Cat)
// instanceof运算符，验证原型对象与实例对象之间的关系

// 构造函数，存在浪费内存的问题，每次生成一个实例，都会重复，所以抽成公共的原型继承，用同一个内存地址，指向prototype对象
// 解决重复问题，指向对象。
function Cat(name, color) {
  this.name = name
  this.color = color
  this.type = 'cat'
  this.eat = function() { alert('eat mouse') }
}
var cat1 = new Cat('1', '2')
var cat2 = new Cat('2', '1')
alert(cat.type) // 猫科动物
cat1.eat()      // 吃老鼠

// 原型继承
function Animal() {}
Animal.prototype.type = '动物'
var mao = new Animal()
console.log(mao.type)
