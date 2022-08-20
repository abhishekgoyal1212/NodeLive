const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.write("Welcome To My Home Page");
    res.write('Welcome To My Home Page');
    res.send();
});
app.get('/about', (req, res) => {
    res.send({ id: '', name: "Abhishek", lastname: "Goyal", });
});
app.get('/contect', (req, res) => {
    res.send('Welcome To My Contect Page');
});
app.get('/persnioal', (req, res) => {
    res.send('Welcome To My Persnoal Page');
});
app.listen(port, () => {
    console.log(`Your Port Is ${port}`);
});