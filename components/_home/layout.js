import Header from "@/components/header/Header";
import Temperature from "@/components/_home/Temperature";
import Devices from "@/components/_home/Devices";
import Menu from "@/components/Menu/Menu";

export default function Layout() {
    return (
        <>
            <Header/>

            <div className={"border border-white min-h-screen px-[15px] flex flex-col"}>

                <Temperature/>

                <Devices/>
            </div>

            {/*<Menu/>*/}
        </>
    )
}