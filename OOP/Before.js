let user1 = {
    name: 'Alice',
    logIn: function() { console.log(`${this.name} logged in`);}
};

let user2 = {
    name: 'Bob',
    logIn: function() { console.log(`${this.name} logged in`);}
};

user1.logIn();
user2.logIn();