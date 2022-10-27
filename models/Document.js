const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true
    },
    createdAt: {
        required: true,
        type: Number,
    },
    title: {
        required: true,
        type: String,
        trim: true,
    },
    content:{
        type: Array,
        default: []
    }

});

const Document = mongoose.model("Document", documentSchema);


module.exports =  Document;

