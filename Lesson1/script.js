// template literal

// const firstName = "Muhammadrasul";
// const job = "teacher";
// const birthYear = 2000;
// const year = 2022;

// const me = " I'm " + firstName + " ,a " + job;
// console.log(me);

// const newMe = ` Men ${firstName}, ${job}, men ${year - birthYear} yoshdaman `;
// console.log(newMe);

const userName = 'Utkir Kurbanov';
const job = 'Front-End developer';
const birthYear = 1988;
const currentYear = 2023;

const me = "My name is " + userName + ", and I am a " + job + ".";
console.log(me);

const newMe = `My name is ${userName}, and I'm a ${job}. I am ${currentYear - birthYear} years old.`;
console.log(newMe); 

// statements if else

const age = 25;
const yearsLeft = 18 - age;

// if (age >= 18) {
//   console.log("Men mashina boshqara olaman");
// } else {
//   console.log(`Hali yoshman, guvohnoma olishimga ${18 - age} yil bor`);
// }

// age >= 18
//   ? console.log("Men mashina boshqara olaman")
//   : console.log(`Hali yoshman, guvohnoma olishimga ${18 - age} yil bor`);
  
  const isAvailableDrive = age >= 18 ? "Men mashina boshqara olaman" : "piyoda yurish";
  console.log(isAvailableDrive);
  
  // switch case 
  
const day = 'tuesday';

switch (day) {
    case 'monday':
        console.log("Learning Upper-Intermediate English as a Second Language course from saylor.com");
        break;
    case 'tuesday':
        console.log('Learning Front-End course with Nurmukhamedov');
        break;
    case 'wednesday':
        console.log('Practicing with new codes');
        break
    case 'saturday':
        console.log('Playing football with my friends');
        break
    default:
        console.log('Relax relax relax!!!!');
}


// Data transforming methods

// map, filter

movements = [2, 4, 5, 7, 9, 10, 15, -15, -20 -1, 0];

euroToUsd = 2;

const movementToUsd = movements.map(mov => mov * euroToUsd);
console.log(movementToUsd);
console.log(movements); 

movements.map((mov, index) => {
    if(mov > 0){
        console.log(` siz ${index + 1} urinishda ${mov *euroToUsd} dollar topdingiz `);
    } else{
        console.log('hech narsa yoq');
    }
}) 

const positiveNum = movements.filter(function(mov){
    return mov > 0;
})
const negativeNum = movements.filter(function(mov){
    return mov < 0;
})
console.log(positiveNum);
console.log(negativeNum);
console.log(movements);
