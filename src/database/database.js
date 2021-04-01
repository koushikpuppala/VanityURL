const mongoose = require('mongoose');

module.exports = mongoose.connect("mongodb+srv://AvengersAssemble:AvengersAssemble@avenger.e4ag1.mongodb.net/AvengersAssemble?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: false,
});