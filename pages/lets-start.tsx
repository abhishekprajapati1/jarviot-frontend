import Spinner from '@/components/ui/Spinner';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import useDriveConnect from '@/core/mutations/useDriveConnect';
import { GetServerSideProps } from 'next';

const LetsStart = () => {
    const { mutate: connectDrive, isLoading } = useDriveConnect();

    return (
        <div className='h-screen bg-[#58469b] grid place-content-center text-white'>
            <div className="bg-white p-20 w-[40rem] max-w-full rounded-2xl text-center">
                <h1 className="text-[#58469b] text-3xl text-center mb-10">Generate Drive Risk Report</h1>
                <PrimaryButton onClick={() => connectDrive()} disabled={isLoading}>
                    Get Started
                </PrimaryButton>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const token = req?.cookies?.token;

    if (token) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }


    return {
        props: {}
    }
}


export default LetsStart