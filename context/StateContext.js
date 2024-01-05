"use client"

import {createContext, useEffect, useState} from "react";

export const StateContext = createContext({});


export default function StateContextProvider({children}) {

    const [devices, setDevices] = useState([
        {
            name: "Nazwa pieca #1",
            temperature: "21.5",
        },
        {
            name: "Nazwa pieca #2",
            temperature: "23",
        }
    ])
    const [selectedDevice, setSelectedDevice] = useState(0);


    return (
        <StateContext.Provider
            value={{
                devices,
                setDevices,
                selectedDevice,
            }}>
            {children}
        </StateContext.Provider>
    )

}