const express = require('express')
const app = express()
const port = 3000


var peopleArray = JSON.parse(`
[
    {"id": "1", "firstName": "Kafui","lastName":"Dake","startDate": "1995-12-03T23:18:10.328Z"},
    {"id": "2", "firstName": "Alex", "lastName":"Cho", "startDate": "2005-11-03T23:18:10.328Z"},
    {"id": "3", "firstName": "Jose", "lastName":"Suraez", "startDate": "2002-01-03T23:18:10.328Z"},
    {"id": "4", "firstName": "Stephanie", "lastName":"Tang", "startDate": "2012-03-03T23:18:10.328Z"},
    {"id": "5", "firstName": "Sylvia", "lastName":"Nyamuhungu", "startDate": "2017-12-03T23:18:10.328Z"},
    {"id": "6", "firstName": "Mercy", "lastName":"Emmanuel", "startDate": "2001-09-03T23:18:10.328Z"},
    {"id": "7", "firstName": "Joshua", "lastName":"Wilson", "startDate": "2012-10-03T23:18:10.328Z"},
    {"id": "8", "firstName": "Sarah", "lastName":"Kim", "startDate": "2003-09-03T23:18:10.328Z"},
    {"id": "9", "firstName": "Caleb", "lastName":"Johnson", "startDate": "2013-05-03T23:18:10.328Z"},
    {"id": "10", "firstName": "Abyy", "lastName":"Oduro", "startDate": "2016-02-03T23:18:10.328Z"}
]
`);

app.get('/people', (req, res) => {
    res.json(peopleArray);
});

///         PEOPLE ID 

app.get('/person/:id', (req, res) => {

    var response = getPerson(req.params.id);
    if (response != "404") {
        res.json(response);
    } else {
        res.sendStatus(404);
    }
});


function getPerson(id) {
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == id) {
            return peopleArray[i];
        }
    }
    return '404';
}

//     PERSON NAME 


app.get('/person/:id/name', (req, res) => {
    var request = req.params.id;
    var response = getName(request);
    if (response != "404") {
        res.json(response);
    } else {
        res.sendStatus(404);
    }
});

function getName(id) {
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == id) {
            return (peopleArray[i].firstName + " " + peopleArray[i].lastName);
        }
    }
    return '404';
}

//          PERSON YEARs

app.get('/person/:id/years', (req, res) => {
    var response = getYears(req.params.id);
    if (response != "404") {
        res.json(response);
    } else {
        res.sendStatus(404);
    }
});

function getYears(id) {
    var today = new Date();
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == id) {
            var startDate = new Date(peopleArray[i].startDate)
            var years = (Math.floor((today - startDate) / (1000 * 60 * 60 * 24 * 365)));
            return years;
        }
    }
    return '404';
}

app.all("*", (req, res) => {
    res.sendStatus(404);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
