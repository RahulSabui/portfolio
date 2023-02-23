require('dotenv').config();
const mongoose = require('mongoose');
require('../db/conn');
const Education = require('../model/Details');

const educations = [
  new Education({
    degree:"ICSE",
    univercity:"ICSE",
    description:"From H.S. Memorial School with 74.5% Marks",
    year:"2015",
    order:1
  }),
  new Education({
    degree:"ISC",
    univercity:"ISC",
    description:"From Little Star High School with 70% Marks",
    year:"2017",
    order:2
  }),
  new Education({
    degree:"Bachelor of Technology (B. Tech)",
    univercity:"Maulana Abul Kalam Azad University of Technology",
    description:"From Modern Institute Of Engineering and Technology with 8.25 dgpa",
    year:"2021",
    order:3
  }),
];


educations.map(async (p, index) => {
  await Education.deleteMany();
  await p.save((err, result) => {
    if (index === educations.length-1) {
      console.log('Education Seed Done');
    //   mongoose.disconnect();
    }
  });
});