'use client';

import { Stage, Layer, Image as KonvaImage, Group, Rect, Text } from 'react-konva';
import useImage from 'use-image';
import { useState } from 'react';
import FlexWrapper from '../layout/FlexWrapper';
import Button from '../components/Button';

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

  if (!image) return null;

  const aspectRatio = image.height / image.width;
  const height = width * aspectRatio;

  const buttonSize = 18;

  return (
    <Group x={x} y={y} draggable>
      {/* Sticker image */}
      <KonvaImage image={image} width={width} height={height} />

      {/* X button background */}
      <Rect
        x={width - buttonSize / 2}
        y={-buttonSize / 2}
        width={buttonSize}
        height={buttonSize}
        fill="rgba(0,0,0,0.5)"
        cornerRadius={4}
        onClick={() => onRemove(id)}
      />
      {/* X button text */}
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
    <FlexWrapper classes="bg-primary-900 rounded-2xl p-4" gap={4}>
      {/* 보드 */}
      <Stage width={600} height={400} className="bg-primary-800 rounded-xl">
        <Layer>
          {stickers.map((sticker) => (
            <Sticker key={sticker.id} {...sticker} onRemove={handleRemoveSticker} />
          ))}
        </Layer>
      </Stage>

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
