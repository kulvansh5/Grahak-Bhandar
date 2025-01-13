export default function ContactUsPage() {
    return (
      <div className="bg-gradient-to-r from-green-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700">
              We'd love to hear from you! Reach out to us for any questions or feedback.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-800">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
  
                <div>
                  <label htmlFor="email" className="block text-lg text-gray-800">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email address"
                  />
                </div>
  
                <div>
                  <label htmlFor="message" className="block text-lg text-gray-800">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Contact Information Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl text-blue-600">&#x1F4DE;</span>
                  <div>
                    <h3 className="text-xl text-gray-800">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
  
                <div className="flex items-center space-x-4">
                  <span className="text-2xl text-blue-600">&#x2709;</span>
                  <div>
                    <h3 className="text-xl text-gray-800">Email</h3>
                    <p className="text-gray-600">info@company.com</p>
                  </div>
                </div>
  
                <div className="flex items-center space-x-4">
                  <span className="text-2xl text-blue-600">&#x1F4CD;</span>
                  <div>
                    <h3 className="text-xl text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      1234 Street Name, City, State, 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  