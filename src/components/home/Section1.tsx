import Typography from '@/components/common/Typography';
import Orb from '@/components/interaction/Orb';
import Button from '@/components/common/Button';
import PressureText from '@/components/interaction/PressureText';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

export default function Section1() {
  return (
    <section id="home" className="relative h-screen min-h-screen w-full overflow-hidden px-20">
      <Orb hoverIntensity={0} rotateOnHover={true} hue={0} forceHoverState={false} />
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="flex w-full flex-col items-start gap-4 px-6 md:items-center">
          <div className="flex w-full max-w-[400px] flex-col items-start md:items-center">
            <Typography variant="body2" classes="!text-primary-200/50 !font-semibold">
              FRONTEND DEVELOPER
            </Typography>
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
              disabled
            />
            <Typography variant="body2" classes="opacity-60 mt-6 md:text-center uppercase">
              Crafting interactive, user-focused web experiences
              <br /> with clean and modern code.
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="clear" size="sm">
              <FaLinkedin className="text-xl" />
            </Button>
            <Button variant="clear" size="sm">
              <FaGithub className="text-xl" />
            </Button>
            <Button variant="clear" size="sm">
              <MdOutlineMail className="text-xl" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
