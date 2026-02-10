const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const STATUS = {
  active: "active",
  on_hold: "on_hold",
  completed: "completed"
};

const projectSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    clientName: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: Object.values(STATUS),
      default: STATUS.active
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: false
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
    updatedDate: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = mongoose.model("Project", projectSchema);