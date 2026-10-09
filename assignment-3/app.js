let score = Number(prompt("Enter your Score : "));
let status = (score <= 40) ? "Fail" : "Pass";

let grade;

switch(true) {
    case score >= 90 :
        grade = "A";
        break;
    case score >= 80 :
        grade = "B";
        break;
    case score >= 70 :
        grade = "C";
        break;
    case score >= 60 :
        grade = "D";
        break;
    case score >= 50 :
        grade = "E";
        break;
    default : 
    grade = "F";
};

console.log(`Your Score is : ${score}`);
console.log(`Your Grade is : ${grade}`);
console.log(`Status : ${status}`);