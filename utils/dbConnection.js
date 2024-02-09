const mongoose = require("mongoose");
const DB =
  "mongodb+srv://john:john123@cluster0.moml4oc.mongodb.net/sample?retryWrites=true&w=majority";
console.log(DB);

exports.connectToDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connection = await mongoose.connect(DB);
    if (!connection) {
      throw new Error("Connection to DB Failed");
    }

    console.log("Connection is successful!!!");
  } catch (err) {
    console.log(err.message);
  }
};

// mongoose.set("strictQuery", true);

// mongoose
//   .connect(DB)
//   .then((con) => {
//     console.log("DB Connection successful!!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
