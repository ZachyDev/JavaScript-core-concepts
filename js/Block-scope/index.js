if(5===5) {
    var msg = 'Equal';
}
// console.log(msg); reference error
// console.log(msg) passes since the variable is hoisted

let message = 'outside';

if( 10===10) {
    let message = 'equal';
    console.log(message)
}
console.log(message)