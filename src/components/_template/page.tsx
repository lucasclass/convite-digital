export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export default function Page(props: PageProps) {
  return (
    <main className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
      <div className={props.className}>{props.children}</div>
    </main>
  );
}
