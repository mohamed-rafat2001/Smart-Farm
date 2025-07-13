import useAuth from '../../Hooks/useAuth';
import defaultProfileImg from '../../assets/defaultProfileImage.jpeg';
function ProfileHeader() {
  const { data } = useAuth();
  return (
    <div className="flex w-[100%] flex-col gap-x-7 min-[450px]:flex-row">
      <div className="mb-3 h-30 w-30">
        <img
          src={defaultProfileImg}
          className="h-[100%] w-[100%] rounded-full border-2 border-gray-200 object-cover"
        />
      </div>
      <div className="mb-3 min-[450px]:mt-5">
        <h1 className="text-xl font-bold">
          {data?.firstName + '  ' + data?.lastName}
        </h1>

        <p className="text-xs text-stone-400">{data?.email}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
