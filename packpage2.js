// 构造函数绑定形成类继承
function Animal() {
  this.species = 'animal'
}

function Cat(name, color) {
  Animal.apply(this, arguments)

  this.name = name
  this.color = color
}

var cat1 = new Cat('dd', 'ye')
console.log(cat1.species)

// prototype模式
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat
var cat1 = new Cat('name1', 'color1')
console.log(cat1.species)

// 直接继承，效率高（不用执行和建立Animal的实例），比较省内存。
// 缺点是Cat.prototype和Animal.prototype现在指向了同一个对象，那么任何对Cat.prototype的修改，都会反映到Animal.prototype
function Animal() {}
Animal.prototype.species = 'animal'

Cat.prototype = Animal.prototype
Cat.prototype.constructor = Cat

var cat1 = new Cat('name2', 'color')
console.log(cat1.species)

// 利用空对象作为中介，YUI库是实现继承的方法
function extend(Child, Parent) {
  var F = function() {}
  F.prototype = Parent.prototype
  Child.prototype = new F() // new空对象，不是继承prototype
  Child.prototype.constructor = Child
  Child.uber = parent.prototype // 子对象访问父对象的通道，只是为了实现继承的完备性，纯属备用性质
}

// 拷贝继承
function Animal() {}
Animal.prototype.species = 'animal'

function Extend2(Child, Parent) {
  var c = Child.prototype
  var p = Parent.prototype
  for(var i in p)
    c[i] = p[i]
  }
  c.uber = p
}
























