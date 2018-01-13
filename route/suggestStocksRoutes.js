var express = require('express');
var router = express.Router();

const SuggestStock = require('../model/suggestStock');

//Create data 
router.post('/suggestStock', (req, res, next) => {
    let newSuggestStock = new SuggestStock({
        stockName: req.body.stockName,
        suggestedBy: req.body.suggestedBy,
        suggestedOn: req.body.suggestedOn,
        suggestedPrice: req.body.suggestedPrice
    });
    newSuggestStock.save((err, item) => {
        if (err) {
            res.json(err);
        } else {
            res.json({message: 'Stock added successfully'});
        }
    });
});

//Retrieving data from mongo db
router.get('/suggestStocks', (req, res, next) => {
    SuggestStock.find(function(err, items){
        if (err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

//Update data in mongo db
router.put('/suggestStock/:id', (req, res, next) => {
    SuggestStock.findOneAndUpdate({_id: req.params.id},{
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
router.delete('/suggestStock/:id', (req, res, next) => {
    SuggestStock.remove({_id: req.params.id}, function(err, result){
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
