// function to randomly get 3 numbers which each will generate a different message.
function getRandomMessage(){
    const numOne = Math.floor(Math.random() * 5);
    const numTwo = Math.floor(Math.random() * 5);
    const numThree = Math.floor(Math.random() * 5);

    const msgPartOne = ['Think about', 'You need to know', "I'm sure", 'You know', 'I bet'];
    const msgPartTwo = ['the almighty God', 'God', 'the father in heaven', 'the creator of the world', 'our great God'];
    const msgPartThree = ['loves when you talk to him!', 'loves you!', 'is with you!', 'is everywhere!', 'is the best!'];

    console.log(`${msgPartOne[numOne]} ${msgPartTwo[numTwo]} ${msgPartThree[numThree]}`)

}

getRandomMessage();