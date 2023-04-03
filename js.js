
// 정의
const root = document.getElementById('root')
let form = document.createElement("form")
let id = document.createElement('input')
//
root.appendChild(form)
root.appendChild(id).textContent = 'id'


/* 
  <a>
    <div id="login"></div>
    <main id="main-holder">
      <h1 id="login-header">Login</h1>
      
      <div id="login-error-msg-holder">
        <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
      </div>
      
      <form id="login-form">
        <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">
        <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password">
        <input type="submit" value="Login" id="login-form-submit">
      </form>
    <div id="signUp"></div>
  </a>

  <B>
    <form class="pure-form">
      <fieldset>
          <legend>Confirm password with HTML5</legend>

          <input type="password" placeholder="Password" id="password" required>
          <input type="password" placeholder="Confirm Password" id="confirm_password" required>

          <button type="submit" class="pure-button pure-button-primary">Confirm</button>
      </fieldset>
    </form>
  </B>
    
a
    const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})



//b
let password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity(''); // 오류가 없으면 메시지를 빈 문자열로 설정해야한다. 오류 메시지가 비어 있지 않은 한 양식은 유효성 검사를 통과하지 않고 제출되지 않는다.
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


 */



