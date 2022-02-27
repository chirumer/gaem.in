let curtain_element;
let login_box_element;
let signup_box_element;

function logged_out() {
    curtain_element.remove();
    login_box_element.remove();
    document.body.classList.remove('stop_scrolling');
}

function switch_to_signup() {
    login_box_element.innerHTML =
    `
    <div class="signup-box">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="" />
        <label>Last Name</label>
        <input type="text" placeholder="" />
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <label>Confirm Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" onclick="logged_out()" />
      </form>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
      </p>
    </div>
    <p class="para-2">
      Already have an account? <b onclick=switch_to_login()>Login here</b>
    </p>
    `
}

function switch_to_login() {
    login_box_element.innerHTML =
    `
    <div class="login-box">
        <h1>Login</h1>
        <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" onclick="logged_out()" />
        </form>
    </div>
    <p class="para-2">
        Not have an account? <b onclick="switch_to_signup()">Sign Up Here</b>
    </p>
    `
}

function logged_in() {
    curtain_element = document.createElement('div');
    curtain_element.classList.add('curtain');
    document.body.appendChild(curtain_element);

    login_box_element = document.createElement('div');
    login_box_element.classList.add('login-container');
    login_box_element.innerHTML = 
    `
    <div class="login-box">
        <h1>Login</h1>
        <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" onclick="logged_out()" />
        </form>
    </div>
    <p class="para-2">
        Not have an account? <b onclick="switch_to_signup()">Sign Up Here</b>
    </p>
    `
    document.body.appendChild(login_box_element);

    document.body.classList.add('stop_scrolling');
}



logged_in();
