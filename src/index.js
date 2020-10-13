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
    // write your solution here
    let str = '';
	
	for (let j = expr.length; j > 0; j--) {
		let tempStr = expr.slice(0, 10);
		let tempSymbols = '';
		let morseSymbols = '';
		
		if (tempStr === '**********') {
			str += ' ';
		}
		
		for(let i = 10; i > 1; i--) {
			tempSymbols = tempStr.slice(0, 2);
			if (tempSymbols == 10) {
				morseSymbols += '.';
				tempStr = tempStr.slice(2);
			} else if (tempSymbols == 11) {
				morseSymbols += '-';
				tempStr = tempStr.slice(2);
			} else {
				tempStr = tempStr.slice(1);
			}
		}
		
		if (morseSymbols) {
			str += MORSE_TABLE[morseSymbols];
		}
		
		
		
		expr = expr.slice(10);
    }
    
    return str;
}

module.exports = {
    decode
}