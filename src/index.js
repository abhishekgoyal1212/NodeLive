const express = require('express');
const app = express();
const alert = require('alert');
const {body,validationResult } = require('express-validator');
const path = require('path');
require('../resources/dbconnection/server');
const bcrypt = require('bcryptjs');
const schama = require('../resources/dbconnection/schama');  
const hbs = require("hbs");
var bodyparser = require('body-parser');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

const request = require('request');

app.set(path.join(__dirname,'../resources/dbconnection/server.js'));
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
        numbers: 8000138845,
    });

});
app.get('/register', (req,res) => {
    res.render("front/register");
});
app.post('/register-save',
body('email','Invalid Email Formate').notEmpty().isEmail(),
body('first_name','First name field is require').notEmpty(),
body('last_name','last name field is require').notEmpty(),
body('password','password field is require').notEmpty(),
body('conf_pass','Conform password field is require').notEmpty(),
async(req,res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.render("front/register",{error:errors.array({onlyFirstError: true})});
            console.log({error:errors.array({onlyFirstError: true})});
            
            // return res.status(400).json({ errors });
        }else{
            const inputs = (req.body); 
            var password = inputs.password;
            var conf_pass = inputs.conf_pass;
            if(password === conf_pass){
                const register =  new schama({
                    first_name : inputs.first_name,
                    lastname : inputs.last_name,
                    email : inputs.email,
                    password: bcrypt.hashSync(inputs.password,10),
                });
                const saveData =   await register.save();
                if(saveData.save()){
                    res.redirect("/");
                }
            }else{
                 alert("passwords do not match");
                // const err = [];
                // err.push( {msg: "passwords do not match!! "});
                // if(err.length > 0){
                //     res.send('<script>alert(hello)</script>');
                //   }
                    // res.render("front/register",error);
            }
        }
        
    }catch(err){
        console.log(err);
    }
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