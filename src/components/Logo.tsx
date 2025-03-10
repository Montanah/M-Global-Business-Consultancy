
import React from 'react';
import { Globe } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-white p-1 rounded-full">
        <Globe className="h-8 w-8 text-blue-900" />
      </div>
      <span className="text-xl font-bold text-white">M'Global</span>
    </div>
  );
};

export default Logo;
