"use client"
import {StateContext} from "@/context/StateContext";
import {useContext} from "react";

export default function Presets() {

    const {devices, selectedDevice, applyPreset} = useContext(StateContext);
    const maxPresets = 5;
    const presetsToFill = devices[selectedDevice].savedColorPresets ? maxPresets - devices[selectedDevice].savedColorPresets.length : maxPresets;


    return (
        <>
                    <div>
                        <div className={"flex justify-between py-6 font-[500]"}>
                            <label>Zapisane</label>
                            <label>
                                {
                                    devices[selectedDevice].savedColorPresets ? devices[selectedDevice].savedColorPresets.length : 0
                                }
                                /5
                            </label>

                        </div>



                        <div className={"flex flex-col gap-2"}>
                            {
                                devices[selectedDevice].savedColorPresets && devices[selectedDevice].savedColorPresets.map((item, index) => {

                                    let a;
                                    const x = item.name;
                                    switch (x) {
                                        case "color":
                                            a = "Kolor";
                                            break;
                                        case "pulse":
                                            a = "Puls";
                                            break;
                                        case "wave":
                                            a = "Fala";
                                            break;
                                        case "rainbow":
                                            a = "Tęcza";
                                            break;
                                    }

                                    return (
                                        <div key={index}
                                             onClick={
                                                 () => applyPreset(item)
                                             }
                                             className={"items-center bg-[#202129] px-[16px] py-[12px] rounded-lg flex gap-[16px] cursor-pointer hover:bg-[#2C2E3D] transition-all"}>
                                            <label className={"flex-grow font-[500] pointer-events-none"}>{item.header}</label>
                                            <label className={"text-[#9198A2] text-[13px] font-[500]"}>Tryb: {a}</label>
                                            <button>
                                                Usuń
                                            </button>
                                        </div>
                                    )
                                })
                            }
                            {
                                [...Array(presetsToFill)].map((item, index) => {
                                    return (
                                        <div key={index}
                                             className={"items-center bg-[#13131A] border-2 border-[#202129] border-dashed px-[16px] py-[12px] rounded-lg flex gap-[16px] cursor-pointer hover:bg-[#202129] transition-all"}>
                                            <label className={"flex-grow font-[500] pointer-events-none"}>Zapisz ustawienia</label>
                                            <label className={"text-[#9198A2] text-[13px] font-[500]"}>dodaj</label>
                                        </div>
                                    )
                                }
                                )
                            }





                    </div>
                </div>
        </>
    )
}