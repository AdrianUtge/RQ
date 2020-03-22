const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000
const db = require('./middleware/db_main')
var cors = require('cors')
const getRoute = require('./routes/get')
const postRoute = require('./routes/post')
const fs = require('fs-extra')
var moment = require("moment")
app.use(cors())
moment.locale('fr');

app.use('/get', getRoute);

let prof = [];
let menu = [];

const date = moment().format('L');
console.log(date)

app.post('/presence', (req, res) => {
    console.log('Got body:', req.body);
    prof.push(req.body)



    db.addData(req.body)
    console.log(prof)


});

app.delete('/presence', function (req, res) {
    res.send('Got a DELETE request at /user')
})



app.post('/menu', (req, res) => {
    console.log('Got body:', req.body);
    menu.push(req.body)

    //  db.addData(req.body)
    console.log(menu)
    res.send('http://localhost:3000/get/datain')

});




const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Save Post ', (answer) => {
    fs.writeJSONSync('./BK-Term.json', menu, prof)
    console.log(`Post request saveds`);

    rl.close();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))