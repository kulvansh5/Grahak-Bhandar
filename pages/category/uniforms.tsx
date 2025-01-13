import { useState } from 'react';
import { useCart } from '@/context/CartContext'; // Import CartContext to manage cart actions
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const uniformProducts = [
  {
    id: '1',
    name: 'Engineering Uniform Set',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1621570169694-4b0881b9e6a9?auto=format&fit=crop&q=80&w=400',
    description: 'Complete set with shirt and pants',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Pharmacy Lab Coat',
    price: 899,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=400',
    description: 'White lab coat for pharmacy students',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '3',
    name: 'BBA Formal Shirt',
    price: 699,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=400',
    description: 'Formal light blue shirt for BBA students',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '4',
    name: 'College Blazer',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400',
    description: 'Official college blazer with logo',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '5',
    name: 'Sports Uniform',
    price: 999,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400',
    description: 'Sports wear for physical activities',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '6',
    name: 'Workshop Overalls',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1614859137388-080d186cee25?auto=format&fit=crop&q=80&w=400',
    description: 'Protective overalls for workshop sessions',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

export default function UniformsPage() {
  const { addToCart } = useCart(); // Use the addToCart function from CartContext
  const navigate = useNavigate(); // Use navigate to redirect to the cart page

  // State to manage selected size for each product
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});

  // Handle size change
  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSizes((prevState) => ({
      ...prevState,
      [productId]: size,
    }));
  };

  const handleAddToCart = (product: any) => {
    const selectedSize = selectedSizes[product.id]; // Get the selected size
    if (!selectedSize) {
      alert('Please select a size'); // Show alert if no size is selected
      return;
    }
    addToCart({ ...product, size: selectedSize }); // Add product with selected size to the cart
    navigate('/cart'); // Redirect to the cart page
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Uniforms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniformProducts.map((product) => (
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
                <div className="mb-4">
                  <span className="text-sm text-gray-600">Available sizes:</span>
                  <div className="mt-2">
                    <select
                      className="border border-gray-300 rounded px-2 py-1"
                      onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      value={selectedSizes[product.id] || ''}
                    >
                      <option value="">Select Size</option>
                      {product.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">₹{product.price}</span>

                  <button
                    onClick={() => handleAddToCart(product)} // Add product to cart and redirect
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
