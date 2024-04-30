const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Lakshya:lakshya123@cluster0.ia2y9ni.mongodb.net/todo");

const todoSchema = mongoose.Schema({
    title : String,
    discription : String,
    Completed : Boolean
})

const todo = mongoose.model('Todos' , todoSchema);

module.exports = {
    todo : todo
}