const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
    status: {
        type: String,
        default: 'public',
        enum: ['public', 'private']
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
     createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Story', StorySchema)