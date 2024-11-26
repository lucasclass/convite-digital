import Evento from "./model/evento";
import Convidado from "./model/evento";

import complementEvent from "./functions/complementEvent";
import complementGuest from "./functions/complementGuest";
import createEmptyEvent from "./functions/createEmptytEvent";
import createEmptyGuest from "./functions/createEmptyGuest";

export type { Evento, Convidado };

export { complementEvent, complementGuest, createEmptyEvent, createEmptyGuest };
