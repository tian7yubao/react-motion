import { motion } from "motion/react";
import { useToggle } from "usehooks-ts";
import { cn } from "@/tailwind";

export function Layout() {

    const [ isStart, toggle ] = useToggle(true);

    return (
        <div className="p-32 bg-slate-200">
           {/*<motion.div*/}
           {/*   className={ cn("w-40 bg-purple-700 p-5 flex rounded-2xl cursor-pointer", isStart ? "justify-start" : "justify-end") }*/}
           {/*     onClick={ toggle }>*/}
           {/*    <motion.div className="size-12 bg-white rounded-full" layout/>*/}
           {/* </motion.div>*/}

            <button className="p-5 bg-purple-700 mb-10" onClick={ toggle }>2 to 3</button>

            <motion.div className={ cn("grid gap-10", isStart ? "grid-cols-2" : "grid-cols-3") }>
                <motion.div className="p-10 bg-rose-500 h-50" layout></motion.div>
                <motion.div className="p-10 bg-rose-500 h-50" layout></motion.div>
                <motion.div className="p-10 bg-rose-500 h-50" layout></motion.div>
                <motion.div className="p-10 bg-rose-500 h-50" layout></motion.div>
                <motion.div className="p-10 bg-rose-500 h-50" layout></motion.div>
                <motion.div className="p-10 bg-rose-500 h-50" layout></motion.div>
            </motion.div>
        </div>
    )
}