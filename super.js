class Pet {
	constructor(name, age) {
		console.log('IN PET CONSTRUCTOR!');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet {
	constructor(name, livesLeft = 9) {
		console.log('IN CAT CONSTRUCTOR!');
        super(name);
        this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWWW!!';
	}
}

const gorbe = new Cat('pishi', 3)
class Dog extends Pet {
	bark() {
		return 'WOOOF!!';
	}
	eat() {
		return `${this.name} scarfs his food!`;
	}
}

const rex = new Dog('Rex', 3)

class GuineaPig extends Pet {
    constructor(livesLeft = 9) {
        super()
        this.livesLeft = livesLeft;
    }
    play() {
        return `${this.livesLeft} lives left`
    }
}

const guineaPig = new GuineaPig(5)