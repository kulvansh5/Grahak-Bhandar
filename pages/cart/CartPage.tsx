import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom'; // For navigation to Checkout page

export default function CartPage() {
  const { cart, removeFromCart, addToCart, updateCartItem } = useCart(); // Assuming we have updateCartItem to update size

  const handleIncreaseQuantity = (productId: string) => {
    const product = cart.find((item) => item.id === productId);
    if (product) {
      addToCart(product); // Increase quantity by adding the same product again
    }
  };

  const handleDecreaseQuantity = (productId: string) => {
    const product = cart.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
      // Decrease quantity by reducing one from the cart
      removeFromCart(productId);
      addToCart({ ...product, quantity: product.quantity - 1 });
    }
  };

  const handleSizeChange = (productId: string, newSize: string) => {
    // Call the function to update the product size in the cart
    updateCartItem(productId, { size: newSize });
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Display selected size */}
                <div className="mb-4">
                  <span className="text-sm text-gray-600">Size: </span>
                  <span className="text-lg font-semibold">{product.size}</span>
                </div>

                {/* Allow user to change the size in the cart */}
                <div className="mb-4">
                  <label className="text-sm text-gray-600" htmlFor={`size-select-${product.id}`}>Change Size:</label>
                  <select
                    id={`size-select-${product.id}`}
                    className="border border-gray-300 rounded px-2 py-1 mt-1"
                    value={product.size}
                    onChange={(e) => handleSizeChange(product.id, e.target.value)} // Handle size change
                  >
                    {product.sizes?.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleDecreaseQuantity(product.id)}
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">{product.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(product.id)}
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Link
              to="/checkout" // Assuming you have a Checkout page
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
