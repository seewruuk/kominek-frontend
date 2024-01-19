import PlaceholderIcon from "../../public/assets/placeholder-icon.svg"
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {

    const collection = [
        {
            title: "Home",
            icon: PlaceholderIcon,
            href: "/"
        },
        {
            title: "Kontakt",
            icon: PlaceholderIcon,
            href: "/contact"
        },
        {
            title: "Usage",
            icon: PlaceholderIcon,
            href: "/usage"
        },
        {
            title: "Calendar",
            icon: PlaceholderIcon,
            href: "/calendar"
        }
    ]

    return (
        <div className={"fixed bottom-[30px] w-screen"}>
            <div className={"bg-[#0D0D13] mx-[15px] flex justify-between px-5 py-5 rounded-lg gap-3"}>
                {
                    collection.map((item, index) => {
                        return (
                            <Link href={item.href} className={"flex flex-col gap-2 justify-center items-center bg-[#09090C] px-5 py-4 rounded-lg flex-1 hover:bg-accentColor transition-all group"}>
                                <Image src={item.icon} alt={item.title} width={21} height={21} className={""}/>
                                <span className={"text-[13px]"}>{item.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}