import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// A dedicated component to smoothly animate the counter number.
const AnimatedCounter = ({ value }: { value: number }) => {
    const motionValue = useMotionValue(0);
    // The useTransform hook is used to round the motion value to the nearest integer.
    const rounded = useTransform(motionValue, latest => Math.round(latest));

    useEffect(() => {
        // Animate the motionValue to the new 'value' prop using the standalone animate function.
        const controls = animate(motionValue, value, {
            duration: 0.5,
            ease: "easeOut"
        });
        return controls.stop;
    }, [value, motionValue]);

    return <motion.span>{rounded}</motion.span>;
};

// A component to render a single character with a reveal animation tied to progress.
const AnimatedCharacter = ({ char, progress, index, totalChars }: { 
    char: string; 
    progress: any; 
    index: number; 
    totalChars: number; 
}) => {
    // Defines the range of progress values over which the character will appear.
    // It starts fading in 5 "progress points" before its target and is fully visible at its target.
    const opacity = useTransform(
        progress,
        [(index / totalChars) * 100 - 5, (index / totalChars) * 100],
        [0, 1]
    );

    return (
        <motion.span style={{ opacity }}>
            {/* Use a non-breaking space for space characters to maintain layout */}
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
};

interface LoaderProps {
    progress: number;
    onFinished: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ progress, onFinished }) => {
    // Create a motion value for progress to drive the character animations
    const progressMotionValue = useMotionValue(progress);

    useEffect(() => {
        progressMotionValue.set(progress);
    }, [progress, progressMotionValue]);

    useEffect(() => {
        // When progress hits 100, notify the parent to start the exit transition
        if (progress >= 100) {
            // Wait a moment before triggering the exit animation
            setTimeout(onFinished, 1200);
        }
    }, [progress, onFinished]);

    // Define the text content for LastMin AI
    const headingLines = ["LastMin AI"];
    const paragraphLine = "Preparing your study environment";
    const allText = [...headingLines, paragraphLine];
    const totalChars = allText.join("").length;
    let charIndex = 0; // To keep track of the character index across all lines

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
            exit={{ opacity: 0, transition: { duration: 0.75, delay: 0.5, ease: "easeOut" } }}
        >
            <motion.div
                className="relative w-full max-w-5xl mx-auto p-8 text-center flex flex-col items-center justify-center min-h-screen"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
                {/* Container for the letter-by-letter animated text */}
                <div className="text-center">
                    <motion.h1 
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tight leading-tight mb-6"
                        style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #e879f9 50%, #8b5cf6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        {headingLines.map((line, lineIndex) => (
                            <div key={lineIndex} className="block">
                                {Array.from(line).map((char, charInLineIndex) => (
                                    <AnimatedCharacter
                                        key={charInLineIndex}
                                        char={char}
                                        progress={progressMotionValue}
                                        index={charIndex++}
                                        totalChars={totalChars}
                                    />
                                ))}
                            </div>
                        ))}
                    </motion.h1>
                    
                    {/* Progress bar */}
                    <div className="w-full max-w-md mx-auto mb-8">
                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                    
                    <div className="text-lg md:text-xl text-gray-300 font-light max-w-lg mx-auto">
                        {Array.from(paragraphLine).map((char, charInLineIndex) => (
                             <AnimatedCharacter
                                key={charInLineIndex}
                                char={char}
                                progress={progressMotionValue}
                                index={charIndex++}
                                totalChars={totalChars}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};