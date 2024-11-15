class User {
    constructor(name) {
        this.name = name;
    }
    logIn() {
        console.log(`${this.name} logged in`);
    }
}

let user1 = new User('Alice');
let user2 = new User('Bob');

user1.logIn();
user2.logIn();