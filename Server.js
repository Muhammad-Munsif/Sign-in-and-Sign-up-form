require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model("User", UserSchema);

// Sign Up Route
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Sign In Route
app.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.json({ message: "Sign In successful", user });
        } else {
            res.status(400).json({ error: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start Server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
