"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
};

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  cardWidth = 320, // Slightly narrower to fit 4 across better
  cardHeight = 400,
  
  // Spread & Arch Settings
  overlap = 0.15,     // Lower value = more space between cards
  spreadDeg = 8,      // Very low number = flatter "arch"
  depthPx = 20,       // Distance in 3D space
  
  activeScale = 1.08,
  inactiveScale = 0.95,
  className,
  renderCard,
}: any) {
  const len = items.length;
  const [active, setActive] = React.useState(initialIndex);
  const reduceMotion = useReducedMotion();

  // This calculates the horizontal distance between cards
  const cardSpacing = cardWidth * (1 - overlap);

  return (
    <div className={cn("w-full flex flex-col items-center justify-center", className)}>
      <div 
        className="relative flex items-center justify-center w-full"
        style={{ height: cardHeight + 120, perspective: "1200px" }}
      >
        <AnimatePresence mode="popLayout">
          {items.map((item: T, i: number) => {
            // Calculate position relative to the active card
            // If i is 0 and active is 2, offset is -2
            const offset = i - active; 
            const absOffset = Math.abs(offset);
            const isActive = i === active;

            // Math for the "Spread"
            const x = offset * cardSpacing;
            const rotateZ = offset * (spreadDeg / 2); // Subtle rotation
            const y = absOffset * 5; // Very minor downward curve
            const z = -absOffset * depthPx;
            const scale = isActive ? activeScale : inactiveScale;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActive(i)}
                className={cn(
                  "absolute rounded-3xl overflow-hidden shadow-2xl border border-white/10",
                  isActive ? "z-50 cursor-default" : "z-10 cursor-pointer hover:brightness-110"
                )}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  x,
                  y: isActive ? y - 20 : y, // Lift active card slightly
                  rotateZ,
                  scale,
                  opacity: 1,
                  filter: isActive ? "blur(0px)" : "blur(0.5px) grayscale(0.2)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
              >
                {/* 3D Depth Layer */}
                <div 
                  className="h-full w-full" 
                  style={{ transform: `translateZ(${z}px)` }}
                >
                  {renderCard ? (
                    renderCard(item, { active: isActive })
                  ) : (
                    <div className="relative h-full w-full bg-zinc-900">
                      {item.imageSrc && (
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 p-6">
                        <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                        <p className="text-sm text-zinc-300 mt-2 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="mt-8 flex gap-3">
        {items.map((_: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={cn(
              "h-1.5 transition-all duration-300 rounded-full",
              idx === active ? "bg-white w-8" : "bg-white/20 w-4 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}