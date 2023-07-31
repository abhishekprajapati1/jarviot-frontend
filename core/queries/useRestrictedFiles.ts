import api from '@/api';
import { useQuery } from '@tanstack/react-query'

const useRestrictedFiles = () => {
    const results = useQuery({
        queryKey: ['files/restricted'],
        queryFn: async () => {
            const res = await api.get('drive/anyonewithlink');
            return res.data?.data;
        }
    });
    return results;
}

export default useRestrictedFiles;