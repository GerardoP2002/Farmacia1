const {Schema,model} = require('mongoose')

const productoSchema=new Schema({
    codigobarras:{
        require:true,
        unique:true,
        type:String
    },
    descripcion:String,
    marca:String,
    preciocompra:Number,
    precioventa:Number,
    existencias:Number

},{
    versionkey:false,
    timestamps:true
})
module.exports=model('productos',productoSchema)