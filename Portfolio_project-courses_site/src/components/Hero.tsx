import React, { useState } from 'react';
import Testimonials from './Testimonials';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  
  return (
    <div className="bg-[#2B2B2B]">
      {/* First Section */} 
      <div className="w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex">
                {[1, 2, 3, 4].map((_, i) => (
                  <span key={i} className="text-4xl text-white">★</span>
                ))}
                <span className="text-4xl text-white opacity-50">★</span>
              </div>
              <span className="text-white text-3xl">4.6+</span>
            </div>

            {/* Title */}
            <h1 className="text-white text-6xl font-['Josefin_Sans']">
              Data Science & AI Course
            </h1>

            {/* Points */}
            <ul className="space-y-4 text-white text-2xl list-disc pl-6">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
              <li>Point 4</li>
              <li>Point 5</li>
            </ul> 

            {/* CTA Buttons */}
            <div className="flex space-x-6">
              <button className="bg-[#f36c3c] text-white hover:bg-white hover:text-[#f36c3c] active:bg-[#f36c3c] active:text-white transition-colors duration-200 px-8 py-4 rounded-full text-xl font-['Josefin_Sans'] border-2 border-[#f36c3c]">
                Download Brochure
              </button>
              <button className="bg-[#f36c3c] text-white hover:bg-white hover:text-[#f36c3c] active:bg-[#f36c3c] active:text-white transition-colors duration-200 px-8 py-4 rounded-full text-xl font-['Josefin_Sans'] border-2 border-[#f36c3c]">
                Request CallBack
              </button>
            </div>
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="bg-white rounded-3xl p-8">
            <div className="space-y-6">
              <h2 className="text-[#fa6666] text-3xl font-['Josefin_Sans']">Cohort Starts on</h2>
              <p className="text-black text-3xl font-['Josefin_Sans']">20th July 2024</p>

              <div>
                <h2 className="text-[#fa6666] text-3xl font-['Josefin_Sans']">Seats</h2>
                <p className="text-black text-3xl font-['Josefin_Sans']">8</p>
              </div>

              <div>
                <h2 className="text-[#fa6666] text-3xl font-['Josefin_Sans']">Price</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-black text-3xl font-['Josefin_Sans']">4999/-</span>
                  <span className="text-gray-400 text-3xl line-through font-['Josefin_Sans']">8999</span>
                </div>
              </div>

              <button className="w-full bg-[#f36c3c] text-white hover:bg-white hover:text-[#f36c3c] active:bg-[#f36c3c] active:text-white transition-colors duration-200 py-4 rounded-full text-2xl font-['Josefin_Sans'] border-2 border-[#f36c3c]">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Placement Highlights Section */}
      <div className="w-full bg-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold font-['Josefin_Sans'] mb-4">Leading Placements</h2>
          <div className="h-1 w-0 bg-[#f36c3c] mx-auto mb-12"></div>

          {/* Stats Row */}
          <div className="flex justify-center flex-wrap gap-12 text-2xl font-semibold mb-12">
            <p>1000+</p>
            <p>+85%</p>
            <p>+91%</p>
            <p>15 LPA</p>
          </div>

          {/* Image Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[1, 2, 3].map((id) => (
              <div key={id} className="border-2 border-[#fa6666] rounded-xl p-6 w-64 flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div> {/* Placeholder */}
                <img src="/logo-ola.png" alt="OLA Logo" className="w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Journey Section */}
      <div className="w-full bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[#2B2B2B] text-5xl font-['Josefin_Sans'] mb-4">Your Course Journey</h2>
            <div className="h-1 w-96 bg-[#f36c3c] mx-auto"></div>
          </div>

          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-[50px] top-0 bottom-0 w-0.5 bg-[#f36c3c]"></div>

            {/* Step 1 */}
            <div className="relative mb-24">
              <div className="absolute left-[50px] -translate-x-1/2 w-8 h-8 bg-[white] rounded-full border-2 border-[#f36c3c]"></div>

              <div className="flex flex-col items-center text-center">
                <h3 className="text-4xl font-['Josefin_Sans'] mb-4">Learn Skills from Basics to Advance</h3>
                <p className="text-xl text-center max-w-2xl mb-8">
                  Loreum Ipsium is a placeholder used in websites until we decide to put something in its place. This is just a placeholder please go below
                </p>

                {/* Course Table */}
                <div className="bg-[#f36c3c] rounded-xl p-8 max-w-4xl w-full">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="bg-white hover:text-[#f36c3c] transition-colors duration-200 rounded-lg p-3 border-2 border-white cursor-pointer">
                          <h4 className="font-semibold">Module {index}</h4>
                        </div>
                      ))}
                    </div>
                    <div className="text-white">
                      <p className="text-lg">
                        jgdkhgfjfjftfv ncm vhmb m m hgvjbjkjhghjhb hjfjhvbjk hgvj mhbjv bjhkvbv yfkhmvdchfg b jhgkgkjhfyvngdfugvjn gfvngjv bnv bn mnhgvfgb ttyfrefguyjfb fcjbyygj nmbedrbjh jhjfbnmnjhr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Apply and Master Skills Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-['Josefin_Sans'] mb-4">Apply and Master Skills</h2>
          <p className="text-xl text-gray-700 mb-12">
            Loreum Ipsium is a placeholder used in websites until we decide<br /> to put something in its place.This is just a placeholder please go below
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {/* Netflix Project */}
            <div className="border-2 border-[#fa6666] rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105 flex flex-col items-center space-y-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png"
                alt="Netflix Logo"
                className="w-24 h-auto mb-4"
              />
              <h3 className="text-red-600 text-2xl font-bold">NETFLIX</h3>
              <p className="text-center mt-2">Netflix Movies and TV Shows Clustering</p>
              <a href="#" className="mt-4 text-red-500 font-semibold">Start Now ➝</a>
            </div>

            {/* Zomato Project */}
            <a
              href="https://example.com/zomato-project"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#fa6666] rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105 flex flex-col items-center space-y-4"
            >
              <img src="https://static.vecteezy.com/system/resources/previews/020/975/587/non_2x/zomato-logo-zomato-icon-transparent-free-png.png" alt="Zomato Project" className="w-24 h-auto" />
              <h3 className="text-2xl font-bold text-red-600">ZOMATO</h3>
              <p className="text-gray-700">Zomato Restaurant Clustering and Sentiment Analysis</p>
              <p className="text-red-500 font-semibold flex items-center gap-1">
                Start Now <span>→</span>
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Ace Company Tests Section */}
      <div className="bg-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Vertical Line with Circle */}
          <div className="absolute left-[180px] mt-[80px] top-0 bottom-0 w-0.5 -ml-10 bg-[#f36c3c]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-[#f36c3c] bg-[#2B2B2B]"></div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-5xl font-['Josefin_Sans'] text-white">Ace Company Tests</h2>
            <p className="text-white text-xl max-w-3xl mx-auto">
              Loreum Ipsium is a placeholder used in websites until we decide to put something in its place.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">1000+</p>
                <p className="text-lg">Students</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">+85%</p>
                <p className="text-lg">Placed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">+91%</p>
                <p className="text-lg">Above 12LPA</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">15 LPA</p>
                <p className="text-lg">Average Salary</p>
              </div>
            </div>

            <p className="text-white text-xl max-w-3xl mx-auto mb-12">
              Loreum Ipsium is a placeholder used in websites until we decide to put something in its place.
            </p>

            {/* Analytics Image Placeholder */}
            <div className="bg-white p-4 rounded-lg max-w-4xl mx-auto">
              <div className="aspect-[16/9] bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-5xl font-['Josefin_Sans'] mb-6">Interview Ready</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Loreum Ipsium is a placeholder used in websites until we decide to put something in its place.
            This is just a placeholder please go below
          </p>

          {/* Grid of Cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <a href="#" className="bg-black rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-95 w-80 h-60 transition"> 
                <div className="mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Placement Support</h3>
                <p className="text-gray-400 text-sm">
                  Complete support from our dedicated placement team until you get a job
                </p>
              </a> 

              {/* Card 2 */}
              <a href="#" className="bg-black rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-95 w-80 h-60 transition">
                <div className="mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Resume Building</h3>
                <p className="text-gray-400 text-sm">
                  Resume sharing in our network of 700+ hiring partners
                </p>
              </a>

              {/* Card 3 */}
              <a href="#" className="bg-black rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-95 w-80 h-60 transition">
                <div className="mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">AlmaX Job Application</h3>
                <p className="text-gray-400 text-sm">
                  End to end application tracking of multiple interview rounds
                </p>
              </a>

              {/* Card 4 */}
              <a href="#" className="bg-black rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-95 w-80 h-60 transition">
                <div className="mb-4">
                  {/* Leave image blank */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Placement Support</h3>
                <p className="text-gray-400 text-sm">
                  Complete support from our dedicated placement team until you get a job
                </p>
              </a>

              {/* Card 5 */}
              <a href="#" className="bg-black rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-95 w-80 h-60 transition">
                <div className="mb-4">
                  {/* Leave image blank */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Resume Building</h3>
                <p className="text-gray-400 text-sm">
                  Resume sharing in our network of 700+ hiring partners
                </p>
              </a>

              {/* Card 6 */}
              <a href="#" className="bg-black rounded-lg p-6 shadow hover:shadow-lg transition hover:scale-95 w-80 h-60 transition">
                <div className="mb-4">
                  {/* Leave image blank */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">AlmaX Job Application</h3>
                <p className="text-gray-400 text-sm">
                  End to end application tracking of multiple interview rounds
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Get seen by recruiters section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-['Josefin_Sans'] text-black mb-6">Get seen by recruiters</h2>
          <p className="text-black text-xl max-w-3xl mx-auto mb-20">
            Loreum Ipsium is a placeholder used in websites until we decide to put something in its place. This is just a placeholder please go below
          </p>

          <h3 className="mt-80 text-5xl font-['Josefin_Sans'] text-black mb-6">Get Your Offer Letter</h3>
          <p className="text-black text-xl max-w-3xl mx-auto mb-16">
            Loreum Ipsium is a placeholder used in websites until we decide to put something in its place. This is just a placeholder please go below
          </p>
              
          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" alt="Apple" className="h-16 -mt-4 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" className="h-12 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="Uber" className="h-12 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" alt="Oracle" className="h-12 object-contain" />
            
            <img src="https://img.icons8.com/color/512/hp.png" alt="HP" className="h-16 object-contain" />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/1200px-Pinterest-logo.png" alt="Pinterest" className="h-16 ml-10 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" className="h-12 object-contain" />
            
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Airtel-Emblem.png" alt="Airtel" className="h-16 object-contain" />
            
            <img src="https://cdn.freebiesupply.com/logos/large/2x/flipkart-logo-svg-vector.svg" alt="Flipkart" className="h-16 -ml-5 object-contain" />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook" className="h-14 ml-10 object-contain" />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png" alt="Accenture" className="h-13 -ml-2 object-contain" />
          
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png" alt="TCS" className="h-13 object-contain" />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1200px-Goldman_Sachs.svg.png" alt="Goldman Sachs" className="h-12 mt-4 object-contain" />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" alt="Salesforce" className="h-12 mt-4 ml-7 object-contain" />
            
            <img src="https://www.ersbio.co.za/wp-content/uploads/2024/11/infosys-logo.png.original.png" alt="Infosys" className="h-13 -ml-4 object-contain" />
            
            <img src="https://logowik.com/content/uploads/images/cognizant-new-20223302.jpg" alt="Cognizant" className="h-13 -mt-5 object-contain" />
          </div>
        </div>
      </div>

      {/* Get Skilled In Section */}
      <div className="bg-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-['Josefin_Sans'] text-white mb-12">
            Get Skilled In
            <div className="h-1 w-60 bg-[#f36c3c] mx-auto mt-2"></div>
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-5 gap-8 mb-8">
            {/* First Row */}
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={`top-${index}`} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white p-2 rounded border-2 border-[#f36c3c]">
                  {/* Skill icon */}
                </div>
                <p className="text-white mt-2 text-xl">Python</p>
              </div>
            ))}
            {/* Second Row */}
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={`bottom-${index}`} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white p-2 rounded border-2 border-[#f36c3c]">
                  {/* Skill icon */}
                </div>
                <p className="text-white mt-2 text-xl">Python</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <div className="bg-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-['Josefin_Sans'] text-white text-center mb-4">
            Unlock Opportunities with Certification
            <div className="h-1 w-60 mx-auto bg-[#f36c3c] mt-2"></div>
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-['Josefin_Sans'] text-white mb-8">
                Verifiable Certification
              </h3>
              <p className="text-white text-xl leading-relaxed">
                Upon completing the Data Science course, you'll receive a verifiable Certificate of Accomplishment that you can link to from your Résumé and LinkedIn profile.
              </p>
            </div>

            {/* Certificate Image Placeholder */}
            <div className="bg-white rounded-lg p-4">
              <div className="aspect-[4/3] bg-gray-100 rounded">
                {/* Certificate image goes here */}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Testimonials Section */}
      <Testimonials />
  

     {/* Data Avengers is the Right Choice Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-['Josefin_Sans'] text-black mb-4">
            Data Avengers is the Right Choice
          </h2>
          <div className="h-1 w-96 bg-[#f36c3c] mx-auto mb-20"></div>

          {/* Icons Grid - 3x2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            {/* First Row */}
            {[1, 2, 3].map((index) => (
              <div key={`top-${index}`} className="flex flex-col items-center space-y-6">
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  {/* Icon placeholder - you can add your icons here */}
                  <div className="w-20 h-20 bg-gray-300 rounded"></div>
                </div>
                <h3 className="text-2xl font-['Josefin_Sans'] text-black">Loreum Ipsuim</h3>
              </div>
            ))}
            
            {/* Second Row */}
            {[4, 5, 6].map((index) => (
              <div key={`bottom-${index}`} className="flex flex-col items-center space-y-6">
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  {/* Icon placeholder - you can add your icons here */}
                  <div className="w-20 h-20 bg-gray-300 rounded"></div>
                </div>
                <h3 className="text-2xl font-['Josefin_Sans'] text-black">Loreum Ipsuim</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
        {/* Expert 1:1 MentorShip Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-['Josefin_Sans'] text-black mb-4">
            Expert 1:1 MentorShip
          </h2>
          <div className="h-1 w-96 bg-[#f36c3c] mx-auto mb-16"></div>

          {/* Stats Row */}
          <div className="flex justify-center flex-wrap gap-16 text-black text-4xl font-bold mb-20">
            <p>1000+</p>
            <p>+85%</p>
            <p>+91%</p>
            <p>15 LPA</p>
          </div>

          {/* Meet Your Mentors Section */}
          <h3 className="text-5xl font-['Josefin_Sans'] text-black mb-4">
            Meet Your Mentors
          </h3>
          <div className="h-1 w-80 bg-[#f36c3c] mx-auto mb-16"></div>

          {/* Mentor Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[1, 2, 3].map((id) => (
              <div key={id} className="border-2 border-[#f36c3c] rounded-3xl p-8 w-80 flex flex-col items-center">
                {/* Mentor Image Placeholder */}
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-6 border-2 border-[#f36c3c]">
                  {/* Mentor image will be added here */}
                </div>
                
                {/* Company Logo Placeholder */}
                <div className="w-20 h-8 bg-gray-200 rounded border-2 border-[#f36c3c]">
                  {/* Company logo will be added here */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       <div className="bg-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-5xl font-['Josefin_Sans'] mb-6">Bonus: AI Driven tools to support you
           <div className="h-1 w-80 bg-[#f36c3c] mx-auto mt-2"></div></h2>

          {/* 2nd Grid of Cards */}
          <div className="flex justify-center mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-black rounded-lg p-6 shadow hover:shadow-lg w-80 h-60">
                <div className="mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Resume Builder</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-black rounded-lg p-6 shadow hover:shadow-lg w-80 h-60">
                <div className="mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Resume Builder</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-black rounded-lg p-6 shadow hover:shadow-lg w-80 h-60">
                <div className="mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">icon</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-black rounded-lg p-6 shadow hover:shadow-lg w-80 h-60">
                <div className="mb-4">
                  {/* Leave image blank */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">icon</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-black rounded-lg p-6 shadow hover:shadow-lg w-80 h-60">
                <div className="mb-4">
                  {/* Leave image blank */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">icon</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-black rounded-lg p-6 shadow hover:shadow-lg w-80 h-60">
                <div className="mb-4">
                  {/* Leave image blank */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">icon</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


        <div className="bg-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-5xl font-['Josefin_Sans'] mb-6">We Know Life Gets Busy
           <div className="h-1 w-80 bg-[#f36c3c] mx-auto mt-2"></div></h2>
      {/* 3rd Grid of Cards */}
          <div className="flex justify-center mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
              {/* Card 1 */}
              <div className="bg-black rounded-3xl p-6 shadow hover:shadow-lg w-96 h-60">
                <div className="mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Resume Builder</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-black rounded-3xl p-6 shadow hover:shadow-lg w-96 h-60">
                <div className="mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Resume Builder</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-black rounded-3xl p-6 shadow hover:shadow-lg w-96 h-60">
                <div className="mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">icon</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div>

            

              {/* Card 4 */}
              <div className="bg-black rounded-3xl p-6 shadow hover:shadow-lg w-96 h-60">
                <div className="mb-4">
                  {/* Leave image blank */}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">icon</h3>
                <p className="text-gray-400 text-sm">
                  loreum ipsuim
                </p>
              </div> 
            </div>
          </div>
        </div>
      </div>


       {/* We Value Your Money Section */}
      <div className="bg-[#2B2B2B] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-['Josefin_Sans'] text-white text-center mb-4">
            We Value Your Money
            <div className="h-1 w-96 bg-[#f36c3c] mx-auto mt-2"></div>
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 mb-36 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-['Josefin_Sans'] text-white mb-8">
                Verifiable Certification
              </h3>
              <p className="text-white text-xl leading-relaxed">
                Upon completing the Data Science course, you'll receive a verifiable Certificate of Accomplishment that you can link to from your Résumé and LinkedIn profile
              </p>
            </div>

            {/* Money/Rupee Icon Placeholder */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Orange circle background */}
                <div className="w-48 h-48 bg-orange-500 rounded-full flex items-center justify-center">
                  {/* White hand with rupee symbol */}
                  <div className="text-white text-8xl font-bold">
                    ₹
                  </div>
                </div>
                {/* Hand illustration placeholder - you can add the actual hand image here */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white rounded-lg">
                  {/* Hand illustration will go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Got More Questions Section */}
            <div className="bg-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-['Josefin_Sans'] text-white text-center mb-4">
                  Got More Questions ?
                  <div className="h-1 w-96 bg-[#f36c3c] mx-auto mt-2"></div>
                </h2>

                <div className="mt-16 bg-white rounded-3xl p-12 max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Form */}
                    <div className="space-y-6">
                      {/* First Name and Last Name Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-black text-xl font-semibold mb-3">First Name</label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            onFocus={() => setIsFirstNameFocused(true)}
                            onBlur={() => setIsFirstNameFocused(false)}
                            className={`w-full px-4 py-3 border-2 rounded-lg text-lg focus:outline-none ${isFirstNameFocused ? 'border-[#f36c3c]' : 'border-gray-400'}`}
                            placeholder=""
                          />
                          {!firstName && (
                            <p className="text-[#f36c3c] text-sm mt-1">*Need a first name</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-black text-xl font-semibold mb-3">Last Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-[#f36c3c] text-lg"
                            placeholder=""
                    />
                  </div>
                </div>

                {/* Email and Phone Number Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-black text-xl font-semibold mb-3">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-[#f36c3c] text-lg"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-black text-xl font-semibold mb-3">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-[#f36c3c] text-lg"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-black text-xl font-semibold mb-3">Write your message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-[#f36c3c] text-lg resize-none"
                    placeholder=""
                  ></textarea>
                </div>

                {/* Send Button */}
                <button className="w-full bg-[#f36c3c] text-white text-xl font-semibold py-4 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                  Send
                </button>
              </div>

              {/* Right Side - Illustration */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Main illustration container */}
                  <div className="w-100 h-100 bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* Customer support illustration */}
                    <img
                      src="https://coreldrawdesign.com/resources/previews/preview-online-chating-romance-vector-illustration-download-for-free-1719387547.webp"
                      alt="Customer Support Illustration"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#f36c3c] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Logo and Social Icons */}
            <div className="space-y-8">
              {/* Data Avengers Logo */}
              <div>
                <img 
                  src="https://www.dataavengers.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.00eff16f.png&w=3840&q=75" 
                  alt="Data Avengers Logo" 
                  className="h-20 mb-4"
                />
              </div> 
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-400 rounded flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Twitter className="h-6 w-6 text-white" />
                </a>
              </div>

              {/* Copyright */}
              <div className="text-white text-lg">
                <p>Copyright © Data Avengers. All rights reserved</p>
              </div>
            </div>

            {/* Middle Column - Explore */}
            <div>
              <h3 className="text-white text-3xl font-bold font-['Josefin_Sans'] mb-8">Explore</h3>
              <ul className="space-y-4 text-white text-xl">
                <li><a href="#" className="hover:text-gray-200 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Success Gallery</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Right Column - Contacts */}
            <div>
              <h3 className="text-white text-3xl font-bold font-['Josefin_Sans'] mb-8">Contacts</h3>
              <div className="space-y-6 text-white text-xl">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6" />
                  <span>+91 9123456780</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6" />
                  <span>example@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3"> 
                  <MapPin className="h-6 w-6 mt-1" />
                  <div>
                    <p>Noida, Uttar Pradesh, India</p>
                    <p className="mt-2">Disclaimer</p>
                    <p>Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Hero;