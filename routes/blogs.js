const express = require('express');
const blogPostSchema = require('../schema.js');

const router = express.Router();
const data = [
    {
        "id": 1,
        "title": "Introduction to JavaScript",
        "content": "JavaScript is a versatile programming language used for web development.",
        "author": "John Doe",
        "createdAt": "2023-10-01T10:00:00.000Z"
    },
    {
        "id": 2,
        "title": "Understanding Node.js",
        "content": "Node.js allows JavaScript to be used for server-side programming.",
        "author": "Jane Smith",
        "createdAt": "2023-10-02T12:30:00.000Z"
    },
    {
        "id": 3,
        "title": "Exploring Express.js",
        "content": "Express.js is a web application framework for Node.js.",
        "author": "Alice Johnson",
        "createdAt": "2023-10-03T15:45:00.000Z"
    }
];

router.get('/blogs/:id', (req, res) => {    
    const blog_data = data.find(
        item => item.id === parseInt(req.params.id)
    )
    if (blog_data){
        return res.status(200).json({
            message: `hello, this is blog ${req.params.id}`,
            data: blog_data
        });
    }
    return res.status(404).json({
        message: `Blog with ID ${req.params.id} Not Found!`
    })
})

router.get('/blogs', (req, res) => {
    return res.status(200).json({
        data: data
    })
})

router.post('/blogs', (req, res) => {
    const { error, value } = blogPostSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
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