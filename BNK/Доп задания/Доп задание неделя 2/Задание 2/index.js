const text = 'Привет'; 

function showSuccessMessage(text) {
    console.log("В данном тексте нет запрещенных символов");
}

function showErrorMessage(errorSymbol, index) {
    console.error(`Найден запрещенный символ ${errorSymbol} под индексом ${index}."`)
}

function checkTextOnErrorSymbol(text, errorSymbol, errorCallback, successCallback) {
    for(let i = 0; i <= text.length; i++) {
        if(text[i] === errorSymbol) {
            errorCallback(errorSymbol, i)
        }else{
            successCallback();
        }
    }
}

checkTextOnErrorSymbol(text, 'а', showErrorMessage, showSuccessMessage);
