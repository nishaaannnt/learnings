for(var i = 0;i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0);
}


/* var sets global context 

    this will be the output - 
    10 10 10 10 10 10 10 10 10 10 10

*/

//  ----------------------------

for(let i = 0;i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0);
}


/* let has local context.
    makes new variables

    this will be the output - 
    0 1 2 3 4 5 6 7 8 9

*/
