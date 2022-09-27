var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString,
    options,
    function (err) {
        console.log("Null = Successfully Connected to Your Database");
    }
);

