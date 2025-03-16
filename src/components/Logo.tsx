
import React from 'react';
import LogoImage from '../../src/Logo.png';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
        <img src={LogoImage} alt="Company Logo" className="h-20 w-20 text-blue-900" />
    </div>
  );
};

export default Logo;
