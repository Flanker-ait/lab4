let name = "Bob";
let age = 15;
let enrolmentStatus = "isStudent";



function checkStatus (enrolmentStatus){
    let check = true
    if(enrolmentStatus == "isStudent"){
        check = true;
    }else{
        check = false;
    }
    return check;
}
let ageAfter = age + 8;

let info = `${name} is ${age} years old and after eight years he will be ${ageAfter} years old and his student status is ${checkStatus(enrolmentStatus)}`

document.getElementById('message').textContent = info;