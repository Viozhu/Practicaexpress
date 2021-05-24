const route = require('express').Router()
let stand = require('./stand.js');

route.delete('/:id', (req,res) => {
    const {id} = req.params

    stand = stand.filter(int => int.id !== parseInt(id))

    return res.json(stand)

})

module.exports = route