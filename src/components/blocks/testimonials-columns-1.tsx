"use client";
import React from "react";
import { motion } from "framer-motion"; // Consistent with your HomePage
import { cn } from "@/lib/utils";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: any[]; // Flexible type to accept the nodes we created
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className={cn(
                  "p-8 rounded-3xl border shadow-xl max-w-xs w-full",
                  // Glassmorphism effect to match your icons
                  "bg-white/[0.02] dark:bg-black/[0.05] backdrop-blur-md",
                  "border-white/10 dark:border-white/[0.05]"
                )} 
                key={`${index}-${i}`}
              >
                <div className="text-sm md:text-base leading-relaxed opacity-90">{text}</div>
                
                <div className="flex items-center gap-3 mt-6">
                  {/* COMPATIBILITY FIX: Check if image is a component or a URL */}
                  <div className="flex-shrink-0 h-10 w-10 overflow-hidden">
                    {typeof image === "string" ? (
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-full w-full rounded-full object-cover border border-white/10"
                      />
                    ) : (
                      // This renders the getFlagAvatar node we created in HomePage
                      image
                    )}
                  </div>

                  <div className="flex flex-col overflow-hidden">
                    <div className="font-semibold tracking-tight leading-tight truncate">
                      {name}
                    </div>
                    <div className="text-xs leading-tight opacity-50 tracking-tight truncate">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};