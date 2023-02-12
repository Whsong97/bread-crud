const router = require('express').Router()

const Bread = require('../models/bread')

router.get('/', function(req, res){
    res.render('index', {
        breads: Bread
    })
})

router.get('/new', function(req, res){
    res.render('new')
})

router.get('/:arrayIndex', function(req, res){
    const { arrayIndex } = req.params
    const index = Number(arrayIndex)
    res.render('show', {
        bread: Bread[index]
    })
})

router.post('/', function (req, res){
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true 
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
})

module.exports = router