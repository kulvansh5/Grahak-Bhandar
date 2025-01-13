import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// MongoDB URI
const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  console.error("MongoDB URI is missing! Please check your .env file.");
  process.exit(1); // Exit the process if MONGO_URI is not found
}

// Initialize Express app
const app = express();

// Connect to MongoDB using the URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.error('MongoDB Connection Error:', error));

// Set the server to listen on the port specified in .env, or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
