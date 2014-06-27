/**
 * Created by MohanRaj on 6/26/2014.
 */

var express = require('express');

var technical = require('../models/technical');

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Entering technical api...');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET api listing (accessed at GET http://localhost:3000/api) */
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our technical api!' });
});

/* GET multimedia api listing (accessed at GET http://localhost:3000/technical-api/technical)  */
router.route('/technical')
    .get(function(req, res){
        var counter;
        technical.count(function(err, size){
            counter = Number(size);
        });

        technical.find({}, function (err, docs) {
            if(err){
                res.send(err);
                console.log(err);
            }

            var items = { count: counter, results: docs };
            console.log("Get all - sending " + counter + " items..");
            res.json(items);
        });
    })

    .post(function(req, res){
        var b = req.body;
        new technical({
            name: b.name,
            description: b.description,
            type: b.type,
            img: b.img,
            views: b.views,
            cools: b.cools,
            url: b.url,
            created: b.created,
            tagname: b.tagname,
            tagtext: b.tagtext,
            tagbackground: b.tagbackground
        }).save(function (err, docs) {
                if (err) res.json(err);
                res.send('created!');
            });
    });


/* GET multimedia api listing (accessed at GET http://localhost:3000/multimedia-api/multimedia/{object})  */
router.route('/technical/:technical_id')
    .get(function(req, res){
        technical.findById(req.params.technical_id, function (err, docs) {
            if(err){
                res.send(err);
                console.log(err);
            }

            console.log("Updating views for item..");
            docs.views = Number(docs.views) + 1;    // update views

            //save item
            docs.save(function(err){
                if(err){
                    res.send(err);
                    console.log(err);
                }
                res.json(docs);
            })
        });
    })

    .put(function(req, res){
        technical.findById(req.params.technical_id, function (err, docs){
            if(err){
                res.send(err);
                console.log(err);
            }
            console.log("Updating cools for item..");
            docs.cools = Number(docs.cools) + 1;    // update views

            //save item
            docs.save(function(err){
                if(err){
                    res.send(err);
                    console.log(err);
                }
                res.json(docs);
            })

        })
    });


module.exports = router;
