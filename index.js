var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
       icon.src = "img/sun1.png"
       icon.style = "transform :rotateZ(-360deg);"
    }
    else{
        icon.src = "img/moon.png"
    }

}
// function click() {
// let login_dis = document.getElementById("login-page").style.display
// if (login_dis == none) {
//     login_dis = block
// }else {
//     login_dis = none
// }


// }

const click = document.getElementById("sites")
const login = document.getElementById("login-page")
click.addEventListener("click",()=>{
    if (login.style.display === "none") {
         login.style.display = "block"

    } else {
            login.style.display = "none"
    } 
   
})


let liked1 = document.getElementById("likee1")
let liked2 = document.getElementById("likee2")
let liked3 = document.getElementById("likee3")
let liked4 = document.getElementById("likee4")
let liked5 = document.getElementById("likee5")
let liked6 = document.getElementById("likee6")

function like1(){
    liked1.textContent = parseInt(liked1.textContent) + 1
    liked1.innerText = liked1.textContent + (" ") + ("views") 
}
function like2(){
    liked2.textContent = parseInt(liked2.textContent) + 1
    liked2.innerText = liked2.textContent + (" ") + ("views")
}
function like3(){
    liked3.textContent = parseInt(liked3.textContent) + 1
    liked3.innerText = liked3.textContent + (" ") + ("views")   
}
function like4(){
    liked4.textContent = parseInt(liked4.textContent) + 1
    liked4.innerText = liked4.textContent + (" ") + ("views")   
}
function like5(){
    liked5.textContent = parseInt(liked5.textContent) + 1
    liked5.innerText = liked5.textContent + (" ") + ("views")   
}
function like6(){
    liked6.textContent = parseInt(liked6.textContent) + 1
    liked6.innerText = liked6.textContent + (" ") + ("views")   
}



function loginu() {
    let name = document.getElementById("loginuser").value
    let pass = document.getElementById("pass").value
    let login = document.getElementById("form1")
    login.style = "color: white;"
    if (pass == 1234 && name == "Kishan"||name == "Abhishek"||name == "Shubham"||name == "Sidhant"||name == "Aryan" ) {
        login.innerHTML = ("Welocome Back!!") + ("<br />")+ ("<br />") + name + ("<br />")+ ("<br />")
    } else {
        login.innerHTML = ("Username or Password Incorrect") + ("<br />")+ ("<br />") + ("Try Again") + ("<br />")+ ("<br />")
        
    }
    

    }


function createu() {
    let name = document.getElementById("createuser").value
    let signup = document.getElementById("form2")
    let login = document.getElementById("form1")
    
    signup.innerHTML = ("Welocome!!") + ("<br />")+ ("<br />") + name + ("<br />")+ ("<br />")
    signup.style = "block"
    login.style = "none"
    signup.style = "color: white;"

    }


$('.creates a') .click(function(){
$('form').animate({height:"toggle", opacity: "toggle"}, "slow")
})



