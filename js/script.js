let countMessages = 0;
let userInput = document.getElementById("userInput");
let sendUserMessage = document.getElementById("sendUserMessage");

function isFirstOrStartMessage(cntMessages){
    if (cntMessages == 0)
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
    } else {
        console.log('Это не первое сообщение.');
    }
       
    }
    

sendUserMessage.addEventListener("click", () => {
      let text = userMessage.value;
      newUserMessage(text);
    });