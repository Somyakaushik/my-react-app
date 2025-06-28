import React from 'react';

export default function PastPresidentsPage() {
  const presidentsData = [
    {
      year: "2022-2023",
      president: "Reena Mitta",
      secretary: "Anjali Agarwal"
    },
    {
      year: "2023-2024", 
      president: "Reena Mittal",
      secretary: "Anjali Agarwal"
    },
    {
      year: "2024-2025",
      president: "Anjali Agarwal",
      secretary: "Nidhi Bansal"
    },
    {
      year: "2025-2026",
      president: "Nidhi Bansal",
      secretary: "Raghav Agarwal"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-blue-700">
            Rotary Club Sanskriti, Moradabad - Past Presidents
          </h1>
                    
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-4 sm:px-6 text-left text-sm sm:text-base font-semibold text-gray-700">
                    Rotary Year
                  </th>
                  <th className="border border-gray-300 px-3 py-4 sm:px-6 text-left text-sm sm:text-base font-semibold text-gray-700">
                    RCG's then President
                  </th>
                  <th className="border border-gray-300 px-3 py-4 sm:px-6 text-left text-sm sm:text-base font-semibold text-gray-700">
                    RCG's then Secretary
                  </th>
                </tr>
              </thead>
                            
              <tbody>
                {presidentsData.map((row, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-3 py-4 sm:px-6 text-sm sm:text-base text-gray-700">
                      {row.year}
                    </td>
                    <td className="border border-gray-300 px-3 py-4 sm:px-6 text-sm sm:text-base text-gray-700">
                      {row.president}
                    </td>
                    <td className="border border-gray-300 px-3 py-4 sm:px-6 text-sm sm:text-base text-gray-700">
                      {row.secretary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}