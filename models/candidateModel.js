const mongoose = require('mongoose');
const schema = mongoose.Schema;

const candidateSchema = new mongoose.Schema({
    candidateName: {
        type: String
    },
    
    email: {
        type: String
    },
    
        first_Round: {
            type: Number
        },
        second_Round: {
            type: Number
        },
        third_Round: {
            type: Number
        },
        average:{
               type: Number
        }
    
    
   

},  { timestamps: true })

module.exports = mongoose.model('candidate',candidateSchema);

