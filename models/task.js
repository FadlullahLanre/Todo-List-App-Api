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
    category : {
        type: String,
        enum : ['work', 'personal', 'school', 'home'],
        required : [true, "must provide category"]
    },
    taskStatus : {
        type: String,
        enum : ['inProgress', 'completed'],
        default : "inProgress"
    }
},
    { timestamps: true },

)

module.exports = mongoose.model("Task", TaskSchema)