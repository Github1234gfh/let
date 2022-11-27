import re
import os
from django.templatetags.static import static


def find_word(word):
    with open(f"{os.getcwd()}{static('text/text.txt')}") as file:
        text = re.split(r'[.|?|!|]', file.read())
        signs = ["'", '"', ")", "(", ";", ':', "_", "[", "]"]
        sentence_text = []
        for sentence in text:
            sentence = sentence.strip(str(signs)).split()
            for item in sentence:
                if word.lower() == item.lower():
                    sentence_text.append(" ".join(sentence))
    return sentence_text