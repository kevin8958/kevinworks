import Typography from '@/components/common/Typography';
import Orb from '@/components/interaction/Orb';
import Button from '@/components/common/Button';
import PressureText from '@/components/interaction/PressureText';
import ShinyText from '@/components/interaction/ShinyText';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Section1() {
  return (
    <div className="relative h-[calc(100dvh)] w-full px-20">
      <Orb hoverIntensity={0} rotateOnHover={true} hue={0} forceHoverState={false} />
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="flex flex-col items-start gap-4 px-6 md:items-center">
          <div className="flex flex-col items-start md:items-center">
            <ShinyText text="FRONTEND DEVELOPER" disabled={false} speed={3} />
            <PressureText
              text="Kevin Lee"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
            <Typography variant="body1" classes="opacity-60 mt-6 md:text-center">
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
