const login = document.getElementById('login');
const register = document.getElementById('register');
const Blogin = document.getElementById('Blogin');
const Bregister = document.getElementById('Bregister');
const Alogin = document.getElementById('Alogin');
const Aregister = document.getElementById('Aregister');

const Lmail = document.getElementById('Lmail');
const Lpwd = document.getElementById('Lpwd');
const msg = document.getElementById('msg');
const msg1 = document.getElementById('msg1');

const Rname = document.getElementById('Rname');
const Rmail = document.getElementById('Rmail');
const Rpwd = document.getElementById('Rpwd');
const RCpwd = document.getElementById('Rcpwd');

window.onscroll = () =>{
    fadeOut();
}

window.onload = () =>{
    fadeOut();
}

function loader() {
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut() {
    setTimeout(loader, 1000);
  }


Blogin.addEventListener('click', ()=>{
    login.style.display = "flex";
    register.style.display = "none";
})

Bregister.addEventListener('click', ()=>{
    login.style.display = "none";
    register.style.display = "flex";
})

Alogin.addEventListener('click', ()=>{
    login.style.display = "flex";
    register.style.display = "none";
})

Aregister.addEventListener('click', ()=>{
    login.style.display = "none";
    register.style.display = "flex";
})


login.onsubmit = (e)=>{
    e.preventDefault();

    const mail = Lmail.value;
    const password = Lpwd.value;
    console.log(mail, password);

    if(mail === "" || password === ""){
        msg.style.fontSize = "15px"
        msg.innerHTML = "Please fill all details to login!"
    }else{
        window.location.assign("../Library/index.html")
    }

}



register.onsubmit =(e)=>{
    e.preventDefault();
    const name = Rname.value;
    const mail = Rmail.value;
    const password = Rpwd.value;
    const conPassword= RCpwd.value;
    if(name === "" || mail === "" || password === "" || conPassword === ""){
        msg1.style.fontSize = "15px"
        msg1.innerHTML = "Please fill all details to Register!"
    }else{
        window.location.assign("../Library/index.html")
    }
}
