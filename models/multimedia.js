/**
 * Created by MohanRaj on 6/20/2014.
 */

var mongoose = require('mongoose');

var multimediaSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    img: String,
    views: Number,
    cools: Number,
    url: String,
    download: String,
    created: Number,
    tags: [{
        tagname: String,
        tagtext: String,
        tagbackground: String
    }]
});

module.exports = mongoose.model('multimedias', multimediaSchema);