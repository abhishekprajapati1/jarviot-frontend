import useRestrictedFiles from '@/core/queries/useRestrictedFiles'
import React from 'react'
import Spinner from './ui/Spinner';
import Image from 'next/image';
import Link from 'next/link';
import { FileTypes } from '@/types';
import FileLists from './FileLists';

const PublicFiles = () => {
    const { data, isLoading } = useRestrictedFiles();

    if (isLoading) {
        return (
            <div className='min-h-[20rem] grid place-content-center py-10 border-b-2'>
                <Spinner height={30} width={30} />
            </div>
        )
    }

    return (
        <div className='px-10 py-10 border-b-2'>
            <h4 className='text-2xl font-normal mb-6'>1. {data?.length || 0} files are publicly accessible for anyone with the link</h4>
            <FileLists data={data} />
        </div>
    )
}

export default PublicFiles