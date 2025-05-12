const express = require('express');
const router = express.Router();

router.get('/get-blog/:id', (req, res) => {
    res.json({
        message: `hello, this is blog ${req.params.id}`
    });
})



module.exports = router;