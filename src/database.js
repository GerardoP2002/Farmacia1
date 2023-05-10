const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Pacheco-18:Pachecolg-18@cluster20.m7bqvvm.mongodb.net/Farmacia?retryWrites=true&w=manjority")
.then(db=>console.log('Mongodb connected'))
.catch(err=>console.error(err));