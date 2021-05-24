const express = require('express')
const route = express.Router()
let stand = require('./stand.js');

let count = 15
route.post('/', (req, res) => {
    console.log(req.body)
    let {name,ciudad,edad,grupo} = req.body
    let nuevo = {
        id: count++,
        name,
        ciudad,
        edad,
        grupo
    }
    stand.push(nuevo)
    return res.json(nuevo)
})

module.exports = route