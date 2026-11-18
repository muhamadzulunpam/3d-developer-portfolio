import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMotionReduced } from "@/hooks/useMotionReduced";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Jeda animasi dalam detik, dipakai untuk efek bertingkat pada grid. */
  delay?: number;
  distance?: number;
  /** false = animasi berulang setiap kali masuk viewport. */
  repeat?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Wrapper reveal-on-scroll. `once` aktif secara default supaya animasi tidak
 * berjalan terus-menerus (jaga beban GPU tetap ringan).
 */
export function Reveal({ children, className, delay = 0, distance = 26, repeat = false }: RevealProps) {
  const reduceMotion = useMotionReduced();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !repeat, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
