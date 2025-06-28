import React from 'react';

export default function RotaryStoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl lg:max-w-6xl mx-auto">
        <article className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-12">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-700">
              About Us
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-1">Location</div>
                  <div className="text-base font-semibold text-gray-900">Uttar Pradesh, India</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-1">District</div>
                  <div className="text-base font-semibold text-gray-900">3100</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-1">Chartered</div>
                  <div className="text-base font-semibold text-gray-900">2017</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-1">Club ID</div>
                  <div className="text-base font-semibold text-gray-900">88838</div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              In a quiet village, there was an old weaver who sat at his loom every day, creating vibrant tapestries. A traveler passing by stopped and watched him thread one strand at a time into a vast, unfinished design.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              <span className="italic">"Why do you bother?"</span> the traveler asked. <span className="italic">"The world is full of broken cloth and torn lives. One thread won't change much."</span>
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              The old man smiled, still weaving. <span className="italic">"Every thread adds strength. Every color brings beauty. And one day, this cloth will warm someone who needs it."</span>
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              The traveler walked away in silence, carrying more than just a question.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              In much the same way, the Rotary Club Sanskriti, Moradabad adds thread after thread — of hope, health, dignity, and education — into the fabric of our society.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8">
              Each initiative, each act of service, no matter how small, is part of a larger pattern — a tapestry of compassion and change that makes life better for someone, somewhere.
            </p>
          </div>
          
          {/* Main Title */}
          <div className="border-t border-gray-200 pt-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-blue-700">
              The Rotary Story
            </h1>
            
            {/* Rotary History Section */}
            <div className="prose prose-gray max-w-none">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
                In 1905, an attorney in Chicago, Paul P. Harris decided to recreate the same friendly spirit he had experienced in his youth, in a professional club. And the Rotary Club of Chicago was born along with Gustavus Loehr, Silvester Schiele and Hiram Shorey. The Rotary name came from the practice of rotating meetings among members' offices. As Rotary grew, its mission expanded to serve communities in need.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Today, the Rotary mission of "Service Above Self" is carried forward by 1.2 million dedicated Rotarians in over 34,000 clubs across more than 200 countries. Upholding this proud legacy, Rotary Club Sanskriti, Moradabad has consistently strived to make a meaningful impact. With each passing year, the Club has grown stronger — not just in numbers, but in spirit and purpose. Through compassionate service, impactful projects, and deep-rooted fellowship with like-minded Rotarians of Rotary District 3100, the Club continues to be a vibrant force for positive change in the community.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}