// function to randomly get 3 numbers which each will generate a different message.
function getRandomMessage(){
    const numOne = Math.floor(Math.random() * 5);
    const numTwo = Math.floor(Math.random() * 5);
    const numThree = Math.floor(Math.random() * 5);

    const msgPartOne = ['Think about ', 'You need to know ', "I'm sure ", 'You know ', 'I bet '];
    const msgPartTwo = ['Der heilige Bashefer ', 'God ', 'Hashem ', 'Totty ', 'Hakudosh Boruch Hu '];
    const msgPartThree = ['Loves when you talk to him!', 'Loves you!', 'Is with you!', 'Is everywhere!', 'is the best!'];

    var wholeMessage;

    switch (numOne) {
        case 0:
            wholeMessage = msgPartOne[0];
            break;
            case 1:
            wholeMessage = msgPartOne[1];
            break;
            case 2:
            wholeMessage = msgPartOne[2];
            break;
            case 3:
            wholeMessage = msgPartOne[3];
            break;
            case 4:
            wholeMessage = msgPartOne[4];
            break;
    
        default:
            wholeMessage = 'The was a problem with part 1 of the message. '
            break;
    }
    console.log(wholeMessage);
}
///fdgdg
console.log('Hello Programmer!')