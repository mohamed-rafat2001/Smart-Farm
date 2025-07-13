import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import useCreateFarm from './useCreateFarm';
function CreateFarm() {
  const { create, error, isCreated, farm } = useCreateFarm();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  function Submit(data) {
    create({
      ...data,
      location: {
        coordinates: [25, 35],
        address: 'mo',
      },
    });
    reset();
  }
  return (
    <section>
      {/* content */}
      <div className="">
        <h1 className="mb-5 text-center text-2xl font-bold tracking-widest text-white">
          Create Farm
        </h1>
        <form onSubmit={handleSubmit(Submit)} className="text-stone-400">
          <div>
            <div className="flex w-[100%] gap-x-4 rounded-lg bg-[#191919] p-3 focus-within:bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#585158"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>

              <input
                disabled={isCreated}
                className="w-[100%] placeholder:text-stone-400 focus:outline-0"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your farm name"
                {...register('name', { required: 'farm name is required' })}
              />
            </div>
          </div>

          <p className="mt-2 text-end text-red-500">{errors?.name?.message}</p>

          <div className="my-5">
            <div className="flex w-[100%] gap-x-4 rounded-lg bg-[#191919] p-3 focus-within:bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-5"
              >
                <path
                  fill="#585158"
                  d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
                />
              </svg>
              <input
                disabled={isCreated}
                className="w-[100%] placeholder:text-stone-400 focus:outline-0"
                id="location"
                type="text"
                name="location"
                placeholder="location"
                {...register('location', { required: 'location is required' })}
              />
            </div>

            <p className="my-2 text-end text-red-500">
              {errors?.location?.message}
            </p>
          </div>
          <div className="my-5">
            <div className="flex w-[100%] gap-x-4 rounded-lg bg-[#191919] p-3 focus-within:bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-6"
              >
                <path
                  fill="#585158"
                  d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                />
              </svg>
              <input
                disabled={isCreated}
                className="w-[100%] placeholder:text-stone-400 focus:outline-0"
                id="firebaseUrl"
                type="text"
                name="firebaseUrl"
                placeholder="firebase Url"
                {...register('firebaseUrl', {
                  required: 'firebase Url is required',
                })}
              />
            </div>

            <p className="my-2 text-end text-red-500">
              {errors?.firebaseUrl?.message}
            </p>
          </div>

          <div className="w-[100%] text-center">
            {/* {error && <p className="mb-2 text-red-500">{error.message}</p>} */}
            <Button
              className="mb-5 w-[70%] rounded-full bg-[#283039] text-xl font-bold tracking-widest text-white"
              color="#c9fa75"
              backgroundcolor="black"
              disabled={isCreated}
            >
              Create
            </Button>
            {farm && <p className="text-green-500">Success</p>}
            {error && <p className="text-red-500">Not Success </p>}
          </div>
        </form>
      </div>
    </section>
  );
}
export default CreateFarm;
