import { Id, Senha } from "@/core/shared";
import Evento from "../model/evento";
import validarEvento from "./validateEvent";

export default function complementEvent(
  eventoParcial: Partial<Evento>
): Evento {
  const erros = validarEvento(eventoParcial);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  const evento: Evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    senha: eventoParcial.senha ?? Senha.nova(20),
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1),
  } as Evento;

  return evento;
}
