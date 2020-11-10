class Person {
    name = 'Filip';

    constructor() {
        this.age = 23;
    }

    greet() {
        console.log(`Hi! My name is ${this.name} and I am ${this.age} years old`);
    }
}

const filip = new Person();

filip.greet();