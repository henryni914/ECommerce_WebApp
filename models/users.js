const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const blogSchema = new Schema({
//     Title: { type: String, required: true },
//     Body: { type: String, required: true },
// });

// const transactionSchema = new Schema({
//     TransactionID: { type: String, required: true },
//     Items: []
// });

const userSchema = new Schema({
    Email: { type: String, required: true },
    Wishlist: [],
    ShoppingCart: [],
    Transactions: ""
});

const UserList = mongoose.model("UserList", userSchema);

module.exports = UserList;