import { useState } from 'react';
import useGetUserFarms from './useGetUserFarms';

function SelectFarm({ onFarmSelect }) {
  const { userFarm } = useGetUserFarms();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFarm, setSelectedFarm] = useState('');

  const handleSelect = (farm) => {
    setSelectedFarm(farm);
    setIsOpen(false);
    // Send selected farm to parent component
    if (onFarmSelect) {
      onFarmSelect(farm);
    }
  };

  return (
    <div>
      <h1 className="my-5 text-3xl font-bold">Select your farm</h1>
      <div className="relative w-[50%]">
        <div
          className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-600 bg-[#283039] p-2.5 focus:outline-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-white">
            {selectedFarm ? selectedFarm.name : 'Select a farm'}
          </span>
          <svg
            className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-600 bg-[#283039]">
            {userFarm?.docs?.map((farm) => (
              <div
                key={farm._id}
                className="cursor-pointer p-2.5 text-white hover:bg-gray-700"
                onClick={() => handleSelect(farm)}
              >
                {farm.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default SelectFarm;
