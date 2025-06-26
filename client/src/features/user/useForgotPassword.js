import { useMutation } from '@tanstack/react-query';
import { forgotPassword } from '../../services/authentication';

export default function useForgotPassword() {
  const {
    isLoading: isSentCode,
    mutate: sentCode,
    data,
    error,
  } = useMutation({
    mutationFn: forgotPassword,
  });
  return { isSentCode, sentCode, data, error };
}
