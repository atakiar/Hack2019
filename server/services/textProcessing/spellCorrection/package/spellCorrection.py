# Inspiration from:
# https://github.com/wolfgarbe/SymSpell
# https://symspellpy.readthedocs.io/en/latest/index.html

import sys
import nltk
import pkg_resources
from symspellpy import SymSpell
from nltk.tokenize import sent_tokenize

sym_spell = SymSpell(max_dictionary_edit_distance=2, prefix_length=7)

def initialize():
    nltk.download('punkt')

    dictionary_path = pkg_resources.resource_filename("symspellpy", "frequency_dictionary_en_82_765.txt")
    bigram_path = pkg_resources.resource_filename("symspellpy", "frequency_bigramdictionary_en_243_342.txt")
    sym_spell.load_dictionary(dictionary_path, term_index=0, count_index=1)
    sym_spell.load_bigram_dictionary(bigram_path, term_index=0, count_index=2)

def tokenize(paragraph):
    sentences = sent_tokenize(paragraph)
    return sentences

def spellCorrection(sentence):
    suggestions = sym_spell.lookup_compound((sentence), max_edit_distance=2)
    suggestion = suggestions[0]
    return suggestions[0]._term

def main(text):
    result = ''

    initialize()

    sentences = tokenize(text)
    for sentence in sentences:
        result += spellCorrection(sentence)

    print(result)
    sys.stdout.flush()

if __name__ == "__main__":
   main(sys.argv[1])
