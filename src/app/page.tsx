import Typography from '@/components/common/Typography';
import Squares from '@/components/interaction/Squares';
import CardSwap, { Card } from '@/components/interaction/CardSwap2';

export default function Index() {
  return (
    <div className="flex h-[calc(100dvh)] w-full items-center justify-center text-white">
      <div className="fixed z-10 size-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#2F344C"
          hoverFillColor="#0A0E19"
        />
      </div>
      <div className="realative z-20 w-full px-20">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start">
            <Typography variant="h4" classes="opacity-60 pl-1">
              Frontend developer
            </Typography>
            <Typography variant="h2">Kevin</Typography>
            <Typography variant="h4" classes="opacity-40 mt-4">
              Crafting interactive, user-focused web experiences
              <br /> with clean and modern code.
            </Typography>
          </div>
          <div className="relative h-[400px]">
            <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
              <Card customClass="p-6">
                <h3>Card 1</h3>
                <p>Your content here</p>
              </Card>
              <Card customClass="p-6">
                <h3>Card 2</h3>
                <p>Your content here</p>
              </Card>
              <Card customClass="p-6">
                <h3>Card 3</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}
