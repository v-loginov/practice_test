let countMessages = 0;
let userInput = document.getElementById("userInput");
let sendUserMessage = document.getElementById("sendUserMessage");

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
        if (text.trim().startsWith("/name:") & text.split(":")[1].trim().length > 0) {
            console.log('Привет, ' + text.split(":")[1].trim() + ' приятно познакомиться. Я умею считать, введи числа которые надо посчитать');
            counterMessage(2);
        } else {
            console.log('Для начала общения введите команду /name: Ваше имя (пустое имя не принимается)');
        }
    } else {
        console.log('Это третье сообщение');
    }
       
    }
    

sendUserMessage.addEventListener("click", () => {
      let text = userMessage.value;
      newUserMessage(text);
    });