const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

/**
 * Get /
 * Home
 */

router.get('', async (req,res) => {

    const locals = {
        title: 'The Stefan Saga',
        description: 'Blog created with love.'
    }

    try {
        const data = await Post.find();
        res.render('index', {locals, data});
    } catch (error) {
        console.log(error)
    }

    

    
})









router.get('/about', (req,res) => {
    res.render('about')
})

router.get('/contact', (req,res) => {
    res.render('contact')
})

module.exports = router;