'use strict'

function askUserNameQuestion(){
    var userName = prompt('Please enter your name?');
    document.write(userName.toLowerCase());
    // return userName;
}

function askUserAgeQuestion(){
    var questionAnswer = prompt('How old are you?');
    document.write('The user is ' + questionAnswer + ' years old!');
}


function askUserSithQuestion(){
    var confirmAnswer = confirm('Press "ok" if you are a Sith Lord?');
    if (confirmAnswer){
        alert('There can be only 2, you will be my apprentice..');
    } else {
        alert('Bow before your Master weakling!!')
    }
}

askUserSithQuestion();

function askUserToEnterNumberLessThanTen(){
    var userAnswer = pompt('Enter a number < 10');
    if (userAnswer > 10){
        alert('You entered it wrong.  Try Again!')
    } else {
        alert('You entered it right!')
    }
}



// var userName1 = askUserNameQuestion();
// var userName2 = askUserNameQuestion();
// console.log(userName1);
// console.log(userName2);

// if (userName1 === 'Roger'){
//     document.write('Welcome Lord ' + userName1)
// } else {
//     document.write('Welcome ' + userName1);
// }
