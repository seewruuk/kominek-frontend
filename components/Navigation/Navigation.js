import PlaceholderIcon from "../../public/assets/placeholder-icon.svg"
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {

    const collection = [
        {
            title: "Główna",
            icon: PlaceholderIcon,
            href: "/"
        },
        {
            title: "Kontakt",
            icon: PlaceholderIcon,
            href: "/contact"
        },
        {
            title: "Moc",
            icon: PlaceholderIcon,
            href: "/usage"
        },
        {
            title: "Kalendarz",
            icon: PlaceholderIcon,
            href: "/calendar"
        }
    ]

    return (
        <div className={"fixed bottom-0 w-screen"}>
            <div className={"bg-[#0D0D13] flex justify-between px-3 py-5 gap-3 shadow-2xl shadow-accentColor"}>
                {
                    collection.map((item, index) => {
                        return (
                            <Link key={index} href={item.href} className={"flex flex-col gap-2 justify-center items-center py-2 rounded-lg flex-1 hover:bg-[#09090C] transition-all"}>
                                {/*<Image src={item.icon} alt={item.title} width={21} height={21} className={""}/>*/}
                                <span className={"text-[13px]"}>{item.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}