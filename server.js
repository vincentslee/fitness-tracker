  
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiroutes");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );  

  require("./routes/apiroutes")(app);
  require("./routes/htmlroutes")(app);

app.listen(PORT, function () {
    console.log("App running on port 8080")
}); 