const user = {
    userId: 'GADS2020',
    getUser: function() {
        return this.userId;
    }
}
const newUserId = { userId: 'ALC2020' };
console.log(user.getUser.call(newUserId));

// apply demo
const user2 = {
    userId: 'GADS2020',
    getUser: function(prefix) {
        return ` ${ prefix }${ this.userId }`
    }
}
const newUserId2 = { userId: 'ALC2020' };
console.log(user2.getUser.apply(newUserId2,['ID: ']));