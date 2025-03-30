"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FC } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
    >
      <Card className="bg-gradient-to-b from-neutral-400/20 to-neutral-900 shadow-accented min-h-full rounded-2xl text-white hover:scale-105 transition-transform duration-300 w-full">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{icon}</div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-gray-500/80">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
