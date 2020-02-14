const express = require('express');
const router = express.Router();

const { Carros } = require('../models/Carros.js');

router.get('/saludo',(request, response) => {
    response.send('hola, cómo estás?');
})

router.post('/create', (req, res) => {
    const {
        carro,
        year,
        country,
        precio,
        img_url
    } = req.body;

    const newCarro = Carros({
        carro: carro,
        year:year,
        country:country,
        precio:precio,
        img_url:img_url
    });

    newCarro
        .save((error, Carro) => {
            if(error){
                res.status(400).send({
                    error:error,
                    message: "Intenta de nuevo :("
                })
            } else {
                res.status(201).send({
                    movie:Carro,
                    message:"Llenate de conocimiento"
                })
            }
        })

})

router.patch('/update/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body
    Carros
        .findByIdAndUpdate(
            id,
            {$set:{
                ...body
            }},
            {useFindAndModify: false}
        )
        .exec()
        .then( updatedCarro => res.status(200).send(updatedCarro))
        .catch( error => res.status(400).send(error) )
});



router.get('/read/:id', (req, res) => {
    const { id } = req.params;

    Carros
        .findById(id)
        .exec()
        .then( carroById => res.status(200).send(carroById))
        .catch( error => res.status(400).send(error) )

})

router.get('/read', (req, res) => {
    Carros
        .find()
        .exec() 
        .then( carros => res.status(200).send(carros) )
        .catch( error => res.status(400).send(error) )
});


module.exports = router;