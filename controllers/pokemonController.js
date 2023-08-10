const pokemon = require('../models/pokemon');

const index = (req, res) => {
    res.render('/pokemon/Index', { pokemon })
}

function hello (req,res){
    res.render(pokemon);
}


module.exports.index = (req, res) => {
    res.render('pokemon/Index', { pokemon })
}
// module.exports = {
//     hello,
//     index
// }