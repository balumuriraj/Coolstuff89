var express = require('express');

var multimedia = require('../models/multimedia');

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Entering multimedia api...');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET api listing (accessed at GET http://localhost:3000/api) */
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our multimedia api!' });
});

/* GET multimedia api listing (accessed at GET http://localhost:3000/multimedia-api/multimedia)  */
router.route('/multimedia')
    .get(function(req, res){
        var counter;
        multimedia.count(function(err, size){
            counter = Number(size);
        });

        multimedia.find({}, function (err, docs) {
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
        new multimedia({
            name: b.name,
            description: b.description,
            type: b.type,
            img: b.img,
            views: b.views,
            cools: b.cools,
            url: b.url,
            download: b.download,
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
router.route('/multimedia/:multimedia_id')
    .get(function(req, res){
        multimedia.findById(req.params.multimedia_id, function (err, docs) {
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
       multimedia.findById(req.params.multimedia_id, function (err, docs){
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
