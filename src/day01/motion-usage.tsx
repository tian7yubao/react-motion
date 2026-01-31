import { motion, AnimatePresence } from "motion/react";
import { useToggle } from "usehooks-ts";

export function MotionUsage() {

    const [ isShow, toggle ] = useToggle(true);

    return (
        <div className="h-screen bg-black p-20">

            <button className="p-5 bg-amber-300"
                    onClick={ toggle }>show / hidden
            </button>

            <AnimatePresence>
                {
                    isShow && (
                        <motion.div className="size-48 bg-amber-300"
                                    initial={
                                        {
                                            // x: 200,
                                            opacity: 0.5,
                                            // rotate: 0,
                                            // scale: 0.5,
                                            // borderRadius: "20%"
                                            filter: "blur(10px)",
                                        }
                                    }
                                    animate={
                                        {
                                            // x: 800,
                                            opacity: 1,
                                            // rotate: 360,
                                            // scale: 1,
                                            // borderRadius: "30%"
                                            filter: [ "blur(5px)", "blur(3px)", "blur(0px)" ]
                                        }
                                    }
                                    transition={
                                        {
                                            duration: 1,
                                            // delay: 1,
                                            // ease: [ 1, 0.063, 0.895, 0.647 ],
                                            // type: "spring",
                                            // stiffness: 796,
                                            // repeatType: "loop",
                                        }
                                    }
                                    exit={ {
                                        opacity: 0.3
                                    } }>
                            <span className="px-5 py-20 text-2xl">react motion</span>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </div>
    )
}
