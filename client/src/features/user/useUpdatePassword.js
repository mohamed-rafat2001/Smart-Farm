import { useMutation } from '@tanstack/react-query';
import { updatePassword } from '../../services/authentication';

function useUpdatePassword() {
  const {
    mutate: update,
    error,
    isLoading: isUpdated,
    data: updatedData,
  } = useMutation({
    mutationFn: updatePassword,
  });
  return { update, error, isUpdated, updatedData };
}
export default useUpdatePassword;
