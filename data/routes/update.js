const express = require('express');
const router = express.Router();
let stand = require('./stand.js');

router.put('/:id', (req,res) => {
    const {id} = req.params
    // console.log('req.params :', req.params);
    const {name, edad, ciudad} = req.body
    // console.log('req.body :', req.body);

    let indice = stand.findIndex(int => int.id === parseInt(id))
    // console.log('indice :', indice);

    stand[indice] = {
        ...stand[indice],
        name: name || stand[indice].name,
        edad: edad || stand[indice].edad,
        ciudad: ciudad || stand[indice].ciudad
    }

    return res.json(stand[indice])

})

module.exports = router;