const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// console.log(process.env.MONGOURI)
const app = express();

try {
  mongoose.connect(
    "mongodb+srv://bank1234:bank1234@customerinfo.pex3o.mongodb.net/bankinfo?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
} catch {
  console.log("ERROR");
}

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/customers", require("./routes/customers"));
app.use("/api/transaction", require("./routes/transactions"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
