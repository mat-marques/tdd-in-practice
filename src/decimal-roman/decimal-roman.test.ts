import convertDecimalToRoman from "./Convert";

test('Zero to Roman', () => {
    expect(() => convertDecimalToRoman(0)).toThrow();
});

test('1 until 9 to Roman', () => {
    let results: string[] = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    for (let i = 1; i < results.length; i++) {
        expect(convertDecimalToRoman(i)).toBe(results[i - 1]);
    }
});

test('10 until 109 to Roman', () => {
    let results: string[] = [
        'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX',
        'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX',
        'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX',
        'XL', 'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX',
        'L', 'LI', 'LII', 'LIII', 'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX',
        'LX', 'LXI', 'LXII', 'LXIII', 'LXIV', 'LXV', 'LXVI', 'LXVII', 'LXVIII', 'LXIX',
        'LXX', 'LXXI', 'LXXII', 'LXXIII', 'LXXIV', 'LXXV', 'LXXVI', 'LXXVII', 'LXXVIII', 'LXXIX',
        'LXXX', 'LXXXI', 'LXXXII', 'LXXXIII', 'LXXXIV', 'LXXXV', 'LXXXVI', 'LXXXVII', 'LXXXVIII', 'LXXXIX',
        'XC', 'XCI', 'XCII', 'XCIII', 'XCIV', 'XCV', 'XCVI', 'XCVII', 'XCVIII', 'XCIX',
        'C', 'CI', 'CII', 'CIII', 'CIV', 'CV', 'CVI', 'CVII', 'CVIII', 'CIX'
    ];
    for (let i = 0; i < results.length; i++) {
        expect(convertDecimalToRoman(i + 10)).toBe(results[i]);
    }
});

test('Hundreds', () => {
    expect(convertDecimalToRoman(200)).toBe('CC');
    expect(convertDecimalToRoman(299)).toBe('CCXCIX');
    expect(convertDecimalToRoman(300)).toBe('CCC');
    expect(convertDecimalToRoman(400)).toBe('CD');
    expect(convertDecimalToRoman(600)).toBe('DC');
    expect(convertDecimalToRoman(700)).toBe('DCC');
    expect(convertDecimalToRoman(800)).toBe('DCCC');
    expect(convertDecimalToRoman(900)).toBe('CM');
});

test('Thousends', () => {
    expect(convertDecimalToRoman(1000)).toBe('M');
    expect(convertDecimalToRoman(2000)).toBe('MM');
    expect(convertDecimalToRoman(3000)).toBe('MMM');
    expect(convertDecimalToRoman(3999)).toBe('MMMCMXCIX');
});