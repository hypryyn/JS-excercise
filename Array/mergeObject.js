// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);


// object 3
const person2 = {
    name: 'Jack',
    age:26
}

// object 4
const student2 = {
    gender: 'male'
}

// merge two objects
const newObj2 = {...person2, ...student2};

console.log(newObj2);