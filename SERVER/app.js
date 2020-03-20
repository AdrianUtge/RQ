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

app.use(cors())


app.use('/get', getRoute);

let prof = [];
let menu = [];

app.post('/presence', (req, res) => {
    console.log('Got body:', req.body);
    prof.push(req.body)
    db.addData(req.body)
    console.log(prof)


});





app.post('/menu', (req, res) => {
    console.log('Got body:', req.body);
    menu.push(req.body)

    //  db.addData(req.body)
    console.log(menu)


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