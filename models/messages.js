const mongoose = require("mongoose");

const {Schema} = mongoose; 

const messagesSchema = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        message: {type: String, required: true},
    },
    {
        timestamps: true
    }
)

const messageModel = mongoose.models.messageModel || mongoose.model("messages", messagesSchema);

module.exports = messageModel;