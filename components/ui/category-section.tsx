import { Notebook, Shirt, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Stationery',
    icon: Notebook,
    path: '/category/stationery',
    description: 'Notebooks, pens, and all your study essentials',
  },
  {
    name: 'Uniforms',
    icon: Shirt,
    path: '/category/uniforms',
    description: 'College uniforms for all departments',
  },
  {
    name: 'Accessories',
    icon: Package,
    path: '/category/accessories',
    description: 'Bags, calculators, and other accessories',
  },
];

export function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <category.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}