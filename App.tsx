import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import HomePage from '@/pages/home';
import StationeryPage from '@/pages/category/stationery';
import UniformsPage from '@/pages/category/uniforms';
import AccessoriesPage from '@/pages/category/accessories';
import CartPage from '@/pages/cart/CartPage';
import AboutUs from '@/pages/About/About_us'; // Import the About Us page
import ContactUs from '@/pages/contact/contact_us'; // Import the Contact Us page
import { CartProvider } from '@/context/CartContext'; // Import the CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/stationery" element={<StationeryPage />} />
            <Route path="/category/uniforms" element={<UniformsPage />} />
            <Route path="/category/accessories" element={<AccessoriesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about-us" element={<AboutUs />} /> {/* Add About Us Route */}
            <Route path="/contact-us" element={<ContactUs />} /> {/* Add Contact Us Route */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
