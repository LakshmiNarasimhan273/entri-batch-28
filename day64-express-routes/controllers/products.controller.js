const getProducts = (req, res) => {
    res.json({title: "Watch", price: 500, category: "electronics"});
}

module.exports = {getProducts};