class Person {
    name;
    constructor(name){
        this.name = name;
    }
    getInformation() {
        console.log(`This person is ${this.name}`);
    }
    
}


class Professor extends Person {
    constructor( name, teaches,){
        super(name);
        this.teaches = teaches;
    }
    introduceSelf() {
        console.log(
            `My Name is ${this.name}, and i will be your ${this.teaches} Professor`
        );
    }
    grade(paper){
        const grade  = Math.floor(Math.random() * (5-1)+1);
        console.log(grade);
    }
}




//const person = new Person ("jo");
//console.log[person.getInformation()];


const ema = new Professor ("ema", "Math", "SIB5B");
console.log(ema.getInformation());
console.log(ema.introduceSelf());
