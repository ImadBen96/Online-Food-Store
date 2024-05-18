"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    // const source = "mongodb+srv://dbUser:7BK5GP3XlEKgKM4r@cluster0.b1tyda0.mongodb.net/foodmine?retryWrites=true&w=majority&appName=Cluster0";
    (0, mongoose_1.connect)(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(function () { return console.log("Connect Successfully"); }, function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
