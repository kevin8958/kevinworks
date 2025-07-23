import Squares from '@/components/interaction/Squares';
export default function Index() {
  return (
    <div className="flex h-[calc(100dvh)] w-full items-center justify-center text-white">
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#2F344C"
        hoverFillColor="#0A0E19"
      />
    </div>
  );
}
