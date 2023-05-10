const {Router} =require('express');
const medicamentoControler=require('../controllers/medicamento.controle');
const router=Router();
router.get('/',medicamentoControler.obtenerMedicamentos);
module.exports=router;  