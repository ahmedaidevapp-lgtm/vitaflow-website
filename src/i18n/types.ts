import type { fr } from "./dictionaries/fr";

/**
 * The shape every language must provide. French is the source of truth: add a key
 * to `fr.ts` first and TypeScript will flag the other dictionaries until they match.
 */
export type Dict = typeof fr;
