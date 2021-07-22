const mongoose = require('mongoose');
const dbName = "nodeTest";
mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true,useFindAndModify:false, useUnifiedTopology: true }, (error, connection) => {
    if (error) {
        console.log("Not connected to DB.")
    } else {
        console.log("Database connection successfully.")
    }
})