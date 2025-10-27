class Vehicle {
    move(){
        console.log("Kendaraan bergerak");
    }
}

class Car extends Vehicle {
    
}

class Boat extends Vehicle {
    move(){
        console.log("Kapal berlayar di laut");
    }
}

const car = new Car();
car.move();