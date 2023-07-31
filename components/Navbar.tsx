import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs';
import { FaSquareTwitter } from 'react-icons/fa6';
import useRevokeToken from '@/core/mutations/useRevokeToken';

const Navbar = () => {
    const { mutate: revokeToken, isLoading: isRevoking } = useRevokeToken();





    return (
        <nav className='h-[80px] flex items-center w-full'>
            <div className='w-full'>
                <button disabled={isRevoking} onClick={() => revokeToken()} className='border-2 border-white text-white font-bold px-4 py-2 rounded-md'>
                    Revoke Access
                </button>
            </div>
            <div className='text-center w-full'>
                <Link href="/" className='font-bold text-4xl text-white'>
                    JARVIOT
                </Link>
            </div>
            <ul className="flex items-center gap-4 text-white w-full text-sm justify-end">
                <li><Link href="#">Terms & Conditions</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li className='flex items-center gap-2'>
                    <Link href="#"><BsLinkedin className="w-[20px] h-[20px]" /></Link>
                    <Link href="#"><FaSquareTwitter className="w-[22px] h-[22px]" /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar