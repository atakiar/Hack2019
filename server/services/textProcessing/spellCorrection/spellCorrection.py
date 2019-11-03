# Inspiration from:
# https://norvig.com/spell-correct.html
# https://github.com/makcedward/nlp/blob/master/aion/util/spell_check.py
# https://towardsdatascience.com/language-models-spellchecking-and-autocorrection-dd10f739443c
# Damerau-Levenshtein distance

import sys
from collections import Counter

def loadCorpus(option):
    if option == 1:
        result = {}
        with open('corpus2.txt') as file:
            for line in file:
                word, num = line.split()
                result[word] = int(num)
        return Counter(result)
    else:
        result = Counter(open('corpus.txt').read().splitlines())
        return result

CORPUS = loadCorpus(1)
CORPUS_COUNT = sum(CORPUS.values())
LETTERS = 'abcdefghijklmnopqrstuvwxyz'

def edit1(word):
    if not word: return set()

    splits = [(word[:i], word[i:]) for i in range(len(word) + 1)]

    deletes = [l + r[1:] for l, r in splits if r]
    transposes = [l + r[1] + r[0] + r[2:] for l, r in splits if len(r) > 1]
    replaces = [l + c + r[1:] for l, r in splits if r for c in LETTERS]
    inserts = [l + c + r for l, r in splits for c in LETTERS]

    return set(deletes + transposes + replaces + inserts)

def edit2(word):
    return (result for item in edit1(word) for result in edit1(item))

def known(words):
    return set(word for word in words if word in CORPUS)

def candidates(word):
    knownResult = known([word])
    edit1Result = known(edit1(word))
    edit2Result = known(edit2(word))

    return (knownResult or edit1Result or edit2Result or [word])

def probability(word):
    return CORPUS[word] / CORPUS_COUNT

def spellCorrection(word):
    return max(candidates(word), key=probability)

def main(word):
    print(spellCorrection(word))
    sys.stdout.flush()

if __name__ == "__main__":
   main(sys.argv[1])
