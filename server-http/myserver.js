const http = require("http");
const fs = require("fs")



const app = http.createServer(function (req, res) {
  
    if (req.url === "/") {
        res.writeHead(200,{"content-type":"text/html"})
        const pageData = fs.readFileSync("pages/index.html")
        res.write(pageData);
        res.end()  // send respose to client
    }
    else if (req.url === "/about") {
        const pageData = fs.readFileSync("pages/about.html")
        res.writeHead(200,{"content-type":"text/html"})
        res.write(pageData);
        res.end()  // send respose to client
    }

      // Image route
    else if (req.url === "/imgs/m1") {

        const imageData = fs.readFileSync("public/imgs/m1.png");

        res.writeHead(200, {
            "Content-Type": "image/png"
        });

        res.write(imageData);
        res.end();

    }
    else
    {
        const pageData = fs.readFileSync("pages/404.html")
        res.writeHead(502,{"Content-Type":"text/html"})
        res.write(pageData);
        
        res.end()  // send respose to client
    }
});

app.listen(3000, function () {
    console.log("Server started on: http://127.0.0.1:3000")
});