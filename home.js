///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE
const greetUser = (username) => {
    console.log(`Welcome Back, ${username}`);
}

greetUser('Andrew')


//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

//CODE HERE
const canWeDeliver =(zipCode,arr = deliveryAreaZipCodes) => {
    if (arr.includes(zipCode)) {
        console.log(`You're in our delivery zone!`); 
    }else{
        console.log(`Sorry, we can't deliver to that address`); 
        
    }
}

canWeDeliver(85203)
/* 
Problem 2 Continued

Now you're going to rewrite your function.

If you wrote `canWeDeliver` using a loop of
some kind, write a new function (`canWeDeliverTwo`)
below, using the `includes` array method. 
Look it up on MDN if you're not sure how to use 
it. 

If you already used the `includes` method, 
write a new function using some sort of 
loop (for loop, higher order array method).
Name your new function `canWeDeliverTwo`.
*/

// CODE HERE
const canWeDeliverTwo= (zipCode,arr=deliveryAreaZipCodes) => {
    currentZipIteration=arr[0]

    for (i=0;i<arr.length;i++){
        if (currentZipIteration!==(zipCode)) {
            currentZipIteration=arr[i]
            
        }else {
            return console.log(`You're in our delivery zone!`)
            
        }
        
        
    }return console.log(`Sorry, we can't deliver to that address`)
}
canWeDeliverTwo(85203)
//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/
console.log('-----------------------------------------\n-----------------------------------------');
//CODE HERE

// deal = deals.replace(deals.title ,'10% Off!')
// console.log(deal);
dealCopy=[...deals];
const index = dealCopy.findIndex((el) => el.title === '15% Off!')
console.log(index);
// dealCopy[index] = {
    //     title: '10% Off!', 
    //     desc: 'Applied to your entire order when you spend $30 or more'
    // }
    
    
    
    
    
    dealCopy[index].title= dealCopy[index].title.toString().replace('15',  '10') ///// need help with this it works not effienct tho
    console.log(dealCopy);
    // title: '10% Off!', 
    // desc: 'Applied to your entire order when you spend $30 or more'
    
    // console.log(dealCopy);     // bad way remind self to ask about it 
    /*
    The restaurant is going to continue its
    family deal for another month. 
    
    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.
    
    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
    */
   
   //CODE HERE
   
   // dealCopy.toString().replace(dealCopy.findIndex((el) => el.desc.trim() === 'This deal lasts until the end of March!'),  'This deal lasts until the end of April!')    ASK HOW TO CHAIN TOINDEX AND REPLACE
   // const index2 = dealCopy.findIndex((el) => el.desc.trim() === 'This deal lasts until the end of March!')
   // dealCopy.toString().replace(dealCopy[index2],  'This deal lasts until the end of April!')
   // console.log(dealCopy);   
   // // console.log(index2);
   
   
   const indexTwo = dealCopy.findIndex((el) => el.desc.trim() === 'This deal lasts until the end of March!')
console.log(indexTwo);
   dealCopy[indexTwo].desc= dealCopy[indexTwo].desc.toString().trim().replace('March',  'April') 
console.log(dealCopy);

//NEED HELP IN MAKING IT MORE EFFIECENT