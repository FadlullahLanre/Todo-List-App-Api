const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "must provide title"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "must provide description"],
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        select: false
    },
    deadlineDate : {
        type: Date,
        required : [true, "must provide deadline date"]
    },
    taskType : {
        type: String,
        enum : ['group', 'personal'],
        required : [true, "must provide task type"]
    },
    groupEmail : [{
        type: String
    }]
},
    { timestamps: true },

)

module.exports = mongoose.model("Task", TaskSchema)