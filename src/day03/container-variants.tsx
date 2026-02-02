import { motion, type Variants, stagger } from "motion/react";

export function ContainerVariants() {

    const container: Variants = {
        initial: {},
        animate: {
            transition: {
                delayChildren: stagger(0.5, { from: "first" }),
            },
        },
    }

    const item: Variants = {
        initial: {
            y: 0,
            opacity: 0,
        },
        animate: {
            y: [ 0, 80, 0 ],
            opacity: 1,
        },
    }

    const item2: Variants = {
        initial: {
            opacity: 0,
            rotate: 30
        },
        animate: {
            opacity: 1,
            rotate: 0
        },
    }

    return (
        <div className="p-32 bg-slate-200">
            <motion.div className="flex gap-10" variants={ container } initial={ "initial" } animate={ "animate" }>

                <motion.div variants={ item } className="size-20 bg-rose-500"/>
                <motion.div variants={ item2 } className="size-20 bg-amber-300"/>

                <motion.div variants={ item } className="size-20 bg-rose-500"/>
                <motion.div variants={ item2 } className="size-20 bg-amber-300"/>

                <motion.div variants={ item } className="size-20 bg-rose-500"/>
                <motion.div variants={ item2 } className="size-20 bg-amber-300"/>

            </motion.div>
        </div>
    )
}

