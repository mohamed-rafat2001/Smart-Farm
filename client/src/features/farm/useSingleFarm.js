import { useQuery } from '@tanstack/react-query';
import { getFarm } from '../../services/farm';
import { useParams } from 'react-router-dom';
function useSingleFarm() {
  const { id } = useParams();

  const {
    data: farm,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['singleFarm', id],
    queryFn: () => getFarm(id),
  });

  return { farm: farm?.data, isLoading, error };
}
export default useSingleFarm;
