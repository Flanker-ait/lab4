// Create an array of possible answers
const magicBall = ["It is certain", "ask again later", "don't count on it", "my reply is no", "without a doubt", "Yes, definitely"];
const FortuneCookie = ["Do not be afraid of competition", "You love peace", "An exciting opportunity lies ahead of you", "Goodness is the only investment that never fails"];
// Create a function to fetch the question the user has asked 	
// Our function should also check from an empty value
function askQuestion(){
    const question = document.getElementById("userQuestion").value;
    if(question == ""){
        alert("You should fill in the blank");
        return;
    }else{
        getAnswer(question);
    }    
}
function getAnswer(question){
    // Select a random answer from your array 
    const chance = Math.floor(Math.random() * 2);   
    const mNumber = Math.floor(Math.random() * magicBall.length );
    const fcNumber = Math.floor(Math.random() * FortuneCookie.length);
    // Display the question and answer back to the user
    // And, log the question and answer to the console
    alert("Your question is " + question);
    if(chance == 1){
        let answer = magicBall[mNumber]
        alert("And your answer is " + answer);
        console.log(question);
        console.log(answer);
    }else if(chance == 0){
        let answer = FortuneCookie[fcNumber]
        alert("And your answer is " + answer);
        console.log(question);
        console.log(answer);
    }
}



	


