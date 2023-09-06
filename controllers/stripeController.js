const stripe = require("stripe")(process.env.STRIPE_KEY);

const checkout = async(req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: req.body.items.map((item) => {
                const priceInCent = Math.round(item.price * (1 - item.promotion/100))*100
                return {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: item.title
                        },
                        unit_amount: priceInCent
                    },
                    quantity: item.amount
                }
            }),
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel"
        })
        res.json({ url: session.url })
    } catch (error) {
        res.status(500).json({ error: "An error occured while sending payment!"});
    }
}

module.exports = { checkout }