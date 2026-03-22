const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  ratings: [Number]
});

schema.methods.avg = function () {
  if (!this.ratings.length) return 0;
  return this.ratings.reduce((a,b)=>a+b,0)/this.ratings.length;
};

module.exports = mongoose.model("Service", schema);