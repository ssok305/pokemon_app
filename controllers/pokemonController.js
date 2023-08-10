const pokemon = require('../models/pokemon');

function index  (req, res)  {
    res.render('./Index', { pokemon })
}


module.exports = {
    index
}