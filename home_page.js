let curtain_element;
let login_box_element;

function logged_in() {
    curtain_element = document.createElement('div');
    curtain_element.classList.add('curtain');
    document.body.appendChild(curtain_element);

    login_box_element = document.createElement('div');
    login_box_element.classList.add('login_box');
    login_box_element.innerHTML = 
    `
    <div class="login-box">
        <h1>Login</h1>
        <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
        </form>
    </div>
    <p class="para-2">
        Not have an account? <a href="signup.html">Sign Up Here</a>
    </p>
    `
    document.body.appendChild(login_box_element);
}

function logged_out() {
    curtain_element.remove();
    login_box_element.remove();
}

//logged_in();