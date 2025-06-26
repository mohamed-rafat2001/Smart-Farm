import { Form, useForm } from 'react-hook-form';
import useForgotPassword from './useForgotPassword';
import ResetPassword from './ResetPassword';
import Button from '../../ui/Button';
function ForgotPassword() {
  const { isSentCode, sentCode, data, error } = useForgotPassword();
  const { reset, handleSubmit, formState, register } = useForm();
  const { errors } = formState;
  function submit(data) {
    sentCode(data);
    reset();
  }
  return !data ? (
    <form className="w-[100%]" onSubmit={handleSubmit(submit)}>
      <div className="grid w-[100%] grid-cols-2 justify-between border-b-1 border-gray-300 py-5 sm:grid-cols-3">
        <label htmlFor="email" className="text-sm font-bold capitalize">
          {' '}
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="rounded-sm border-1 border-stone-300 p-2 focus:border-blue-600 focus:outline-0"
          disabled={isSentCode}
          {...register('email', { required: 'email is required' })}
        />
        {errors?.email?.message && (
          <p className="text-center text-red-500">*{errors.email.message}*</p>
        )}
      </div>
      <div className="mt-5 flex w-[100%] items-center justify-center gap-x-5 font-bold text-gray-500">
        <Button
          backgroundcolor="black"
          color="rgb(101, 101, 241)"
          disabled={isSentCode}
        >
          Sent Code
        </Button>
        {data && <p className="text-green-500">Success</p>}
        {error && <p className="text-red-500">Not Success </p>}
      </div>
    </form>
  ) : (
    <ResetPassword />
  );
}
export default ForgotPassword;
