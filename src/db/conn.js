const mongoose = require("mongoose");

// creating a database 
mongoose.connect("mongodb+srv://AbhishekGupta:kJbBlgpeJXpfIhu3@cluster0.8k0izcs.mongodb.net/?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true  
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})