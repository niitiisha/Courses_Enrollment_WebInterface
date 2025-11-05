import React from 'react';
import { Users, Calendar, DollarSign } from 'lucide-react';

const EnrollmentCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl animate-fadeIn">
      <div className="border-b border-gray-200">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
          <h3 className="text-2xl font-bold text-white">Enroll Now</h3>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Cohort start date */}
        <div className="flex items-start">
          <div className="bg-orange-100 rounded-full p-2 mr-4">
            <Calendar className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Cohort Starts on</p>
            <p className="text-gray-900 font-bold text-xl">20th July 2024</p>
          </div>
        </div>
        
        {/* Available seats */}
        <div className="flex items-start">
          <div className="bg-orange-100 rounded-full p-2 mr-4">
            <Users className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Seats</p>
            <div className="flex items-center">
              <p className="text-gray-900 font-bold text-xl">8</p>
              <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Limited</span>
            </div>
          </div>
        </div>
        
        {/* Price */}
        <div className="flex items-start">
          <div className="bg-orange-100 rounded-full p-2 mr-4">
            <DollarSign className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Price</p>
            <div className="flex items-center">
              <p className="text-gray-900 font-bold text-2xl">₹4999</p>
              <p className="ml-2 text-gray-400 line-through text-lg">₹8999</p>
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">44% off</span>
            </div>
          </div>
        </div>
        
        {/* Enroll button */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 text-lg">
          Enroll Now
        </button>
        
        {/* Extra info */}
        <p className="text-gray-500 text-center text-sm">
          7-day money-back guarantee
        </p>
      </div>
    </div>
  );
};

export default EnrollmentCard;