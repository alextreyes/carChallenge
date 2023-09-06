class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  toString() {
    console.log(
      `the vehicle is a ${this.brand} ${this.model} from ${this.year}`
    );
  }
  honk() {
    return "beep.";
  }
}

class Car extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOOOOOOOOM!!!!!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  isVehicle(vehicle) {
    return vehicle instanceof Vehicle; //instaceof lets me know if its a vehicle
  }
  isFull() {
    return this.vehicles.length >= this.capacity;
  }
  add(vehicle) {
    if (!this.isVehicle(vehicle)) {
      return "Only vehicles are allowed in here!";
    }

    if (this.isFull()) {
      return "Sorry, we’re full.";
    }

    this.vehicles.push(vehicle);
    return "Vehicle added to the garage.";
  }
}
