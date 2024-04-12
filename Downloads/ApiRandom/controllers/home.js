const { errorHandler } = require("../utils");
exports.home = async (req, res, next) => {
  var hi = {}
      hi.thinh = `/text/thinh [ thính ]`
      hi.cadao = `/text/cadao [ cadao vn ]`
      hi.alimi = `/video/alimi [ video anime ]`
      hi.cosplay = `/video/cosplay [ Video cosplay ]`
      hi.loli = `/images/loli [ ảnh loli ]`
      hi.genshin = `/images/genshin [ ảnh genshin ]`
      hi.haruna = `/images/haruna [ ảnh haruna ]`
      hi.rollgenshin = `/video/rollgenshin [ video roll genshin ]`
      hi.gai = `/images/gai [ ảnh gái ]`
      hi.phongcanh = `/images/phongcanh [ ảnh phong cảnh anime ]` 
      hi.Authors = `[ Haruna ] - Nguyễn Quốc Hưng`
res.header("Content-type", "application/json; charset=utf-8")
res.send(JSON.stringify(hi, null, 2))
};
