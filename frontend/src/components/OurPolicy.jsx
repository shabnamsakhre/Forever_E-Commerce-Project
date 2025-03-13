import React from "react";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        {/* <img className="w-12 m-auto mb-5" src="" alt="Exchange Icon" /> */}
        <i className="ri-exchange-funds-line text-3xl m-auto mb-5"></i>
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <i className="ri-verified-badge-line text-3xl m-auto mb-5"></i>
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 Days free return policy</p>
      </div>
      <div>
        <i className="ri-customer-service-line text-3xl m-auto mb-5"></i>
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
