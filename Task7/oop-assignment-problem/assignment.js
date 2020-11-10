class Course {
    #price;
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    get price() {
        return '$'+this.#price;
    }

    set price(amount) {
        if(amount <0) {
            throw 'Invalid value!';
        }
        this.#price = amount;
    }

    calculateLengthPriceValue() {
        return this.#price / this.length;
    }

    coursePerDollar(amount) {
        const hourly = this.length / this.#price;
        return amount * hourly;
    }

    courseSummary() {
        console.log(` Course: ${this.title} \n
        Length: ${this.length} \n
        Price: ${this.#price} \n
        Price per Hour: ${this.calculateLengthPriceValue()}
        `)
    }
}

class PracticalCourse extends Course{
    constructor(title,length,price,numOfExercises) {
        super(title,length,price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course{
    constructor(title,length,price) {
        super(title,length,price);
    }

    publish(){
        console.log("Publishing...")
    }
}

const course = new Course("JavaScript", 100, 99.99);

course.courseSummary();

console.log(`For 5 \$ will get  ${course.coursePerDollar(5).toFixed(2)}h of ${course.title}`)

const practical = new PracticalCourse("PracticesJS",10,20,15);

console.log(`For 5 \$ will get  ${practical.coursePerDollar(5).toFixed(2)}h of ${practical.title}, in course there are ${practical.numOfExercises} exercises`)

const theory = new TheoreticalCourse("TheoreticalJS",20,20);

console.log(`For 5 \$ will get  ${theory.coursePerDollar(5).toFixed(2)}h of ${theory.title}`)

theory.publish();

console.log(course.price);