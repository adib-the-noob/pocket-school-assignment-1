const express = require('express');
const Joi = require('joi');

// routes
const blogRoutes = require('./routes/blogs.js')

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({
        "status": "up"
    })
})
app.use('/blogs', blogRoutes)

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
})