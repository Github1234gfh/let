
import requests 

def parse():
    url = 'https://www.banki.ru/products/currency/cb/'

    headers = {
        'Accept': '*/*',
        'User-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',
    }

    try:
        req = requests.get(url, headers=headers)
        src = req.text
        
        with open('index.html','w' ,encoding='utf-8') as file:
            file.write(src)
        print('Working')

    except:
        print('Not working')
