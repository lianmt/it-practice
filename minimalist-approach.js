var Animal = {
  createNew: () => {
    console.log('Animal')
    var animal = {}
    animal.name = 'damao'
    animal.sleep = () => { console.log('shuijiao') }
    return animal;
  }
}

var Cat = {
  sound: '喵喵喵',
  createNew: () => {
    var cat = Animal.createNew()
	var color = 'yellow'
    cat.name = 'damao'
	cat.getColor = () => { console.log(console.log(color)) }
    cat.maskSound = () => { console.log(Cat.sound) }
    cat.changeSound = (x) => { Cat.sound = x }
    return cat;
  }
}

var cat1 = Cat.createNew()
cat1.sleep()
cat1.changeSound('wangwang')
cat1.maskSound()
cat1.getColor()