import { SpinnerType } from "@/types"
import { Oval } from "react-loader-spinner"

const Spinner = ({ width, height, color = "#ffffff" }: SpinnerType) => {

    return (
        <Oval
            height={width || 40}
            width={height || 40}
            color={color}
            wrapperStyle={{display: 'inline-block'}}
            wrapperClass=""
            visible={true}
            ariaLabel='loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
    )
}

export default Spinner