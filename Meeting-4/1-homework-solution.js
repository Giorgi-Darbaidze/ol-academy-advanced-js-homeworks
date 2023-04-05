const personBehivor = {
	fullName() {return `${this.name} ${this.surname}`},
	countCars() {return this.cars.length},

	buysCar(car) {
			this.cars.push(car)
			car.addOwner(this)
	},

	sellsCar(car) {
			this.cars.filter(owner => car !== owner)
			car.removeOwner(this)
	},

	getAllCarsInfo() {
			return `${this.name} owns these cars: ${this.cars.map((car) => car.getCarInfo()).join(', ')}`
	}
}


const carBehivor = {
getFullInfo() {
	return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} person owns this car. These are - ${this.getOwnerNames().join(', ')}.`
},

removeOwner(owner) {return this.owners = this.owners.filter((delOwner) => delOwner !== owner);},
getCarInfo() {return `${this.make} ${this.model} released in ${this.year}`},
getOwnerNames() {return this.owners.map(names => names.fullName())},
addOwner(newOwner) {return this.owners.push(newOwner)},
getOwnersCount() {return this.owners.length},
}



function createPerson (name, surname, age, gender, cars = []) {
	let person = Object.create(personBehivor)
	person.surname = surname
	person.gender = gender
	person.name = name
	person.cars = cars
	person.age = age

	return person
}


function createCar(make, model, year) {
	let car = Object.create(carBehivor)
	car.owners = []
	car.model = model
	car.make = make
	car.year = year

	return car
}



let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
let ilona = createPerson("Elon", "Musk", 30, "M");
let duti_picoti = createCar("BMW", "525", "1999");
let stodevianosto = createCar("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
daniel: {
	fullName: daniel916.fullName(),
	countCars: daniel916.countCars(),
	getAllCarsInfo: daniel916.getAllCarsInfo(),
},

elon: {
	fullName: ilona.fullName(),
	countCars: ilona.countCars(),
	getAllCarsInfo: ilona.getAllCarsInfo(),
},

duti_picoti: {
	getOwnersCount: duti_picoti.getOwnersCount(),
	getOwnerNames: duti_picoti.getOwnerNames(),
	getFullInfo: duti_picoti.getFullInfo(),
	getCarInfo: duti_picoti.getCarInfo(),
},

stodevianosto: {
	getOwnersCount: stodevianosto.getOwnersCount(),
	getOwnerNames: stodevianosto.getOwnerNames(),
	getFullInfo: stodevianosto.getFullInfo(),
	getCarInfo: stodevianosto.getCarInfo(),
},
})