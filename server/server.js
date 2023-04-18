const express= require('express');
const app= express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
const cors= require('cors');
app.use(cors());


const auth = require('./routes/Auth');
const update = require('./routes/UpdateProfile');

app.listen(8000, "localhost",() => {
    console.log('Listening on port 8000');
});


app.use('/auth', auth);
app.use('/update', update);
