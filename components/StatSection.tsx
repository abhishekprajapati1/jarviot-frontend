import StatCard from '@/components/StatCard';
import Card from './Card';
import Image from 'next/image';
import useRestrictedFiles from '@/core/queries/useRestrictedFiles';
import useExterallySharedFiles from '@/core/queries/useExternallySharedFiles';
import usePeopleWithAccess from '@/core/queries/usePeopleWithAccess';
import Spinner from './ui/Spinner';

const StatSection = () => {
    const { data: restricted, isLoading: rLoading } = useRestrictedFiles();
    const { data: publics, isLoading: pLoading } = useExterallySharedFiles();
    const { data: users_w_a, isLoading: uLoading } = usePeopleWithAccess();

    if (rLoading || pLoading || uLoading) {
        return (
            <div className='min-h-[20rem] grid place-content-center py-10 border-b-2'>
                <Spinner height={30} width={30} />
            </div>
        )
    }


    return (
        <div className='flex px-10 py-10 border-b-2'>
            <StatCard />
            <div className='flex-grow grid grid-cols-3 gap-4'>
                <Card color="#eee7fd" heading='Public files' para='Files that are available to anyone over the web via link sharing.' value={restricted?.length || 0} icon={<Image src="/globe.svg" width={25} height={25} alt='globe svg vector' priority />} />
                <Card color="#e5ebf3" heading='People with access' para='People who have access to files in your Google Drive.' value={users_w_a?.length || 0} icon={<Image src="/people.svg" width={25} height={25} alt='globe svg vector' priority />} />
                <Card color="#f9f4ea" heading='Files shared externally' para='Files that have been shared directly with other people.' value={publics?.length || 0} icon={<Image src="/doc.svg" width={25} height={25} alt='globe svg vector' priority />} />
            </div>
        </div>
    )
}

export default StatSection