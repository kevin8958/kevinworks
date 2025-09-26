'use client';
import Typography from '@/components/common/Typography';

export default function Section4() {
  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center gap-10 px-6 pt-20 pb-20 lg:px-10"
    >
      <div className="bg-primary-900 flex h-[300px] h-full w-full max-w-[1000px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl px-4 py-10 text-center">
        <Typography variant="h4" classes="!text-white !font-bold">
          CONTACT ME
        </Typography>
        <Typography variant="body2" classes="!text-primary-200/70">
          I am actively seeking new opportunities and would love to hear from you! <br />
          Whether you have a question or simply want to say Hello , I will do my best to respond!
        </Typography>
        <a
          href="mailto:kevin8958@email.com"
          className="border-primary-200/30 hover:bg-primary-800 mt-4 rounded-2xl border px-4 py-2 text-sm font-bold transition-colors"
        >
          kevin8958@gmail.com
        </a>
      </div>
    </section>
  );
}
