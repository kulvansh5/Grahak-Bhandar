import { Link } from 'react-router-dom';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Engineering Drawing Kit',
    price: 999,
    image: 'https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Premium Notebook Set',
    price: 299,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Engineering Uniform',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1621570169694-4b0881b9e6a9?auto=format&fit=crop&q=80&w=400',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">₹{product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}