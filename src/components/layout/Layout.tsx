import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Preloader from "@/components/Preloader";
import { LiquidBackground } from "../LiquidBackground";

interface LayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
      when: "beforeChildren" as const,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const Layout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <motion.div
      className="min-h-screen bg-background relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <LiquidBackground />
      <Preloader onDone={() => setLoading(false)} />
      <Header />
      <main id="main-content" className={loading ? "preloading relative z-10" : "relative z-10"} aria-hidden={loading}>{children}</main>
      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};
