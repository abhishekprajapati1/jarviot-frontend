import Navbar from "@/components/Navbar";
import { IWrapper } from "@/utils/interfaces";
import { FiLock } from 'react-icons/fi'

const Layout = ({ children }: IWrapper) => {
    return (
        <div className="relative h-screen">
            <div className="bg-[#58469b] h-[25rem]"></div>
            <div className="absolute top-0 left-0 right-0 w-full h-full flex flex-col px-[100px] box-border">
                <Navbar />
                <div className="flex items-center gap-3 text-gray-200 mt-20 mb-2">
                    <FiLock />
                    <span>We do not scan the content of files. Scan results are never stored.</span>
                </div>
                <main className="flex-grow bg-white rounded-xl">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout;