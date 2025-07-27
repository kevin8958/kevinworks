import Typography from '@/components/common/Typography';
import Orb from '@/components/interaction/Orb';
import Button from '@/components/common/Button';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Section1() {
  return (
    <div className="relative h-[calc(100dvh)] w-full px-20">
      <Orb hoverIntensity={0.2} rotateOnHover={true} hue={0} forceHoverState={false} />
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <Typography variant="h4" classes="opacity-60">
              Frontend developer
            </Typography>
            <Typography variant="h2">Kevin Lee</Typography>
            <Typography variant="h4" classes="opacity-40 mt-2 text-center">
              Crafting interactive, user-focused web experiences
              <br /> with clean and modern code.
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="clear"
              size="sm"
              icon={<FiArrowUpRight className="text-lg" />}
              iconPosition="right"
            >
              LIKED IN
            </Button>
            <Button
              variant="clear"
              size="sm"
              icon={<FiArrowUpRight className="text-lg" />}
              iconPosition="right"
            >
              GITHUB
            </Button>
            <Button
              variant="clear"
              size="sm"
              icon={<FiArrowUpRight className="text-lg" />}
              iconPosition="right"
            >
              GMAIL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
