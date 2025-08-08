import { motion } from 'framer-motion'
import React from 'react'

const stairAnimation = {
    initial: { top: "0%" },        // Start at top of screen
    animate: { top: "100%" },      // Move down off-screen (bottom)
    exit: { top: ["100%", "0%"] }  // Reverse on exit: bottom → top
}

const reverseIndex = (index) => {
    const totSteps = 6;
    return totSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className='h-full w-full bg-white relative'
                    />
                )
            })}
        </>
    )
}

export default Stairs