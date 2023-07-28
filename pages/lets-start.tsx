import useDriveConnect from '@/core/mutations/useDriveConnect';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router'

const LetsStart = () => {
    const router = useRouter();
    const { mutate: connectDrive, isLoading } = useDriveConnect();

    return (
        <div className='h-screen bg-[#58469b] grid place-content-center text-white'>
            <div className="bg-white p-20 w-[40rem] max-w-full rounded-2xl text-center">
                <h1 className="text-[#58469b] text-3xl text-center mb-10">Generate Drive Risk Report</h1>
                <button onClick={() => connectDrive()} className="bg-[#58469b] px-10 py-4 rounded-lg ease-linear duration-300 hover:bg-[#4c369f] hover:shadow-md">Get Started</button>
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