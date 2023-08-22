const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);

// v2

const number2 = 1234.5678;

const result2 = '$ ' + number.toFixed(2);

console.log(result2);

// v3

const result3 =  (2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(result3);