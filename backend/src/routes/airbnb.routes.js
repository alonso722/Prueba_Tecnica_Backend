const {Router} = require("express");
const Airbnbcontrolador = require("../controllers/airbnb.controller");
const router=Router();
router.get('/airbnb',Airbnbcontrolador.hogar);
router.get('/airbnb/consulta-general',Airbnbcontrolador.consultaGeneral);
router.get('/airbnb/consulta-nombres',Airbnbcontrolador.servicioconsulta_nombre);
module.exports=router;