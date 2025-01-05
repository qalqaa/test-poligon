//Polymorphism
class Animal {
    voice = () => {
        console.log('Voice');
    };
}

class Cat extends Animal {
    voice = () => {
        console.log('I hate giNgers');
    };
}

new Cat().voice();

//Abstract
class BankAccount {
    #balance; //private

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log('Sum must be lager than zero');
            return;
        }
        this.#balance += amount;
        console.log(
            `${amount}$ added to your account. Balance: ${this.#balance}`,
        );
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Not enough money');
            return;
        }
        this.#balance -= amount;
        console.log(
            `${amount}$ withdrawn from yor account. Balance: ${this.#balance}`,
        );
    }
}

// Abstract using
const myAccount = new BankAccount('John Doe', 1000);

console.log(myAccount.owner); // John Doe
console.log(myAccount.getBalance()); // 1000

myAccount.deposit(500);
myAccount.withdraw(200);

// Attempting to directly access a private property will cause an error.
// console.log(myAccount.#balance); // Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class

//Inheritance
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    go() {
        console.log(`${this.name} goes`);
    }
}

class Airplane extends Vehicle {
    constructor(name, speed) {
        super(name);
        this.speed = speed;
    }

    go() {
        console.log(`${this.name} flyes.`);
    }

    fetchSpeed() {
        console.log(`${this.speed} - is current speed `);
    }
}

const genericAnimal = new Vehicle('kidna vehicle');
genericAnimal.go();

const airplane = new Airplane('Airbus', 1337);
airplane.go();
airplane.fetchSpeed();

//Encapsulation
class User {
    #password; //private

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    checkPassword(inputPassword) {
        return this.#password === inputPassword;
    }

    changePassword(oldPassword, newPassword) {
        if (this.#password === oldPassword) {
            this.#password = newPassword;
            console.log('Password successfully changed');
        } else {
            console.log('Wrong password');
        }
    }
}

// Encapulation using
const user = new User('ivan', '12345');

console.log(user.username); // ivan
// console.log(user.#password); // Error

console.log(user.checkPassword('12345')); // true
user.changePassword('12345', '67890'); // Password successfully changed
console.log(user.checkPassword('67890')); // true
