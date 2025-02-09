import express from 'express';
import mongoose from 'mongoose';
import paymentRoutes from './src/routes/paymentRoutes.js';
import dotenv from 'dotenv';
import orderRoutes from './src/routes/orderRoutes.js';
import cors from 'cors';
import checkoutRoutes from './src/routes/checkoutRoutes.js'; // Import the new route

dotenv.config();


const MongoDB = process.env.MONGO_URI;

if (!MongoDB) {
  console.error("MongoDB URI is missing! Please check your .env file.");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.error('MongoDB Connection Error:', error));

app.use(express.json());
app.use('/api', orderRoutes);
app.use('/api', checkoutRoutes); // Use the new route
app.use('/api', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
