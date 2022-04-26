//Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with
let studentData = [
    { name : 'Jibon', id: 1,age: 24, skill : 'MERN Developer', gender : 'Male', address : 'narayangonj',price : 600},
    { name : 'Rasel', id: 2,age: 22, skill :'wordpress Developer',gender : 'Male', address :'mirpur',price : 1000},
    { name : 'Sajib', id: 3, age:20, skill :'Wordpress Developer',gender : 'Male',address : 'uttra',price : 1000},
    { name : 'Fatema',id:  4,age: 27,skill : 'Shopify Developer', gender :'Female', address :'uttra',price : 800},
    { name : 'Limon', id: 5, age:26, skill :'MERN Developer', gender :'Male',address : 'mirpur',price : 600},
    { name : 'purnima',id:  6,age: 18,skill : 'wordpress Developer', gender :'Female', address :'narayangonj',price : 600},
    { name : 'rajib', id: 7, age:25, skill :'Shopify Developer',gender : 'Male',address : 'mirpur',price : 800},
    { name : 'mukta', id: 8, age: 15,skill : 'Shopify Developer', gender :'Female', address :'uttra',price : 600},
    { name : 'noyon', id: 9, age : 24,skill : 'MERN Developer', gender : 'Male',address : 'narayangonj',price : 600},
    { name : 'sornali', id: 10, age: 28,skill : 'Wordpress Developer',gender : 'Female', address :'mirpur', price : 1000},
];

//Total Admnission fees
let admissionFree = 0;
studentData.map((data, i) => {
    admissionFree += data.price;
});

//Find All Female Students
 let femaleStudent = '';
studentData.map((data, i) => {
   
    if (data.gender === 'Female') {
        femaleStudent += `${data.name}, `;
    }
    
});



//Find class wise student result
let mernStudent = '';
studentData.map((data, i) => {

    if (data.skill === 'MERN Developer') {
        mernStudent += `${data.name}, `;
    }

});

let wordpressStudent    = '';
studentData.map((data, i) => {
   
     if (data.skill === 'Wordpress Developer') {
        wordpressStudent += `${data.name}, `;
    }
});

let shopifyStudent = '';

studentData.map((data, i) => {

     if (data.skill === 'Shopify Developer') {
        shopifyStudent += `${data.name}, `;;
    }

});

let classStudent = `
                    MERN        => ${mernStudent}
                    Wordpress   => ${wordpressStudent}
                    shopify     => ${shopifyStudent}
                 `;
 


//Location wise student result

let narayangonjStudent = '';

studentData.map((data, i) => {

    if (data.address === 'narayangonj') {
        narayangonjStudent += `${data.name}, `;
    }

});

let mirpurStudent = '';

studentData.map((data, i) => {
   
     if (data.address === 'mirpur') {
        mirpurStudent += `${data.name}, `;
    }
});

let uttaraStudent = '';

studentData.map((data, i) => {

     if (data.address === 'uttra') {
        uttaraStudent += `${data.name}, `;
    }

});

let locationWise = `
                    Narayangonj         => ${narayangonjStudent}
                    Mirpur              => ${mirpurStudent}
                    uttara              => ${uttaraStudent}
                 `;



//find student between 10 - 25 age

let ageCal = '';

studentData.map((data, i) => {
   
     if (data.age <= 25) {
        ageCal += `${data.name} : ${data.age} age, `;
    }
});



//OUTPUT

console.log(`
Total Admnission fees           = ${admissionFree} BDT
Find All Female Students        = ${femaleStudent}
Find class wise student result  = ${classStudent}
Location wise student result    = ${locationWise}
find student between 10-25 age  = ${ageCal} 
`);
