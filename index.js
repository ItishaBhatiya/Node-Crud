const { log } = require('console');
const express = require('express');
const dbconnect = require('./db');

const app = express();
app.use(express.json());

app.get("/Student",async(req, res) => {
    let data = await User.Find()
    res.send(data)
})

app.post("/Student", async(req, res) => {
    let data = await User.Create()
    res.send(data)
})

app.patch("/Student/:id", async(req, res) => {
    let {id} = req.params
    let data = await User.FindByIdAndUpdate(id, req.body, {new: true})
    res.send(data)
})

app.delete("/Student/:id", async(req, res) => {
    let {id} = req.params
    let data = await User.FindByIdAndDelete(id)
    res.send(data)
})

app.listen(4050,()=>{
    console.log("listening on port 4050");
    dbconnect();
})