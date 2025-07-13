import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFarm } from '../../services/farm';

function useCreateFarm() {
  const queryClient = useQueryClient();
  const {
    mutate: create,
    isLoading: isCreated,
    data: farm,
    error,
  } = useMutation({
    mutationFn: createFarm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userFarms'] });
    },
  });
  return { create, isCreated, error, farm };
}
export default useCreateFarm;
