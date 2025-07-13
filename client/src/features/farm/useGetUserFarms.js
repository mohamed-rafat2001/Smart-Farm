import { useQuery } from '@tanstack/react-query';
import { userFarms } from '../../services/farm';
function useGetUserFarms() {
  const {
    data: userFarm,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['userFarms'],
    queryFn: userFarms,
  });

  return { userFarm: userFarm?.data, isLoading, error };
}
export default useGetUserFarms;
