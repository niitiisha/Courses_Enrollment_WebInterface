import React from 'react';
import { CheckCircle } from 'lucide-react';

const CoursePoints: React.FC = () => {
  const points = [
    'Comprehensive curriculum covering both fundamentals and advanced topics',
    'Hands-on projects with real-world datasets',
    'Expert instructors with industry experience',
    'Job placement assistance and career guidance',
    'Access to exclusive community and networking opportunities'
  ];

  return (
    <div className="space-y-4 animate-fadeIn">
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-white text-lg">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePoints;