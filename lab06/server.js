const express = require('express')
const app = express()
const port = 3000


const http_status = require('http-status-codes');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));


// getter

app.get('/request', function (req, res) {
    res.send("sent a get request")
    res.sendStatus(http_status.OK)
});



// poster
app.post("/request", function (req, res) {
    //res.sendStatus(http_status.ACCEPTED)
    res.send('Sent a post request');
    res.sendStatus(http_status.ACCEPTED)
});

app.head('/request', function (req, res) {
    res.send('sent a head request')
    res.sendStatus(http_status.ACCEPTED)
});

// putter
app.put('/request', function (req, res) {
    res.send('Sents a Put request')
    res.sendStatus(http_status.OK)
})

// deleter
app.delete('/request', function (req, res) {
    res.send('Got a DELETE request at /user')
    res.sendStatus(http_status.OK)
})




app.get('/forms', (req, res) => {
    res.sendFile('index.html', {
        root: 'public'
    }, (err) => {
        res.end();
s
        if (err) throw (err);
    });
})

app.post('/forms', function (req, res) {
    res.json(req.body);
});






app.all("*", (req, res) => {
    res.sendStatus(http_status.NO_CONTENT);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));