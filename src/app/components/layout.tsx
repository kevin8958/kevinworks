import Snb from '@/components/layout/Snb';

export default function ComponentsLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100dvh-60px)] w-full flex-col">
      <div className="relative w-full pt-[60px]">
        <Snb />
        <div className="relative m-auto w-[1400px] pl-[260px]">{props.children}</div>
      </div>
    </div>
  );
}
