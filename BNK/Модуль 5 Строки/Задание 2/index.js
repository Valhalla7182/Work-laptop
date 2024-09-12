const myName = "Abylaikhan";
const programmingLang = "JavaScript";
const courseCreatorName = "Vladimir";
const reasonText = "To become better";
const numberOfMonth = "07";

let myInfo = `Всем привет! Меня зовут ${myName}. 
    Сейчас я изучаю язык программирования ${programmingLang}.
    на курсе по ${programmingLang} у ${courseCreatorName}. Я хочу стать веб разработчиком, 
    потому что ${reasonText}.
    До этого я изучал ${programmingLang} ${numberOfMonth} месяцев . Я уверен, что пройду данный курс до конца!`;

let myInfo2 = myInfo.replaceAll("JavaScript", "javascript");
let myInfo3 = myInfo2.replaceAll("курс", "КУРС");
console.log(myInfo3);


console.log(myInfo.length);
console.log(`${myInfo.substring(0, 1)}, ${myInfo.substring(myInfo.length - 1, myInfo.length)}`);
