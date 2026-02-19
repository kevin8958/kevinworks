import Typography from '@/design-system/foundation/Typography';
import Orb from '@/design-system/interaction/Orb';
import Button from '@/design-system/components/Button';
import PressureText from '@/design-system/interaction/PressureText';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

export default function Section1() {
  const openEmail = () => {
    window.location.href = 'keivnlee8958@gmail.com';
  };

  return (
    <section id="home" className="relative h-screen min-h-screen w-full overflow-hidden px-20">
      <Orb hoverIntensity={0} rotateOnHover={true} hue={0} forceHoverState={false} />
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="flex w-full flex-col items-start gap-4 px-6 md:items-center">
          <div className="flex w-full max-w-[400px] flex-col items-start md:items-center">
            <Typography variant="B2" classes="!text-neutral-200/50 !font-semibold">
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
              textColor="#FFB74D"
              strokeColor="#ff0000"
              minFontSize={36}
              disabled
            />
            <Typography variant="B2" classes="opacity-60 mt-6 md:text-center uppercase">
              Crafting interactive, user-focused web experiences
              <br /> with clean and modern code.
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="clear"
              size="sm"
              onClick={() =>
                window.open('https://www.linkedin.com/in/kevin-lee-a1479a377/', '_blank')
              }
            >
              <FaLinkedin className="text-xl" />
            </Button>
            <Button
              variant="clear"
              size="sm"
              onClick={() => window.open('https://github.com/kevin8958', '_blank')}
            >
              <FaGithub className="text-xl" />
            </Button>
            <Button variant="clear" size="sm" onClick={openEmail}>
              <MdOutlineMail className="text-xl" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
