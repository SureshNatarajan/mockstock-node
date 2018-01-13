var express = require('express');
var router = express.Router();

const MockStockMember = require('../model/mockStockMember');

//Create data 
router.post('/mockStockMember', (req, res, next) => {
    let newMockStockMember = new MockStockMember({
        memberName: req.body.memberName,
        memberMobileNumber: req.body.memberMobileNumber,
        emailId: req.body.emailId,
        referredBy: req.body.memberName,
        joinedOn: req.body.joinedOn,
        lastMessagedOn: req.body.lastMessagedOn
    });
    newMockStockMember.save((err, item) => {
        if (err) {
            res.json(err);
        } else {
            res.json({message: 'Member added successfully'});
        }
    });
});

//Retrieving data from mongo db
router.get('/mockStockMembers', (req, res, next) => {
    MockStockMember.find(function(err, items){
        if (err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

//Update data in mongo db
router.put('/mockStockMember/:id', (req, res, next) => {
    MockStockMember.findOneAndUpdate({_id: req.params.id},{
        $set: {
            memberName: req.body.memberName,
            memberMobileNumber: req.body.memberMobileNumber,
            emailId: req.body.emailId
        }
    },
    function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

//Delete data 
router.delete('/mockStockMember/:id', (req, res, next) => {
    MockStockMember.remove({_id: req.params.id}, function(err, result){
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
