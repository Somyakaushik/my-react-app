import React from 'react';

export default function RotaryStoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl lg:max-w-6xl mx-auto">
        <article className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-12">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-700">
              소개
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-1">위치</div>
                  <div className="text-base font-semibold text-gray-900">우타르프라데시, 인도</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-1">지구</div>
                  <div className="text-base font-semibold text-gray-900">3100</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-1">차터 연도</div>
                  <div className="text-base font-semibold text-gray-900">2017</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-1">클럽 ID</div>
                  <div className="text-base font-semibold text-gray-900">88838</div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              조용한 마을에, 매일 베틀 앞에 앉아 생동감 있는 태피스트리를 짜는 노인이 있었습니다. 지나가던 한 여행자는 그가 방대한 미완성 디자인에 한 올 한 올 실을 넣는 모습을 보고 멈춰 섰습니다.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              <span className="italic">"왜 이런 일을 계속하세요?"</span> 여행자가 물었습니다. <span className="italic">"세상은 찢긴 천과 상처 입은 삶으로 가득해요. 실 한 올이 무슨 차이를 만들겠어요?"</span>
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              노인은 미소 지으며 계속 짰습니다. <span className="italic">"모든 실은 강인함을 더하지요. 모든 색은 아름다움을 더하고요. 언젠가 이 천은 누군가를 따뜻하게 감싸줄 거예요."</span>
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              여행자는 말없이 길을 떠났고, 마음속에 질문 그 이상의 것을 품게 되었습니다.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
              이와 마찬가지로, 로타리 클럽 산스크리티 모라다바드는 희망, 건강, 존엄성, 교육의 실을 하나하나 우리 사회의 직물에 더하고 있습니다.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8">
              모든 활동과 봉사, 아무리 작아도, 더 크고 의미 있는 무늬의 일부입니다 — 누군가의 삶을 더 나아지게 하는 연민과 변화의 태피스트리 말입니다.
            </p>
          </div>
          
          {/* Main Title */}
          <div className="border-t border-gray-200 pt-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-blue-700">
              로타리 이야기
            </h1>
            
            {/* Rotary History Section */}
            <div className="prose prose-gray max-w-none">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
                1905년, 시카고의 변호사 폴 P. 해리스는 젊은 시절 경험한 우정 어린 분위기를 전문적인 클럽에서 다시 만들고자 했습니다. 그리하여 구스타부스 로어, 실베스터 쉴레, 하이람 쇼리와 함께 로타리 클럽 오브 시카고가 탄생했습니다. 로타리라는 이름은 회원들의 사무실을 돌아가며 회의를 연 데서 유래했습니다. 로타리가 성장하면서 그 사명은 도움이 필요한 지역사회를 돕는 것으로 확장되었습니다.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                오늘날 “자기보다 남을 위한 봉사”라는 로타리의 사명은 200개 이상의 국가에 34,000개 이상의 클럽과 120만 명의 헌신적인 로타리안들에 의해 이어지고 있습니다. 이 자랑스러운 유산을 지키며, 로타리 클럽 산스크리티 모라다바드는 지속적으로 의미 있는 변화를 만들기 위해 노력해 왔습니다. 해마다 클럽은 숫자뿐만 아니라 정신과 목적 면에서도 더욱 강해졌습니다. 로타리 지구 3100의 뜻을 같이하는 로타리안들과 함께하는 봉사, 프로젝트, 우정은 지역사회를 위한 긍정적인 변화의 원동력이 되고 있습니다.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
