const express = require('express')
const app = express()
require('dotenv').config()

require("./db/conn")
const EducationModel = require("./model/Details")

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get('/', async (req, res) =>{

    const dataOfEducation = await EducationModel.find()
    console.log(dataOfEducation);

    res.render('index', {dataOfEducation:dataOfEducation})
})

app.listen(3000, () => {
    console.log("App cholche bara 3000 port a");
})