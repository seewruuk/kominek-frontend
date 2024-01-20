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
            powerUsageData: [
                {
                    id: "weekUsagePiecyk2",
                    labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'],
                    data: [1.1, 1.3, 1.3, 1.9, 1.3, 0.9, 1.2] // wygenerowane wartości w kWh dla tygodnia
                },
                {
                    id: "monthUsagePiecyk2",
                    labels: ['St.', "Lut.", "Mar.", "Kwi.", "Maj.", "Cze.", "Lip.", "Sie.", "Wrz.", "Paź.", "Lis.", "Gru."],
                    data: [41.2, 50.2, 45.4, 50.1, 48.3, 45.4, 39.4, 46.9, 42.8, 32.8, 57.3, 58.8] // wygenerowane wartości w kWh dla miesiąca
                }
            ],
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
            powerUsageData: [
                {
                    id: "weekUsage",
                    labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'],
                    data: [1.2, 0.8, 1.0, 1.5, 1.3, 1.6, 1.4] // wartości w kWh
                },
                {
                    id: "monthUsage",
                    labels: ['St.', "Lut.", "Mar.", "Kwi.", "Maj.", "Cze.", "Lip.", "Sie.", "Wrz.", "Paź.", "Lis.", "Gru."],
                    data: [45, 40, 42, 50, 38, 45, 48, 46, 37, 50, 48, 44] // wartości w kWh
                }
            ],
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
    const [powerUsageData, setPowerUsageData] = useState(0);

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

                powerUsageData,
                setPowerUsageData
            }}>
            {children}
        </StateContext.Provider>
    )

}