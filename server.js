const express=require("express");
const app=express();
require("dotenv").config({path:"./config/.env"})
const connectdb=require("./config/connectdb");
const User = require("./models/users");
connectDb();
const Users=require('./models/users');
app.use(express.json());
const PORT=process.env.PORT || 3111
    app.post("/post",async(req,res)=>{
        const { FullName,Age}=req.body
        try {
            const newUser=new Users({
                FullName,Age
            })
            await newUser.save()
            res.send(newUser)
        } catch (error) {
            console.log(error)
        }
    });
    app.get("/get",async(req,res)=>{
         
        try {
             const users= await Users.find()
             res.send(users)
        } catch (error) {
            console.log(error)
        }
    });
    app.get("/get/:id",async(req,res)=>{
         
        try {
             const TheUsers= await Users.findById(req.params.id)
             res.send(TheUsers)
        } catch (error) {
            console.log(error)
        }
    });
    app.delete("/delete/:id",async(req,res)=>{
         
        try {
             const DeletedUsers= await Users.findByIdAndDelete(req.params.id)
             res.send("the user is deleted")
        } catch (error) {
            console.log(error)
        }
    });
    app.put("/edit/:id",async(req,res)=>{
         
        try {
             const editedUsers= await Users.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
             res.send(editedUsers)
        } catch (error) {
            console.log(error)
        }
    });
app.listen(PORT,err=>err
    ?console.log(err)
    :console.log(`server is successfully running on port ${PORT}`))