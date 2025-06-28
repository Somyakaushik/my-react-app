import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <article className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-12">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-blue-700">
            개인정보 처리방침
          </h1>
          
          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {/* Data You Provide to Us Section */}
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6">
              귀하가 제공하는 데이터
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              귀하가 웹사이트 또는 오프라인 활동을 통해 로타리와 상호작용할 때 제공한 데이터를 수집합니다. 이 데이터에는 다음이 포함됩니다:
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              로타리 또는 로타랙트 클럽에 문의하거나 회원으로 가입할 때 제공한 개인 정보, My Rotary를 통해 rotary.org에 등록할 때 제공된 데이터 포함.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              웹사이트를 통해 이루어진 거래 내역 및 주문 이행에 대한 세부 정보(주문 전에 재정 관련 데이터를 제공해야 할 수 있음)
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              웹사이트에서의 검색 쿼리
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              향후 개발될 기능은 새로운 개인 정보 수집으로 이어질 수 있습니다.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8">
              또한 웹사이트의 공개 영역에 게시하거나 다른 사용자 또는 제3자에게 전송할 데이터를 제공할 수도 있습니다(이하 “사용자 콘텐츠”). 사용자의 콘텐츠는 귀하의 책임 하에 게시되고 전송됩니다. 특정 페이지의 접근을 제한하며, 귀하는 계정 설정에서 일부 개인 정보 보호 설정을 할 수 있습니다. 하지만, 귀하의 콘텐츠를 공유하는 사용자들의 행동은 저희가 통제할 수 없습니다.
            </p>
            
            {/* Usage Details Section */}
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6">
              사용 세부정보, IP 주소, 쿠키 및 기타 기술
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              웹사이트를 탐색하고 상호작용할 때, 장비, 브라우징 활동 및 패턴에 대한 일부 정보를 자동으로 수집할 수 있습니다:
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              웹사이트 방문 내역, 트래픽 데이터, 위치 데이터, 로그, 통신 데이터 및 접근한 리소스에 대한 정보
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              컴퓨터 및 인터넷 연결 정보(IP 주소, 운영 체제 및 브라우저 유형 포함)
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              My Rotary 계정에 로그인하지 않은 경우, 수집된 데이터는 익명이며 통계적으로 집계됩니다. 이는 웹사이트 개선 및 더 나은 개인화된 서비스를 제공하기 위함입니다.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              사용자 규모 추정, 브라우저 통계, 콘텐츠 인기, 사용 패턴 분석
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              검색 속도 향상
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              재방문 시 사용자 인식
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              저희는 자동 데이터 수집을 위해 쿠키(또는 브라우저 쿠키)를 사용합니다. 쿠키는 컴퓨터 하드 드라이브에 저장되는 작은 파일입니다. 브라우저 설정을 통해 쿠키 수신을 거부할 수 있지만, 이 경우 웹사이트 일부 기능에 접근하지 못할 수 있습니다. 설정을 변경하지 않은 경우, 웹사이트 방문 시 시스템은 자동으로 쿠키를 발급합니다.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8">
              My Rotary 계정에 로그인한 경우, 수집된 사용 데이터는 귀하의 계정과 연결됩니다. 이는 사이트 기능을 개선하고 맞춤형 콘텐츠 제공을 위함이며, 해당 데이터는 본 정책에 따라 처리됩니다.
            </p>
            
            {/* Third-party Advertiser Section */}
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6">
              제3자 광고주 쿠키 및 추적 기술 사용
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8">
              Rotary Global Rewards에 표시되는 일부 광고 및 혜택은 제3자 광고주, 광고 네트워크 및 광고 서버에 의해 제공됩니다. 또한 일부 애플리케이션은 제3자가 소유할 수 있으며, 이들은 쿠키나 다른 기술을 통해 사용자 데이터를 수집할 수 있습니다. 이들 기술의 사용은 당사에서 통제하지 않으며, 문의 사항이 있을 경우 광고주에게 직접 문의하시기 바랍니다.
            </p>
            
            {/* How We Use Your Personal Data Section */}
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6">
              귀하의 개인 데이터를 사용하는 방식
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              당사는 귀하로부터 수집한 데이터(개인 정보 포함)를 다음 목적으로 사용합니다:
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              웹사이트 및 그 콘텐츠를 귀하에게 제공하기 위해
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              귀하의 요청에 따라 정보, 제품 또는 서비스 제공을 위해
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              로타리의 주요 목적을 이행하기 위해:
            </p>
            
            <div className="ml-4 sm:ml-8 mb-4">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-2">
                로타리안, 로타랙터 및 기타 개인에 대한 로타리의 의무 수행
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-2">
                재정 처리
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-2">
                로타리 재단 지원 및 기금 모금 활동
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-2">
                행사 및 컨벤션 계획 지원
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-2">
                로타리 간행물 및 기타 자료를 통한 주요 메시지 전달
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-2">
                프로그램 및 회원 지원
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-2">
                법적 의무 준수
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
                로타리의 역사 보존 및 기록 유지를 위한 자료 아카이브 구축
              </p>
            </div>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              귀하가 제공한 목적을 달성하기 위해
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              계약 이행 및 권리 행사, 청구 및 수금 포함
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              웹사이트 및 제공 제품/서비스 변경 알림
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              웹사이트의 인터랙티브 기능 참여 허용
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              사용자 선호도를 저장하여 웹사이트를 맞춤화
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              웹사이트 및 로타리 애플리케이션 개선을 위한 개발 및 테스트
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              귀하가 데이터 제공 시 설명된 기타 방식
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8">
              귀하의 동의가 있는 기타 모든 목적
            </p>

            {/* Disclosure Section */}
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6">
              귀하의 개인 정보 공개
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
              당사는 식별 불가능한 통계 데이터를 제한 없이 공개할 수 있습니다.
            </p>

            {/* The rest of the Disclosure section can be similarly translated if needed */}

          </div>
        </article>
      </div>
    </div>
  );
}
