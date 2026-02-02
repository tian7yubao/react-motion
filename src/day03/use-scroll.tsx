import { RefObject, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

export function UseScrollUsage() {

    const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

    const { scrollYProgress } = useScroll({
        container: ref,
    });

    const width = useTransform(scrollYProgress, [ 0, 1 ], [ "0%", "100%" ]);

    return (
        <div className="p-32 bg-slate-200">
            <div className="mx-auto w-1/2 space-y-10">
                <motion.div className="h-2 bg-rose-500" style={ { width, opacity:scrollYProgress } }/>
                <div className="h-80 overflow-y-auto p-10" ref={ ref }>
                    {
                        [ ...new Array(100) ].map((_, i) => (
                            <span key={ i }>
                                lorem ipsum dolor sit amet, consectetur
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}