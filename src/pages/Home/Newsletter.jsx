import { TfiEmail } from "react-icons/tfi";

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-blue-600 rounded-2xl sm:rounded-3xl py-14 sm:py-20 px-6 sm:px-10 text-center overflow-hidden">
        {/* Floating Images */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          className="absolute left-8 top-8 w-16 h-16 lg:w-30 lg:h-20 rounded-xl object-cover hidden lg:block"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          className="absolute left-20 bottom-10 w-16 h-16 lg:w-30 lg:h-20 rounded-xl object-cover hidden lg:block"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          className="absolute right-20 top-10 w-16 h-16 lg:w-30 lg:h-20 rounded-xl object-cover hidden lg:block"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          className="absolute right-8 bottom-10 w-16 h-16 lg:w-30 lg:h-20 rounded-xl object-cover hidden lg:block"
          alt=""
        />

        {/* Content */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 leading-tight">
          New Things Will Always <br /> Update Regularly
        </h2>

        {/* Input */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-xl max-w-xl mx-auto p-2 gap-2 shadow-lg">
          <div className="flex items-center flex-1 px-3" >
            <TfiEmail className="text-gray-400 text-lg sm:text-xl"></TfiEmail>
          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 outline-none px-4 py-3 text-gray-700 rounded-lg sm:rounded-none"
          />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
