const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// 📌 Serve Static Files (3D models, images, sounds)
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Import routes
const dinosaurRoutes = require("./routes/dinosaurs");
app.use("/api/dinosaurs", dinosaurRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/ping', (req, res) => {
    res.json({ message: 'Ping successful!' });
});
