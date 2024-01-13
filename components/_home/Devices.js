"use client"
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";

export default function Devices() {

    const {
        devices,
        selectedDevice,
        setSelectedDevice,
        changeDeviceStatus,
        setShowChangeColorComponent
    } = useContext(StateContext)


    return (
        <>
            <div className={"mt-[21px] text-[14px] font-[500]"}>
                <p className={"text-greyTextColor mb-[8px]"}>Urządzenia</p>
                <div className={"flex flex-col gap-2"}>
                    {
                        devices.map((item, index) => {
                            return (
                                <div
                                    onClick={() => setSelectedDevice(index)}
                                    key={index}
                                    className={`bg-[#202129] border-2 p-[24px] rounded-2xl transition-all ${
                                        index === selectedDevice ? "border-[#18E8B7]" : "border-[#3B3E50]"
                                    }`}>
                                    <div className={"flex justify-between"}>
                                        <h1 className={"font-[700] text-[20px]"}>
                                            {item.name}
                                        </h1>
                                        <div>
                                            <div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox"
                                                           checked={
                                                               item.status === 1
                                                           }
                                                           onChange={() => changeDeviceStatus(index)}
                                                           value={
                                                               item.status === 1
                                                           }
                                                           className="sr-only peer"/>
                                                    <div
                                                        className="w-11 h-6 bg-[#13131A] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-500 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#18E8B7]"></div>
                                                </label>
                                            </div>
                                            <div>on/off</div>
                                        </div>
                                    </div>

                                    <div className={"mt-[16px]"}>
                                        <p className={"text-[#18E8B7] text-[16px] font-[400]"}>{item.desc}</p>
                                        <p>
                                            <span className={"font-[500]"}>Status: </span>
                                            <span className={""}>
                                                {item.status === 1 ? "Włączony" : "Wyłączony"}
                                            </span>
                                        </p>
                                    </div>

                                    <div className={"mt-[16px] flex justify-between items-center "}>
                                        <p className={"text-[#9198A2]"}>Kolor płomienia</p>
                                        <button
                                            className={"px-4 rounded-full bg-[#2E3040] flex gap-3 py-2 cursor-pointer "}
                                            onClick={() => setShowChangeColorComponent(true)}
                                        >Zmień kolor
                                        </button>


                                        {/*<div className={"rounded-full bg-[#2E3040] flex gap-3 p-2 cursor-pointer"}*/}
                                        {/*    onClick={() => setShowChangeColorComponent(true)}*/}
                                        {/*>*/}
                                        {/*    /!*<span className={`block w-[24px] h-[24px] aspect-square rounded-full`}*!/*/}
                                        {/*    /!*      style={{*!/*/}
                                        {/*    /!*          backgroundColor: item.color*!/*/}
                                        {/*    /!*      }}*!/*/}
                                        {/*    /!*>*!/*/}
                                        {/*    /!*</span>*!/*/}
                                        {/*    <button className={"px-3"}>Zmień kolor</button>*/}
                                        {/*</div>*/}
                                    </div>

                                </div>

                            )
                        })
                    }

                </div>
            </div>

            {/*<pre>*/}
            {/*    {JSON.stringify(devices, null, 2)}*/}
            {/*</pre>*/}


        </>
    )
}