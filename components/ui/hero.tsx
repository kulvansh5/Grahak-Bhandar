import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome to Grahak Bhandar
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Your College Store for Stationery & Uniforms
        </p>
        <div className="mt-10">
          <Link
            to="/products"
            className="inline-block bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 rounded-md transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}