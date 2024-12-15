const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require('./middleware/date');
const sendMail = require('./mail-sender');

const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/get', (req, res) => {
    res.send('your First express project');
});

app.get('/home', date, (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/contactus', date, (req, res) => {
    res.sendFile(__dirname + '/public/contactus.html');
});

app.get('/services', date, (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
});

app.post('/send-email', (req, res) => {
    const { email, message } = req.body;
    sendMail(email, 'Contact Us Message', message, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.sendFile(__dirname + '/public/contactus.html');
    });
});

app.listen(port, err => {
    err ? console.log(err) : console.log(`you are connected to the ${port}`);
});