import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShippingFast,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';

const OurPolicy = () => {
  return (
    <div className="py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
      <div>
        <FontAwesomeIcon icon={faExchangeAlt} size="2x" className="text-green-700 mb-2" />
        <h3 className="font-semibold text-lg text-green-800">Easy Exchange</h3>
        <p className="text-sm text-gray-700">
          Hassle-free product exchange for your convenience.
        </p>
      </div>

      <div>
        <FontAwesomeIcon icon={faShippingFast} size="2x" className="text-green-700 mb-2" />
        <h3 className="font-semibold text-lg text-green-800">Fast Delivery</h3>
        <p className="text-sm text-gray-700">
          Quick and reliable delivery to your doorstep.
        </p>
      </div>

      <div>
        <FontAwesomeIcon icon={faHeadset} size="2x" className="text-green-700 mb-2" />
        <h3 className="font-semibold text-lg text-green-800">Best Customer Support</h3>
        <p className="text-sm text-gray-700">
          Friendly support to help you anytime.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
