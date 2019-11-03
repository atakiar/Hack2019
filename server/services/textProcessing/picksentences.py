from nltk.tokenize import sent_tokenize, word_tokenize
from pprint import pprint
import string
import random

def tokenize(paragraphs):
  paras = []
  for p in paragraphs:
    for i,s in enumerate(sent_tokenize(p)):
      token = word_tokenize(s)
      token.append({"length":len(token), "score": 0, "full": 0})
      if len(paras) > i:
        paras[i].append(token)
      else:
        paras.append([token])
  
  for i in range(len(paras)):
    p = paras[i]
    for base_index in range(len(p)):
      for compare_index in range(len(p)):
        if compare_index != base_index:
          last_compared = -float("inf")
          for word in p[compare_index][:-1]:
            if word in p[base_index] and p[base_index].index(word)>last_compared:
              p[base_index][-1]["score"] += 1
              if word == p[compare_index][-2]:
                p[base_index][-1]["full"] += 1
            else:
              break

  results = []
  for i in range(len(paras)):
    p = paras[i]
    m_score = -1
    m_s = []
    for sen in p:
      scores = sen[-1]
      c_score = (scores["score"]/scores["length"] + scores["full"]) * scores["length"]
      if c_score > m_score:
        m_s = sen[:-1]
        m_score = c_score
    if len(results) > i:
      results[i].append(m_s)
    else:
      results.append([m_s])
  
  return results
      
          
          
peepee = ["I ate a potato. I like potatoes. Potatoes yummy.", "I a potato. I like potatoes. Potatoes are yummy.", "I ate potato. like potatoes. Potatoes are yummy."]
print(tokenize(peepee))

s = [""" CHAPTER 1. Loomings.

There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.
"""]

poopoo = s[0]
for j in range(10):
  copy = poopoo
  for i in range(25):
    x = random.randint(0,len(s[0]))
    if x%4 == 0:
      copy = copy[:x] + random.choice(string.ascii_letters + " ") + copy[x:]
    elif x%3 == 0:
      copy = copy[:x] + copy[x+1:]
  s.append(copy)

print(tokenize(s))



      