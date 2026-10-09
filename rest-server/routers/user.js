const express = require("express")
const UserModel = require("../models/user")
const { default: mongoose } = require("mongoose")
const User = require("../models/user")
const router = express.Router()

router.get("/", function (req, res)   //localhost:5000/user
{
    res.send("Fetch All users")
})

router.get("/:id", function (req, res)   //localhost:5000/user/12
{
    res.send("Fetch id user")
})

router.post("/auth", async function (req, res) {
    const loginDetails = req.body
    // {email:"",password:""}
    try {
        const user = await UserModel.findOne({ email: loginDetails.email })

        if (!user) {
            return res.json({ msg: "login failed, email-id wrong", auth: false })
        }

        if (user.password == loginDetails.password) {
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
    const savedUser = await UserModel.create(req.body)
    res.json({ user: savedUser, msg: "User Saved" })
    // res.json({msg:"User Saved"})
})

router.put("/", function (req, res) {
    res.send("Update user")
})

router.patch("/", function (req, res) {
    res.send("Parital Update user")
})

router.delete("/", function (req, res) {
    res.send("Delete user")
})


module.exports = router