import usePeopleWithAccess from '@/core/queries/usePeopleWithAccess'
import React from 'react'
import Spinner from './ui/Spinner';
import Link from 'next/link';
import Image from 'next/image';
import { FileTypes } from '@/types';
import FileLists from './FileLists';

const PeopleWithAccess = () => {
    const { data, isLoading } = usePeopleWithAccess();

    if (isLoading) {
        return (
            <div className='min-h-[20rem] grid place-content-center py-10 border-b-2'>
                <Spinner height={30} width={30} />
            </div>
        )
    }

    return (
        <div className='px-10 py-10 border-b-2'>
            <h4 className='text-2xl font-normal mb-6'>2. There are {data?.length || 0} people with access to your Google Drive</h4>
            {
                Array.isArray(data) && data.length > 0 && <FileLists data={data} />
            }
            {
                !Array.isArray(data) || data.length <= 0 && (
                    <></>
                )
            }
        </div>
    )
}

export default PeopleWithAccess