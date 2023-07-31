import api from '@/api'
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const useRevokeToken = () => {
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async () => {
            const res = await api.get('auth/revoke');
            return res.data;
        },
        onSuccess: data => {
            toast.success(data.message);
            router.reload();
        },
        onError: (err: { message: string }) => {
            console.log("see this revoke error", err);
            toast.error(err.message || "Something went wrong");
        }
    });
    return mutation;
}

export default useRevokeToken