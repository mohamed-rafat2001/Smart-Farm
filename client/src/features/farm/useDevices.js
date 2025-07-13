import { useQuery } from '@tanstack/react-query';
import { fetchFromFirebase } from '../../services/farm.js';
function useDevices(firebaseUrl) {
  const {
    data: Devices,
    isLoading: isGetDevices,
    error,
  } = useQuery({
    queryKey: ['devices', firebaseUrl],
    queryFn: () => fetchFromFirebase(firebaseUrl),
    enabled: !!firebaseUrl,
  });

  return { Devices, isGetDevices, error };
}
export default useDevices;
