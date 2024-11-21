import { Id } from "@/core/shared";
import Convidado from "../model/convidado";

export default function createEmptyGuest(): Partial<Convidado> {
  return {
    id: Id.novo(),
    nome: "",
    email: "",
    confirmado: true,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0,
  };
}
