const { errorHandler } = require("../utils");

exports.genshin = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/images/genshin.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"count":`${data.length}`,"Authors":"NQH && 𝙃𝙖𝙧𝙪𝙣𝙖","data":`${link}`});
};