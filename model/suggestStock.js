const mongoose = require('mongoose');

const suggestStockSchema = mongoose.Schema({
    stockName: {
        type: String,
        required: true
    },
    suggestedBy: {
        type: String,
        required: true
    },
    suggestedOn: {
        type: Date,
        required: true
    },
    suggestedPrice: {
        type: Number,
        required: true
    }
});

const SuggestStock = module.exports = mongoose.model('SuggestStock', suggestStockSchema);