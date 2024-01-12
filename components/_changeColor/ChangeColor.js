"use client"

import {useContext} from "react";
import {StateContext} from "@/context/StateContext";
import {AnimatePresence, motion} from "framer-motion";
import ColorPresets from "@/components/_changeColor/ColorsPresets";
import Presets from "@/components/_changeColor/Presets";

export default function ChangeColor() {

    const {showChangeColorComponent, devices, selectedDevice, setShowChangeColorComponent} = useContext(StateContext);

    return (
        <>
            <AnimatePresence>

                {
                    showChangeColorComponent && (
                        <motion.div
                            className={"fixed backdrop-blur-lg bg-[#000000]/80 h-scree w-full top-0 left-0 right-0 bottom-0 z-50 isolate"}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            <motion.div
                                className={"bg-[#13131A] absolute bottom-0 w-full h-3/4 z-50 rounded-md px-[15px] pt-[32px] pb-[200px] overflow-y-scroll"}
                                initial={{y: "100%"}}
                                animate={{y: "0%"}}
                                exit={{y: "100%"}}
                                transition={{duration: .5, ease: "easeInOut"}}
                            >

                                    <ColorPresets/>

                                    <Presets/>


                            </motion.div>

                            <div className={"absolute w-full h-full top-0 z-0"}
                                 onClick={() => setShowChangeColorComponent(false)}
                            />
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </>
    )
}