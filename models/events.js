const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "is required"],
  },
  category: {
    type: String,
    required: [true, "is required"],
  },
  host: {
    type: String,
    required: [true, "is required"],
  },
  pic: {
    type: String,
    required: [true, "is required"],
    matches: [/^(http:\/\/|https:\/\/).+/, "is not a valid url"],
  },
  location: {
    type: String,
    required: [true, "is required"],
  },
  date: {
    type: String,
    required: [true, "is required"],
    match: [/^\d{4}-\d{2}-\d{2}$/, "is not a valid date"],
  },
  start: {
    type: String,
    required: [true, "is required"],
    match: [/^\d{2}:\d{2}$/, "is not a valid time"],
  },
  end: {
    type: String,
    required: [true, "is required"],
    match: [/^\d{2}:\d{2}$/, "is not a valid time"],
  },
  description: {
    type: String,
    required: [true, "is required"],
    minlength: [10, "must be at least 10 characters long"],
  },
});

const connections = mongoose.model("Connections", connectionSchema);

exports.find = () => connections.find();

exports.findById = function (id) {
  return connections.findById(id);
};

exports.updateById = function (id, connection) {
  return connections.findByIdAndUpdate(id, connection, {
    runValidators: true,
    useFindAndModify: false,
  });
};

exports.deleteById = function (id) {
  return connections.findByIdAndDelete(id);
};

exports.save = function (connection) {
  let newConnection = new connections(connection);
  return newConnection.save();
};
