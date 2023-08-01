import useExterallySharedFiles from "@/core/queries/useExternallySharedFiles";
import Spinner from "./ui/Spinner";
import FileLists from "./FileLists";



const ExteranllySharedFiles = () => {
    const { data, isLoading } = useExterallySharedFiles();

    if (isLoading) {
        return (
            <div className='min-h-[20rem] grid place-content-center py-10 border-b-2'>
                <Spinner height={30} width={30} />
            </div>
        )
    }

    console.log("see this", data);

    return (
        <div className='px-10 py-10 border-b-2'>
            <h4 className='text-2xl font-normal mb-6'>3. {data?.length || 0} files are shared externally</h4>
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

export default ExteranllySharedFiles