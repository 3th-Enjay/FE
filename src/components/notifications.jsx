// src/NotificationBar.js
import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className=" left-0 w-full h-12 bg-red-500 text-white z-50 bg-red-600 text-white w-full max-w-[1440px] h-[75px] px-[67px] py-[32px] flex items-center justify-between">
      <span className=' text-center '>Free Delivery On Orders Above $200. Don't Miss It!!!</span>
      <button onClick={handleClose}>
        <XIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default NotificationBar;
