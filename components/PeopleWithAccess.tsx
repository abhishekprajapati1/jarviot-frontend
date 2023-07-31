import usePeopleWithAccess from '@/core/queries/usePeopleWithAccess'
import React from 'react'
import Spinner from './ui/Spinner';

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
        <div>
            users....
        </div>
    )
}

export default PeopleWithAccess