import Image from 'next/image'
import React from 'react'

const ReportHeader = () => {
    return (
        <div className='flex items-center justify-between px-10 py-6 border-b-2'>
            <div className='flex items-center gap-4'>
                <Image
                    src="/drive-logo.svg"
                    width={50}
                    height={50}
                    alt='google drive business logo'
                    priority
                />
                <h2 className='text-2xl text-gray-700'>Google Drive Risk Report</h2>
            </div>

            <div className='flex items-center gap-4'>
                <div>Risk Score :</div>
                <div className='flex items-center gap-2 py-2 px-4 rounded-full bg-[#f7efec]'>
                    <Image
                        src="/risk-score.svg"
                        width={20}
                        height={20}
                        alt='risk-score svg vector'
                        priority
                    />

                    <span className="text-sm text-[#dd521f]">High</span>
                </div>
            </div>
        </div>
    )
}

export default ReportHeader