"use client"

import {createContext, useEffect, useState} from "react";

export const StateContext = createContext({});


export default function StateContextProvider({children}) {

    const [devices, setDevices] = useState([
        {
            name: "Nazwa pieca #1",
            temperature: 21.5,
            desc: "Kominek W sypialni",
            status: 1,
            color: "#d33131",
            colorPreset: {
                name: "color",
                title: "Kolor",
                icon: null,
                isSelected: true,
                settings: {
                    lighting: 30,
                    hue: 120,
                }
            },
            savedPresets: []
        },
        {
            name: "Nazwa pieca #2",
            temperature: 23,
            desc: "Salon",
            status: 0,
            color: "#fff",
            colorPreset: {
                name: "wave",
                title: "Fala",
                icon: null,
                isSelected: true,
                settings: {
                    lighting: 50,
                    hue: 320,
                }
            },
            savedPresets: [
                {
                    header: "Preset #1",
                    name: "color",
                    settings: {
                        lighting: 0,
                        hue: 0,
                    }
                },
            ]
        }
    ])
    const [selectedDevice, setSelectedDevice] = useState(0);
    const [showChangeColorComponent, setShowChangeColorComponent] = useState(false);
    const changeDeviceStatus = (index) => {
        let newDevices = [...devices];
        newDevices[index].status = newDevices[index].status === 1 ? 0 : 1;
        setDevices(newDevices);
    }

    const updateDeviceTemperature = (newTemperature) => {
        let newDevices = [...devices];
        newDevices[selectedDevice].temperature = newTemperature;
        setDevices(newDevices);
    };



    return (
        <StateContext.Provider
            value={{
                devices,
                setDevices,
                selectedDevice,

                setSelectedDevice,
                changeDeviceStatus,
                updateDeviceTemperature,
                showChangeColorComponent,
                setShowChangeColorComponent,
            }}>
            {children}
        </StateContext.Provider>
    )

}