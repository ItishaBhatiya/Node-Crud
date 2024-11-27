const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    phone_no : Number,
});

const Student = mongoose.model('User', StudentSchema);

module.exports = Student;