var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
       icon.src = "img/sun1.png";
    }
    else{
        icon.src = "img/moon.png";
    }

}
$('.message a') .click(function(){
$('form').animate({height:"toggle", opacity: "toggle"}, "slow")
})
