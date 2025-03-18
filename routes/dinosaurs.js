const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Load dinosaurs from JSON file
const dataPath = path.join(__dirname, "../data/dinosaurs.json");

const getDinosaurData = () => {
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
};

// 📌 Get all dinosaurs
router.get("/", (req, res) => {
  const dinosaurs = getDinosaurData();
  res.json(dinosaurs);
});

// 📌 Get a single dinosaur by ID
router.get("/:id", (req, res) => {
  const dinosaurs = getDinosaurData();
  const dinosaur = dinosaurs.find((d) => d.id == req.params.id);
  
  if (!dinosaur) {
    return res.status(404).json({ message: "Dinosaur not found" });
  }

  res.json(dinosaur);
});

module.exports = router;
