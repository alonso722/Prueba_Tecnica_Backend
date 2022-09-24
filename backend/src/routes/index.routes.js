const {Router}=require('express');
const router=Router();
const indexControlador=require('../controllers/index.controller');
router.get('/',indexControlador.servicioInicio);

module.exports=router;