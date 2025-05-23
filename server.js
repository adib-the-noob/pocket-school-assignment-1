const express = require('express');

// routes
const blogRoutes = require('./routes/blogs.js')

const app = express();
app.use(express.json())

app.get('/health', (_req, res) => {
    return res.status(200).json({
        "status": "up"
    })
})

app.use('/', blogRoutes)

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
})