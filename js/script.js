// -------------------------------------------------------------
// -----------------БЛОК ЗМІННИХ-------------------------------
// --------------------------------------------------------------
let gender = document.querySelector('.gender_gender');

let dateage = document.querySelector('.date_birthday');

let dateagetext = document.querySelector('.date_birthday_text');

let textname = document.querySelector('.text_name');

let text_girl = document.querySelector('.text_girl');

let number_girl = document.querySelector('.number_girl')

let number_girl2 = document.querySelector('.number_girl2')

let blockname = document.querySelector('.blockname');

let blockage = document.querySelector('.blockage');

let blockage2 = document.querySelector('.blockage2');

let blockmessage = document.querySelector('.message');

let blockmessage2 = document.querySelector('.message2');

let blockresult = document.querySelector('.nameresult');

let imgclose = document.querySelector('.img');

// -----------------------------------------------------------------
// ---------------БЛОК ЗМІННИХ В ЯКІ ВИВОДЯТЬСЯ ІНПУТИ---------
// -------------------------------------------------------------------

// ЗМІНА ДЛЯ ВИВОДА ПОЛУ
let genderselect
// ЗМІНА ДЛЯ ВИВОДА ІМЕНІ
let surname

// ЗМІНА ДЛЯ ВИВОДУ ЗНАЧЕНЯ ДІВЧИНИ ПЕРШОГО РОЗРАХУНКУ
let valuenumbergirl;
// ЗМІНА ДЛЯ ВИВОДУ ДРУГОГО РОЗРАХУНКУ
let valuenumbergirl2;
// ЗМІНА В ЯКУ ВКЛАДАЄТЬСЯ РЕЗУЛЬТАТ РОЗРАХУНКУ ДВОХ РОЗРАХУНКІВ
let sum

// Зміна newblockage містить в собі функцію розрахунку віку
let newblockage;
// Зміна agetext містить в собі вивід цифри дати народження
let agetext;
// ЗМІНА ЯКА МІСТИТЬ В СОБІ РОЗРАХУНОК ВІКУ ЛЮДИНИ 
let age;
// ЗМІНА В ЯКІЙ ЛЕЖИТЬ ЗНАЧЕННЯ ДНЯ НАРОДЖЕННЯ
let dateselect;
// -----------------------------------------------------------------------
// ------------------------БЛОК IF ELSE ТА ADDEVENTLISTENER---------------
// ------------------------------------------------------------------------
// ОБРАТИ СТАТЬ-------------------------------------------------
gender.addEventListener('change', (ev) => {
   genderselect = ev.target.value
   if (genderselect === "") {
      textname.classList.remove('txtname')
      dateage.classList.remove('brthd')
      dateagetext.classList.remove('brthd')
      number_girl.classList.remove('numgirl')
      number_girl2.classList.remove('numgirl')
      text_girl.classList.remove('bla')
      blockname.classList.remove('bkname')
      blockage.classList.remove('bkage')
      blockmessage.classList.remove('bkmess')
      blockresult.classList.remove('bkres')
      blockmessage2.classList.add('bkmess2')
      blockmessage2.innerHTML = 'Оберіть стать'
      blockage2.classList.remove('bkage')
   }
   if (genderselect === 'male') {
      textname.classList.add('txtname')
      number_girl.classList.remove('numgirl')
      number_girl2.classList.remove('numgirl')
      text_girl.classList.remove('bla')
      blockmessage2.classList.remove('bkmess2')

   }
   if (genderselect === 'female') {
      textname.classList.add('txtname')
      dateage.classList.remove('brthd')
      blockname.classList.remove('bkname')
      blockage.classList.remove('bkage')
      blockage2.classList.remove('bkage')
      blockmessage.classList.remove('bkmess')
      blockresult.classList.remove('bkres')
      blockmessage2.classList.remove('bkmess2')
      dateagetext.classList.remove('brthd')
   }
})

// --------ОБРАТИ ІМ'Я------------------------------------------
textname.addEventListener('change', (ev) => {
   surname = ev.target.value.charAt(0).toUpperCase() + ev.target.value.slice(1).toLowerCase()
   if (genderselect === 'male') {
      blockname.classList.add('bkname')
      dateage.classList.add('brthd')
      dateagetext.classList.add('brthd')
      number_girl.classList.remove('numgirl')
      number_girl2.classList.remove('numgirl')
      text_girl.classList.remove('bla')
      blockmessage2.classList.remove('bkmess2')
      namechange();
   }
   if (genderselect === 'female') {
      dateage.classList.remove('brthd')
      dateagetext.classList.remove('brthd')
      blockname.classList.add('bkname')
      text_girl.classList.add('bla')
      namechange();
   }

})
// -------НАПИСАТИ СВОЮ ДАТУ НАРОДЖЕННЯ---------------------------
dateage.addEventListener('change', (ev) => {
   dateselect = ev.target.value.substr(0, 4);
   blockagefun()
   addresult()
   setTimeout(agechange, 4000)

   if (newblockage >= 18) {
      blockage.classList.add('bkage')
      blockmessage.classList.add('bkmess')

      blockresult.classList.add('bkres');
      blockage.innerHTML = newblockage;
      blockmessagebig()

   } else if (newblockage < 18) {
      blockage.classList.remove('bkage')
      blockmessage.classList.add('bkmess')
      blockresult.classList.add('bkres');
      blockage.innerHTML = newblockage;
      blockmessagelitle()

   }
   else if (newblockage <= 0) {
      blockage.classList.remove('bkage')
      blockmessage.classList.add('bkmess')
      blockmessage.innerHTML = 'Не може бути відємного значення'
      blockresult.classList.remove('bkres');
   }
})

// -------НАПИСАТИ ПЕРШИЙ РОЗРАХУНОК
number_girl.addEventListener('change', (ev) => {
   valuenumbergirl = ev.target.value
})
//  -------НАПИСАТИ ДРУГИЙ РОЗРАХУНОК
number_girl2.addEventListener('change', (ev) => {
   valuenumbergirl2 = ev.target.value

})
// ----------БЛОК ПОВІДОМЛЕННЯ------------------------
blockmessage2.addEventListener('click', (ev) => {
   newvaluenumbergirl(sum)
})
// ----------КНОПКА ЗАКРИТИ НАДПИС--------------------
imgclose.addEventListener('click', (ev) => {
   number_girl.classList.add('numgirl')
   number_girl2.classList.add('numgirl')
   text_girl.classList.remove('bla')
   blockmessage2.classList.add('bkmess2')
   blockmessage2.innerHTML = 'Тицнути щоб узнати результат?'
})
// ---------ВПИСАТИ ДАТУ НАРОДЖЕННЯ------------------------
dateagetext.addEventListener('change', (ev) => {
   agetext = Number(ev.target.value);
   newdatetext(age)
   console.log(newdatetext(age))

})
// -------------БЛОК РЕЗУЛЬТАТ
blockresult.addEventListener('click', () => {
   nameageresult();
})

// -----------------------------------------------------
//---------------БЛОК ФУНКЦІЙ------------------------
// -------------------------------------------------
// Ф-ЦІЯ РОЗРАХУНКУ ДВОХ ІНПУТІВ
const newvaluenumbergirl = (sum) => {
   sum = valuenumbergirl / valuenumbergirl2
   blockmessage2.innerHTML = sum;
   return sum
}
// Ф-ЦІЯ РОЗРАХУНКУ ВІКУ ЛЮДИНИ
const newdatetext = (age) => {
   blockage2.classList.add('bkage')
   age = 2023 - agetext
   blockage2.innerHTML = `${surname} ваш вік ${age}  `;
   return age
}
// ф-ція для виводу велетня або малечи 
const blockmessagebig = () => {
   blockmessage.innerHTML = 'Велетень'
}
const blockmessagelitle = () => {
   blockmessage.innerHTML = 'Малеча'
}
// Ф-ЦІЯ // Полевводу дати народження
const dateNow = new Date();

// Ф-ЦІЯ ВИВОДУ БЛОКУ З ВІКОМ
const blockagefun = () => {
   blockage.classList.add('bkage')
}
// Ф-ЦІЯ ВИВОДУ БЛОКУ З РЕЗУЛЬТАТОМ
const addresult = () => {
   blockresult.classList.add('bkres');
}
// Ф-ЦІЯ ВИВОДУ ПЕРСОНАЛЬНОГО ІМЕНІ З НАДПИСОМ
function namechange() {
   blockname.innerHTML = `${surname} скажіть скільки вам років`;
}
// Ф-ЦІЯ РОЗРАХУНКУ ПОТОЧНОГО ВІКУ КОРИСТУВАЧА
function agechange() {
   newblockage = dateNow.getFullYear() - dateselect;
   blockage.innerHTML = newblockage
}
// Ф-ЦІЯ РОЗРАХУНКУ ІМЕНІ,ПОТОЧНОГО ВІКУ
function nameageresult() {
   blockresult.innerHTML = `${surname} ${dateNow.getFullYear() - dateselect} є вашим віком`

}

// боже яке же я тупе створіння і тупе дебіла кусок

// нічого не виходить я хлам 









