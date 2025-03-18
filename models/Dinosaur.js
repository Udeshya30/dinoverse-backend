const mongoose = require("mongoose");

const DinosaurSchema = new mongoose.Schema({
  name: { type: String, required: true },
  era: { type: String, required: true },
  diet: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  modelUrl: { type: String, required: true }, // 3D model file URL
  soundUrl: { type: String, required: true }, // Dinosaur roar sound
});

module.exports = mongoose.model("Dinosaur", DinosaurSchema);
