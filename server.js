const express = require("express");
const mongoose = require("mongoose");
const global_values = require("./global_values");
const app = express();
const fields_router = require("./routes/fields_routes");

//connecting to db
mongoose
  .connect(global_values.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("successfully connected to database");
  });
app.use(express.json());
app.use("/api/v1/field/", fields_router);

app.listen(global_values.PORT, () => {
  console.log(`listening on port ${global_values.PORT}`);
});
