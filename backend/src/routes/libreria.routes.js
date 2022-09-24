const {Router} = require("express");
const libreriaController = require("../controllers/librerias.controller");
const router=Router();
router.get('/librerias',(req,res)=>{
    res.json({mensaje: "libreria"});
});
module.exports=router;