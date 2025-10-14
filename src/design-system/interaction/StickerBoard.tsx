'use client';

import { Stage, Layer, Image as KonvaImage, Group, Rect, Text } from 'react-konva';
import useImage from 'use-image';
import { useState } from 'react';
import FlexWrapper from '../layout/FlexWrapper';
import Button from '../components/Button';
import Typography from '../foundation/Typography';

interface Sticker {
  id: number;
  src: string;
  x: number;
  y: number;
  width: number;
}

interface StickerProps extends Sticker {
  onRemove: (id: number) => void;
}

const Sticker = ({ id, src, x, y, width, onRemove }: StickerProps) => {
  const [image] = useImage(src);
  const [isHovered, setIsHovered] = useState(false);

  if (!image) return null;

  const aspectRatio = image.height / image.width;
  const height = width * aspectRatio;

  const buttonSize = 18;

  return (
    <Group
      x={x}
      y={y}
      draggable
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sticker image */}
      <KonvaImage image={image} width={width} height={height} />

      {/* X button background */}
      {isHovered && (
        <>
          <Rect
            x={width - buttonSize / 2}
            y={-buttonSize / 2}
            width={buttonSize}
            height={buttonSize}
            fill="rgba(0,0,0,0.5)"
            cornerRadius={4}
            onClick={() => onRemove(id)}
          />
          <Text
            x={width - buttonSize / 2}
            y={-buttonSize / 2 + 1}
            text="✕"
            fontSize={12}
            fill="white"
            width={buttonSize}
            height={buttonSize}
            align="center"
            verticalAlign="middle"
            onClick={() => onRemove(id)}
          />
        </>
      )}
    </Group>
  );
};

// 선택용 스티커 목록 (10개)
const stickerOptions = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  src: `/sticker/sticker${i + 1}.png`,
}));

export default function StickerBoard() {
  const [stickers, setStickers] = useState<Sticker[]>([]);

  const handleAddSticker = (src: string) => {
    const hasImage = ['/sticker/sticker1.png', '/sticker/sticker2.png'].includes(src);
    if (!hasImage) return;

    const newSticker: Sticker = {
      id: Date.now(),
      src,
      x: Math.random() * 400 + 50,
      y: Math.random() * 250 + 50,
      width: 80,
    };
    setStickers((prev) => [...prev, newSticker]);
  };

  const handleRemoveSticker = (id: number) => {
    setStickers((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <FlexWrapper classes="min-w-[800px] bg-primary-900 rounded-2xl p-4" gap={4}>
      {/* 보드 */}
      <div className="bg-primary-800 relative h-[400px] w-[600px] rounded-xl">
        {stickers.length === 0 && (
          <Typography
            variant="B2"
            classes="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-2 !text-primary-100 !font-semibold"
          >
            Add some stickers to get started
          </Typography>
        )}
        <Stage width={600} height={400}>
          <Layer>
            {stickers.map((sticker) => (
              <Sticker key={sticker.id} {...sticker} onRemove={handleRemoveSticker} />
            ))}
          </Layer>
        </Stage>
      </div>

      {/* 스티커 선택 영역 */}
      <FlexWrapper classes="shrink-0" direction="col" justify="between">
        <div className="grid grid-cols-12 gap-2">
          {stickerOptions.map((sticker) => {
            const hasImage = sticker.id <= 2;
            return (
              <button
                key={sticker.id}
                onClick={() => handleAddSticker(sticker.src)}
                disabled={!hasImage}
                className={`border-primary-100/20 col-span-6 flex h-[60px] w-[60px] items-center justify-center rounded-lg border p-2 transition ${
                  hasImage
                    ? 'hover:bg-primary-100/10 cursor-pointer'
                    : 'cursor-not-allowed opacity-30'
                }`}
              >
                {hasImage ? (
                  <img
                    src={sticker.src}
                    alt={`Sticker ${sticker.id}`}
                    className="h-[40px] object-contain"
                  />
                ) : (
                  <span className="text-primary-300 text-xs">Empty</span>
                )}
              </button>
            );
          })}
        </div>
        <Button variant="outline" onClick={() => setStickers([])}>
          CLEAR ALL
        </Button>
      </FlexWrapper>
    </FlexWrapper>
  );
}
