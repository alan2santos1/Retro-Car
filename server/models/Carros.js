const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carrosSchema = new Schema({
    carro: String,
    year: Number,
    country: String,
    precio: String,
    img_url:{
        type:String,
        default:"https://i1.wp.com/erizos.mx/wp-content/uploads/2019/01/memes-perrito-cachorrito-triste-10.png?resize=500%2C442&ssl=1"
    },
    active: {
        type:Boolean,
        default:true
    }
},{ timestamps:true })

const Carros  = mongoose.model('Carros', carrosSchema);

module.exports = {
    Carros
}