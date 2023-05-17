const express = require('express')
const router = express.Router()

// Routes
router.get('', (req,res) => {

    const locals = {
        title: 'The Stefan Saga',
        description: 'Blog created with love.'
    }

    res.render('index', locals)
})

router.get('/about', (req,res) => {
    res.render('about')
})

module.exports = router;