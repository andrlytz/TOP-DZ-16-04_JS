const words = ['кошка','мышка','собака']
const vop = ['У порога плачет, коготки прячет, тихо в комнату войдёт, Замурлычет, запоёт.','Живет в норке, грызет корки. Короткие ножки; боится кошки.','С хозяином дружит, дом сторожит, живёт под крылечком, а хвост колечком.']

let word = []
let slovo =''
let secret = []
let s = 0
let pomidor = '<img id="pomidor" src="https://saffinvest.com/wp-content/uploads/2020/07/salca-1.png" alt="" height="60px">';
let shljpa = '<img id="shljpa" src="https://static.tildacdn.com/tild3337-3661-4863-a136-306233316430/s1200.png" alt="" height="60px">';
let tatoo = '<img id="tatoo" src="https://gas-kvas.com/uploads/posts/2023-02/1675439491_gas-kvas-com-p-fonovie-risunki-tatuirovok-15.png" alt="" height="45px">';
let ochki = '<img id="ochki" src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614632432_17-p-fon-dlya-ochkov-fotoshop-20.png" alt="" width="60px">';
let ruki = '<img id="ruki" src="https://img.icons8.com/color/12x/christmas-mitten.png" alt="" height="80px">';
let pop = 1

function start() {
    let r = Math.floor(Math.random()*3)
    console.log(word[r])
    $('#vopros').text(vop[r])
    word = words[r].split('')
    slovo = words[r]
    console.log(word)
    while (secret.length < word.length) {
        secret.push('*')
    }
    console.log(secret)
    console.log(slovo)
    $('#slovo').text(secret.join(' '))
    
}

$(document).ready(start)

function f1() {
    let bukva = $('input').val()
    if (pop < 4) {
        if (word.indexOf(bukva) != -1) {
            for (w in word) {
                if (bukva == word[w]){
                    console.log('est')
                    secret[w] = bukva
                }
            }
            $('#slovo').text(secret.join(' '))
            alert('Вам +100 очков!!!')
            prov()
            s += 100;
            $('input').val('')
        }
        else {
            alert('Такой буквы нет!')
            pop++
            $('input').val('')
        }
        
    }
    else { 
        alert ('Попытки кончались!')
        $('input').prop('disabled', true)
        $('#but1').prop('disabled', true)
        $('#but2').prop('disabled', true)
    }
    // for (w in word) {
    //     if (bukva == word[w]){
    //         console.log('est')
    //         secret[w] = bukva
    //     }
    // }
    // $('#slovo').text(secret.join(' '))
    // alert('Вам +100 очков!!!')
    // prov()
    // s += 100;
    $('#out').text('Счет: ' +s)
    console.log(word)
    console.log(word)
    console.log(secret)
}

$('#but1').click(f1)

function prov() {
    if (secret.indexOf('*') == -1) {
        console.log('win')
        $('input').prop('disabled', true)
        $('#but1').prop('disabled', true)
        $('#but2').prop('disabled', true)
    }
}

function f2() {
    let variant = prompt('Напишите слово')
    console.log(variant)
    if (variant = slovo) {
        alert('Вы выйграли, зачислено 500 очков!')
        $('#slovo').text(slovo)
        s += 500
        $('input').prop('disabled', true)
        $('#but1').prop('disabled', true)
        $('#but2').prop('disabled', true)
    }
    else {
        alert('Ответ не правильный!')
    }
    $('#out').text('Счет: ' +s)
}

$('#but2').click(f2)

let result = ''

function f3() {
    if (s >= 100) {
        result += pomidor
        s = s-100
        $('#out').text('Счет: ' +s)
        $('#out2').html(result)
    }
    else {
        alert ('Нету очков!')
    }
}
$('#but3').click(f3)

function f4() {
    if (s >= 100) {
        result += shljpa
        s = s-100
        $('#out').text('Счет: ' +s)
        $('#out2').html(result)
    }
    else {
        alert ('Нету очков!')
    }
}
$('#but4').click(f4)

function f5() {
    if (s >= 100) {
        result += tatoo
        s = s-100
        $('#out').text('Счет: ' +s)
        $('#out2').html(result)
    }
    else {
        alert ('Нету очков!')
    }
}
$('#but5').click(f5)

function f6() {
    if (s >= 100) {
        result += ochki
        s = s-100
        $('#out').text('Счет: ' +s)
        $('#out2').html(result)
    }
    else {
        alert ('Нету очков!')
    }
}
$('#but6').click(f6)

function f7() {
    if (s >= 100) {
        result += ruki
        s = s-100
        $('#out').text('Счет: ' +s)
        $('#out2').html(result)
    }
    else {
        alert ('Нету очков!')
    }
}
$('#but7').click(f7)



