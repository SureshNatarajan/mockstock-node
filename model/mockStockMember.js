const mongoose = require('mongoose');

const mockStockMemberSchema = mongoose.Schema({
    memberName: {
        type: String,
        required: true
    },
    memberMobileNumber: {
        type: Number,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    referredBy: {
        type: String,
        required: true
    },
    joinedOn: {
        type: Date,
        required: true
    },
    lastMessagedOn: {
        type: Date
    }
});

const MockStockMember = module.exports = mongoose.model('MockStockMember', mockStockMemberSchema);