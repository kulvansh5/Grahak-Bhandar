import { useCart } from '@/context/CartContext'; // Import the CartContext for managing cart actions
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting to the cart page

const stationeryProducts = [
  {
    id: '1',
    name: 'Engineering Drawing Kit',
    price: 999,
    image: 'https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?auto=format&fit=crop&q=80&w=400',
    description: 'Complete drawing kit with all necessary tools',
  },
  {
    id: '2',
    name: 'Premium Notebook Set',
    price: 299,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400',
    description: 'Pack of 5 high-quality notebooks',
  },
  {
    id: '3',
    name: 'Scientific Calculator',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=400',
    description: 'Advanced calculator for engineering students',
  },
  {
    id: '4',
    name: 'Pen Set',
    price: 199,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=400',
    description: 'Set of 10 premium ballpoint pens',
  },
  {
    id: '5',
    name: 'Lab Record Book',
    price: 149,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400',
    description: 'Standard lab record book for practical sessions',
  },
  {
    id: '6',
    name: 'Geometry Box',
    price: 399,
    image: 'https://images.unsplash.com/photo-1598619469219-898405298cbc?auto=format&fit=crop&q=80&w=400',
    description: 'Complete geometry set with compass and tools',
  },
];

export default function StationeryPage() {
  const { addToCart } = useCart(); // Use the addToCart function from CartContext
  const navigate = useNavigate(); // To navigate to the cart page

  const handleAddToCart = (product: any) => {
    addToCart(product); // Add product to the cart
    navigate('/cart'); // Navigate to the cart page after adding the product
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Stationery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stationeryProducts.map((product) => (
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
                    onClick={() => handleAddToCart(product)} // Handle adding to the cart on button click
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
