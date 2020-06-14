let app = {
    userId: 'GADS2020',
    getUser: function() {
        console.log(this)
        return this.userId;
    }
}
console.log(app.getUser());