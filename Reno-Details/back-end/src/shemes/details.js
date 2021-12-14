
//Параметри деталі

const mongoose = require('mongoose')

const DetailSchema = new  mongoose.Schema({
    detailName:{
        type: String,
        required: true
    },
    detailPrise: {
        type: String,
        required: true
    },
    detailImg: {
        type: String,
        required: true
    },
    detailColor: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Detail', DetailSchema)