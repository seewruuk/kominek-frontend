"use client"

import {createContext, useEffect, useState} from "react";

export const StateContext = createContext({});


export default function StateContextProvider({children}) {

    const [devices, setDevices] = useState([
        {
            name: "Nazwa pieca #1",
            temperature: "21.5",
            desc: "Kominek W sypialni",
            status: 1,
            color: "#d33131",
        },
        {
            name: "Nazwa pieca #2",
            temperature: "23",
            desc: "Salon",
            status: 0,
            color: "#fff",
        }
    ])
    const [selectedDevice, setSelectedDevice] = useState(0);
    const changeDeviceStatus = (index) => {
        let newDevices = [...devices];
        newDevices[index].status = newDevices[index].status === 1 ? 0 : 1;
        setDevices(newDevices);
    }

    return (
        <StateContext.Provider
            value={{
                devices,
                setDevices,
                selectedDevice,

                setSelectedDevice,
                changeDeviceStatus,
            }}>
            {children}
        </StateContext.Provider>
    )

}