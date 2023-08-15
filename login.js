document.getElementById("submit-btn").addEventListener("click", function () {
  const loginInputEmail = document.getElementById("login-input-email");
  const loginInputPassword = document.getElementById("login-input-password");

  const loginInputEmailValue = loginInputEmail.value;
  const loginInputPasswordValue = loginInputPassword.value;

  if (
    loginInputEmailValue === "abc@gmail.com" &&
    loginInputPasswordValue === "abc"
  ) {
    window.location.href = "./heist.html";
  } else {
    alert("Invalid email and password");
  }
});

document.getElementById("eye").addEventListener("click", function () {
  const eye = document.getElementById("eye-bondo");

  const inputVal = document.getElementById("login-input-password");

  if (eye.classList[1] === "fa-eye-slash") {
    eye.removeAttribute("class");

    eye.setAttribute("class", "fa-solid fa-eye");

    inputVal.removeAttribute("type");
    inputVal.setAttribute("type", "text");
  } else {
    eye.removeAttribute("class");
    eye.setAttribute("class", "fa-solid fa-eye-slash");

    inputVal.removeAttribute("type");
    inputVal.setAttribute("type", "password");
  }
});