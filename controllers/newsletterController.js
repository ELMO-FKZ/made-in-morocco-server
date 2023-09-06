const newsletterModel = require("../models/newsletters");

const subscribeToNewsletter = async(req, res) => {
    try {
        const newSubscriber = {
            email: req.body.email
        }
        await newsletterModel.create(newSubscriber);
        res.status(200).json("You subscribed to newsletters successfully!");
    } catch (error) {
        res.status(500).json({ error: "An error occured while subscribing to newsletters!"});
    }
}

module.exports = { subscribeToNewsletter }