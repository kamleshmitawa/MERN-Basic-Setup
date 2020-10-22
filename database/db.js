const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=> console.log("MongoDB Server Running Successfully"))
.catch(err=> console.log(err, 'error in mongodb connection'))
