let Fname = document.getElementById("FirstName");
let Lname = document.getElementById("LastName");
let email = document.getElementById("Email");
let confirmPass = document.getElementById("confirmPassword");
let password = document.getElementById("password");

// var signUpForm = document.getElementById("signUpForm");
let signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener("click",function(event){
    event.preventDefault();

    if(Fname.value.trim()!==""&& 
    Lname.value.trim()!==""&&
    email.value.trim()!==""&&
    password.value.trim()!==""&&
    confirmPass.value.trim()!==""){
        if(password.value===confirmPass.value){
            if(checkIfUserExist(email.value)){
                alert("User Already Exist");
            }else{
            let userObj={
                firstName : Fname.value,
                lastName  : Lname.value,
                    email : email.value,
                 password : password.value
            }
            let users = JSON.parse(localStorage.getItem("users")) || []
            users.push(userObj)
            localStorage.setItem("users",JSON.stringify(users))
            sessionStorage.setItem("loggedInUser",JSON.stringify(userObj))

            Fname.value ="" ;
            Lname.value ="" ;
            email.value ="" ;
            password.value="" ;
            alert("SignUp Succesful");
            window.location.href ="/Shop/shop.html" ;}


        }else{
            alert("Password not matching");

        }

    }else{
        alert("Empty fields are not allowed")
    }
})

function checkIfUserExist(email){
    console.log("inside CheckUser Function")
    let users = JSON.parse(localStorage.getItem("users"));
    const obj = users.find((userObj)=>{
        return userObj.email === email ;
    })
    if(obj) return true
    return  false

}





console.log(Fname.value + Lname.value + email.value + confirmPass.value + password.value)