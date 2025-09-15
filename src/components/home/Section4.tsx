'use client';
import Typography from '@/components/common/Typography';
import { BsStars } from 'react-icons/bs';

export default function Section4() {
  return (
    <section className="relative flex h-[400px] min-h-[400px] w-full snap-start flex-col items-center gap-10 px-10 pt-20 pb-20">
      <div className="bg-primary-900 flex h-full w-full max-w-[1000px] flex-col items-center gap-4 rounded-2xl p-6">
        <Typography variant="body2" classes="!text-white !font-bold">
          CONTACT ME
        </Typography>
      </div>
    </section>
  );
}
