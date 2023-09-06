const messageModel = require("../models/messages");

const sendMessage = async(req, res) => {
    try {
        const newMessage = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        }
        await messageModel.create(newMessage);
        res.status(200).json("Your message has been send successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while sending a message!"});
    }
}

module.exports = { sendMessage }