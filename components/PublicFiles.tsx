import useRestrictedFiles from '@/core/queries/useRestrictedFiles'
import React from 'react'
import Spinner from './ui/Spinner';
import Image from 'next/image';
import Link from 'next/link';

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
            <div className='flex flex-col shadow-lg shadow-gray-100'>
                <div className='grid grid-cols-12 px-8 py-4 border-b-2'>
                    <div className='text-xl text-gray-500 col-span-4'>File name</div>
                    <div className='text-xl text-gray-500 col-span-3'>Access settings</div>
                    <div className='text-xl text-gray-500 col-span-2 whitespace-nowrap'>Shared with</div>
                    <div className='text-xl text-gray-500 col-span-3'>Created by</div>
                </div>
                <div className='flex-grow px-8 py-4'>
                    {
                        data?.map(d => {
                            return (
                                <div key={d.id} className='grid grid-cols-12 gap-2 mb-8'>
                                    <div className='text-lg text-gray-400 col-span-4'>{d.name}</div>
                                    <div className='text-lg col-span-3'>
                                        <Link href={d.webViewLink || "#"} className='w-fit text-gray-400 flex items-center gap-1 py-1 px-4 bg-gray-100 rounded-full mx-1' >
                                            <Image src="/globe.svg" width={20} height={20} alt="globe svg" />
                                            <span>Anyone with link</span></Link>
                                    </div>
                                    <div className='text-lg text-gray-400 col-span-2'>{d.sharedWith?.length || 0}</div>
                                    <div className='text-lg text-gray-400 col-span-3'>{d.createdBy}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PublicFiles