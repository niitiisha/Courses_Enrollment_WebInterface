import React from 'react';
import { FileText, PhoneCall } from 'lucide-react';

const CTAButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
      <button className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
        <FileText className="h-5 w-5 mr-2" />
        Download Brochure
      </button>
      <button className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
        <PhoneCall className="h-5 w-5 mr-2" />
        Request Callback
      </button>
    </div>
  );
};

export default CTAButtons; 