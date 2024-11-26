import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";

export default function PaginaEventos() {
  return (
    <main className="grid grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="flex flex-col bg-zinc-800 w-full rounded-lg overflow-hidden"
        >
          <div className="relative w-full h-44">
            <Image
              src={evento.imagem}
              alt={evento.nome}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-7 gap-5">
            <span className="text-lg font-black">{evento.nome}</span>
            <span className="flex-1 text-sm text-zinc-400">
              {evento.descricao}
            </span>
            <div className="flex gap-5">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="flex-1 botao vermelho"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="flex-1 botao verde"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
