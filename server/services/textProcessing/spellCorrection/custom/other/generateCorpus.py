# Inspiration from:
# https://github.com/makcedward/nlp/blob/master/aion/util/spell_check.py

import re

def generateCorpus():
    corpus = []

    with open('data.txt', 'r') as file:
        corpus = re.findall(r'\w+', file.read().lower())

    with open('corpus.txt', 'w') as file:
        for token in corpus:
            file.write(f"{token}\n")

generateCorpus()
