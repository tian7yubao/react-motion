import { useMotionValue, useSpring, useTransform, motion, type MotionValue } from "motion/react";

export function MotionValueUsage() {

    // const width: MotionValue<number> = useMotionValue<number>(300);
    const width: MotionValue<number> = useSpring(Math.random() * 200 + 100);
    const height: MotionValue<number> = useSpring(Math.random() * 200 + 100);

    // const number = useTransform(() => width.get() * 2);

    const x: MotionValue<number> = useMotionValue(0);

    const y = useTransform(x, [ -100, 0, 100 ], [ -2, 0, 2 ], { clamp: false });

    return (
        <div className="p-32 bg-slate-200">
            <button className="p-5 bg-amber-300 mb-50" onClick={ () => {

                width.set(Math.random() * 100 + 100);
                height.set(Math.random() * 100 + 100);

            } }>random
            </button>
            <motion.div className="size-48 bg-rose-500" style={ { width, height } }/>
        </div>
    )
}

