// ## for loop ques - 1
for(let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
};

// # # while loop ques - 2

let firstNumber = 1;
while(true){
    if(firstNumber > 10){
        if(firstNumber % 6 === 0){
            console.log(`Found : ${firstNumber}`);
            break;
        }
        firstNumber++;
    }
    else{
        firstNumber++;
    }
}

// # # do while

let number = 1;
do{
    if(number % 6 === 0){
        number++;
        continue;
    }

    console.log(number);
    number++;
}
while(number <= firstNumber);
