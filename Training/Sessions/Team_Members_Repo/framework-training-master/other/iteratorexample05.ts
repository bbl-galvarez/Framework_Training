class Greeter<T> {
    greeting: T;
    constructor(message: T) {
    this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}

let greeter = new Greeter<number>(123);
console.log(greeter.greet());
