const fs=require("fs")

const data="<h1>Contact page</h1>"

fs.writeFile("contact.html",data,function(err){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("create and data successfull write..")
    }
})