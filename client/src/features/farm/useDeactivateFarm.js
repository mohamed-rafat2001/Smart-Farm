import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFarm } from '../../services/farm';

function useDeactivateFarm() {
  const queryClient = useQueryClient();
  const {
    isLoading: isDeactivate,

    mutate: deActive,
  } = useMutation({
    mutationFn: deleteFarm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userFarms'] });
    },
  });
  return { isDeactivate, deActive };
}
export default useDeactivateFarm;
