import Typography from '@/components/common/Typography';

export default function Section2() {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-20">
      <Typography variant="display1">About</Typography>
      <Typography variant="body2" classes="text-center mt-4 opacity-80">
        Front-end developer with 5 years of experience building scalable, user-focused web
        applications.
      </Typography>
      <Typography variant="body2" classes="text-center opacity-80">
        My work blends clean, maintainable code with thoughtful UX and design system principles.
      </Typography>
      <Typography variant="body2" classes="text-center opacity-80">
        I aim to create intuitive interfaces through empathy-driven design, and I'm looking to grow
        with a team that values collaboration and continuous learning.
      </Typography>
    </div>
  );
}
