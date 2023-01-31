/* 
---------------------
ii) ARRAY
-----------------------
1. What is the purpose of array?
=> Array use to store multiple data.

2. How to declare an array in JS?
=> var phoneBrand = ['Samsung', 'Nokia', 'Iphone'];

3. Number of elements in an Array
=> var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
console.log(phoneBrand.length);
Result: 3

4. What is index?
=> Index is the value position of the array.
*/
// 5. Find the value of an element by index
var phoneBrand = ['Samsung', 'Nokia', 'Iphone'];
// console.log(phoneBrand[1]);

// 6. Change an element by index
var phoneBrand= ['Samsung', 'Nokia', 'Iphone'];
phoneBrand[1] = "Oppo";
// console.log(phoneBrand);

// 7. get the index of an element by the value
var phoneBrand= ['Samsung', 'Nokia', 'Iphone'];
var value = phoneBrand.indexOf('Iphone');
// console.log(value);
/*
8. what does it mean when you get undefined while getting the value of an element by index?
=>  Will receive undefined when accessing uninitialized variables, non-existing object properties, non-existing array elements.

9. How can you add an element to an array at the last position?
=> varName.push("valueName");

10. How can you remove the last element from array?
=> varName.pop();

11. Add an element at the first position of an array
=> varName.unshift('newValue');

12. Remove the first element of an array
=> varName.shift();
*/
