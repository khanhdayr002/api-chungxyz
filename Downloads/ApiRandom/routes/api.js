const router = require("express").Router();
//////ảnh//////
const { genshin } = require("../controllers/genshin");
const { chao } = require("../controllers/chao");
const { bye } = require("../controllers/bye");
const { waifu } = require("../controllers/waifu");
const { gai } = require("../controllers/gai");
const { haruna } = 
require("../controllers/haruna");
const { phongcanh } = 
require("../controllers/phongcanh");
const { loli } = 
require("../controllers/loli");
const { bannergenshin } = 
require("../controllers/bannergenshin");
const { sailenh } = require("../controllers/sailenh");
/////video////
const { alimi } = 
require("../controllers/alimi");
const { cosplay } = require("../controllers/cosplay");
const { rollgenshin } = require("../controllers/rollgenshin");
//////text///////
const { thinh } = require("../controllers/thinh");
const { fact } = require("../controllers/fact");
const { cadao } = require("../controllers/cadao");


const { home } = require("../controllers/home");
/////ảnh/////
router.get("/images/genshin", genshin);
router.get("/images/waifu", waifu);
router.get("/images/sailenh", sailenh);
router.get("/images/bye", bye);
router.get("/images/gai", gai);
router.get("/images/haruna", haruna);
router.get("/images/phongcanh", phongcanh);
router.get("/images/chao", chao);
router.get("/images/loli", loli);
router.get("/images/bannergenshin", bannergenshin);
//////video///////
router.get("/video/cosplay", cosplay);
router.get("/video/alimi", alimi);
router.get("/video/rollgenshin", rollgenshin);
//////text///
router.get("/text/thinh", thinh);
router.get("/text/fact", fact);
router.get("/text/cadao", cadao);

router.get("/", home);
module.exports = router;