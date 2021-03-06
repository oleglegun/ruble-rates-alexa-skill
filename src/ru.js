const numbers = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']

const numbersAlter = [
    '',
    'одна',
    'две',
    'три',
    'четыре',
    'пять',
    'шесть',
    'семь',
    'восемь',
    'девять',
]

const numbersDateOrdinal = [
    '',
    'первое',
    'второе',
    'третье',
    'четвертое',
    'пятое',
    'шестое',
    'седьмое',
    'восьмое',
    'девятое',
    'десятое',
    'одиннадцатое',
    'двенадцатое',
    'тринадцатое',
    'четырнадцатое',
    'пятнадцатое',
    'шестнадцатое',
    'семнадцатое',
    'восемнадцатое',
    'девятнадцатое',
    'двадцатое',
    'двадцать первое',
    'двадцать второе',
    'двадцать третье',
    'двадцать четвертое',
    'двадцать пятое',
    'двадцать шестое',
    'двадцать седьмое',
    'двадцать восьмое',
    'двадцать девятое',
    'тридцатое',
    'тридцать первое',
]

const numbersTens = [
    '',
    'десять',
    'двадцать',
    'тридцать',
    'сорок',
    'пятьдесят',
    'шестьдесят',
    'семьдесят',
    'восемьдесят',
    'девяносто',
]

const numbersUpTo20 = [
    'десять',
    'одиннадцать',
    'двенадцать',
    'тринадцать',
    'четырнадцать',
    'пятнадцать',
    'шестнадцать',
    'семнадцать',
    'восемнадцать',
    'девятнадцать',
]

const rublePronunciation = num => {
    let result

    // number part
    if (num === 0) {
        result = 'ноль'
    } else if (num < 10) {
        result = numbers[num]
    } else if (num < 20) {
        result = numbersUpTo20[num - 10]
    } else if (num % 10 === 0) {
        result = numbersTens[num / 10]
    } else {
        result = numbersTens[parseInt(num / 10)] + ' ' + numbers[num % 10]
    }

    // currency part
    if ([11, 12, 13, 14].indexOf(num) !== -1) {
        result += ' рублей'
    } else {
        switch (num % 10) {
            case 1:
                result += ' рубль'
                break
            case 2:
            case 3:
            case 4:
                result += ' рубля'
                break
            default:
                result += ' рублей'
        }
    }
    return result
}

const kopeckPronunciation = num => {
    let result

    // number part
    if (num === 0) {
        result = 'ноль'
    } else if (num < 10) {
        result = numbersAlter[num]
    } else if (num < 20) {
        result = numbersUpTo20[num - 10]
    } else if (num % 10 === 0) {
        result = numbersTens[num / 10]
    } else {
        result = numbersTens[parseInt(num / 10)] + ' ' + numbersAlter[num % 10]
    }

    // currency part
    if ([11, 12, 13, 14].indexOf(num) !== -1) {
        result += ' копеек'
    } else {
        switch (num % 10) {
            case 1:
                result += ' копейка'
                break
            case 2:
            case 3:
            case 4:
                result += ' копейки'
                break
            default:
                result += ' копеек'
        }
    }
    return result
}

const dayPronunciation = num => {
    return numbersDateOrdinal[num]
}

module.exports = { rublePronunciation, kopeckPronunciation, dayPronunciation }
