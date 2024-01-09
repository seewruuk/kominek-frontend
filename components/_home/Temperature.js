"use client"
import React, {useState, useRef, useEffect, useContext} from 'react';
import {StateContext} from "@/context/StateContext";

const TemperatureControl = () => {
    const {devices, setDevices, selectedDevice,updateDeviceTemperature} = useContext(StateContext);
    const [temperature, setTemperature] = useState(devices[selectedDevice].temperature);
    const handleRef = useRef(null);
    const circleRef = useRef(null);
    const minTemperature = 20;
    const maxTemperature = 32;
    const [isDragging, setIsDragging] = useState(false);
    const [presets, setPresets] = useState([
        {
            id: "1",
            value: 20,
            selected: true,
        },
        {
            id: "2",
            value: 21,
            selected: false,
        },
        {
            id: "3",
            value: 24,
            selected: false,
        },
        {
            id: "4",
            value: 27.5,
            selected: false,
        },
        {
            id: "5",
            value: 30,
            selected: false,
        },
    ])
    useEffect(() => {
        setTemperature(devices[selectedDevice].temperature)
    }, [selectedDevice]);

    useEffect(() => {
        updateDeviceTemperature(temperature)
    }, [temperature]);

    const calculateAngle = (clientX, clientY) => {
        const circleRect = circleRef.current.getBoundingClientRect();
        const centerX = circleRect.left + circleRect.width / 2;
        const centerY = circleRect.top + circleRect.height / 2;
        const radians = Math.atan2(clientY - centerY, clientX - centerX);
        let angle = radians * (180 / Math.PI);

        angle = angle < 0 ? 360 + angle : angle;

        return angle;
    };

    const angleToTemperature = (angle) => {
        const tempRange = maxTemperature - minTemperature;
        const temp = (angle / 360) * tempRange * 2;
        return minTemperature + Math.round(temp) / 2;
    };

    const handleMouseDown = (event) => {
        setIsDragging(true)
        const angle = calculateAngle(event.clientX, event.clientY);
        const newTemperature = angleToTemperature(angle);

        setTemperature(newTemperature);


        const handleMouseMove = (moveEvent) => {
            const moveAngle = calculateAngle(moveEvent.clientX, moveEvent.clientY);
            setTemperature(angleToTemperature(moveAngle));


        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            setIsDragging(false)

        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    useEffect(() => {
        if (handleRef.current) {
            handleRef.current.addEventListener('mousedown', handleMouseDown);
        }

        return () => {
            if (handleRef.current) {
                handleRef.current.removeEventListener('mousedown', handleMouseDown);
            }
        };
    }, []);

    const temperatureToAngle = (temp) => {
        return (temp - minTemperature) / (maxTemperature - minTemperature) * 360;
    };

    const radius = 90;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const angle = temperatureToAngle(temperature);
    const trailLength = (angle / 360) * circumference;

    const handleInsertPreset = (event) => {
        const presetTemperature = event.target.innerText;
        setTemperature(presetTemperature);
    }


    return (
        <>

            <div className="bg-[#1C1D24] rounded-md flex justify-center py-5">
                <svg width="230" height="240" viewBox="0 0 200 200" ref={circleRef}>
                    <circle cx="100" cy="100" r={radius} stroke="#2B2B37" strokeWidth={strokeWidth} fill="none"/>
                    <circle cx="100" cy="100" r={radius} stroke="#18E8B7" strokeWidth={strokeWidth} fill="none"
                            strokeDasharray={`${trailLength} ${circumference}`}/>
                    <circle ref={handleRef} cx={100 + radius * Math.cos(Math.PI * angle / 180)}
                            cy={100 + radius * Math.sin(Math.PI * angle / 180)}
                            r={
                                isDragging ? 14 : 10
                            } fill="#2B2B37"
                            stroke={"#18E8B7"}
                            strokeWidth={"5"}

                    />
                    <text x="50%" y="50%" textAnchor="middle" dy="-1.2rem" fill={"#fff"} fontSize={"12px"}>
                        Temperatura
                    </text>
                    <text x="50%" y="50%" textAnchor="middle" dy="1rem" dx="-0px" fill={"#fff"} fontSize={"38px"}>
                        {
                            temperature
                        }°C
                    </text>
                    {/*<text x="50%" y="50%" textAnchor="middle" dy="0rem" dx="2.5rem" fill={"#fff"} fontSize={"19px"}>*/}
                    {/*    °C*/}
                    {/*</text>*/}
                </svg>
            </div>


            <div className={"mt-[21px] text-[14px] font-[500]"}>
                <p className={"text-greyTextColor"}>Szybki wybór</p>
                <div className={"flex justify-between gap-[6px] mt-[6px]"}>
                    {
                        presets.map((preset) => {
                            return (
                                <button
                                    type={"button"}
                                    key={preset.id}
                                    className={`bg-[#1C1D24] w-full text-center py-[6px] rounded-md cursor-pointer`}
                                    onClick={handleInsertPreset}>
                                    {preset.value}
                                </button>
                            )
                        })
                    }

                </div>
            </div>

            {/*<pre>*/}
            {/*    {JSON.stringify(devices, null, 2)}*/}
            {/*</pre>*/}

        </>

    );
};

export default TemperatureControl;
