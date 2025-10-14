let countMessages = 0;
let userInput = document.getElementById("userInput");
let sendUserMessage = document.getElementById("sendUserMessage");
let numberFirst = 0;
let numberSecond = 0;

function isFirstOrStartMessage(cntMessages){
    if (cntMessages == 0)
        {return true;}
     else return false;
}

function isNameMessage(cntMessages){
    if (cntMessages == 1)
        {return true;}
     else return false;
}

function isNumberMessage(cntMessages){
    if (cntMessages == 2)
        {return true;}
     else return false;
}

function isOperationMessage(cntMessages){
    if (cntMessages == 3)
        {return true;}
     else return false;
}

function counterMessage(i){
    countMessages = i;
}

function newUserMessage(text){
    if (isFirstOrStartMessage(countMessages)) {
        if (text.trim() == '/start') {
            console.log('Привет, меня зовут Чат-бот, а как зовут тебя?');
            counterMessage(1);
        } else {
            console.log('Введите команду /start, для начала общения');
        }
    } else if (isNameMessage(countMessages)){
        let userName = text.split(":")[1].trim();
        if (text.trim().startsWith("/name:") & userName.length > 0) {
            console.log('Привет, ' + userName + ' приятно познакомиться. Я умею считать, введи числа которые надо посчитать');
            counterMessage(2);
        } else {
            console.log('Для продолжения общения введите команду /name: Ваше имя (пустое имя не принимается)');
        }
    } else if (isNumberMessage(countMessages)){
        let numbers = text.split(":")[1].trim();
        let numbersArray = numbers.split(',');
        if (text.trim().startsWith("/number:") & numbersArray.length == 2){
            numberFirst = parseFloat(numbersArray[0]);
            numberSecond = parseFloat(numbersArray[1]);
            console.log('Для продолжения вычисления введите одно из действий: -, +, *, /');
            counterMessage(3);
        }else {
            console.log('Для продолжения общения введите команду /number: ПервоеЧисло, ВтороеЧисло (должно быть два числа разделённых запятой)');
        }
    } else if (isOperationMessage(countMessages)){
        switch(text) {
            case '+':
                console.log('Результат: ' + numberFirst + numberSecond);
                break;
            case '-':
                console.log('Результат: ' + numberFirst - numberSecond);
                break;
            case '*':
                console.log('Результат: ' + numberFirst * numberSecond);
                break;
            case '/':
                console.log('Результат: ' + numberFirst / numberSecond);
                break;
            default:
                console.log('Для продолжения вычисления введите одно из действий: -, +, *, /');
        }
    } 
       
    }
    

sendUserMessage.addEventListener("click", () => {
      let text = userMessage.value;
      newUserMessage(text);
    });