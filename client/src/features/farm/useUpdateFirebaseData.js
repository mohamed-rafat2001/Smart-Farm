import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateFirebaseField } from '../../services/farm';

function useUpdateFirebaseData(firebaseUrl) {
  const queryClient = useQueryClient();

  const { mutate: updateData, isLoading: isUpdating, error } = useMutation({
    mutationFn: ({ path, data }) => updateFirebaseField(firebaseUrl, path, data),
    onSuccess: () => {
      // Invalidate and refetch the devices data
      queryClient.invalidateQueries(['devices', firebaseUrl]);
    },
    onError: (error) => {
      console.error('Error updating Firebase data:', error);
    },
  });

  return { updateData, isUpdating, error };
}

export default useUpdateFirebaseData;
