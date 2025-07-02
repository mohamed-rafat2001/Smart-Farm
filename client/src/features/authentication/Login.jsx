import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';
import useLogin from './useLogin';
import { Link } from 'react-router-dom';
function Login() {
  const { register, handleSubmit, formState } = useForm();
  const { isLogin, loginUser, error } = useLogin();
  const { errors } = formState;
  function Submit(data) {
    console.log(error);
    loginUser(data);
  }
  return (
    <form className="py-5" onSubmit={handleSubmit(Submit)}>
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
            disabled={isLogin}
            className="w-[100%] placeholder:text-stone-400 focus:outline-0"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            {...register('email', { required: 'email is required' })}
          />
        </div>

        <p className="mt-2 text-end text-red-500">{errors?.email?.message}</p>
      </div>

      <div className="my-5">
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
            disabled={isLogin}
            className="w-[100%] placeholder:text-stone-400 focus:outline-0"
            id="password"
            type="password"
            name="password"
            placeholder="password"
            {...register('password', { required: 'password is required' })}
          />
        </div>

        <p className="my-2 text-end text-red-500">
          {errors?.password?.message}
        </p>

        <div className="flex w-[100%] justify-end text-stone-400">
          <Link
            to="/forgot-password"
            className="nav-link border-b-1 border-stone-700"
          >
            Forgot Password?
          </Link>
        </div>
      </div>

      <div className="w-[100%] text-center">
        {error && <p className="mb-2 text-red-500">{error.message}</p>}
        <Button
          className="w-[100%] rounded-lg bg-[#c9fa75] text-xl text-black"
          color="black"
          backgroundcolor="#474055"
          disabled={isLogin}
        >
          Submit
        </Button>
      </div>
      <div className="flex justify-center gap-x-1 pt-4 text-xl text-stone-400">
        <h1>Don’t have an account ? </h1>

        <Link to="/signup" className="nav-link border-b-1 border-stone-700">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
export default Login;
