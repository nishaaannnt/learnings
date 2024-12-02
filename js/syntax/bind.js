const nishant = {
    name:"nishant",
    sayName:function () {
        console.log(this.name);
    }
}


setTimeout(nishant.sayName, 3*1000); // undefined 

/*
undefined -> because sayName doesn't know who is "this" pointing to on execution context
*/
setTimeout(nishant.sayName.bind(nishant), 3*1000); // nishant 


// BOTH PRINT Nishant

nishant.sayName.call(nishant) // doesn't return a function

const newFnc = nishant.sayName.bind(nishant) // doesn't return a function
newFnc()

delete nishant.name; // delete an object key val