//IIFE

(function(){
    console.log('This is an IIFE expression');
})();

let app = (function(){
    let card = 123;
    console.log('in function');
    return {};
})();
console.log(app)