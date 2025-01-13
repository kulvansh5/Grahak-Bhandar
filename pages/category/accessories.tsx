import React from 'react';
import { useCart } from '@/context/CartContext'; // Import useCart correctly

const accessoryProducts = [
  {
    id: '1',
    name: 'College Backpack',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400',
    description: 'Durable backpack with laptop compartment',
  },
  {
    id: '2',
    name: 'ID Card Holder',
    price: 149,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=400',
    description: 'Premium card holder with lanyard',
  },
  {
    id: '3',
    name: 'Lab Safety Goggles',
    price: 299,
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=400',
    description: 'Protective eyewear for laboratory use',
  },
  {
    id: '4',
    name: 'USB Drive',
    price: 599,
    image: 'https://images.unsplash.com/photo-1617815266594-4769ec02d276?auto=format&fit=crop&q=80&w=400',
    description: '32GB storage for your documents',
  },
  {
    id: '5',
    name: 'Scientific Calculator',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=400',
    description: 'Advanced calculator for technical courses',
  },
  {
    id: '6',
    name: 'Lab Apron',
    price: 399,
    image: 'https://images.unsplash.com/photo-1585435421671-0c16764628ce?auto=format&fit=crop&q=80&w=400',
    description: 'Protective apron for laboratory work',
  },
];

export default function AccessoriesPage() {
  const { addToCart } = useCart(); // Use the useCart hook to access addToCart

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)} // Add product to cart when button is clicked
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
