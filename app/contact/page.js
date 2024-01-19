import PlaceholderIcon from "../../public/assets/placeholder-icon.svg"
import Image from "next/image";
export default function Page() {
    return (
        <div className={"relative"}>

            <div className={"h-screen pb-[160px] px-[15px] flex flex-col gap-4"}>

                <div className={"flex-grow"}>Chat</div>
                <form className={"flex justify-center items-center bg-[#292936] rounded-md p-[16px]"}>
                    <input className={"bg-transparent flex-grow"} placeholder={"Napisz wiadomość..."}/>



                    <div className={"px-5 bg-accentColor h-full aspect-square grid place-items-center rounded-lg" }>
                        <Image src={PlaceholderIcon} alt={"placeholder"} width={15} height={15} className={""}/>
                    </div>
                </form>

            </div>

        </div>
    )
}