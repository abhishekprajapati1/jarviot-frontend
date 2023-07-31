import { IButton } from "@/types/interfaces"


const PrimaryButton = ({ children, ...rest }: IButton) => {
    return (
        <button
            className="bg-[#58469b] px-10 py-4 min-w-[12rem] h-[3.8rem] flex items-center justify-center gap-4 mx-auto rounded-lg ease-linear duration-300 hover:bg-[#4c369f] hover:shadow-md"
            {...rest}
        >
            {children}
        </button>
    )
}

export default PrimaryButton