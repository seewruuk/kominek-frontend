"use client"
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";

export default function Devices() {

    const {devices, selectedDevice, setSelectedDevice} = useContext(StateContext)


    return (
        <>
            <div className={"mt-[21px] text-[14px] font-[500]"}>
                <p className={"text-greyTextColor mb-[8px]"}>Urządzenia</p>
                <div className={"flex flex-col gap-2"}>
                    {
                        devices.map((item, index) => {
                            return(
                                <div
                                    onClick={() => setSelectedDevice(index)}
                                    key={index}
                                    className={`bg-[#202129] border-2 p-[24px] rounded-2xl ${
                                    index === selectedDevice ? "border-[#18E8B7]" : "border-[#3B3E50]"
                                }`}>
                                    <div className={"flex justify-between"}>
                                        <h1 className={"font-[700] text-[20px]"}>
                                            {item.name}
                                        </h1>
                                        <div>on/off</div>
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

                                    <div className={"mt-[16px] flex justify-between items-center"}>
                                        <p className={"text-[#9198A2]"}>Kolor płomienia</p>
                                        <div className={"rounded-full bg-[#2E3040] flex gap-3 p-3"}>
                                            <span className={`block w-[24px] h-[24px] aspect-square rounded-full`}
                                            style={{
                                                backgroundColor: item.color
                                            }}
                                            >
                                            </span>
                                            <p>Zmień</p>
                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }

                </div>
            </div>

            <pre>
                {JSON.stringify(devices, null, 2)}
            </pre>



        </>
    )
}