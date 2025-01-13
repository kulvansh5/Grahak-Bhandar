export function PromotionalBanner() {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <p className="ml-3 font-medium text-white truncate">
              <span className="hidden md:inline">
                20% Off on All College Uniforms - Limited Time Offer!
              </span>
              <span className="md:hidden">20% Off on Uniforms!</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}