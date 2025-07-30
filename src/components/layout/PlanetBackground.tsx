'use client';

import { motion } from 'framer-motion';

const PlanetBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* 퍼플 플래닛 (살짝 이동) */}
      <motion.div
        className="absolute bottom-0 left-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(180,100,255,0.2),_transparent_80%)] blur-lg"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 연보라 확산 (오른쪽 위) */}
      <motion.div
        className="absolute top-[10%] right-[5%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(180,100,255,0.3),_transparent_70%)] blur-sm"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 블루 플레어 (왼쪽 위) */}
      <motion.div
        className="absolute top-[5%] left-[5%] h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle,_rgba(80,180,255,0.7),_transparent_65%)] blur-sm"
        animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default PlanetBackground;
