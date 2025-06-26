import { useForm } from 'react-hook-form';
import Button from '../../ui/Button.jsx';
import useResetPassword from './useResetPassword.js';

function ResetPassword() {
  const { isResetPassword, error, resetUserPassword, updatedData } =
    useResetPassword();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  function submit(passwords) {
    resetUserPassword(passwords);

    reset();
  }
  return (
    <form className="w-[100%]" onSubmit={handleSubmit(submit)}>
      <div className="grid w-[100%] grid-cols-2 justify-between border-b-1 border-gray-300 py-5 sm:grid-cols-3">
        <label htmlFor="resetCode" className="text-sm font-bold capitalize">
          Reset Code
        </label>
        <input
          disabled={isResetPassword}
          id="resetCode"
          name="resetCode"
          type="text"
          className="rounded-sm border-1 border-stone-300 p-2 focus:border-blue-600 focus:outline-0"
          {...register('resetCode', {
            required: 'Reset Code is required',
          })}
        />
        {errors?.resetCode?.message && (
          <p className="text-center text-red-500">
            *{errors.resetCode.message}*
          </p>
        )}
      </div>
      <div className="grid w-[100%] grid-cols-2 justify-between border-b-1 border-gray-300 py-5 sm:grid-cols-3">
        <label htmlFor="password" className="text-sm font-bold capitalize">
          New Password
        </label>
        <input
          disabled={isResetPassword}
          id="password"
          name="password"
          type="password"
          className="rounded-sm border-1 border-stone-300 p-2 focus:border-blue-600 focus:outline-0"
          {...register('password', {
            required: 'New Password is required',
          })}
        />
        {errors?.password?.message && (
          <p className="text-center text-red-500">
            *{errors.password.message}*
          </p>
        )}
      </div>
      <div className="grid w-[100%] grid-cols-2 justify-between border-b-1 border-gray-300 py-5 sm:grid-cols-3">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-bold capitalize"
        >
          Confirm New Password
        </label>
        <input
          disabled={isResetPassword}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="rounded-sm border-1 border-stone-300 p-2 focus:border-blue-600 focus:outline-0"
          {...register('confirmPassword', {
            required: 'confirm password is required',
            validate: (value) =>
              value === getValues().password || 'passwords are not the same',
          })}
        />

        {errors?.confirmPassword?.message && (
          <p className="text-center text-red-500">
            *{errors.confirmPassword.message}*
          </p>
        )}
      </div>
      <div className="mt-5 flex w-[100%] items-center justify-center gap-x-5 font-bold text-gray-500">
        <Button
          backgroundcolor="black"
          color="rgb(101, 101, 241)"
          disabled={isResetPassword}
        >
          Reset Password
        </Button>
        {updatedData && <p className="text-green-500">Success</p>}
        {error && <p className="text-red-500">Not Success </p>}
      </div>
    </form>
  );
}
export default ResetPassword;
