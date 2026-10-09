const express = require("express")
const { connectToMongoDB, disconnectFromMongoDB } = require("./config/db")
const app = express()

app.use(express.json())

  connectToMongoDB().then(function (res) {
        console.log("Database Connected")
    }).catch(function (err) {
        console.log(err)
    })


//////Routers////////////

const userRouter = require("./routers/user")
const productRouter = require("./routers/product")
const serviceRouter = require("./routers/service")


app.use("/user", userRouter)   //localhost:5000/user
app.use("/product", productRouter)
app.use("/service", serviceRouter)

//////Routers end///////////


app.get("/", function (req, res) {
  
    res.send("Server started.....")
})


app.listen(5000, function () {
    console.log("Server started on http://localhost:5000")
})

