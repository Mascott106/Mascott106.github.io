// ASCII Art font (simple block letters)
const asciiFont = {
    'A': ['  A  ', ' A A ', 'AAAAA', 'A   A', 'A   A'],
    'B': ['BBB  ', 'B  B ', 'BBB  ', 'B  B ', 'BBB  '],
    'C': [' CCC ', 'C   C', 'C    ', 'C   C', ' CCC '],
    'D': ['DDD  ', 'D  D ', 'D   D', 'D  D ', 'DDD  '],
    'E': ['EEEEE', 'E    ', 'EEE  ', 'E    ', 'EEEEE'],
    'F': ['FFFFF', 'F    ', 'FFF  ', 'F    ', 'F    '],
    'G': [' GGG ', 'G    ', 'G GGG', 'G   G', ' GGG '],
    'H': ['H   H', 'H   H', 'HHHHH', 'H   H', 'H   H'],
    'I': ['IIIII', '  I  ', '  I  ', '  I  ', 'IIIII'],
    'J': ['JJJJJ', '   J ', '   J ', 'J  J ', ' JJ  '],
    'K': ['K  K ', 'K K  ', 'KK   ', 'K K  ', 'K  K '],
    'L': ['L    ', 'L    ', 'L    ', 'L    ', 'LLLLL'],
    'M': ['M   M', 'MM MM', 'M M M', 'M   M', 'M   M'],
    'N': ['N   N', 'NN  N', 'N N N', 'N  NN', 'N   N'],
    'O': [' OOO ', 'O   O', 'O   O', 'O   O', ' OOO '],
    'P': ['PPP  ', 'P  P ', 'PPP  ', 'P    ', 'P    '],
    'Q': [' QQQ ', 'Q   Q', 'Q   Q', 'Q  Q ', ' QQ Q'],
    'R': ['RRR  ', 'R  R ', 'RRR  ', 'R R  ', 'R  RR'],
    'S': [' SSS ', 'S    ', ' SSS ', '    S', ' SSS '],
    'T': ['TTTTT', '  T  ', '  T  ', '  T  ', '  T  '],
    'U': ['U   U', 'U   U', 'U   U', 'U   U', ' UUU '],
    'V': ['V   V', 'V   V', 'V   V', ' V V ', '  V  '],
    'W': ['W   W', 'W   W', 'W W W', 'WW WW', 'W   W'],
    'X': ['X   X', ' X X ', '  X  ', ' X X ', 'X   X'],
    'Y': ['Y   Y', ' Y Y ', '  Y  ', '  Y  ', '  Y  '],
    'Z': ['ZZZZZ', '   Z ', '  Z  ', ' Z   ', 'ZZZZZ'],
    '0': [' 000 ', '0  00', '0 0 0', '00  0', ' 000 '],
    '1': ['  1  ', ' 11  ', '  1  ', '  1  ', ' 111 '],
    '2': [' 222 ', '2   2', '   2 ', '  2  ', '22222'],
    '3': ['3333 ', '    3', ' 333 ', '    3', '3333 '],
    '4': ['4  4 ', '4  4 ', '44444', '   4 ', '   4 '],
    '5': ['55555', '5    ', '5555 ', '    5', '5555 '],
    '6': [' 666 ', '6    ', '6666 ', '6   6', ' 666 '],
    '7': ['77777', '   7 ', '  7  ', ' 7   ', '7    '],
    '8': [' 888 ', '8   8', ' 888 ', '8   8', ' 888 '],
    '9': [' 999 ', '9   9', ' 9999', '    9', ' 999 '],
    ' ': ['     ', '     ', '     ', '     ', '     '],
    '!': ['  !  ', '  !  ', '  !  ', '     ', '  !  '],
    '?': [' ??? ', '    ?', '  ?? ', '     ', '  ?  '],
};

function convertToAsciiArt() {
    const input = document.getElementById('ascii-input').value.toUpperCase();
    let outputLines = ['', '', '', '', ''];
    for (let char of input) {
        const art = asciiFont[char] || asciiFont[' '];
        for (let i = 0; i < 5; i++) {
            outputLines[i] += art[i] + '  ';
        }
    }
    document.getElementById('output').innerHTML = `<pre style='font-family:monospace;font-size:1.1rem;'>${outputLines.join('\n')}</pre>`;
}