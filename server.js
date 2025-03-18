require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Import routes
const dinosaurRoutes = require("./routes/dinosaurs");
app.use("/api/dinosaurs", dinosaurRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/ping', (req, res) => {
    res.json({ message: 'Ping successful!' });
});
