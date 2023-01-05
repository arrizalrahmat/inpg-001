const specifications = {
  engine: 'something',
  tireCount: 4,
  manufactureYear: 2022,
};

const car = {
  manufacturer: 'toyota',
  type: 'innova',
  variant: 'zenix',
  specifications,
  start() {
    console.log(
      `${this.manufacturer} ${this.type} is starting`
    );
  },
  stop() {
    console.log(
      `${this.manufacturer} ${this.type} is stopped`
    );
  },
  paint(color) {
    console.log(
      `your ${this.manufacturer} ${this.type} is now ${color}`
    );
  },
};

car.price = 700000000;
car.specifications.color = 'silver';

// console.log(car);

car.start();
car.stop();
car.paint('purple');
