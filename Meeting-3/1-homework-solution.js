class Person {
	constructor(name, surname, age, gender, cars = []) {
		this.surname = surname
		this.gender = gender
		this.name = name
		this.cars = cars
		this.age = age

		this.fullName = () => {return `${this.name} ${this.surname}`}
		this.countCars = () => {return this.cars.length}

		this.buysCar = (car) => {
			this.cars.push(car)
			car.addOwner(this)
		}

		this.sellsCar = (car) => {
			this.cars.filter(owner => car !== owner)
			car.removeOwner(this)
		}

		this.getAllCarsInfo = (info) => {
			`${this.name} owns these cars: ${info.getCarInfo(this).join(', ')}`
		}
	}
}

class vehicle {
	constructor(make, model) {
		this.make = make
		this.model = model
	}
}

class Car extends vehicle{
	constructor(make, model, year) {
		super(make, model)
		this.owners = []
		this.year = year

		this.getFullInfo = () => {
			return `${this.make} ${this.model} from ${this.year}. ` +
			`${this.getOwnersCount()} person owns this car. ` +
			`These are - ${this.getOwnerNames().join(', ')}.`
		}

		this.getCarInfo = () => {return `${this.make} ${this.model} released in ${this.year}`}
		this.getOwnerNames = () => {return this.owners.map(names => names.fullName())}
		this.removeOwner = () => {return this.owners.splice(0, 1, this.owners)}
		this.addOwner = (newOwner) => {return this.owners.push(newOwner)}
		this.getOwnersCount = () => {return this.owners.length}
	}
}


let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let stodevianosto = new Car("Mercedes", "E190", 1991);
let duti_picoti = new Car("BMW", "525", 1999);
let ilona = new Person("Elon", "Musk", 30, "M");

daniel916.buysCar(duti_picoti)
daniel916.buysCar(stodevianosto)
daniel916.sellsCar(duti_picoti)
ilona.buysCar(stodevianosto)
ilona.buysCar(duti_picoti)

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(), // - არ მუშაობს (getCarInfo undefined)
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(), // - არ მუშაობს (getCarInfo undefined)
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(), // - stodevianosto-სგან განსხვავებით ეს აქ არ მუშაობს
    getFullInfo: duti_picoti.getFullInfo(), // - ანალოგიურად ესეც
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});
