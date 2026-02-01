import { useState } from "react";
import { motion } from "motion/react";

export function LayoutId() {

    // 在多个元素中 有且仅有一个元素选中时、产生UI变更
    const titles: string[] = [ "react", "motion", "next", "tailwind", "zustand" ];

    const [ selected, setSelected ] = useState(0);

    return (
        <div className="p-32 bg-slate-200 font-mono text-2xl">
            <motion.ul className="flex flex-col md:flex-row gap-5">
                { titles.map((title, index) => (
                    <motion.li className="p-5 cursor-pointer relative w-fit  rounded-xl text-white isolate"
                               key={ title } onClick={ () => setSelected(index) }>
                        { title }
                        {/*{*/ }
                        {/*    selected === index && (*/ }
                        {/*        <motion.span className="absolute left-0 bottom-0 w-full h-1 bg-purple-700" layoutId="underline"/>*/ }
                        {/*    )*/ }
                        {/*}*/ }
                        {
                            selected === index && (
                                <motion.span className="absolute inset-0 bg-rose-500 z-[-1]"
                                             layoutId="underline" ></motion.span>
                            )
                        }
                    </motion.li>
                )) }
            </motion.ul>
        </div>
    )
}