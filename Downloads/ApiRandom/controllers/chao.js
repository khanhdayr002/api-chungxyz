const { errorHandler } = require("../utils");

exports.chao = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/images/chao.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({
    "Authors":"Nqh && Haruna",
    "url":`${link}`,
"data":`${link}`,
"count": data.length});
};