function add(a,b) {
    console.log(a+b);
}

function sub(a,b) {
    console.log(a-b);
}

function mul(x,y) {
    console.log(x*y);
}

function div(x,y) {
    console.log(x/y);
}

module.exports.addition = add 
module.exports.substraction = sub
module.exports.multiplication = mul
module.exports.division = div