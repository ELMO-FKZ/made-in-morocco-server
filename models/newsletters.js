const mongoose = require("mongoose");

const {Schema} = mongoose; 

const newslettersSchema = new Schema(
    {
        email: {type: String, required: true},
    },
    {
        timestamps: true
    }
)

const newsletterModel = mongoose.models.newsletterModel || mongoose.model("newsletters", newslettersSchema);

module.exports = newsletterModel;