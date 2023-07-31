import api from '@/api';
import { useQuery } from '@tanstack/react-query'

const useExterallySharedFiles = () => {
    const results = useQuery({
        queryKey: ['files/externallyshared'],
        queryFn: async () => {
            const res = await api.get('drive/externallyshared');
            return res.data?.data;
        }
    });
    return results;
}

export default useExterallySharedFiles;