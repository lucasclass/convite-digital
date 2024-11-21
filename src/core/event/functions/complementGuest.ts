import Convidado from "../model/convidado";
import validarConvidado from "./validateEvent";

export default function complementGuest(
  convidado: Partial<Convidado>
): Convidado {
  const erros = validarConvidado(convidado);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
  const temAcompanhantes =
    convidado.possuiAcompanhantes &&
    convidado.confirmado &&
    qtdeAcompanhantes > 0;

  const convidadoAtualizado = {
    ...convidado,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes,
  };

  return convidadoAtualizado as Convidado;
}
