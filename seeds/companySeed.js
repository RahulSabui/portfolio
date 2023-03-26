require('dotenv').config();
const mongoose = require('mongoose');
require('../db/conn');
const Company = require('../model/Company');

const companies = [
  new Company({
    companyName:"abc comapny",
    desgination:"Node Js Developer",
    description:["Worked with development tools such as Node Js , ejs, postgres, ajax and manymore.","Worked with REST APIs to retrieve and display data from database and Improve website performance and speed through optimization techniques by 55"],
    startYear:"2021",
    endYear:"2023",
    order:1
  }),

];


companies.map(async (p, index) => {
  await Company.deleteMany();
  await p.save((err, result) => {
    if (index === companies.length-1) {
      console.log('company Seed Done');
    //   mongoose.disconnect();
    }
  });
});