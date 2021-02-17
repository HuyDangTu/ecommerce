const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name:{
        require: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    description:{
        required: true,
        type: String,
        maxlength: 1000
    },
    price:{
        required: true,
        type: Number,
        maxlength: 255,
    },
    genus:{
        type: Schema.Types.ObjectId,
        ref: 'Genus',
        required: true
    },
    shipping: {
        required: true,
        type: Boolean,

    },
    available:{
        required: true,
        type: Boolean,
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    },
    sold:{
        type: Number,
        maxlength: 100,
        default: 0
    },
    publish:{
        required: true,
        type: Boolean
    },
    images:{
        type: Array,
        default: [],
    } 
},{timestamps: true});

const Product = mongoose.model('Product',productSchema);
module.exports = {Product}