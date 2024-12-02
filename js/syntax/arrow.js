/*
Arrow functions -> their "this" keyword points to global context

iife -> doesnt have "this"
*/

const nishant = {
    name:"nishant",
    sayName:function () {
        console.log(this.name);
    }
}

const john = {
    name:"John",
    sayName:function () {
        console.log(this.name);
    }
}

function sayMyname() {
    console.log(this.name)
}

sayMyname(); // undefined
john.sayName(); // John
nishant.sayName(); // nishant

nishant.sayName.call(john); // John

sayMyname.call(john); // John
sayMyname.call(nishant); // nishant

// .call() -> provide context to something