import React, { useState } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Education & Schools",
      subtitle: "Empowering minds through quality education and literacy programs",
      image: "/api/placeholder/800/400"
    },
    {
      title: "Health Initiatives",
      subtitle: "Promoting wellness and healthcare access for all communities",
      image: "/api/placeholder/800/400"
    },
    {
      title: "Women Empowerment",
      subtitle: "Supporting women's rights and creating opportunities for growth",
      image: "/api/placeholder/800/400"
    },
    {
      title: "Community Outreach",
      subtitle: "Connecting with local communities for positive social impact",
      image: "/api/placeholder/800/400"
    },
    {
      title: "Environmental Projects",
      subtitle: "Protecting our planet for future generations through green initiatives",
      image: "/api/placeholder/800/400"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const focusAreas = [
    {
      image: "/api/placeholder/64/64",
      title: "Disease Prevention and Treatment",
      description: "We educate and equip communities to stop the spread of life-threatening diseases. Rotary members have hundreds of health projects underway around the world at any given time.",
      bgColor: "bg-green-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "Peace and Conflict Resolution",
      description: "By carrying out service projects and supporting peace fellowships and scholarships, our members take action to address the underlying causes of conflict, including poverty, discrimination, ethnic tension, lack of access to education, and unequal distribution of resources.",
      bgColor: "bg-purple-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "Clean Water and Sanitation",
      description: "When people have access to clean water and sanitation, waterborne diseases decrease, children stay healthier and attend school more regularly, and mothers can spend less time carrying water and more time helping their families.",
      bgColor: "bg-blue-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "Maternal and Child Health",
      description: "Rotary makes high-quality health care available to vulnerable mothers and children so they can live longer and grow stronger.",
      bgColor: "bg-pink-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "Basic Education and Literacy",
      description: "Our goal is to strengthen the capacity of communities to support basic education and literacy, reduce gender disparity in education, and increase adult literacy. We support education for all children and literacy for children and adults.",
      bgColor: "bg-orange-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "Economic and Community Development",
      description: "We create opportunities to help individuals and communities thrive financially and socially.",
      bgColor: "bg-yellow-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "Supporting the Environment",
      description: "We are committed to supporting activities that strengthen the conservation and protection of natural resources, advance ecological sustainability, and foster harmony between communities and the environment.",
      bgColor: "bg-green-600"
    }
  ];

  const cardContent = [
    {
      title: "What We Do",
      description: "At Rotary Club Sanskriti, Moradabad, our events, service projects, and community engagements provide meaningful networking and leadership opportunities. As part of a global network of 1.2 million Rotarians in over 35,000 clubs, we connect across borders and cultures to exchange ideas and make an impact. Proudly rooted in our local community, we take action that creates lasting change — both in Moradabad and around the world."
    },
    {
      title: "Our Story",
      description: "Rotary Club Sanskriti, Moradabad is a dynamic and passionate Rotary club in District 3100, Uttar Pradesh, India. Chartered in the year [insert year of charter], the club has grown into a vibrant community of over [insert current member count] committed professionals from diverse fields. With a youthful and energetic membership, the club reflects a strong blend of experience and innovation. The spirit of service runs deep in every member, driving impactful projects in education, healthcare, women empowerment, and community development. Rotary Club Sanskriti continues to be one of the most active and inspiring clubs in the region, making \"Service Above Self\" a living reality."
    },
    {
      title: "Projects",
      description: "From local neighborhoods to global causes, we believe in action that matters. Our members invest their time, expertise, and heart into projects focused on healthcare, education, women empowerment, and community development. Every initiative is carried forward with integrity, empathy, and a commitment to sustainable results. Guided by Rotary's core values — service, fellowship, diversity, integrity, and leadership — we work every day to turn vision into action."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Header Section */}
      <div className="bg-gray-200 p-8 rounded-lg mb-8 shadow-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to RCG!</h1>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Donate
          </button>
          <button className="bg-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors">
            Join RCG
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Click for RCG Brochure
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative mb-16 bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-96 overflow-hidden">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide ? 'translate-x-0' :
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className="relative h-full bg-gradient-to-r from-orange-200 to-orange-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
        >
          <div className="w-6 h-6 flex items-center justify-center text-gray-800">‹</div>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
        >
          <div className="w-6 h-6 flex items-center justify-center text-gray-800">›</div>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Three Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {cardContent.map((card, i) => (
          <div key={i} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* People of Action Section */}
      <div className="bg-gray-200 rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">People of Action</h2>
        <div className="max-w-2xl">
          <p className="text-gray-600 text-lg mb-6">
            Together, we see a world where people unite and take action to create lasting change — across the globe, in our communities, and in ourselves.
          </p>
          <p className="text-gray-500 italic">
            - Mark Daniel Maloney, Rotary International
          </p>
        </div>
      </div>

      {/* 7 Areas of Focus */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">7 Areas of Focus</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8">
              <div className={`w-16 h-16 ${area.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-12 h-12 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;