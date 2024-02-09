const userModel = require("../userModel");

const createServices = {
  createFunction: (object) => {
    // const user = new userModel(object);
    // let data = user.save();
    let data = userModel.insertMany(object);
    return data;
  },
  fetchFunction: (filter, select) => {
    let data = userModel.find(filter, select);

    return data;
  },
};

module.exports = createServices;
