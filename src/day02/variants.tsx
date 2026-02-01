import { motion, type Variants, type Variant } from "motion/react";

export function Variants() {

    const variants: Variants = {
        hidden: {
            borderRadius: "0%",
            x: 0,
            rotate: 0,
            scale: 0.5,
        },
        visible: {
            borderRadius: "50%",
            x: 600,
            rotate: 720,
            scale: 1,
            transition: {
                duration: 2
            }
        },

        visible1: {
            borderRadius: "50%",
            x: 600,
            rotate: 720,
            scale: 1,
            transition: {
                duration: 2
            }
        },

    }

    return (
        <div className="p-32 bg-slate-200">
            <motion.div className="size-48 bg-purple-700"
                        variants={ variants }
                        initial={ "hidden" }
                // animate={ 3 > 2 ? "visible" : "visible1" }/>
                        animate={ "visible" }/>
        </div>
    )
}