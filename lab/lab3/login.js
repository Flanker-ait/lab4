

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

// get input from users
document.getElementById("login").addEventListener("click", (e) =>{
    e.preventDefault();
    let userName = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    console.log("The user input is: " + userName);
    checkForLogin(userName, password);
    function checkForLogin(userName, password){
        let exist = usersMap.has(userName);
        if(!exist){
            alert("The userName does not exist")
            return;
        }else{
            let passwordInDatabase = usersMap.get(userName);
            console.log("The password in the database is" + passwordInDatabase)
            if(password == passwordInDatabase){
                alert("Welcome to the website");
                return;
            }else{
                alert("Your password does not match");
                return;
            }
        }
    }
})