import { motion, type Variants, stagger } from "motion/react";

export function ContainerVariants() {

    const container: Variants = {
        initial: {
            scale: 0.8
        },
        animate: {
            transition: {
                delayChildren: stagger(0.5, { from: "center" }),
                when: "beforeChildren"
            },
            scale: 1
        },
    }

    const item: Variants = {
        initial: {
            y: 0,
            opacity: 0,
            // rotate: 0,
        },
        animate: {
            y: [ 0, 80, 0 ],
            opacity: 1,
            // rotate: 360,
        },
    }

    return (
        <div className="p-32 bg-slate-200">
            <motion.ul className="flex gap-10" variants={ container } initial={ "initial" } animate={ "animate" }>
                <motion.li variants={ item } className="size-20 bg-rose-500"/>
                <motion.li variants={ item } className="size-20 bg-rose-500"/>
                <motion.li variants={ item } className="size-20 bg-rose-500"/>
                <motion.li variants={ item } className="size-20 bg-rose-500"/>
                <motion.li variants={ item } className="size-20 bg-rose-500"/>
            </motion.ul>
        </div>
    )
}

// 反向变体