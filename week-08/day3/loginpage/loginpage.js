'use strict';



let hideIcon = document.querySelector('.toggle-password');
let passwordInput = document.querySelector('#passwordInput');

hideIcon.addEventListener('click', (e) => {
  console.log(e);
  console.log(hideIcon);
  console.log(passwordInput);


  e.target.classList.toggle("fa-eye-slash");
  passwordInput['type'] === 'password' ?
    passwordInput.setAttribute('type', 'text') :
    passwordInput.setAttribute('type', 'password');
});

/*
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
}); */