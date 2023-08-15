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
