const express = require('express');
var mongoose = require('mongoose');
//Set up default mongoose connection

const dbConnection =  mongoose.connect("mongodb://localhost:27017/test_uesr").then((result) => {
    console.log('Connection Successfully');
}).catch((err) => {
    console.log(err);
});
