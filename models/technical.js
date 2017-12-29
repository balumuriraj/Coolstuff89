/**
 * Created by MohanRaj on 6/26/2014.
 */

var mongoose = require('mongoose');

var technicalSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    technologies: {
        "frontend": [String],
        "backend": [String],
        "database": [String]
    },
    img: String,
    views: Number,
    cools: Number,
    live: String,
    url: String,
    created: Number,
    contributors: String
});

module.exports = mongoose.model('technical', technicalSchema);