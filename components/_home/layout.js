import Header from "@/components/header/Header";
import Temperature from "@/components/_home/Temperature";
import Devices from "@/components/_home/Devices";
import Menu from "@/components/Menu/Menu";
import ChangeColor from "@/components/_changeColor/ChangeColor";

export default function Layout() {
    return (
        <>
            <Header/>

            <div className={"min-h-screen px-[15px] flex flex-col"}>

                <ChangeColor/>

                <Temperature/>

                <Devices/>
            </div>

            {/*<Menu/>*/}
        </>
    )
}