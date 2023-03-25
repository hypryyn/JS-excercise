let data = [
    {
        name : 'Jim',
        age : '35'
    },{
        name : 'Mile',
        age : '25'
    },{
        name : 'Sam',
        age : '27'
    },{
        name : 'Tim',
        age : '38'
    },{
        name : 'Don',
        age : '28'
    },{
        name : 'Kei',
        age : '29'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
