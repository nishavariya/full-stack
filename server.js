const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoutes = require("./routes/contect");
const appointmentRoutes = require("./routes/appointment");
const footerRoutes = require("./routes/footer");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://nishavariya2024katargam:5XS8OrEgar7dnwqF@cluster0.dvzvo9k.mongodb.net/contactform", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/contect', contactRoutes);
app.use('/api/appointments', appointmentRoutes); 
app.use('/footer', footerRoutes); 

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
