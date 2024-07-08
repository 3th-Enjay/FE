import React from 'react';

// Placeholder components for icons - replace with actual SVG or image components
const ShoppingBagIcon = () => <div className="icon-style">🛍️</div>;
const DeliveryTruckIcon = () => <div className="icon-style">🚚</div>;
const DollarCoinIcon = () => <div className="icon-style">$</div>;
const ReferralIcon = () => <div className="icon-style">📬</div>;

const Subscriptions = () => {
  return (
    <div className="flex flex-wrap justify-around mt-5 p-5">
      <div className="flex flex-col items-center w-1/4 p-4">
        <div className="flex justify-evenly w-full">
          <ShoppingBagIcon className="text-black" />
          <div className="flex flex-col items-start text-black whitespace-normal">
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/4 p-4">
        <div className="flex justify-evenly w-full">
          <DeliveryTruckIcon className="text-black" />
          <div className="flex flex-col items-start text-black whitespace-normal">
            <h3 className="text-lg font-semibold">Fast Delivery</h3>
            <p>Within 2 days</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/4 p-4">
        <div className="flex justify-evenly w-full">
          <DollarCoinIcon className="text-black" />
          <div className="flex flex-col items-start text-black whitespace-normal">
            <h3 className="text-lg font-semibold">Price Match</h3>
            <p>We match prices!</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/4 p-4">
        <div className="flex justify-evenly w-full">
          <ReferralIcon className="text-black" />
          <div className="flex flex-col items-start text-black whitespace-normal">
            <h3 className="text-lg font-semibold">Refer Friends</h3>
            <p>Earn rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
