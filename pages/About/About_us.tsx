export default function AboutUsPage() {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-700">
              Get to know our story, mission, and values.
            </p>
          </div>
  
          {/* Main Content Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Welcome Section */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our Store!</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are dedicated to providing high-quality uniforms, lab essentials, and accessories for students and professionals. 
                Our mission is to deliver products that combine comfort, style, and durability, ensuring that you look and feel your best
                in every setting.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From engineering uniforms to pharmacy lab coats, we offer a wide range of products tailored to meet the unique needs
                of different fields and professions. With a commitment to quality and customer satisfaction, we strive to make your
                shopping experience seamless and enjoyable.
              </p>
            </div>
  
            {/* Values Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <ul className="list-inside list-disc text-gray-600 space-y-2">
                <li>Quality Products: Ensuring you get the best materials and craftsmanship.</li>
                <li>Affordable Pricing: Balancing quality and affordability for everyone.</li>
                <li>Customer Satisfaction: Your happiness is our top priority.</li>
                <li>Reliability: Delivering products you can trust.</li>
              </ul>
            </div>
  
            {/* Journey Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Starting from a small idea, we have grown into a trusted provider of uniforms and professional wear. Our journey has
                been fueled by the support of our customers and our commitment to excellence.
              </p>
            </div>
  
            {/* Connect Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <p className="text-gray-600 leading-relaxed">
                Have any questions or feedback? Feel free to{' '}
                <a href="/contact-us" className="text-blue-600 hover:underline">contact us</a>. 
                We’re here to help!
              </p>
            </div>
          </div>
  
          {/* Image Section (Optional) */}
          <div className="mt-12 text-center">
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    );
  }
  