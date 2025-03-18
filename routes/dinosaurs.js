const express = require("express");
const router = express.Router();
const Dinosaur = require("../models/Dinosaur");

// 📌 Get all dinosaurs
router.get("/", async (req, res) => {
  try {
    const dinosaurs = await Dinosaur.find();
    res.json(dinosaurs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Get a single dinosaur by ID
router.get("/:id", async (req, res) => {
  try {
    const dinosaur = await Dinosaur.findById(req.params.id);
    if (!dinosaur) return res.status(404).json({ message: "Dinosaur not found" });
    res.json(dinosaur);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Add a new dinosaur (For Admin)
router.post("/", async (req, res) => {
  try {
    const { name, era, diet, description, imageUrl, modelUrl, soundUrl } = req.body;
    const newDino = new Dinosaur({ name, era, diet, description, imageUrl, modelUrl, soundUrl });
    await newDino.save();
    res.status(201).json(newDino);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Delete a dinosaur (For Admin)
router.delete("/:id", async (req, res) => {
  try {
    await Dinosaur.findByIdAndDelete(req.params.id);
    res.json({ message: "Dinosaur deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
