const express = require("express")
const UserModel = require("../models/user")
const { default: mongoose } = require("mongoose")
const User = require("../models/user")
const bcrypt=require("bcrypt")

const router = express.Router()

router.get("/", async function (req, res)   //localhost:5000/user
{
    const users=await UserModel.find()  // fetch all docs
    res.json({users})
})

router.get("/:id", async function (req, res)   //localhost:5000/user/12
{

    const user= await UserModel.findById(new mongoose.Types.ObjectId(req.params.id))
    // console.log(user)
    res.json({user})
})

router.post("/auth", async function (req, res) {
    const loginDetails = req.body
    // {email:"",password:""}
    try {
        const user = await UserModel.findOne({ email: loginDetails.email })

        if (!user) {
            return res.json({ msg: "login failed, email-id wrong", auth: false })
        }

        const isMatch=await bcrypt.compare(loginDetails.password,user.password)
        if (isMatch) {
            res.json({ msg: "login success", auth: true })
        }
        else {
            res.json({ msg: "login failed, password wrong", auth: false })
        }
    }
    catch (err) {
        res.json({ msg: "server error " + err, auth: false })
    }
})

router.post("/", async function (req, res) {
    // console.log(req.body)
    const hashPassword=await bcrypt.hash(req.body.password,10)
    const savedUser = await UserModel.create({...req.body,password:hashPassword})
    res.json({ user: savedUser, msg: "User Saved" })
    // res.json({msg:"User Saved"})
})

router.put("/", async function (req, res) {
        const {id,user}=req.body
      const updatedUser = await UserModel.findByIdAndUpdate(id,user)
      if(!updatedUser)
      {
        return res.status(404).json("user not found..")
      }
      res.json({ user: updatedUser, msg: "User updated`" })
   
})

router.patch("/", function (req, res) {
    res.send("Parital Update user")
})

router.delete("/:id", async function (req, res) {
   const user=await UserModel.findByIdAndDelete(new mongoose.Types.ObjectId(req.params.id))

   if(!user)
   {
    return res.status(404).json({msg:"Invalid user id! user not found.."})
   }

   res.json({msg:"User deleted.."})


   
})


module.exports = router