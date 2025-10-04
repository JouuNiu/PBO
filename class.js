class Person {
    name;
    constructor(name){
        this.name = name;
        this.age = 22;
    }
    getInformation() {
        console.log(`This person is ${this.name}`);
    }
    getAge() {
        console.log(`This person was ${this.age} age`);
    }
}


class Professor extends Person {
    constructor( name, teaches, kelas){
        super(name);
        this.teaches = teaches;
        this.kelas = kelas;
    }
    introduceSelf() {
        console.log(
            `My Name is ${this.name}, and i will be your ${this.teaches} Professor`
        );
    }
    getClass(){
        console.log(
            `I'll be in ${this.kelas} today.`
        );
    }
}




//const person = new Person ("jo");
//console.log[person.getInformation()];


const ema = new Professor ("ema", "Math", "SIB5B");
console.log(ema.getInformation());
console.log(ema.introduceSelf());
console.log(ema.getAge());
console.log(ema.getClass());