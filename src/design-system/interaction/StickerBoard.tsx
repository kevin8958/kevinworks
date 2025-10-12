'use client';

import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import { useState } from 'react';

interface StickerProps {
  src: string;
  x: number;
  y: number;
  width: number;
}

const Sticker = ({ src, x, y, width }: StickerProps) => {
  const [image] = useImage(src);

  if (!image) return null;

  // 원본 비율 유지
  const aspectRatio = image.height / image.width;
  const height = width * aspectRatio;

  return <KonvaImage image={image} x={x} y={y} width={width} height={height} draggable />;
};

export default function StickerBoard() {
  const [stickers] = useState([
    { id: 1, src: '/sticker/sticker1.png', x: 100, y: 100, width: 100 },
    { id: 2, src: '/sticker/sticker2.png', x: 250, y: 200, width: 100 },
  ]);

  return (
    <Stage width={800} height={600} className="bg-primary-900 rounded-2xl shadow-lg">
      <Layer>
        {stickers.map((sticker) => (
          <Sticker key={sticker.id} {...sticker} />
        ))}
      </Layer>
    </Stage>
  );
}
