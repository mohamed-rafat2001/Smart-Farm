import { useState } from 'react';
import Table from '../../ui/Table';
import SelectFarm from './SelectFarm';
import useDevices from './useDevices';
import DevicesDropdown from './DevicesDropdown';
import useUpdateFirebaseData from './useUpdateFirebaseData';
import '../../styles/animations.css';

function Devices() {
  const [selectedFarm, setSelectedFarm] = useState(null);
  const firebaseUrl = selectedFarm?.firebaseUrl;
  const { Devices } = useDevices(firebaseUrl);
  const { updateData, isUpdating } = useUpdateFirebaseData(firebaseUrl);
  const [expandedRows, setExpandedRows] = useState(new Set());

  const devicesList = [];
  if (Devices) {
    Object.keys(Devices).forEach((key) => {
      devicesList.push({ name: key, ...Devices[key] });
    });
  }
  console.log(devicesList);

  const toggleRow = (index) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <div>
      <h1 className="text-gray-500">
        Overview of your connected devices in your smart farm.
      </h1>
      <SelectFarm onFarmSelect={setSelectedFarm} />

      <div className="mt-10 w-full overflow-x-auto">
        <h1 className="mb-5 text-3xl font-bold"> Device List</h1>
        <Table head={['Device', 'Status']}>
          {devicesList?.map((el, index) => (
            <>
              <tr
                key={index}
                className="group cursor-pointer border-1 border-stone-700 bg-[#121416] hover:bg-[#283039]"
                onClick={() => toggleRow(index)}
              >
                <td
                  className={`p-5 ${expandedRows.has(index) ? '' : 'border-b-1 border-gray-700'}`}
                >
                  <div className="flex items-center">
                    <span className="mr-2 transition-transform duration-200 ease-in-out">
                      {expandedRows.has(index) ? '▼' : '▶'}
                    </span>
                    {el.name}
                  </div>
                </td>

                <td
                  className={`w-50 p-5 text-center text-white ${expandedRows.has(index) ? '' : 'border-b-1 border-gray-700'}`}
                >
                  <button
                    className="cursor-pointer rounded-full bg-[#283039] px-10 py-2 font-bold group-hover:bg-black group-hover:text-[#c9fa75] disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      updateData({
                        path: `${el.name}/Auto_change`,
                        data: !el?.Auto_change,
                      });
                    }}
                    disabled={isUpdating}
                  >
                    {el?.Auto_change ? 'Active' : 'Not Active'}
                  </button>
                </td>
              </tr>
              {expandedRows.has(index) && (
                <tr className="animate-fadeIn bg-[#1a1d21]">
                  <td
                    colSpan="2"
                    className="overflow-hidden border-b-1 border-gray-700 p-0"
                  >
                    <DevicesDropdown
                      el={el}
                      index={index}
                      firebaseUrl={firebaseUrl}
                    />
                  </td>
                </tr>
              )}
            </>
          ))}
        </Table>
      </div>
    </div>
  );
}
export default Devices;
