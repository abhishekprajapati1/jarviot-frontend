import api from '@/api';
import { useQuery } from '@tanstack/react-query'

const usePeopleWithAccess = () => {
    const results = useQuery({
        queryKey: ['files/peoplewithaccess'],
        queryFn: async () => {
            const res = await api.get('drive/peoplewithaccess');
            return res.data?.data;
        }
    });
    return results;
}

export default usePeopleWithAccess;