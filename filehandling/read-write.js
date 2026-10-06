const fs=require("fs")

const data=fs.readFileSync("home.html")

fs.writeFileSync("about.html",data)