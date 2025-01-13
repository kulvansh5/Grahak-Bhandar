// src/routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create a product
router.post('/products', async (req, res) => {
  const { name, description, price, category } = req.body;
  const newProduct = new Product({ name, description, price, category });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
