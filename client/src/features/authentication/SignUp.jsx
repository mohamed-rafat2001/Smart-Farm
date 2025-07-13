import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';
import { useSignUp } from './useSignUp';
import { Link } from 'react-router-dom';
function SignUp() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { isSignUp, mutate, error } = useSignUp();
  const { errors } = formState;
  function Submit(data) {
    mutate(data);
  }
  return (
    <form className="" onSubmit={handleSubmit(Submit)}>
      <div className="mb-3 flex gap-x-4">
        <div className="w-1/2 rounded-lg bg-[#191919] p-3 focus-within:bg-black">
          <input
            disabled={isSignUp}
            className="w-[100%] placeholder:text-stone-400 focus:outline-0"
            id="firstName"
            type="text"
            name="firstName"
            placeholder="first Name"
            {...register('firstName', {
              required: 'first name is required',
              min: { value: 2, message: 'min length is 2' },
            })}
          />
        </div>
        <p className="text-end text-red-500">{errors?.firstName?.message}</p>
        <div className="w-1/2 rounded-lg bg-[#191919] p-3 focus-within:bg-black">
          <input
            disabled={isSignUp}
            className="w-[100%] placeholder:text-stone-400 focus:outline-0"
            id="lastName"
            type="text"
            name="lastName"
            placeholder="last Name"
            {...register('lastName', {
              required: 'last name is required',
              min: { value: 2, message: 'min length is 2' },
            })}
          />
        </div>

        <p className="text-end text-red-500">{errors?.lastName?.message}</p>
      </div>

      <div className="mb-3">
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
            disabled={isSignUp}
            className="w-[100%] placeholder:text-stone-400 focus:outline-0"
            id="email"
            type="email"
            name="email"
            placeholder="email"
            {...register('email', { required: 'email is required' })}
          />
        </div>
        <p className="text-end text-red-500">{errors?.email?.message}</p>
      </div>

      <div className="mb-3">
        <div className="flex w-[100%] gap-x-4 rounded-lg bg-[#191919] p-3 focus-within:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
            viewBox="0 0 512 512"
          >
            <path
              fill="#585158"
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            />
          </svg>

          <input
            disabled={isSignUp}
            className="w-[100%] placeholder:text-stone-400 focus:outline-0"
            id="phone"
            type="text"
            name="phoneNumber"
            placeholder="phone number"
            {...register('phoneNumber', {
              required: 'phone number is required',
            })}
          />
        </div>
        <p className="text-end text-red-500">{errors?.phoneNumber?.message}</p>
      </div>
      <div className="mb-3">
        <div className="flex w-[100%] gap-x-4 rounded-lg bg-[#191919] p-3 focus-within:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
            viewBox="0 0 448 512"
          >
            <path
              fill="#585158"
              d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"
            />
          </svg>
          <input
            disabled={isSignUp}
            className="w-[100%] placeholder:text-stone-400 focus:outline-0"
            id="password"
            type="password"
            name="password"
            placeholder="password"
            {...register('password', { required: 'password is required' })}
          />
        </div>
        <p className="text-end text-red-500">{errors?.password?.message}</p>
      </div>
      <div className="mb-3">
        <div className="flex w-[100%] gap-x-4 rounded-lg bg-[#191919] p-3 focus-within:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
            viewBox="0 0 448 512"
          >
            <path
              fill="#585158"
              d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"
            />
          </svg>
          <input
            disabled={isSignUp}
            className="w-[100%] placeholder:text-stone-400 focus:outline-0"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="confirm Password"
            {...register('confirmPassword', {
              required: 'confirm password is required',
              validate: (value) =>
                value === getValues().password || 'passwords are not the same',
            })}
          />
        </div>
        <p className="text-end text-red-500">
          {errors?.confirmPassword?.message}
        </p>
      </div>
      <div className="w-[100%] text-center">
        {error && <p className="mb-2 text-red-500">{error.message}</p>}
        <Button
          className="rounded-0 w-[100%] rounded-lg bg-[#c9fa75] text-xl text-black"
          color="black"
          backgroundcolor="#474055"
          disabled={isSignUp}
        >
          Submit
        </Button>
      </div>
      <div className="flex justify-center gap-x-1 pt-2 text-xl text-stone-400">
        <h1>Already have an account ? </h1>

        <Link to="/login" className="nav-link border-b-1 border-stone-700">
          Sign in
        </Link>
      </div>
    </form>
  );
}
export default SignUp;
