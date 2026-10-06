const express=require("express")
const UserModel=require("../models/user")
const router=express.Router()

router.get("/",function(req,res)   //localhost:5000/user
{
    res.send("Fetch All users")
})

router.get("/:id",function(req,res)   //localhost:5000/user/12
{
    res.send("Fetch id user")
})

router.post("/",async function(req,res)
{
  const savedUser= await UserModel.create({
        name:"Jokker",
        age:23,
        mobile:"668823922",
        email:"j@gmail.com",
        gender:"male",
        password:"h@123456"
    })
    res.json({user:savedUser,msg:"User Saved"})
})

router.put("/",function(req,res)
{
    res.send("Update user")
})

router.patch("/",function(req,res)
{
    res.send("Parital Update user")
})

router.delete("/",function(req,res)
{
    res.send("Delete user")
})


module.exports=router