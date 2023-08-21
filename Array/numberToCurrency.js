const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);

// v2

const number = 1234.5678;

const result = '$ ' + number.toFixed(2);

console.log(result);