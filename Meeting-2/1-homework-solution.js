function Person(name, surname, age, gender, cars = []) {
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


function Car(make, model, year) {
  this.owners = []
  this.make = make
  this.year = year
  this.model = model

  this.getFullInfo = () => {
    return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} person owns this car. These are - ${this.getOwnerNames().join(', ')}.`
  }

  this.getOwnerNames = () => {return this.owners.map(names => names.fullName())}
  this.getCarInfo = () => {return `${make} ${model} released in ${year}`}
  this.removeOwner = () => {return this.owners.splice(0, 1, this.owners)}
  this.addOwner = (newOwner) => {return this.owners.push(newOwner)}
  this.getOwnersCount = () => {return this.owners.length}
}


let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let stodevianosto = new Car("Mercedes", "E190", 1991);
let duti_picoti = new Car("BMW", "525", "1999");
let ilona = new Person("Elon", "Musk", 30, "M");

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

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