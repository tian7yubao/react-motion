import { motion } from "motion/react";

export function MotionWhile() {
    return (
        <div className="p-32">
            {/*<motion.div className="size-48 bg-rose-500 cursor-pointer"*/ }
            {/*            initial={ {*/ }
            {/*                opacity: 0.5,*/ }
            {/*            } }*/ }
            {/*            whileHover={ {*/ }
            {/*                scale: 1.2,*/ }
            {/*                opacity: 1,*/ }
            {/*            } }/>*/ }

            <div className="h-screen bg-slate-200"></div>
            <motion.div className="size-48 bg-rose-500 cursor-pointer"
                        whileInView={ {
                            scale: 1.5,
                        } }

                        // viewport={ { once: true, amount: 0.5 } }
                        viewport={ { margin:"" } }

                        transition={ { duration: 1 } }/>
            <div className="h-screen bg-slate-200"></div>

        </div>
    )
}