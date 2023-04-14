document.onreadystatechange = function () {
  setDate()
  //Mouse over show password

  function showText(x) {
    x.type = "text";
  }
  function showPassword(x) {
    x.type = "password";
  }

  //On click show password
  function myFunction() {
    var x = document.getElementById("pwd");
    icon = document.getElementById("icon");
    if (x.type === "password") {
      x.type = "text";
      icon.className = "bi bi-eye-slash-fill";
    } else {
      x.type = "password";
      icon.className = "bi bi-eye-fill";
    }
  }
  function setDate() {
    const date = document.querySelector(".top-header #demo")
    if (!date) return
    date.innerHTML = new Date().toLocaleDateString('fa-IR')
  }
  // Validitopn password login
  function verifyPassword() {
    var pw = document.getElementById("pwd").value;
    //check empty password field
    if (pw == "") {
      document.getElementById("message").innerHTML = "**Fill the password please!";
      return false;
    }

    //minimum password length validation
    if (pw.length < 8) {
      document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
      return false;
    }

    //maximum length of password validation
    if (pw.length > 15) {
      document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
      return false;
    } else {
      alert("Password is correct");
    }
  }






  // Email Validation 

  // (function () {
  //   'use strict';
  //   // Get the form…
  //   var signupform = document.getElementById('signupform');
  //   // …and add an submit eventlistener
  //   if (signupform) {
  //     signupform.addEventListener("submit", handleSubmit);
  //   }

  // Delay helper function
  // var timer;
  // function delay(callback, ms) {
  //   clearTimeout(timer);
  //   timer = setTimeout(callback, ms);
  // };

  // Prevents default form submission and initiates validation
  // function handleSubmit(event) {
  //   event.preventDefault();

  //   if (validate()) {
  //     alert('Well done!');
  //   } else {
  //     var email = document.getElementById('email');
  //     email.addEventListener('keyup', function (event) {
  //       delay(function () {
  //         if (validate()) {
  //           signupform.classList.add('not-anymore');
  //         };
  //       }, 500);
  //     });
  //   }
  // }

  // Checks if email is valid and sets some classes. Returns true if valid, otherwise false
  // function validate() {
  //   var msg = document.getElementsByClassName('js-messages')[0];
  //   signupform.classList.remove('has-errors');
  //   while (msg.firstChild) {
  //     msg.removeChild(msg.firstChild);
  //   }

  //   var emailadress = document.getElementById('email').value;
  //   if (isValidEmail(emailadress)) {
  //     return true;
  //   } else {
  //     var span = document.createElement("p");
  //     console.log(span);
  //     var msgtext = document.createTextNode("Your Email was incorrect or it was be registered!");
  //     console.log(msgtext);
  //     span.appendChild(msgtext);
  //     msg.appendChild(span);
  //     signupform.classList.add('has-errors');

  //     return false;
  //   }
  // }

  // Tests a given string against a regular expression that matches the valid email address format, e.g. myname3000@example.com
  //   function isValidEmail(email) {
  //     var result = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
  //     return result.test(email.toLowerCase());
  //   }

  // })();


  // $('.dropdown-menu').click(function () {
  //   $(this).toggleClass("show");
  // });

  const dropdown = document.querySelector('.dropdown-menu')
  dropdown && dropdown.addEventListener('click', function (event) {
    event.preventDefault();
    var target = document.querySelector('.dropdown-menu');
    if (target.classList.contains('show')) {
      target.classList.remove('');
    } else {
      target.classList.add('show');
    }
  });



  // const inputBoxesSearch = document.querySelector(".input-boxes-search");


  //   inputBoxesSearch.addEventListener("change", function () {
  //      let Value = inputBoxesSearch.value;

  //      changeCurrency(+Value)
  //      inputBoxesSearch.value = changeCurrency(+Value)
  //      console.log(Value)

  //   })
  // document.addEventListener("keyup")


  function changeCurrency(num) {
    let Value = +num.value
    Value = Number(Value.toFixed(3)).toLocaleString()
    num.value = Value;
    num.type = "text"


  }


  const tels = document.querySelectorAll("input[type=tel]")
  for (let input of tels) {
    input.addEventListener('input', function (event) {
      input.value = event.target.value.replace(/[^0-9]/g, '')
    })
  }

  const e2p = s => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
  const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  const prices = document.querySelectorAll('.input-boxes-search');

  for (let p of prices) {
    p.addEventListener('input', function (e) {
      let value = p.value.replace(/,/g, "").replace(/[^0-9 ۰-۹]/g, "")
      value = p2e(value)
      p.value = e2p(Number(value).toLocaleString())
    })
  }

  const btnClear = document.querySelector("#btn-clear")
  const inps = document.querySelectorAll('.tel-box-input  > *')
  const ps = document.querySelectorAll('.input-boxes-search')
  const ss = document.querySelectorAll('.custom-select-boxes')

  btnClear && btnClear.addEventListener('click', function (e) {
    for (let input of inps) {
      input.value = ""
    }
    for (let input of ps) {
      input.value = ""
    }
    for (let input of ss) {
      input.firstElementChild.selected = "selected"
    }

  })

  const lenLimit = document.querySelectorAll('input[maxlength="11"]')
  for (let limit of lenLimit) {
    limit.addEventListener('change', (e) => {
      let value = limit.value.replace(/[^0-9]/g, '')
      if (e.target.value.length > 11) {
        value = String(e.target.value).slice(0, 10)
      }
      limit.value = value
    })
  }


 const  sims = document.querySelectorAll('.list-simcart')
 for(let sim of sims){
  sim.addEventListener('click', function(e){
    const value = this.attributes["data-seq"].value
    console.log(value)
  })
 }

}
const changeVisibility = function (el) {
  const input = el.previousElementSibling
  const current = input.attributes.type
  input.setAttribute("type", (current.value == 'text' ? 'password' : 'text'))
}

const submitRegister = (event) => {
  event.preventDefault()
  event.stopPropagation()
  const form = event.target
  if (form.password !== form.confirm_password) {
      alert("password not equal")
  }
  console.log(event,{form})
  return false
}