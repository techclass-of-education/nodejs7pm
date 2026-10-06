const fs=require("fs")

const data="<p>Paragraph ParagraphParagraphParagraphParagraphParagraph</p>"
fs.appendFile("contact.html",data,function(err){
     if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("create and data successfull write/append..")
    }
})