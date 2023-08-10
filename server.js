const express = require('express');

const app = express();

const router = express.Router();

const PORT = 3000;
const pokemon = require('./models/pokemon')

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())


app.get('/', (req,res) =>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req,res) =>{
    res.render('Index', {pokemon});
})


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})


