const {Router} = require("express");
const { get } = require("mongoose");
const Accidentescontrolador = require("../controllers/accidentes.controller");
const router=Router();
router.get('/accidentes',Accidentescontrolador.hogar);
router.get('/accidentes/parte1',Accidentescontrolador.consulta_ruta1);//punto 1
router.get('/accidentes/parte1/punto1',Accidentescontrolador.consulta_punto11);//punto 1
router.post('/accidentes/parte1/punto2',Accidentescontrolador.consulta_punto12);//punto 2
router.get('/accidentes/parte1/punto3',Accidentescontrolador.consulta_punto13);//punto 3
router.put('/accidentes/parte1/punto4',Accidentescontrolador.consulta_punto14);//punto 4
router.delete('/accidentes/parte1/punto5',Accidentescontrolador.consulta_punto15);
router.get('/accidentes/parte2',Accidentescontrolador.consulta_ruta2);//punto 1
router.get('/accidentes/parte2/punto1',Accidentescontrolador.consulta_punto21);
router.get('/accidentes/parte2/punto2',Accidentescontrolador.consulta_punto22);
router.get('/accidentes/parte2/punto3',Accidentescontrolador.consulta_punto23);
router.post('/accidentes/parte2/punto4',Accidentescontrolador.consulta_punto24);

module.exports=router;