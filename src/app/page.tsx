import LogoLarge from "@/components/_template/logoLarge";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-[url('/background-elementos.svg')] bg-cover gap-10">
      <div className="flex flex-col items-center gap-4">
        <LogoLarge />
        <p className="text-zinc-500 font-light w-96 leading-6">
          Crie e gerencie o convite do seu evento de forma rápida e fácil, sem
          complicações!
        </p>
      </div>
      <Link href="/evento" className="botao azul text-lg">
        Crie o seu Evento
      </Link>
    </main>
  );
}
