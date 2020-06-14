let app = {
    userId: 'GADS2020',
    getUser: function() {
        return this.userId;
    }
}
const newId = { userId: "ALCWITHGOOGLE"}
const newFn = app.getUser.bind(newId);
console.log(newFn())
