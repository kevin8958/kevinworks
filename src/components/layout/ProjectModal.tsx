// ProjectModal.tsx
'use client';

import { ReactNode, useEffect } from 'react';
import { LuX } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';
import { LuExternalLink } from 'react-icons/lu';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  year: string;
  href?: string;
  backgroundImage?: string;
  content: ReactNode;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  year,
  href,
  backgroundImage,
  content,
}: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bottom-0 z-50 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-xs"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="bg-primary-900 relative z-10 mb-6 h-[calc(100vh-100px)] w-[calc(100%-32px)] max-w-3xl overflow-hidden rounded-2xl shadow-lg"
            initial={{ y: 20, opacity: 0.4 }} // 아래에서 시작
            animate={{ y: 0, opacity: 1 }} // 제자리로 올라옴
            exit={{ y: 20, opacity: 0.4 }} // 닫을 때 다시 내려감
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 text-2xl mix-blend-difference hover:opacity-70"
            >
              <LuX />
            </button>
            {backgroundImage && (
              <div
                className="relative h-[300px] bg-cover bg-top"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                {title === 'Kevin Design System' && (
                  <div className="from-primary-900 via-primary-900/60 absolute top-[-2px] h-[80px] w-full bg-gradient-to-b to-transparent" />
                )}
                <div className="from-primary-900 via-primary-900/60 absolute bottom-[-2px] size-full bg-gradient-to-t to-transparent" />

                <div className="absolute bottom-4 left-6">
                  <div className="flex items-center gap-4">
                    <Typography
                      variant="h3"
                      classes="!text-2xl sm:text-3xl !text-primary-100 !font-semibold"
                    >
                      {title}
                    </Typography>
                    {href && (
                      <Button
                        variant="contain"
                        size="sm"
                        classes="!w-[30px]"
                        onClick={() => window.open(href, '_blank')}
                      >
                        <LuExternalLink className="text-lg" />
                      </Button>
                    )}
                  </div>
                  <span className="text-gray-500">{year}</span>
                </div>
              </div>
            )}
            <div className="h-[calc(100dvh-100px-300px)] overflow-y-auto p-6">{content}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
