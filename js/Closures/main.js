// example closure

let app = (function() {
    let userId = 'GADS2020';
    let getUserId = function() {
        return userId;
    }
    return{
        getUserId: getUserId
    }
})();
console.log(app.getUserId());