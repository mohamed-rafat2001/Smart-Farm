import useAuth from '../../Hooks/useAuth';
import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';
import usePersonalDetails from './usePersonalDetails';
function PersonalDetails() {
  const { data } = useAuth();
  const { update, isUpdated, updatedData } = usePersonalDetails();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  function submit(details) {
    update(details);
  }
  return (
    <form className="mt-10 w-[100%]" onSubmit={handleSubmit(submit)}>
      <div className="grid w-[100%] grid-cols-2 items-center justify-between pb-5 sm:grid-cols-3">
        <label htmlFor="firstName" className="text-sm font-bold capitalize">
          First name
        </label>
        <input
          id="firstName"
          name="firstName "
          defaultValue={data?.firstName}
          disabled={isUpdated}
          className="rounded-lg bg-[#1b2127] p-2 text-stone-400 focus:outline-0"
          {...register('firstName', {
            required: 'first name is required',
            min: { value: 2, message: 'min length is 2' },
          })}
        />
        {errors?.firstName?.message && (
          <p className="text-center text-red-500">
            *{errors.firstName.message}*
          </p>
        )}
      </div>
      <div className="grid w-[100%] grid-cols-2 items-center justify-between pb-5 sm:grid-cols-3">
        <label htmlFor="lastName" className="text-sm font-bold capitalize">
          Last name
        </label>
        <input
          id="lastName"
          name="lastName"
          defaultValue={data?.lastName}
          disabled={isUpdated}
          className="rounded-lg bg-[#1b2127] p-2 text-stone-400 focus:outline-0"
          {...register('lastName', {
            required: 'last name is required',
            min: { value: 2, message: 'min length is 2' },
          })}
        />
        {errors?.lastName?.message && (
          <p className="text-center text-red-500">
            *{errors.lastName.message}*
          </p>
        )}
      </div>
      <div className="grid w-[100%] grid-cols-2 items-center justify-between pb-5 sm:grid-cols-3">
        <label htmlFor="email" className="text-sm font-bold capitalize">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={data?.email}
          disabled={isUpdated}
          className="rounded-lg bg-[#1b2127] p-2 text-stone-400 focus:outline-0"
          {...register('email', { required: 'email is required' })}
        />
        {errors?.email?.message && (
          <p className="text-center text-red-500">*{errors.email.message}*</p>
        )}
      </div>
      <div className="grid w-[100%] grid-cols-2 items-center justify-between pb-5 sm:grid-cols-3">
        <label htmlFor="phoneNumber" className="text-sm font-bold capitalize">
          phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          defaultValue={data?.phoneNumber}
          disabled={isUpdated}
          className="rounded-lg bg-[#1b2127] p-2 text-stone-400 focus:outline-0"
          {...register('phoneNumber', {
            required: 'phone number is required',
          })}
        />
        {errors?.phoneNumber?.message && (
          <p className="text-center text-red-500">
            *{errors.phoneNumber.message}*
          </p>
        )}
      </div>
      <div className="grid w-[100%] grid-cols-2 items-center justify-between pb-5 sm:grid-cols-3">
        <label htmlFor="profileImg" className="text-sm font-bold capitalize">
          Profile image
        </label>
        <input
          name="profileImg"
          id="profileImg"
          type="file"
          disabled={isUpdated}
          className="rounded-lg bg-[#1b2127] p-2 text-stone-400 focus:outline-0"
        />
      </div>
      <div className="mt-5 flex w-[100%] items-center justify-center gap-x-5 font-bold">
        <Button
          color="#c9fa75"
          className="rounded-full bg-[#283039] font-bold"
          disabled={isUpdated}
        >
          Update Details
        </Button>
        {updatedData && <p className="text-green-500">Success</p>}
      </div>
    </form>
  );
}
export default PersonalDetails;
