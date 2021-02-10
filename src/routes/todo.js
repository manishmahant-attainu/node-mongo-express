const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../schemas/User');
const { check, validationResult } = require('express-validator/check')

router.post(
    '/',
    auth,
    check('title','Please enter the content').not().isEmpty(),
    async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                data: {},
                errors: errors.array(),
                message: 'Unable to create todo item'
            });
        }
        try {
            const user = await User.findById(req.user.id);
            user.todos.push({
                title: req.body.title
            });
            await user.save();
            res.json({
                data:user,
                errors:[],
                message: 'Todo item created'
            })
        } catch (e) {
            res.send('Error in fetching')
        }
    }
);

router.patch(
    '/:id',
    auth,
    async (req,res) => {
        await User.findOneAndUpdate(
            { "_id": req.user.id, "todos._id":  req.params.id },
            {
                "$set": {
                    "todos.$": {title:req.body.title}
                }
            },
            async (err, item)=>{
                const user = await User.findById(req.user.id);
                res.json({
                    data:user,
                    errors:[],
                    message: 'Todo item updated'
                });
            }
        );
    } 
)


module.exports = router;
