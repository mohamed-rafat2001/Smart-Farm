function Settings() {
  return (
    <div>
      <h1 className="text-gray-500">
        Manage yor acount preferences, app settings, notifications and access
        support resources.
      </h1>
      <div className="mt-10 flex flex-col gap-y-10">
        <div className="">
          <h1 className="mb-5 text-2xl font-bold"> Acount Preferences</h1>
          <div className="flex w-[60%] flex-col gap-y-5">
            <div
              onClick={() => {}}
              className="flex cursor-pointer items-center gap-x-5 rounded-lg py-3 hover:rounded-xl hover:bg-[#283039]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-12 w-12 rounded-lg bg-[#283039] p-3"
              >
                <path
                  fill="white"
                  d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"
                />
              </svg>
              <div>
                <h1>Language and Time Zone</h1>
                <p className="text-sm text-gray-500">
                  Configure your preferred language and time zone for
                  application.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="mb-5 text-2xl font-bold"> App Settings</h1>
          <div className="flex w-[60%] cursor-pointer flex-col gap-y-5">
            <div
              onClick={() => {}}
              className="flex cursor-pointer items-center gap-x-5 rounded-lg py-3 hover:rounded-xl hover:bg-[#283039]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 rounded-lg bg-[#283039] p-3"
                viewBox="0 0 320 512"
              >
                <path
                  fill="white"
                  d="M118.3 238.4c3.5-12.5 6.9-33.6 13.2-33.6 8.3 1.8 9.6 23.4 18.6 36.6 4.6-23.5 5.3-85.1 14.1-86.7 9-.7 19.7 66.5 22 77.5 9.9 4.1 48.9 6.6 48.9 6.6 1.9 7.3-24 7.6-40 7.8-4.6 14.8-5.4 27.7-11.4 28-4.7 .2-8.2-28.8-17.5-49.6l-9.4 65.5c-4.4 13-15.5-22.5-21.9-39.3-3.3-.1-62.4-1.6-47.6-7.8l31-5zM228 448c21.2 0 21.2-32 0-32H92c-21.2 0-21.2 32 0 32h136zm-24 64c21.2 0 21.2-32 0-32h-88c-21.2 0-21.2 32 0 32h88zm34.2-141.5c3.2-18.9 5.2-36.4 11.9-48.8 7.9-14.7 16.1-28.1 24-41 24.6-40.4 45.9-75.2 45.9-125.5C320 69.6 248.2 0 160 0S0 69.6 0 155.2c0 50.2 21.3 85.1 45.9 125.5 7.9 12.9 16 26.3 24 41 6.7 12.5 8.7 29.8 11.9 48.9 3.5 21 36.1 15.7 32.6-5.1-3.6-21.7-5.6-40.7-15.3-58.6C66.5 246.5 33 211.3 33 155.2 33 87.3 90 32 160 32s127 55.3 127 123.2c0 56.1-33.5 91.3-66.1 151.6-9.7 18-11.7 37.4-15.3 58.6-3.4 20.6 29 26.4 32.6 5.1z"
                />
              </svg>

              <div>
                <h1>Appearancee</h1>
                <p className="text-sm text-gray-500">
                  Customize the appearance of the application with light or dark
                  mode.
                </p>
              </div>
            </div>
            <div
              onClick={() => {}}
              className="flex cursor-pointer items-center gap-x-5 rounded-lg py-3 hover:rounded-xl hover:bg-[#283039]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 rounded-lg bg-[#283039] p-3"
                viewBox="0 0 512 512"
              >
                <path
                  fill="white"
                  d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z"
                />
              </svg>
              <div>
                <h1>Units of Measurement</h1>
                <p className="text-sm text-gray-500">
                  Adjust the Units of Measurement for temperature,humidity and
                  other metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="mb-5 text-2xl font-bold"> Notifications</h1>
          <div className="flex w-[60%] flex-col gap-y-5">
            <div
              onClick={() => {}}
              className="flex cursor-pointer items-center gap-x-5 rounded-lg py-3 hover:rounded-xl hover:bg-[#283039]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 rounded-lg bg-[#283039] p-3"
                viewBox="0 0 448 512"
              >
                <path
                  fill="white"
                  d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                />
              </svg>
              <div>
                <h1>Notification Settings</h1>
                <p className="text-sm text-gray-500">
                  Manage your notification preferences for device alerts, system
                  updates and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="mb-5 text-2xl font-bold"> Support Resources</h1>
          <div className="flex w-[60%] flex-col gap-y-5">
            <div
              onClick={() => {}}
              className="flex cursor-pointer items-center gap-x-5 rounded-lg py-3 hover:rounded-xl hover:bg-[#283039]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-12 w-12 rounded-lg bg-[#283039] p-3"
              >
                <path
                  fill="white"
                  d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                />
              </svg>
              <div>
                <h1>FAQ and Troubleshooting</h1>
                <p className="text-sm text-gray-500">
                  Access frequently asked questions and troubleshooting guides.
                </p>
              </div>
            </div>
            <div
              onClick={() => {}}
              className="flex cursor-pointer items-center gap-x-5 rounded-lg py-3 hover:rounded-xl hover:bg-[#283039]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 rounded-lg bg-[#283039] p-3"
                viewBox="0 0 512 512"
              >
                <path
                  fill="white"
                  d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"
                />
              </svg>
              <div>
                <h1>Contact Support</h1>
                <p className="text-sm text-gray-500">
                  Contact our Support team for assistance with any questions or
                  issusues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
