export default function ComponentsLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col p-6">{props.children}</div>
  );
}
