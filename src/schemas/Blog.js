const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: String,
    body: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('blog',BlogSchema);
