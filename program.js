// function to randomly get 3 numbers which each will generate a different message.
function getRandomMessage(){
    const numOne = Math.floor(Math.random() * 5);
    const numTwo = Math.floor(Math.random() * 5);
    const numThree = Math.floor(Math.random() * 5);

    const msgPartOne = ['Think about ', 'You need to know ', "I'm sure ", 'You know ', 'I bet '];
    const msgPartTwo = ['Der heilige Bashefer ', 'God ', 'Hashem ', 'Totty ', 'Hakudosh Boruch Hu '];
    const msgPartThree = ['Loves when you talk to him!', 'Loves you!', 'Is with you!', 'Is everywhere!', 'is the best!'];

    var wholeMessage;

    //adds the first part of the message to wholeMessage var.
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

    //adds the second part of the message to wholeMessage var.
    switch (numTwo) {
        case 0:
                wholeMessage = wholeMessage + msgPartTwo[0];
            break;
            case 1:
                wholeMessage = wholeMessage + msgPartTwo[1];
            break;
            case 2:
                wholeMessage = wholeMessage + msgPartTwo[2];
            break;
            case 3:
                wholeMessage = wholeMessage + msgPartTwo[3];
            break;
            case 4:
                wholeMessage = wholeMessage + msgPartTwo[4];
            break;
    
        default:
            wholeMessage = wholeMessage + 'The was a problem with part 2 of the message. '
            break;
    }

    //adds the third part of the message to wholeMessage var.
    switch (numThree) {
        case 0:
                wholeMessage = wholeMessage + msgPartThree[0];
            break;
            case 1:
                wholeMessage = wholeMessage + msgPartThree[1];
            break;
            case 2:
                wholeMessage = wholeMessage + msgPartThree[2];
            break;
            case 3:
                wholeMessage = wholeMessage + msgPartThree[3];
            break;
            case 4:
                wholeMessage = wholeMessage + msgPartThree[4];
            break;
    
        default:
            wholeMessage = wholeMessage + 'The was a problem with part 3 of the message. '
            break;
    }
    
    console.log(wholeMessage);
    return wholeMessage;
}

getRandomMessage();