
import React from 'react';
import LogoImage from '../../src/Logo.png';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <img src={LogoImage} alt="Company Logo" className="h-12 w-12 sm:h-14 sm:w-14 text-blue-900" />
    </div>
  );
};

export default Logo;
