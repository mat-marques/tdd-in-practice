const MAP_ROMAN = [
    { key: 'M', value: 1000 },
    { key: 'CM', value: 900 },
    { key: 'D', value: 500 },
    { key: 'CD', value: 400 },
    { key: 'C', value: 100 },
    { key: 'XC', value: 90 },
    { key: 'L', value: 50 },
    { key: 'XL', value: 40 },
    { key: 'X', value: 10 },
    { key: 'IX', value: 9 },
    { key: 'V', value: 5 },
    { key: 'IV', value: 4 },
    { key: 'I', value: 1 }
];

function convertDecimalToRoman(integer: number): string {
    if (integer === 0) throw new Error("The zero value is not available in roman numerical system.");
    let result: string = '';
    let decimalNumber: number = integer;
    for (const roman of MAP_ROMAN) {
        let quotient: number = Math.floor(decimalNumber / roman.value);

        if (quotient !== 0) {
            result += roman.key.repeat(quotient);
        }

        decimalNumber %= roman.value;
        if (decimalNumber === 0) return result;
    }

    return result;
}


export default convertDecimalToRoman;