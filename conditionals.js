/* 
--------------------
CONDITIONALS
--------------------
1. meaning of: >, <, >=, <=, ==, !=, ===, !==, 
=> > les than.
< grater than.
>= less than or equal.
== Two operands are equal.
!= Two operands are not equal.
=== Two operands are equal with their type.
!== - Two operands are not equal and their type also.

2. Meaning of &&
=> Means and

3. Meaning of ||
=> Means or
*/
// 4. Let's say you have x amount of money. if you have more than 80,000 then you will buy a Mac
// if more than 60,000 then you will by gaming laptop
// if you more than 40,000 then  you will by Lenovo Yoga
// if you have more than 20, 000 then  you will by an used laptop
// otherwise, you will use you mobile phone

var money = 50000;
if (money > 80000){
    console.log("I will buy Mac");
}
else if (money > 60000){
    console.log("I will buy HP");
}
else if (money > 40000){
    console.log("I will buy Lenovo");
}
else if (money > 20000){
    console.log("I will buy Walton");
}
else {
    console.log("I will continue using Phone");
}