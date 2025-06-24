export default function ComponentsLayout(props: { children: React.ReactNode }) {
  return <div className="flex min-h-[calc(100dvh-80px)] w-full flex-col p-6">{props.children}</div>;
}
