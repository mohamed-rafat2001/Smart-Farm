import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import UpdatePassword from './UpdatePassword';

function ProfileContent() {
  const [Default, setDefault] = useState(true);
  return (
    <div>
      <div className="my-5 border-b-1 border-stone-600 font-bold text-stone-500">
        <button
          type="button"
          className={`switch-link ${Default && 'active'} me-15 pb-2`}
          onClick={() => {
            setDefault(true);
          }}
        >
          Personal Details
        </button>
        <button
          type="button"
          className={`switch-link pb-2 ${!Default && 'active'}`}
          onClick={() => {
            setDefault(false);
          }}
        >
          Update Password
        </button>
      </div>
      {Default ? <PersonalDetails /> : <UpdatePassword />}
    </div>
  );
}

export default ProfileContent;
