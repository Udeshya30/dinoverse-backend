const mongoose = require("mongoose");

const DinosaurSchema = new mongoose.Schema({
  name: { type: String, required: true },
  era: { type: String, required: true },
  diet: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },  // Image from `/assets/images/`
  modelUrl: { type: String, required: true },  // 3D Model from `/assets/models/`
  soundUrl: { type: String, required: true },  // Sound file from `/assets/sounds/`
});

module.exports = mongoose.model("Dinosaur", DinosaurSchema);
