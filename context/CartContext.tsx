import React, { createContext, useState, ReactNode, useContext } from 'react';

// Updated Product interface to include a `size` field
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  size: string;  // Add size field
  sizes?: string[];  // Available sizes, optional in case not needed for all products
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateCartItem: (productId: string, updatedFields: { size?: string; quantity?: number }) => void;  // Update cart item size
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add or update product in the cart (check if it already exists, increase quantity if so)
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart with the same size
      const existingProduct = prevCart.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingProduct) {
        // If product exists with the same size, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist, add it with quantity 1 and selected size
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from the cart based on id and size
  const removeFromCart = (productId: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter((product) => !(product.id === productId && product.size === size))
    );
  };

  // Update cart item (size or quantity)
  const updateCartItem = (productId: string, updatedFields: { size?: string; quantity?: number }) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, ...updatedFields }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
