import { getRandomEntry } from "@whitep4nth3r/get-random-entry";
import {
  verbs,
  conjunctions,
  nouns,
  adverbs,
  possessivePronouns,
  withWord,
  adjectives,
} from "./words.js";

const sentenceStructures = [
  [verbs, conjunctions, nouns, adverbs],
  [verbs, conjunctions, nouns, nouns, adverbs],
  [verbs, possessivePronouns, nouns],
  [verbs, possessivePronouns, nouns, withWord, nouns],
  [verbs, possessivePronouns, nouns, withWord, adjectives, nouns],
];

export function getRandomHeadline() {
  return getRandomEntry(sentenceStructures)
    .map((piece) => getRandomEntry(piece))
    .join(" ");
}
