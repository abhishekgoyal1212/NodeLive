// const { application , express } = require('express');
const path = require('path');
const express = require('express');
const app = express();
const hbs = require("hbs");
const request = require('request');
const port = process.env.PORT || 8000;


// Use template Engian Extanstion
app.set('view engine', 'hbs');

// Use Static Path
const staticpath = (path.join(__dirname, "../public"));
app.use(express.static(staticpath));
app.set('views', path.join(__dirname, "../resources/views"));

// Use Parstial
const parstialPath = path.join(__dirname, "../resources/partial");
hbs.registerPartials(parstialPath);

// Pass Dynamic Deta
app.get('/', (req, res) => {
    res.render("index", {
        login: "Login",
        number: 8279000779,
    });
});
app.getMaxListeners();
app.get("/about",(req,res)=>{
    res.render('about');
});
app.get('*', (req, res) => {
    res.render("404", {
        errorcoment: "Page Not Found",
    })
});
// Call Api And Live Data Pass Json Encode 
// app.get("/about", (req, res) => {
//     request("https://dummyjson.com/products/2").on("data", (chunk) => {
//         const objdata = JSON.parse(chunk);
//         const obarry = [objdata];
//         // console.log(`your id  ${obarry[0].id} and Your Phone Is ${obarry[0].title}`);
//         res.render("about", {
//             login: "Login",
//             number: 8279000779,
//             id: obarry[0].id,
//             title: obarry[0].title
//         });
//     })
// });

// app.get("/about", (req, res) => {
//     console.log(req.query.name);
//     res.render("about", {
//         query: req.query.name,
//         age: req.query.age
//     })
// });

app.listen(port, () => {
    console.log(`Your Port is ${port} Create Sussessfully Create`);
});