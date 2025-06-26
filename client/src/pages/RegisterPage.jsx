import { Outlet, useLocation } from 'react-router-dom';
import googleIcon from '../assets/google-color.svg';
function RegisterPage() {
  const location = useLocation();
  const currentLocation = location?.pathname.split('/')[2];
  console.log(location.pathname.split('/')[2]);
  return (
    <div className="@container mt-5 flex h-screen items-center justify-center">
      <div className="w-[90%] rounded-lg bg-[#272727] p-7 @lg:w-[70%] @3xl:w-[60%] @4xl:w-[45%]">
        <h1 className="text-center text-3xl font-bold capitalize">
          {currentLocation}
        </h1>
        {/* buttons */}
        <div className="my-7 flex flex-col justify-between gap-y-4 @4xl:flex-row @4xl:gap-x-4">
          <button className="flex w-[100%] cursor-pointer items-center justify-evenly rounded-md bg-[#191919] p-3 text-lg text-stone-400 @4xl:w-1/2">
            <img src={googleIcon} alt="google icon" className="w-8" />

            <h1>Sign in via Google </h1>
          </button>
          <button className="flex w-[100%] cursor-pointer items-center justify-evenly rounded-md bg-[#191919] p-3 text-lg text-stone-400 @4xl:w-1/2">
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
            <h1>Sign in via Facebook </h1>
          </button>
        </div>
        {/*  */}
        <div className="flex items-center justify-between">
          <span className="w-[45%] border-b-1 border-stone-700"></span>
          <h1 className="font-bold">OR</h1>
          <span className="w-[45%] border-b-1 border-stone-700"></span>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default RegisterPage;
