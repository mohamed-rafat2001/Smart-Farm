import { useState } from 'react';
import useGetUserFarms from './useGetUserFarms';
import Button from '../../ui/Button';
import CreateFarm from './CreateFarm';
import Table from '../../ui/Table.jsx';
import useDeactivateFarm from './useDeactivateFarm';
import { useNavigate } from 'react-router-dom';
function UserFarms() {
  const navigate = useNavigate();
  const { userFarm } = useGetUserFarms();
  const [addFarm, setAddFarm] = useState(false);
  const { isDeactivate, deActive } = useDeactivateFarm();
  function handelEvent(id) {
    navigate(`/app/farms/${id}`);
  }
  function handelActiveButton(id) {
    deActive(id);
  }
  return (
    <div className="relative">
      <h1 className="text-gray-500">
        Overview of your farm's list and add new farms
      </h1>
      <div className={`${addFarm ? 'blur-sm' : ''} `}>
        <div className="text-end">
          <Button
            color="#c9fa75"
            className="rounded-full bg-[#283039] font-bold"
            onClick={() => {
              setAddFarm(true);
            }}
          >
            Add Farm
          </Button>
        </div>
        {userFarm?.docs && (
          <div className="w-full overflow-x-auto">
            <Table head={['Farm Name', 'Location', 'Url', 'Status']}>
              {userFarm.docs.map((el) => (
                <tr
                  onClick={() => {
                    handelEvent(el._id);
                  }}
                  key={el._id}
                  className="group cursor-pointer border-1 border-stone-700 bg-[#121416] hover:bg-[#283039]"
                >
                  <td className="border-b-1 border-gray-700 p-5">{el.name}</td>
                  <td className="border-b-1 border-gray-700 p-5">
                    {el.location.address}
                  </td>
                  <td className="max-w-32 overflow-x-hidden border-b-1 border-gray-700 p-5 text-ellipsis">
                    {el.firebaseUrl}
                  </td>

                  <td className="w-50 border-b-1 border-gray-700 p-5 text-center text-white">
                    <button
                      disabled={isDeactivate}
                      className="cursor-pointer rounded-full bg-[#283039] px-10 py-2 font-bold group-hover:bg-black group-hover:text-[#c9fa75]"
                      onClick={(e) => {
                        e.stopPropagation();
                        handelActiveButton(el._id);
                      }}
                    >
                      {el.active ? 'Active' : 'Not Active'}
                    </button>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        )}
      </div>

      <div
        className={`absolute top-[5%] left-[17%] z-50 w-[65%] transform rounded-xl bg-[#272727] px-7 py-5 transition-all duration-400 ease-in-out ${
          addFarm
            ? 'scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <div className="text-end">
          <button
            className="w-6 cursor-pointer"
            onClick={() => {
              setAddFarm(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="red"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
        </div>
        <CreateFarm />
      </div>
    </div>
  );
}
export default UserFarms;
