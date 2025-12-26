import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LiquidBackground = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="liquid-container">
            <motion.div
                className="liquid-blob"
                animate={{
                    x: mousePos.x * 2,
                    y: mousePos.y * 2,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    top: "10%",
                    left: "10%",
                    background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
                }}
            />
            <motion.div
                className="liquid-blob"
                animate={{
                    x: -mousePos.x * 1.5,
                    y: -mousePos.y * 1.5,
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    bottom: "10%",
                    right: "10%",
                    background: "radial-gradient(circle, hsl(220 50% 50% / 0.08) 0%, transparent 70%)",
                }}
            />
            <motion.div
                className="liquid-blob"
                animate={{
                    x: mousePos.x,
                    y: -mousePos.y * 2,
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
                }}
            />
        </div>
    );
};
