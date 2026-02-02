import { motion, useTime, useTransform, MotionValue, useMotionValue, useMotionTemplate } from "motion/react";

export function UseTimeUsage() {

    const time = useTime();

    const rotate: MotionValue<number> = useTransform(time, [ 0, 2000 ], [ 0, 360 ], { clamp: false });

    const x1 = useMotionValue(0.5);
    const y1 = useMotionValue(0.5);
    const x2 = useMotionValue(0.5);
    const xy = useMotionValue(0.5);

    // clip-path: polygon(52.8% 11.5%, 84.1% 30%, 86.4% 58%, 69.8% 84.3%, 28.3% 87.3%, 11.5% 57.5%, 16.1% 28.8%);

    const clipPath:MotionValue<string> = useMotionTemplate`polygon(${x1} 11.5%, 84.1% 30%, 86.4% 58%, ${x2} 84.3%, 28.3% 87.3%, 11.5% 57.5%, 16.1% 28.8%)`

    return (
        <div className="p-32 bg-slate-200 space-y-20">
            {/*<motion.div className="size-36 bg-purple-700"*/ }
            {/*            animate={ {*/ }
            {/*                rotate: 360,*/ }
            {/*            } }*/ }
            {/*            transition={ {*/ }
            {/*                duration: 1,*/ }
            {/*                ease: "linear",*/ }
            {/*                repeat: Infinity,*/ }
            {/*            } }/>*/ }

            <motion.div className="size-36 bg-purple-700" style={ { rotate , clipPath} }/>
        </div>
    )
}