import React from 'react';
import useUpdateFirebaseData from './useUpdateFirebaseData';

function DevicesDropdown({ el, firebaseUrl }) {
  const { updateData, isUpdating } = useUpdateFirebaseData(firebaseUrl);
  return (
    <div className="animate-slideDown transform p-5 transition-all duration-300 ease-in-out">
      <div className="w-full">
        {/* Other Properties Section */}
        <div className="mb-4">
          <div className="mb-3 grid grid-cols-3 gap-4 border-b border-gray-600 pb-2">
            <h4
              className="animate-fadeInUp font-semibold text-gray-400 opacity-0"
              style={{ animationDelay: '500ms' }}
            >
              Property
            </h4>
            <h4
              className="animate-fadeInUp font-semibold text-gray-400 opacity-0"
              style={{ animationDelay: '500ms' }}
            >
              Value
            </h4>
            <h4
              className="animate-fadeInUp text-center font-semibold text-gray-400 opacity-0"
              style={{ animationDelay: '500ms' }}
            >
              Status
            </h4>
          </div>
          <div
            className="animate-fadeInUp space-y-2 opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            {Object.entries(el)
              .filter(([key]) => !['name', 'Auto_change'].includes(key))
              .map(([key, value]) => (
                <div
                  key={key}
                  className="group grid grid-cols-3 gap-4 py-2 transition-colors duration-200 hover:bg-[#1f2329]"
                >
                  <div className="p-2">
                    <span className="font-medium text-white">{key}</span>
                  </div>
                  <div className="p-2">
                    <span className="text-gray-200">
                      {typeof value === 'object'
                        ? JSON.stringify(value)
                        : String(value)}
                    </span>
                  </div>
                  <div className="p-2 text-center">
                    {typeof value === 'boolean' && (
                      <button
                        className="cursor-pointer rounded-full bg-[#283039] px-10 py-2 font-bold group-hover:bg-black group-hover:text-[#c9fa75]"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateData({
                            path: `${el.name}/${key}`,
                            data: !value
                          });
                        }}
                        disabled={isUpdating}
                      >
                        {value ? 'Active' : 'Not Active'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevicesDropdown;
