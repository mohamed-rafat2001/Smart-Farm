import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import useUpdatePassword from './useUpdatePassword.js';
function UpdatePassword() {
  const { update, updatedData, isUpdated, error } = useUpdatePassword();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  function submit(passwords) {
    update(passwords);
    reset();
  }
  return (
    <form className="mt-10 w-[100%]" onSubmit={handleSubmit(submit)}>
      <div className="grid w-[100%] grid-cols-2 items-center justify-between pb-5 sm:grid-cols-3">
        <label htmlFor="password" className="text-sm font-bold capitalize">
          Current Password
        </label>
        <input
          disabled={isUpdated}
          id="password"
          name="password"
          type="password"
          className="rounded-lg bg-[#1b2127] p-2 text-stone-400 focus:outline-0"
          {...register('password', {
            required: 'Password is required',
          })}
        />
        {errors?.password?.message && (
          <p className="text-center text-red-500">
            *{errors.password.message}*
          </p>
        )}
      </div>
      <div className="grid w-[100%] grid-cols-2 items-center justify-between py-5 sm:grid-cols-3">
        <label htmlFor="newPassword" className="text-sm font-bold capitalize">
          New Password
        </label>
        <input
          disabled={isUpdated}
          id="newPassword"
          name="newPassword"
          type="password"
          className="rounded-lg bg-[#1b2127] p-2 text-stone-400 focus:outline-0"
          {...register('newPassword', {
            required: 'New Password is required',
          })}
        />
        {errors?.newPassword?.message && (
          <p className="text-center text-red-500">
            *{errors.newPassword.message}*
          </p>
        )}
      </div>
      <div className="grid w-[100%] grid-cols-2 items-center justify-between py-5 sm:grid-cols-3">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-bold capitalize"
        >
          Confirm Password
        </label>
        <input
          disabled={isUpdated}
          id="confirmPassword"
          name="confirmNewPassword"
          type="password"
          className="rounded-lg bg-[#1b2127] p-2 text-stone-400 focus:outline-0"
          {...register('confirmNewPassword', {
            required: 'confirm password is required',
            validate: (value) =>
              value === getValues().newPassword || 'passwords are not the same',
          })}
        />

        {errors?.confirmNewPassword?.message && (
          <p className="text-center text-red-500">
            *{errors.confirmNewPassword.message}*
          </p>
        )}
      </div>
      <div className="mt-5 flex w-[100%] items-center justify-center gap-x-5 font-bold">
        <Button
          color="#c9fa75"
          className="rounded-full bg-[#283039] font-bold"
          disabled={isUpdated}
        >
          Update Password
        </Button>
        {updatedData && <p className="text-green-500">Success</p>}
        {error && <p className="text-red-500">Not Success </p>}
      </div>
    </form>
  );
}
export default UpdatePassword;
