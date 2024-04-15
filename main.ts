//DAY 40 
//TASK 1 (Using loop and logs number from 1-10)
for(let i=1; i <= 10; i++) {
    console.log(i); //logs the current value of 1

}

//TASK 2 (Initialize a counter) using while loop
let count: number = 0;
while (count < 5){
    console.log("Hello , Class!!"); //Result "Hello,Class!!" printed 5 times
    count++;  //Increment count by 1
}

//TASK 3 (Using array and making a list of fav movies) using for loop
let favMovie: string[] = [
    "Childs Play",
    "The Exortic",
    "Conjuring 1",
    "Sijjin"
]
for (let movie of favMovie){
    console.log(movie) //it logs each movie name
}