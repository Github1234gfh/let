
from bs4 import BeautifulSoup

def main():
    try:
        with open('index.html',encoding='utf8') as file:
            src = file.read()

        soup = BeautifulSoup(src, 'lxml')
        table = soup.find_all('td')
        clear_table = []

        for item in (*table[3:5], *table[8:10]):
            clear_table.append(item.text.strip()[:5])

        for i in table[:10]:
            item_href = i.find('a')
            if item_href:
                clear_table.append('https://www.banki.ru' + item_href.get('href'))

        clear_dict = {
            'Usd': clear_table[0],
            'DifferenceUsd': clear_table[1],
            'UrlUsd': clear_table[4],
            'Euro': clear_table[2],
            'DifferenceEuro': clear_table[3],
            'UrlEuro': clear_table[5],
        }
        
        return clear_dict
    except:
        print('html file is not found')