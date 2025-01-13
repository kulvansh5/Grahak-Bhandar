import { Link } from 'react-router-dom';

const allProducts = [
  // Stationery Products
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
  // Uniforms Products
  {
    id: '3',
    name: 'Engineering Uniform Set',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1621570169694-4b0881b9e6a9?auto=format&fit=crop&q=80&w=400',
    description: 'Complete set with shirt and pants',
  },
  {
    id: '4',
    name: 'Pharmacy Lab Coat',
    price: 899,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=400',
    description: 'White lab coat for pharmacy students',
  },
  // Accessories Products
  {
    id: '5',
    name: 'College Backpack',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400',
    description: 'Durable backpack with laptop compartment',
  },
  {
    id: '6',
    name: 'ID Card Holder',
    price: 149,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=400',
    description: 'Premium card holder with lanyard',
  },
];

export default function ProductPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
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
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
