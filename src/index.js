const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbolsArray = [], temp = [], words = [];
    for (let i = 0; i < expr.length / 2; i++) {
        symbolsArray[i] = expr.slice(2 * i, 2 * (i + 1));
    }
    for (let current = 0; current < symbolsArray.length; current++) {
        if (symbolsArray[current] == '11') {
            symbolsArray[current] = '-';
        } else if (symbolsArray[current] == '10') {
            symbolsArray[current] = '.';
        } else if (symbolsArray[current] == '00') {
            symbolsArray[current] = ' ';
        } else {
            symbolsArray[current] = null;
        }
    };
    for (let i = 0; i < symbolsArray.length / 5; i++) {
        temp[i] = symbolsArray.slice(5 * i, 5 * (i + 1)).join('')
    }
    for (let index = 0; index < temp.length; index++) {
        if (temp[index] == '') {
            words[index] = '*';
        } else {
            words[index] = MORSE_TABLE[temp[index].trim()];
        }
    }
    return words.join('').replace(/\*+/g, " ");
}

module.exports = {
    decode
}