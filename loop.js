/* 
------------------
iv) LOOP
------------------
*/
// 1. Display "Ajke amar mon valo nei" for 39 times
// var message = "Ajke amar mon valo nei";
// for (let i = 1; i <= 39; i++) {
//     console.log(message, i);
// }

// 2. Display numbers between 58 to 98
// for (let i = 58; i <= 98; i++) {
//     console.log(i);
// }

// 3. Show all even numbers from 412 to 456
// for (let i = 412; i <= 456; i+=2) {
//     console.log(i);
// }

// 4. Show all odd numbers from 581 to 623
// for (let i = 581; i <= 623; i+=2) {
//     console.log(i);
// }

// 5. Difference between while loop and for loop?
// => The major difference between for loop and while loop is that in the case of for loop the number of iterations is known, whereas in the case of the while loop number of iterations is unknown and the statement will run until the condition is proved false.

// 6. Declare an array for all the topics that you have learned last few days and display them as output
// var topics = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND', 'JAVASCRIPT' ];
// for (let i = 0; i < topics.length; i++) {
//     console.log(topics[i]);
// }

// 7. Create an array for all the mobile phones. Display all the elements of the array
// var phoneBrand = ['SAMSUNG', 'NOKIA', 'VIVO', 'IPHONE', 'SYMPHONY'];
// for (let i = 0; i < phoneBrand.length; i++) {
//     console.log(phoneBrand[i]);
// }

// by using a while loop
// var phoneBrand = ['SAMSUNG', 'NOKIA', 'VIVO', 'IPHONE', 'SYMPHONY'];
// var i = 0;
// while (i < phoneBrand.length){
//     console.log(phoneBrand[i]);
//     i++;
// }

// 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
// for (let i = 30; i <= 86; i++) {
//     console.log(i);
//     if (i > 44){
//         break;
//     }
// }

// 9. Write the price of the books that you have and display the prices if the prices is lower than 200
var bookPrice =[452, 544, 100, 654, 80, 90, 120]
for (let i = 0; i < bookPrice.length; i++) {
    const price = bookPrice[i];
    if (price > 200){
        continue;
    }
    console.log(price);
}
