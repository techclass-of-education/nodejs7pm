const express=require("express")
const path =require("path")
const app=express()
//rest server

app.use(express.urlencoded({extended:true}))   // req.body

app.set("view engine","ejs")

app.use(express.static("public"))


app.get("/",function(req,res){
      res.render("index")
})
app.get("/contact",function(req,res){
      res.render("contact")
})
app.get("/about",function(req,res){
      res.render("about",{names:["Yogesh","Manish","Pooja","Archana","Surpnaka"]})
})

app.get("/login",function(req,res){   // open login page
      res.render("login",{message:""})
})

app.post("/login",function(req,res){  // authantication

      console.log(req.body)
      if(req.body.password=="user@123456")
      {
            res.render("dashboard",{user:req.body.email})
      }
      else
      {
            res.render("login",{message:"Login Failed"})
      }
})




app.get("/register",function(req,res){
      res.render("register",{message:""})
})

app.post("/register",function(req,res){
      console.log(req.body)
      res.render("register",{message:"Register Successfull"})
})


app.get("/profile/:id/:name",function(req,res){
      console.log(req.params)
      const {id,name}=req.params
      
      res.render("profile",{id,name})
})



app.use(function(req,res){
      res.status(404).render("404")
})




// app.get("/",function(req,res){
//     res.sendFile(path.join(__dirname,"pages","index.html"))
// })
// app.get("/about",function(req,res){
//       res.sendFile(path.join(__dirname,"pages","about.html"))
// })

// app.get("/contact",function(req,res){
//       res.sendFile(path.join(__dirname,"pages","contact.html"))
// })



app.use(function(req,res)
{       
      res.status(404).sendFile(path.join(__dirname,"pages","404.html"))
})


app.listen(4000,function(){
    console.log("server started  http://localhost:4000")
})