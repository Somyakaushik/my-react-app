import React, { useState } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "교육 및 학교",
      subtitle: "양질의 교육과 문해력 프로그램을 통해 지성을 계발합니다.",
      image: "/api/placeholder/800/400"
    },
    {
      title: "보건 이니셔티브",
      subtitle: "모든 지역사회에 건강과 의료 접근성을 촉진합니다.",
      image: "/api/placeholder/800/400"
    },
    {
      title: "여성 역량 강화",
      subtitle: "여성의 권리를 지지하고 성장 기회를 창출합니다.",
      image: "/api/placeholder/800/400"
    },
    {
      title: "지역사회 봉사",
      subtitle: "지역사회와 연결되어 긍정적인 사회적 영향을 만듭니다.",
      image: "/api/placeholder/800/400"
    },
    {
      title: "환경 프로젝트",
      subtitle: "녹색 이니셔티브를 통해 미래 세대를 위한 지구를 보호합니다.",
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
      title: "질병 예방 및 치료",
      description: "우리는 생명을 위협하는 질병의 확산을 막기 위해 지역사회를 교육하고 지원합니다. 로타리 회원들은 언제든지 수백 개의 보건 프로젝트를 전 세계에서 진행 중입니다.",
      bgColor: "bg-green-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "평화 및 갈등 해결",
      description: "서비스 프로젝트 수행과 평화 펠로우십 및 장학금을 지원함으로써, 우리는 빈곤, 차별, 민족 갈등, 교육 접근성 부족, 자원의 불균형 분배 등 갈등의 근본 원인을 해결합니다.",
      bgColor: "bg-purple-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "깨끗한 물과 위생",
      description: "사람들이 깨끗한 물과 위생에 접근할 수 있을 때, 수인성 질병이 감소하고, 아이들은 더 건강해져 학교에 규칙적으로 다니며, 어머니들은 가족을 위한 더 많은 시간을 가질 수 있습니다.",
      bgColor: "bg-blue-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "모자보건",
      description: "로타리는 취약한 어머니와 아이들에게 고품질의 의료 서비스를 제공하여 더 건강하고 오래 살 수 있도록 합니다.",
      bgColor: "bg-pink-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "기초 교육 및 문해력",
      description: "우리는 지역사회의 교육 및 문해력 지원 역량을 강화하고, 교육에서 성별 격차를 줄이며, 성인 문해력을 향상시키는 것을 목표로 합니다. 우리는 모든 아이들과 성인을 위한 교육을 지원합니다.",
      bgColor: "bg-orange-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "경제 및 지역사회 발전",
      description: "우리는 개인과 지역사회가 경제적·사회적으로 번영할 수 있도록 기회를 창출합니다.",
      bgColor: "bg-yellow-500"
    },
    {
      image: "/api/placeholder/64/64",
      title: "환경 보호",
      description: "우리는 천연 자원의 보존과 보호, 생태적 지속 가능성 증진, 지역사회와 자연 간의 조화를 강화하는 활동을 지원합니다.",
      bgColor: "bg-green-600"
    }
  ];

  const cardContent = [
    {
      title: "우리가 하는 일",
      description: "로타리 클럽 산스크리티 모라다바드는 행사, 봉사 프로젝트, 지역사회 참여를 통해 의미 있는 네트워킹과 리더십 기회를 제공합니다. 35,000개가 넘는 클럽과 함께하는 120만 명의 글로벌 로타리안 네트워크의 일원으로서, 우리는 국경과 문화를 넘어 아이디어를 교환하고 영향력을 발휘합니다. 지역사회에 뿌리내린 우리는 모라다바드와 전 세계에서 지속적인 변화를 만들어냅니다."
    },
    {
      title: "우리 이야기",
      description: "로타리 클럽 산스크리티 모라다바드는 인도 우타르프라데시 3100 지구의 역동적이고 열정적인 로타리 클럽입니다. [설립 연도 삽입]년에 설립된 이 클럽은 다양한 분야의 헌신적인 전문가  [회원 수 삽입]명 이상으로 구성된 활기찬 커뮤니티로 성장했습니다. 젊고 활기찬 구성원들은 경험과 혁신의 조화를 이룹니다. 교육, 의료, 여성 역량 강화, 지역사회 발전 프로젝트를 이끄는 데 있어 '봉사를 통한 자기 실현'이라는 로타리 정신이 회원 모두에게 깊이 새겨져 있습니다."
    },
    {
      title: "프로젝트",
      description: "우리는 지역사회에서부터 글로벌 문제까지 실질적인 행동을 믿습니다. 회원들은 보건, 교육, 여성 역량 강화, 지역사회 개발에 초점을 맞춘 프로젝트에 시간과 전문성, 열정을 투자합니다. 모든 이니셔티브는 성실성, 공감, 지속 가능한 결과에 대한 헌신으로 실행됩니다. 로타리의 핵심 가치인 봉사, 친목, 다양성, 청렴, 리더십에 따라 우리는 매일 비전을 실천합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Header Section */}
      <div className="bg-gray-200 p-8 rounded-lg mb-8 shadow-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">로타리 산스크리티에 오신 것을 환영합니다!</h1>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            기부하기
          </button>
          <button className="bg-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors">
            클럽 가입
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            브로셔 보기
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
        <h2 className="text-4xl font-bold text-blue-600 mb-6">행동하는 사람들</h2>
        <div className="max-w-2xl">
          <p className="text-gray-600 text-lg mb-6">
            우리는 함께 모여 전 세계, 지역사회, 그리고 우리 자신에게 지속적인 변화를 만드는 행동을 합니다.
          </p>
          <p className="text-gray-500 italic">
            - 마크 다니엘 말로니, 로타리 인터내셔널
          </p>
        </div>
      </div>

     {/* 7 Areas of Focus */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-800 mb-8">7대 중점 분야</h2>
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
