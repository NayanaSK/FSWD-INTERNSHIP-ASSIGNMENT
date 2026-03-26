const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.end("<h1 style='text-align:center; font-size:50px;'>🏠 Home Page</h1>");
    } 
    else if (req.url === "/about") {
        res.end("<h1 style='text-align:center; font-size:50px;'>ℹ️ About Page</h1>");
    } 
    else if (req.url === "/contact") {
        res.end("<h1 style='text-align:center; font-size:50px;'>📞 Contact Page</h1>");
    } 
    else {
        res.end("<h1 style='text-align:center; font-size:50px;'>❌ Page Not Found</h1>");
    }
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});