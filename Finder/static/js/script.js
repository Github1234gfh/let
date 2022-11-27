"use strict";

// theme switcher
function darkmode () {
    const body = document.body
    body.style.transition = '1s'
    body.classList.toggle('dark-mode')
    body.classList.toggle('light-mode')
    localStorage.setItem('Theme', body.classList)
}

document.querySelector('.switch').addEventListener('click', darkmode)

if (localStorage.getItem('Theme') != 'dark-mode' && localStorage.getItem('Theme') != 'light-mode') {
    localStorage.setItem('Theme', 'light-mode')
}

document.body.className = localStorage.getItem('Theme')

// lang switcher 

var langArr = {
    'result1': {
        'ru': 'Результат: ',
        'en': 'Result: '
    },
    'result0': {
        'ru': '0 результатов поиска',
        'en': '0 result of search'
    },
    'euro__text': {
        'ru': 'евро',
        'en': 'euro'
    },
    'usd__text': {
        'ru': 'доллар',
        'en': 'usd'
    },
    'search__text__word': {
        'ru': 'Слова',
        'en': 'Words'
    },
    'search__text__pict': {
        'ru': 'Картинки',
        'en': 'Pictures'
    },
    'search__text__word_title' : {
        'ru': 'Слова',
        'en': 'Words'
    },
    'search__text__pict_title': {
        'ru': 'Картинки',
        'en': 'Pictures'
    },
}

if (localStorage.getItem('language') != 'en' && localStorage.getItem('language') != 'ru') {
    document.querySelector('.search__input').placeholder = 'Search';
    localStorage.setItem('language', 'en')
}

if (localStorage.getItem('language')=='ru') {
    document.querySelector('.lang__self_ru').style.color = '#772ce8'
    document.querySelector('.lang__self_en').style.color = 'inherit'
} else {
    document.querySelector('.lang__self_en').style.color = '#772ce8'
    document.querySelector('.lang__self_ru').style.color = 'inherit'
}

function ChangeLang(lang) {
    if (lang=='ru') {
        document.querySelector('.lang__self_ru').style.color = '#772ce8'
        document.querySelector('.lang__self_en').style.color = 'inherit'
    } else {
        document.querySelector('.lang__self_en').style.color = '#772ce8'
        document.querySelector('.lang__self_ru').style.color = 'inherit'
    }
    localStorage.setItem('language', lang);
    for (let key in langArr) {
        let elem = document.querySelector('.' + key)
        if (elem) {
            elem.innerHTML = langArr[key][lang];
        }
    };
};

document.querySelector('.lang__self_ru').addEventListener('click', function (event){
    ChangeLang('ru');
    document.querySelector('.search__input').placeholder = 'Поиск';
});
document.querySelector('.lang__self_en').addEventListener('click', function (event){
    ChangeLang('en');
    document.querySelector('.search__input').placeholder = 'Search';
});

if (localStorage.getItem('language') == 'en') {
    document.querySelector('.search__input').placeholder = 'Search';
} else {
    document.querySelector('.search__input').placeholder = 'Поиск';
}

for (let key in langArr) {
    let elem = document.querySelector('.' + key)
    if (elem) {
        elem.innerHTML = langArr[key][localStorage.getItem('language')];
    }
}

// find switcher 

const TextWord = document.querySelector('.search__text__word')
const TextPict = document.querySelector('.search__text__pict')
const TextWordTitle = document.querySelector('.search__text__word_title')
const TextPictTitle = document.querySelector('.search__text__pict_title')

if (localStorage.getItem('FimdSwitch') != 'word' && localStorage.getItem('FimdSwitch') != 'pict') {
    localStorage.setItem('FimdSwitch', 'word')
};

if (localStorage.getItem('FimdSwitch') == 'word') {
    TextPict.style.display = 'block'
    TextWord.style.display = 'none'
    TextWordTitle.style.display = 'block'
    TextPictTitle.style.display = 'none'
} else {
    TextPict.style.display = 'none'
    TextWord.style.display = 'block'
    TextWordTitle.style.display = 'none'
    TextPictTitle.style.display = 'block'
}

function FindSwitch(item) {
    if (item == 'pict') {
        TextPict.style.display = 'none'
        TextWord.style.display = 'block'
        TextWordTitle.style.display = 'none'
        TextPictTitle.style.display = 'block'
        localStorage.setItem('FimdSwitch', 'pict')
    } else {
        TextPict.style.display = 'block'
        TextWord.style.display = 'none'
        TextWordTitle.style.display = 'block'
        TextPictTitle.style.display = 'none'
        localStorage.setItem('FimdSwitch', 'word')
    }
}

TextWord.addEventListener('click', function (event) {
    FindSwitch('word')});
TextPict.addEventListener('click', function (event) {
    FindSwitch('pict')});

// color course     

if (document.querySelector('.usd')) {
    if (document.querySelector('.usd').innerHTML.includes('+')){
        document.querySelector('.usd').style.color = '#008000'
        document.querySelector('.euro').style.color = '#ff0000'
    } else if ((document.querySelector('.euro').innerHTML.includes('+'))){
        document.querySelector('.usd').style.color = '#ff0000'
        document.querySelector('.euro').style.color = '#008000'
    } else {
        document.querySelector('.usd').style.color = '#ff0000'
        document.querySelector('.euro').style.color = '#ff0000'
    }
};
