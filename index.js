var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
       icon.src = "img/sun1.png";
       icon.style = "transform :rotateZ(-360deg);";
    }
    else{
        icon.src = "img/moon.png";
    }

}

const click = document.getElementById("sites");
const login = document.getElementById("login-page");
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
    var input = document.getElementById("loginuser").value;
    alert("Run away You are not Safe "+input);
    }


function createu() {
    var input = document.getElementById("createuser").value;
    alert("There is No Space For You " +input+ " Get Lost");
    }


$('.creates a') .click(function(){
$('form').animate({height:"toggle", opacity: "toggle"}, "slow")
})



