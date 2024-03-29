const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'JPY'
});

formatter.format(2500);

// v2

const number2 = 1234.5678;

const result2 = '$ ' + number2.toFixed(2);

console.log(result2);

// v3

const result3 =  (2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'JPY'
});

console.log(result3);

// v4

const result = 8765.43212.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

console.warn('$ ' + result);