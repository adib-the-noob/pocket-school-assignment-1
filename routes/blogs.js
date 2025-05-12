const express = require('express');
const blogPostSchema = require('../schema.js');

const router = express.Router();
const data = [
    {
        "id": 1,
        "title": "ADIB",
        "content": "Hello, I am a hacker!",
        "author": "adib",
        "createdAt": "2025-05-12T17:29:26.209Z"
    }
];

router.get('/blogs/:id', (req, res) => {    
    const data = data.find(
        item => item.id === parseInt(req.params.id)
    )
    if (data){
        res.status(200).json({
            message: `hello, this is blog ${req.params.id}`,
            data: data
        });
    }
    res.status(404).json({
        message: "Blog Not Found!"
    })
})

router.get('/blogs', (req, res) => {
    res.status(200).json({
        data: data
    })
})

router.post('/blogs', async (req, res) => {
    const { error, value } = blogPostSchema.validate(req.body);
    if (error) {
        return res.status(422).json({
            "error": error.details[0].message
        })
    }
    data.push(value);
    return res.status(201).json({
        message: "Blog created successfully",
        data: value
    })
})


module.exports = router;