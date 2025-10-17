let countMessages = 0;
let userInput = document.getElementById("userInput");
let sendUserMessage = document.getElementById("sendUserMessage");
let userMessage = document.getElementById("userMessage");
let sendButtonImg = document.getElementById("sendButtonImg");
let numberFirst = 0;
let numberSecond = 0;
let messages = document.getElementById("chatMessages");


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
    viewUserMessage(text);
    if (isFirstOrStartMessage(countMessages)) {
        if (text.trim() == '/start') {
            viewBotMessage('Привет, меня зовут Чат-бот, а как зовут тебя? (Для справки: В любой момент ты можешь завершить общение командой /stop)');
            counterMessage(1);
        } else {
            viewBotMessage('Введите команду /start, для начала общения');
        }
    } else if (isNameMessage(countMessages)){
        if (text.trim().startsWith("/name:")) {
            let userName = text.split(':')[1];
            if (userName.trim().length > 0) {
                viewBotMessage('Привет, ' + userName.trim() + ' приятно познакомиться. Я умею считать, введи числа которые надо посчитать.');
                counterMessage(2);
            } else {
                viewBotMessage('Для продолжения общения введите команду /name: Ваше имя (пустое имя не принимается)');
            }
        } else if (text.trim() == '/stop'){
            viewBotMessage('Всего доброго, если хочешь поговорить пиши /start');
            counterMessage(0);
        } else {
            viewBotMessage('Для продолжения общения введите команду /name: Ваше имя (пустое имя не принимается)');
        }
    } else if (isNumberMessage(countMessages)){
                if (text.trim().startsWith("/number:")){
                    let numbers = text.split(':')[1].trim();
                    let numbersArray = numbers.split(',');
                    if (numbersArray.length == 2){
                        numberFirst = parseFloat(numbersArray[0].trim());
                        numberSecond = parseFloat(numbersArray[1].trim());
                        viewBotMessage('Для вычисления введите одно из действий: -, +, *, /');
                        counterMessage(3);
                    } else {
                        viewBotMessage('Для продолжения общения введите команду /number: ПервоеЧисло, ВтороеЧисло (должно быть два числа разделённых запятой)');
                    }
                } else if (text.trim() == '/stop'){
                    viewBotMessage('Всего доброго, если хочешь поговорить пиши /start');
                    counterMessage(0);
                } else {
                    viewBotMessage('Для продолжения общения введите команду /number: ПервоеЧисло, ВтороеЧисло (должно быть два числа разделённых запятой)');
                }
    } else if (isOperationMessage(countMessages)){
        if (text.trim().length = 1) {
            let result;
            switch(text.trim()) {
            case '+':
                result = numberFirst + numberSecond;
                viewBotMessage('Результат: ' + result);
                counterMessage(2);
                break;
            case '-':
                result = numberFirst - numberSecond;
                viewBotMessage('Результат: ' + result);
                counterMessage(2);
                break;
            case '*':
                result = numberFirst * numberSecond;
                viewBotMessage('Результат: ' + result);
                counterMessage(2);
                break;
            case '/':
                result = numberFirst / numberSecond;
                viewBotMessage('Результат: ' + result);
                counterMessage(2);
                break;
            default:
                viewBotMessage('Для вычисления введите одно из действий: -, +, *, /');
            }
        } else if (text.trim() == '/stop'){
            viewBotMessage('Всего доброго, если хочешь поговорить пиши /start');
            counterMessage(0);
        } else {
            viewBotMessage('Для вычисления введите одно из действий: -, +, *, /');
        }
        
    } 
       
    }
    
function viewUserMessage(textUserMessage){
    let divUserMsg = document.createElement('div');
    divUserMsg.classList.add('container');
    let userAvatar = document.createElement("img");
    userAvatar.src = "img/user_avatar.png";
    let userBubble = document.createElement('div');
    userBubble.setAttribute("id", "userMsg");
    userBubble.textContent = textUserMessage;

    divUserMsg.appendChild(userAvatar);
    divUserMsg.appendChild(userBubble);
    messages.append(divUserMsg);

    messages.scrollTop = messages.scrollHeight;
    
}

function viewBotMessage(textBotMessage){
    let divBotMsg = document.createElement('div');
    divBotMsg.classList.add('container');
    let botAvatar = document.createElement("img");
    botAvatar.src = "img/bot_avatar.png";
    let botBubble = document.createElement('div');
    botBubble.setAttribute("id", "botMsg");
    botBubble.textContent = textBotMessage;
    
    divBotMsg.appendChild(botAvatar);
    divBotMsg.appendChild(botBubble);
    messages.append(divBotMsg);

    messages.scrollTop = messages.scrollHeight;

}

sendUserMessage.addEventListener("click", () => {
      let text = userMessage.value;
      newUserMessage(text);
    });

userMessage.addEventListener("input", () => {
    let isInputMsg = document.getElementById('inputMsg');

    if(isInputMsg){
        messages.removeChild(inputMsg);
        let divUserMsg = document.createElement('div');
        divUserMsg.classList.add('container');
        divUserMsg.setAttribute("id", "inputMsg");
        let userAvatar = document.createElement("img");
        userAvatar.src = "img/user_avatar.png";
        let userBubble = document.createElement('div');
        userBubble.setAttribute("id", "userMsg");
        userBubble.textContent = '...';

        divUserMsg.appendChild(userAvatar);
        divUserMsg.appendChild(userBubble);
        messages.append(divUserMsg);
        messages.scrollTop = messages.scrollHeight;
    } else {
        let divUserMsg = document.createElement('div');
        divUserMsg.classList.add('container');
        divUserMsg.setAttribute("id", "inputMsg");
        let userAvatar = document.createElement("img");
        userAvatar.src = "img/user_avatar.png";
        let userBubble = document.createElement('div');
        userBubble.setAttribute("id", "userMsg");
        userBubble.textContent = '...';

        divUserMsg.appendChild(userAvatar);
        divUserMsg.appendChild(userBubble);
        messages.append(divUserMsg);
        messages.scrollTop = messages.scrollHeight;
    }
    

    if(userMessage.value.length > 0) {
        sendUserMessage.disabled = false;
        sendButtonImg.setAttribute("src", "img/sendButton.png");
    } else {
        sendUserMessage.disabled = true;
        sendButtonImg.setAttribute("src", "img/sendButtonDisabled.png");
    }

    

    setTimeout(() => {
        messages.removeChild(inputMsg);
      }, 200);
    //inputMsg.remove();
    //messages.scrollTop = messages.scrollHeight;
    });