// const userModel = require("../userModel");
const createServices = require("../services/services");
const createUser = {
  savefunction: async (req, res) => {
    try {
      let getData;
      if (!req.body.name || !req.body.age || !req.body.branch) {
        throw new Error("Please provide details...");
      }

      let newObj = {
        name: req.body.name,
        age: req.body.age,
        branch: req.body.branch,
      };

      // const findDocument = await find(
      //   { name: req.body.name },
      //   { name: 1, age: 1, branch: 1, _id: 1 }
      // );

      const findDocument = await createServices.fetchFunction(
        { name: req.body.name },
        { name: 1, age: 1, branch: 1, _id: 1 }
      );

      //   const findDocument = await userModel
      //     .find({ name: req.body.name })
      //     .count();

      console.log(findDocument);

      if (findDocument.length) {
        console.log("Yes!! Length is", findDocument.length);

        throw new Error("Document already exists. Change the name value!!");
      }
      getData = await createServices.createFunction(newObj);

      console.log(getData);

      // if (!getData) {
      //   throw "Please Provide Details...";
      // }

      res.status(200).json({
        status: "success",
        data: {
          getData,
        },
      });
    } catch (e) {
      res.status(404).json({
        status: "fail",
        message: e.message,
      });
    }
  },
  fetchFuction: async (req, res) => {
    try {
      if (!req.body.name) {
        throw new Error("Please Enter name");
      }

      let filter = {
        name: req.body.name,
      };

      let select = {
        name: 1,
        age: 1,
        branch: 1,
        _id: 0,
      };

      console.log("Into fetch");

      const getData = await createServices.fetchFunction(filter, select);

      if (!getData) {
        throw new Error("No data found");
      }

      res.status(200).json({
        status: "success",
        data: {
          getData,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err.message,
      });
    }
  },
};

module.exports = createUser;
