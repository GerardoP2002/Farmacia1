const medicamentoControler={}
const Medicamento=require('../models/Producto.model');
medicamentoControler.obtenerMedicamentos=async(req,res)=>{
    const medicamento= await Medicamento.find();
    res.json(medicamento);
}
module.exports=medicamentoControler;