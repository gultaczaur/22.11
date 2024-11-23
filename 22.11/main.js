//tasks
// Car adinda class yaradin daxilinde brand(markasi : Toyata ornek) i olsun modeli year price color percent(faizi) olsun
class Car {
    constructor(brand, model, year, price, color, percent) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price
        this.color = color;
        this.percent = percent;
    }
    // getDetail adinda func olsun masin haqqinda melumatlari logda gostersin
    getDetail() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}, Color: ${this.color}, Percent: ${this.percent}`
    }

    // faizi hesablayacaq function olsun yeni pricenin qiymetini goturub
    //  verilen faize gore yeni qiymetini tapib menimsetsin priceye 
    calculatePrice() {
        this.price += (this.price * this.percent / 100);
    }
}

// 1 den cox Car dan istifade ederek masinlar yaradin
const mashin1 = new Car('Toyota', 'Camry', 2020, 20000, 'Red', 10);
const mashin2 = new Car('Porsche', 'Cayenne', 2024, 80000, `White`, 20);
const mashin3 = new Car('Honda', 'Civic', 2019, 15000, 'Blue', 15);



// SportsCar  adindan class yaradin ve car dan extend etsin
class SportsCar extends Car {

    // sportCara da cardaki deyisenler elave olunsun elave olaraqda topSpeed elave olunsun
    // toSpeed(masinin sureti)
    constructor(brand, model, year, price, color, percent, topSpeed, speedPercent) {
        super(brand, model, year, price, color, percent);
        this.topSpeed = topSpeed;
        this.speedPercent = speedPercent;
    }

    // daxilinde getDetail adinda func olsun superden isdifade edib extend olunan detail melumatini
    // goturun elave olaraq maksimum suretinide qeyd edin
    getCarDetail() {
        console.log(`${super.getDetail()} Top Speed: ${this.topSpeed}`)
    }

    // daxilinde incrementSpeed adinda metod olsun ve sureti 10% artirsin
    incrementSpeed() {
        this.topSpeed += this.topSpeed * this.speedPercent / 100
    }
}
const sportsCar1 = new SportsCar('Ferrari', '488 GTB', 2022, 300000, 'Red', 10, 320, 5);
const sportsCar2 = new SportsCar('Lamborghini', 'Huracan', 2024, 400000, 'White', 15, 330, 10);
const sportsCar3 = new SportsCar('McLaren', '720S', 2023, 500000, 'Blue', 20, 340, 15);



// butun functionlari cagirib logda gosterin masinin qiymeti sonra endirimli qiymeti
// masinin sureti artiriliqdan sonra sureti ve.s
console.error(`Taskın 1-ci hissəsi`)
console.log(mashin1.getDetail());
mashin1.calculatePrice();
console.log(mashin1.getDetail());
console.warn(`-------------------------------------------------------`)

console.log(mashin2.getDetail());
mashin2.calculatePrice();
console.log(mashin2.getDetail());
console.warn(`-------------------------------------------------------`)

console.log(mashin3.getDetail());
mashin3.calculatePrice();
console.log(mashin3.getDetail());



console.error(`Taskın 2-ci hissəsi`)
sportsCar1.getCarDetail()
sportsCar1.calculatePrice()
sportsCar1.incrementSpeed()
sportsCar1.getCarDetail()
console.warn(`-------------------------------------------------------`)

sportsCar2.getCarDetail()
sportsCar2.calculatePrice()
sportsCar2.incrementSpeed()
sportsCar2.getCarDetail()
console.warn(`-------------------------------------------------------`)

sportsCar3.getCarDetail()
sportsCar3.calculatePrice()
sportsCar3.incrementSpeed()
sportsCar3.getCarDetail()

// Sual olduqda pls qrupa yazin , ugurlar :)



