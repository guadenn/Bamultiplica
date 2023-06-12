//menu interactivo y se activa al hacer scroll//

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   header.classList.toggle('active');
   document.body.classList.toggle('active');
}

window.onscroll = () =>{
   if(window.innerWidth < 991){
      menu.classList.remove('fa-times');
      header.classList.remove('active');
      document.body.classList.remove('active');
   }

   document.querySelectorAll('section').forEach(sec =>{

      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
         document.querySelectorAll('.header .navbar a').forEach(links =>{
            links.classList.remove('active');
            document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active')
         });
      };

   });
}

///formulario
const form = document.getElementById("form")
const sendMail = document.getElementById("emailA")


function handleSendEmail(event){
    event.preventDefault()
    const fd = new FormData(this)


    sendMail.setAttribute(
        'href',
        `mailTo:guadabosio@gmail.com?subject=${fd.get('tema')}&body=${fd.get('message')}`
    )


    sendMail.click()
}


form.addEventListener('submit', handleSendEmail)


//tema oscuro

var icon = document.getElementById("icon");
icon.onclick = function(){
   document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme")){
      icon.src = "img/sun.png";
   }else{
      icon.src = "img/moon.png";
   }

}