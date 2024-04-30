const express = require("express");
// const types = require("./types");
const {createTODO, updateTODO} = require("./types");
const {todo} = require("./mongoSchema");
const app = express();
const cors = require("cors")
app.use(express.json());
// app.use(cors()); this is for all the frontend server for specify only my server
app.use(cors())



app.post("/todos" , async function(req,res){
    const createtodo = req.body;
    const parsedTodo = createTODO.safeParse(createtodo)

    if(!parsedTodo.success){
        res.status(411).json({
            mssg : "You may sent a wrong input"
        })
        return;
    }
    //put it in mongoDB
    await todo.create({
        title : createtodo.title,
        discription : createtodo.discription,
        Completed : false
    })

    res.json({
        mssg : "Todo has been created"
    })
})


app.get("/todos" , async function(req,res){
    const todos = await todo.find({})

    res.json({
        todos
    })
})


app.put("/completed" , async function(req,res){
    const updatetodo = req.body;
    const parsedtodo = updateTODO.safeParse(updatetodo)

    if(!parsedtodo.success){
        res.status(411).json({
            mssg : "You may sent a wrong input"
        })
        return;
    }

    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        mssg : "Todo marked as completed"
    })
})

app.listen(2001);