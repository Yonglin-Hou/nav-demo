var keys = {
    '0': {
        0: 'q',
        1: 'w',
        2: 'e',
        3: 'r',
        4: 't',
        5: 'y',
        6: 'u',
        7: 'i',
        8: 'o',
        9: 'p',
        length: 10
    },
    '1': {
        0: 'a',
        1: 's',
        2: 'd',
        3: 'f',
        4: 'g',
        5: 'h',
        6: 'j',
        7: 'k',
        8: 'l',
        length: 9
    },
    '2': {
        0: 'z',
        1: 'x',
        2: 'c',
        3: 'v',
        4: 'b',
        5: 'n',
        6: 'm',
        length: 7
    },
    'length': 3
}
var hash = {
    'q': 'http://www.qq.com/',
    'w': 'https://www.weibo.com',
    'e': 'https://www.ele.me/home/',
    'r': 'https://www.renren.com',
    't': 'https://www.t.tt',
    'y': 'http://www.youku.com/',
    'u': undefined,
    'i': 'https://www.iqiyi.com',
    'o': undefined,
    'p': undefined,
    'a': 'http://www.acfun.cn/',
    's': 'http://www.sohu.com/',
    'd': 'https://www.douyu.com',
    'f': undefined,
    'g': 'https://www.google.com',
    'h': undefined,
    'j': 'https://www.jd.com',
    'k': undefined,
    'l': 'https://www.linkedin.com',
    'z': 'https://www.zhihu.com',
    'x': undefined,
    'c': 'http://www.chinadaily.com.cn/',
    'v': 'https://www.v2ex.com',
    'b': 'https://www.bilibili.com',
    'n': undefined,
    'm': 'http://www.dotamax.com/'
}
var hashInLocalStorage = JSON.parse(localStorage.getItem('xxx') || 'null')
if (hashInLocalStorage) {
    hash = hashInLocalStorage
}
var index = 0
while (index < keys['length']) {
    var div = document.createElement('div')
    div.className = 'row'
    keyboard.appendChild(div)

    row = keys[index]
    index2 = 0
    while (index2 < row['length']) {
        kbd = document.createElement('kbd')
        kbd.className = 'key'
        div.appendChild(kbd)
        span = document.createElement('span')
        kbd.appendChild(span)
        span.textContent = row[index2]
        span.className = 'text'
        button = document.createElement('button')
        kbd.appendChild(button)
        button.textContent = 'edit'
        button.id = row[index2]
        img = document.createElement('img')
        if (hash[row[index2]]) {
            img.src = hash[row[index2]] + '/favicon.ico'
        }else{
            img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }

        kbd.appendChild(img)
        index2 = index2 + 1
    }
    index = index + 1
}
keyboard.onclick = function (click) {
    key = click['target']['id']
    newWebsite = prompt('请输入新的网址')
    hash[key] = newWebsite
    localStorage.setItem('xxx', JSON.stringify(hash))
}
document.onkeypress = function (keyPress) {
    key = keyPress['key']
    webSite = hash[key]
    //location.href = webSite
    window.open(webSite, '_blank')
}