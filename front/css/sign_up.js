
const email=new RegExp('.*@.*');
const username= new RegExp(([a-zA-Z]+[_1-9]*[a-zA-Z]*){4,12});
const password=new RegExp(([a-zA-Z]*[1-9]*[a-zA-Z]*){6,18});


const submit = document.getElementById("submit");
submit.addEventListener("click", validate);
function validate(e) {
  e.preventDefault();
  const user_email=document.getElementById("email");
  const user_username = document.getElementById("username");
  const user_password = document.getElementById("password");
  const user_con_password = document.getElementById("confirm password");
  let valid = true;
  if (!email.test(user_email))
  {
  	const emailError = document.getElementById("emailError");
  	emailError.classList.add("visible");
    user_email.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
    valid=false;
  }
  if (!username.test(user_username))
  {
  	const usernameError = document.getElementById("usernameError");
  	emailError.classList.add("visible");
    user_username.classList.add("invalid");
    usernameError.setAttribute("aria-hidden", false);
    usernameError.setAttribute("aria-invalid", true);
    valid=false;
  }
  if (!password.test(user_password))
  {
  	const passwordError = document.getElementById("passwordError");
  	passwordError.classList.add("visible");
    user_password.classList.add("invalid");
    passwordError.setAttribute("aria-hidden", false);
    passwordError.setAttribute("aria-invalid", true);
    valid=false;
  }
  if (user_password!=user_con_password)
  {
  	const con_passwordError = document.getElementById("con_passwordError");
  	con_passwordError.classList.add("visible");
    user_con_password.classList.add("invalid");
    con_passwordError.setAttribute("aria-hidden", false);
    con_passwordError.setAttribute("aria-invalid", true);
    valid=false;
  }

  return valid;
}
