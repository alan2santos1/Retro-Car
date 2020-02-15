const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 7770;
const URL_MONGO = "mongodb+srv://fer:cintaroja123@cluster0-2cnn6.mongodb.net/test?retryWrites=true&w=majority";

const carros = require('./controllers/Carros.js');

app.use(express.json());
app.use('/Carros', carros);
app.use(cors());

mongoose.connect(URL_MONGO,{ useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if(!error){
        console.log('Connected to MongoDB');
    } else {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server initialized on PORT ${PORT}`);
});
