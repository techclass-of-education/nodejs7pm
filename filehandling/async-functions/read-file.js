const fs=require("fs")

fs.readFile("home.html","utf8",function(err,data){   // async
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(data)
    }
})