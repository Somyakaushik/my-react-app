import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Gift, CreditCard, Smartphone, Users, BookOpen, Heart, Building2 } from 'lucide-react';

const DonatePage = () => {
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setExpandedDropdown(expandedDropdown === dropdown ? null : dropdown);
  };

  const dropdownContent = {
    empoweringWomen: "Initiatives focused on women's health and empowerment included the installation of a mammography machine at Cosmos Hospital for early breast cancer detection and organizing a screening camp. A breast cancer awareness meeting held at Nandan Restaurant, Moradabad played a key role in educating women about preventive care and the importance of regular check-ups. These efforts contributed greatly to women's health empowerment through increased awareness, better access, and early diagnosis.",
    literacyDrive: "Competitive exam books were provided to students at P.S. Mohammad Pur Bastaur, Kundarki, Moradabad. A fund of ₹40,000 was granted to support a nursing student's education. Teacher training and career counseling sessions were conducted at S.S.K. Inter College, Moradabad, where girl students were awarded scholarships of ₹3,100 each. Smart classrooms and solar panels were installed at Shri Bihari Singh Girls Inter College near Hasanpur, HSCM Inter College in Gajraula, and Manikarnika Junior High School in Hasanpur. Additional smart classrooms were also set up at Nehru Junior High School and S.S. Inter College in Moradabad to improve the learning environment.",
    healthCare: "The Hospital on Wheels mobile service by Sidhh Hospital delivered medical care directly to the community. A mammography machine was installed at Cosmos Hospital, and a screening camp was organized. Free cataract surgeries were conducted at Apollo Hospital in Civil Lines, and a free eye check-up camp was held in Karula, Moradabad. Children's eye check-ups were carried out at a UP Government Basic School. A breast cancer awareness meeting was also held at Nandan Restaurant, Moradabad to educate women on early detection and prevention.",
    economicDevelopment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
              Giving
            </h1>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Donating to Rotary means clean water and sanitation. Health and hope in areas that were once ravaged by diseases like covid. Economic development and new opportunities. Your financial help makes all this happen, and more.
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
            Giving Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                Cash/Check/Online Transfer/UPI
              </h3>
              <p className="text-black text-sm">
                We have several options where you can donate for various projects of Rotary Club of Gundy.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                Give a One-Time Gift
              </h3>
              <p className="text-black text-sm">
                You may celebrate your special occasions like birthdays, anniversaries, etc by making a one time donation as a gift to support one of our projects.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">
            How to Donate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                UPI (PayTM/ Google Pay/ etc)
              </h3>
              <p className="text-black text-sm mb-4">
                <strong>Beneficiary Name:</strong> ROTARY CLUB SANSKRITI MORADABAD
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-500 text-sm">QR Code Image</span>
                </div>
              </div>
              <p className="text-xs text-black">
                <strong>Note:</strong> <span className="text-blue-700">रुपये</span> (Not applicable for 80G)
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                NEFT (For 80G Exemption)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-black">Beneficiary Name:</span>
                  <span className="font-bold text-black">ROTARY CLUB SANSKRITI MORADABAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">SB A/c no:</span>
                  <span className="font-bold text-black">513802010004015</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">IFSC:</span>
                  <span className="font-bold text-black">UBIN0551384</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Branch:</span>
                  <span className="font-bold text-black">OVERSEAS BRANCH, MORADABAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Bank:</span>
                  <span className="font-bold text-black">UNION BANK OF INDIA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
            About Your Donations, Where & How They are used
          </h2>
          <p className="text-black mb-8 text-sm md:text-base">
            Projects that provide healthcare, improve developing communities, educate and empower the vulnerable and promote peace.
          </p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleDropdown('empoweringWomen')}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-black">
                  EMPOWERING WOMEN
                </span>
                {expandedDropdown === 'empoweringWomen' ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </button>
              {expandedDropdown === 'empoweringWomen' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-black text-sm leading-relaxed">
                    {dropdownContent.empoweringWomen}
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleDropdown('literacyDrive')}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-black">
                  LITERACY DRIVE
                </span>
                {expandedDropdown === 'literacyDrive' ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </button>
              {expandedDropdown === 'literacyDrive' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-black text-sm leading-relaxed">
                    {dropdownContent.literacyDrive}
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleDropdown('healthCare')}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-black">
                  HEALTH CARE
                </span>
                {expandedDropdown === 'healthCare' ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </button>
              {expandedDropdown === 'healthCare' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-black text-sm leading-relaxed">
                    {dropdownContent.healthCare}
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleDropdown('economicDevelopment')}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-black">
                  ECONOMIC AND COMMUNITY DEVELOPMENT
                </span>
                {expandedDropdown === 'economicDevelopment' ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </button>
              {expandedDropdown === 'economicDevelopment' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-black text-sm leading-relaxed">
                    {dropdownContent.economicDevelopment}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-black text-sm">
            <p>© 2025 Rotary Club Sanskriti Moradabad. All rights reserved.</p>
            <p className="mt-2">Your contributions make a difference in our community.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DonatePage;