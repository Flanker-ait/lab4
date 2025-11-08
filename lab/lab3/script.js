// The pre-existing information section
const users = {
  "JudsonRogers": {
    email: "judson.rogers@dal.ca",
    password: "MySecurePass@2025"
  },
  "MaybelFrey": {
    email: "maybelFrey@university.info",
    password: "MySecurePass@2025"
  },
  "JohnBlake": {
    email: "john.blake@tech.museum",
    password: "ThisIsPass@2025"
  }
};

const usersMap = new Map(
  Object.entries(users).map(([username, info]) => [username, info.password])
);
const usernameSet = new Set(Object.keys(users));

// This portion is used to catch the user register information
document.getElementById("register").addEventListener("click" , (e)=>{
    e.preventDefault();
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let validUserName = checkForUserName(userName);
    let validEmail = checkForEmail(email);
    let validPassword = checkForpassword(password);
    let validconfirm = checkForConfirm(confirmPassword, password);
    let duplicate = checkForDuplicate(userName);
    console.log(validUserName);
    try{
        if(!validUserName){
            throw new Error("Your userName is not valid");
        }

        if(!validEmail){
            throw new Error("Your Email is not valid");
        }

        if(!validPassword){
            throw new Error("Your Password is not valid");
        }
        if(!validconfirm){
            throw new Error("Your confirm password is not valid");
        }
        if(duplicate){
          throw new Error("The user name already been used");
        }
        if(validUserName && validEmail && validPassword && validconfirm && !duplicate){
            usersMap.set(userName, password);
            usernameSet.add(userName);
            console.log("you make it");
            alert("You finally make it ");
            window.location.href = "login.html";
        }
    }catch(err){
        alert(err.message);
    }
})

function checkForUserName(userName){
const usernamePattern = /^[A-Za-z][A-Za-z0-9]*$/;
if(usernamePattern.test(userName)){
    return true;
}
}

function checkForpassword(password){
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12,}$/;   
if(passwordPattern.test(password)){
    return true;
}
}


function checkForEmail(email){
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}$/;
if(emailPattern.test(email)){
    return true;
}
}

function checkForConfirm(confirmPassword, password){
if (confirmPassword == password){
  return true;
}

}
function checkForDuplicate(userName){
  console.log(usernameSet);
  return usernameSet.has(userName);
}
