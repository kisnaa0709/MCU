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


function loginu() {
    var input = document.getElementById("loginuser").value;
    alert("Run away You are not Safe "+input);
    }



let liked = document.getElementById("likee")
let likeu = 3000

function like(){
    likeu += 1
    liked.innerText = likeu + (" views")
   
}




function createu() {
    var input = document.getElementById("createuser").value;
    alert("There is No Space For You " +input+ " Get Lost");
    }
// body.onclose("click",()=>{
//     if (login.style.display === "block") {
//          login.style.display = "none"

//     }
   
// })
$('.creates a') .click(function(){
$('form').animate({height:"toggle", opacity: "toggle"}, "slow")
})



