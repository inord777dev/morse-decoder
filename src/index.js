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
    let letters = expr.match(/.{1,10}/g);
    let message = '';
    letters.forEach(letter => {
        if (letter == "**********") {
            message += " ";
        } else {
            let sign = "";
            for (let index = 0; index < 5; index++ ) {
                if (letter[index*2] != "0" || letter[index*2 + 1] != "0") {
                    sign += letter[index*2] == "1" && letter[index*2 + 1] == "1" ? '-' : '.';
                }
            }
            message += MORSE_TABLE[sign];
        }
    }); 
    return message;
}

module.exports = {
    decode
}