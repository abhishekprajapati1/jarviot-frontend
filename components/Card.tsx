import { CardType } from '@/types'

const Card = ({ icon, value, heading, para, color }: CardType) => {
    const iconStyle = {
        backgroundColor: color,
    }
    return (
        <div className="px-10 border border-gray-200 h-[20rem] col-span-1 grid place-content-center text-center">
            <div style={iconStyle} className="w-[50px] h-[50px] mx-auto rounded-full grid place-content-center mb-2">{icon}</div>
            <div className='text-gray-900 text-[60px] mb-2'>{value}</div>
            <div className='flex flex-col gap-2'>
                <h4 className='text-gray-500'>{heading}</h4>
                <p className='text-gray-400 flex-grow'>{para}</p>
            </div>
        </div>
    )
}

export default Card