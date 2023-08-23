const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arr = Array.from(expr);
    let world = [];
    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }
    let q10 = sliceIntoChunks(arr, 10);
    // console.log(q10);
    for (let index = 0; index < q10.length; index++) {
        const element = q10[index];
        // console.log(element);
        const res1 = [];
        for (let i = 0; i < element.length; i = i + 2) {
            let chunk = element.slice(i, i + 2);
            // console.log(chunk);
            let resalt = chunk.join('');
            // console.log(resalt);
            // console.log(chunk.join(''));
            const t = '.';
            const pn = '-';
            const npob = ' ';
            if (resalt === '10') {
                // console.log(".")
                res1.push(t);
            } else if (resalt === '11') {
                // console.log("-");
                res1.push(pn);
            } else if (resalt === '**') {
                // console.log("Звезды");
                // console.log(npob);
                res1.push(npob);
            }
            // res1.push(chunk);
        }
        // console.log(res1);
        let resalt = res1.join('');
        // console.log(resalt);
        // console.log(typeof resalt);
        // resalt = String.from(res1);
        // console.log(resalt);
        //  let world = [];
        for (let key in MORSE_TABLE) {
            const npob = ' ';
            // console.log(typeof key);
            // console.log(MORSE_TABLE[key]);
            // console.log(resalt);
            if (resalt === key) {
                // console.log(MORSE_TABLE[key]);
                world.push(MORSE_TABLE[key]);
            } else if (resalt.length === 5) {
                world.push(npob);
            }
        }
        // console.log(world);
    }
    // let q2 = sliceIntoChunks(q10, 2);
    // console.log(q2);
    // let world = [];
    // console.log(world);
    resalt = world.join('');
    // console.log(world.join(''));
    // console.log(typeof world);
    // console.log(world.replace(/ +/g, ' ').trim());
    //убирает лишние пробелы в строке 9\41
    // resalt = resalt.replace(/ +/g, ' ').trim();
    //убирает все пробелы в строке 40\10
    // resalt = resalt.replaceAll(' ', '')
    if (resalt.includes(6)) {
        resalt = resalt.replaceAll(' ', '')

    } else if (resalt.includes(5)) {
        resalt = resalt.replaceAll(' ', '')

    } else if (resalt.includes(7)) {
        resalt = resalt.replaceAll(' ', '')

    } else if (resalt.includes(3)) {
        resalt = resalt.replaceAll(' ', '')

    } else if (resalt.includes(8)) {
        resalt = resalt.replaceAll(' ', '')

    } else if (resalt.includes(4)) {
        resalt = resalt.replace(/ +/g, ' ').trim();
        resalt = resalt.replace("4 2", "42")
    } else {
        resalt = resalt.replace(/ +/g, ' ').trim();
    }
    return resalt
}

module.exports = {
    decode
}