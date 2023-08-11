const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using for...in
for (let key in student) { 
    let value;

    // get the value
    value = student[key];

    console.log(key + " - " +  value); 
}

// v2
const student2 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using Object.entries
// using for...of loop
for (let [key, value] of Object.entries(student2)) {
    console.log(key + " - " +  value);
}