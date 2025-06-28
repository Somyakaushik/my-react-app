import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Gift } from 'lucide-react';

const DonatePage = () => {
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setExpandedDropdown(expandedDropdown === dropdown ? null : dropdown);
  };

  const dropdownContent = {
    empoweringWomen: "여성 건강과 역량 강화를 위한 이니셔티브에는 유방암 조기 진단을 위한 Cosmos 병원의 유방 촬영기 설치 및 검진 캠프 조직이 포함되었습니다. 모라다바드의 난단 레스토랑에서 열린 유방암 인식 회의는 여성들에게 예방 관리와 정기 검진의 중요성에 대해 교육하는 데 중요한 역할을 했습니다. 이러한 노력은 인식 향상, 접근성 향상, 조기 진단을 통해 여성의 건강 권한 부여에 크게 기여했습니다.",
    literacyDrive: "P.S. Mohammad Pur Bastaur, Kundarki, Moradabad의 학생들에게 경쟁 시험 도서가 제공되었습니다. 간호학 학생의 교육을 지원하기 위해 ₹40,000의 기금이 지급되었습니다. S.S.K. Inter College, Moradabad에서는 교사 교육 및 진로 상담 세션이 진행되었으며, 여학생들에게 각 ₹3,100의 장학금이 수여되었습니다. 스마트 교실과 태양광 패널이 Hasanpur 인근의 Shri Bihari Singh Girls Inter College, Gajraula의 HSCM Inter College, Hasanpur의 Manikarnika Junior High School에 설치되었습니다. 추가 스마트 교실은 Moradabad의 Nehru Junior High School 및 S.S. Inter College에도 설치되어 학습 환경을 개선했습니다.",
    healthCare: "Sidhh 병원의 이동 병원 서비스는 지역 사회에 직접 의료 서비스를 제공했습니다. Cosmos 병원에는 유방 촬영기가 설치되었고, 검진 캠프도 개최되었습니다. Civil Lines의 Apollo 병원에서는 무료 백내장 수술이 실시되었고, Karula, Moradabad에서는 무료 안과 검진 캠프가 열렸습니다. UP 정부 기초 학교에서는 아동 안과 검진도 시행되었습니다. Moradabad의 Nandan Restaurant에서는 여성들에게 조기 발견과 예방에 대해 교육하기 위한 유방암 인식 회의도 개최되었습니다.",
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
              기부하기
            </h1>
            <p className="text-black text-sm md:text-base leading-relaxed">
              로타리에 기부하면 깨끗한 물과 위생이 제공됩니다. 질병으로 고통받던 지역에 건강과 희망이 찾아옵니다. 경제 발전과 새로운 기회가 창출됩니다. 여러분의 재정적 지원은 이러한 모든 일들을 가능하게 합니다.
            </p>
          </div>
          <div className="flex-shrink-0 ml-0 md:ml-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center">
                  <Gift className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                <span className="text-yellow-800 font-bold text-sm">₹</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">
            기부 옵션
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                현금/수표/온라인 이체/UPI
              </h3>
              <p className="text-black text-sm">
                Rotary Club of Gundy의 다양한 프로젝트를 위해 여러 기부 방법이 마련되어 있습니다.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                일회성 기부
              </h3>
              <p className="text-black text-sm">
                생일, 기념일 등의 특별한 날을 기념하며 프로젝트를 지원하기 위한 일회성 기부를 할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">
            기부 방법
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                UPI (PayTM / Google Pay 등)
              </h3>
              <p className="text-black text-sm mb-4">
                <strong>수령인 이름:</strong> ROTARY CLUB SANSKRITI MORADABAD
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-500 text-sm">QR 코드 이미지</span>
                </div>
              </div>
              <p className="text-xs text-black">
                <strong>참고:</strong> <span className="text-blue-700">루피</span> (80G 비적용)
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                NEFT (80G 공제 가능)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-black">수령인 이름:</span>
                  <span className="font-bold text-black">ROTARY CLUB SANSKRITI MORADABAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">계좌 번호:</span>
                  <span className="font-bold text-black">513802010004015</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">IFSC:</span>
                  <span className="font-bold text-black">UBIN0551384</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">지점:</span>
                  <span className="font-bold text-black">OVERSEAS BRANCH, MORADABAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">은행:</span>
                  <span className="font-bold text-black">UNION BANK OF INDIA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
            여러분의 기부금이 사용되는 곳
          </h2>
          <p className="text-black mb-8 text-sm md:text-base">
            의료 서비스 제공, 개발도상국 지원, 취약계층 교육 및 역량 강화, 평화 증진을 위한 프로젝트에 사용됩니다.
          </p>

          <div className="space-y-4">
            {[
              { key: 'empoweringWomen', title: '여성 역량 강화' },
              { key: 'literacyDrive', title: '문해력 향상' },
              { key: 'healthCare', title: '보건 의료' },
              { key: 'economicDevelopment', title: '경제 및 지역사회 개발' },
            ].map((item) => (
              <div key={item.key} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-black">
                    {item.title}
                  </span>
                  {expandedDropdown === item.key ? (
                    <ChevronUp className="w-5 h-5 text-black" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-black" />
                  )}
                </button>
                {expandedDropdown === item.key && (
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-black text-sm leading-relaxed">
                      {dropdownContent[item.key]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-black text-sm">
            <p>© 2025 로타리 클럽 상스크리티 모라다바드. 모든 권리 보유.</p>
            <p className="mt-2">여러분의 기부는 지역 사회에 변화를 만듭니다.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DonatePage;
