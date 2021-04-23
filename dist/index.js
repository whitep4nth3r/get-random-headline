"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomHeadline = getRandomHeadline;

var _getRandomEntry = require("@whitep4nth3r/get-random-entry");

var _words = require("./words.js");

var sentenceStructures = [[_words.verbs, _words.conjunctions, _words.nouns, _words.adverbs], [_words.verbs, _words.conjunctions, _words.nouns, _words.nouns, _words.adverbs], [_words.verbs, _words.possessivePronouns, _words.nouns], [_words.verbs, _words.possessivePronouns, _words.nouns, _words.withWord, _words.nouns], [_words.verbs, _words.possessivePronouns, _words.nouns, _words.withWord, _words.adjectives, _words.nouns]];

function getRandomHeadline() {
  return (0, _getRandomEntry.getRandomEntry)(sentenceStructures).map(function (piece) {
    return (0, _getRandomEntry.getRandomEntry)(piece);
  }).join(" ");
}