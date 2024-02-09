const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const dbConnection = require("./utils/dbConnection");
const router = require("./routes/routes");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello");
});

try {
  //1.Create File

  // fs.writeFile("newfile.txt", "Writing into the file", "utf-8", (err) => {
  //   if (err) throw err;
  //   console.log("1.File is created successfully.");
  // });

  fs.writeFileSync("./newfile.txt", "Writing into the file..");
  console.log("1.File Created");
  //2.Read File

  // fs.readFile("./newfile.txt", "utf-8", (err, data) => {
  //   if (err) throw err;
  //   console.log("2.Read..", data);
  // });

  const data = fs.readFileSync("./newfile.txt", "utf-8");
  console.log("2.Data Read", data);

  //3.Update File

  // let content = "Adding data to the file";
  // fs.writeFile("newfile.txt", content, "utf-8", (err) => {
  //   if (err) throw err;
  //   console.log("3.Updated");
  // });

  let content = "Updated data..";
  fs.writeFileSync("./newfile.txt", content);
  console.log("3.Updated..");

  //4.Delete File

  // fs.unlinkSync("newfile.txt");
  // console.log("4.Deleted");
} catch (err) {
  console.log(err);
}

// fs.writeFile("newfile.txt", "", "utf-8", (err) => {
//   console.log("4.Deleted..");
// });

//1.Connecting to Database

dbConnection.connectToDB();

// const DB =
//   "mongodb+srv://john:john123@cluster0.moml4oc.mongodb.net/sample?retryWrites=true&w=majority";
// console.log(DB);
// mongoose.set("strictQuery", true);

// mongoose
//   .connect(DB)
//   .then((con) => {
//     console.log("DB Connection successful!!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use("/api/users", router);

app.listen(3000, () => {
  console.log("Listening to port 3000");
});

//2. Creating Model

//3. CREATE

// app.post("/saveSample", async (req, res) => {
//   try {
//     let newObj = new sampleModel({
//       name: "new",
//       age: 12,
//       branch: "mumbai",
//     });
//     const getData = await newObj.save();
//     res.status(200).json({
//       status: "success",
//       data: {
//         getData,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// });

// //4. READ

// app.get("/getFaq", async (req, res) => {
//   try {
//     const getData = await sampleModel.find({});
//     res.json({
//       status: "success",
//
//     });
//   } catch (err) {
//     res.json({
//       status: "fail",
//       message: err,
//     });
//   }
// });

// //5. UPDATE

// app.patch("/updateSample/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);
//     console.log(req.body);

//     const updateData = await sampleModel.updateOne(
//       { _id: req.params.id },
//       {
//         $set: req.body,
//       }
//     );
//     res.status(200).json({
//       status: "success",
//       data: {
//         updateData,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// });

// //6. DELETE
// app.delete("/deleteSample/:id", async (req, res) => {
//   try {
//     await sampleModel.deleteOne({ _id: req.params.id });
//     res.status(204).json({
//       status: "success",

//       data: null,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: err,
//     });
//   }
// });

// module.exports = app;
