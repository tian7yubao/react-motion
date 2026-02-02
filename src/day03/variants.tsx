import { motion, type Variant, type Variants, stagger } from "motion/react";
import { ReactNode } from "react";

interface VariantsProps {
    delay?: number;
    initial: Variant;
    animate: Variant;
    items: ReactNode[];
    containerClass?: string;
    itemClass?: string;
}

export function Variants({ delay = 0.5, initial, animate, items, containerClass, itemClass }: VariantsProps) {

    const container: Variants = {
        initial: {
        },
        animate: {
            transition: {
                delayChildren: stagger(delay),
            }
        },
    }

    const item: Variants = {
        initial: {
            ...initial
        },
        animate: {
            ...animate
        },
    }

    return (
        <motion.div className={ containerClass }
                    variants={ container }
                    initial={ "initial" }
                    animate={ "animate" }>
            {
                items.map((reactNode, i) => (
                    <motion.div variants={ item }
                                className={ itemClass }
                                key={ i }>{ reactNode }</motion.div>
                ))
            }
        </motion.div>
    )
}