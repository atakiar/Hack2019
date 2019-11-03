from nltk.tokenize import sent_tokenize, word_tokenize
import sys

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

    op = ""
    for sentence in results:
        op += " ".join(sentence[0][:-1])
        op += sentence[0][-1] + " "
    return op

def main(*paragraphs):
    print(tokenize(paragraphs))
    sys.stdout.flush()

if __name__ == "__main__":
   main(sys.argv[1:])
