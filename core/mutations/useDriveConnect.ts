import api from '@/api';
import { useMutation } from '@tanstack/react-query';


const useDriveConnect = () => {
    const mutation = useMutation({
        mutationFn: async () => {
            const response = await api.get('auth/google');
            return response.data;
        },
        onSuccess: (data) => {
            window.location.href = data.authUrl;
        },
        onError: () => {

        }
    });

    return mutation;
}

export default useDriveConnect;