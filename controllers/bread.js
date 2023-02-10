const router = require('express').Router()

const Bread = require('../models/bread')

router.get('/', function(req, res){
    res.send(Bread)
})

router.get('/:arrayIndex', function(req, res){
    const { arrayIndex } = req.params
    const index = Number(arrayIndex)
    res.send(Bread[index])
})
module.exports = router