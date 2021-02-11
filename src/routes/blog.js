const express = require('express');
const auth = require('../middleware/auth');
const Blog = require('../schemas/Blog');
const router = express.Router();

router.post(
    '/',
    auth,
    async (req,res)=> {
        const blog = new Blog({
            title: req.body.title,
            body: req.body.body,
            userId: req.user.id
        });
        await blog.save();
        res.json({
            data:{},
            errors:[],
            message: 'Blog created'
        });
    }
 )


module.exports = router;
