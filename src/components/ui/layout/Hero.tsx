'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          className="inline-block marching-ants-border p-8 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {title}
          </h2>
        </motion.div>
        <motion.p 
          className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
