const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router
