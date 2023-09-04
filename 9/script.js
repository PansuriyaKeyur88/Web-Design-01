
// Login Form

function form() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    document.writeln("<h1> Submit Form </h1>");
    document.writeln("Email = ", email, "<br>");
    document.writeln("Password = ", pass, "<br>");
}


// Sign Up Page

function form2() {
    let first_name = document.getElementById('f-name').value;
    let last_name = document.getElementById('s-name').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    document.writeln("<h1> Submit Form </h1>");
    document.writeln("FirstName = ",first_name ,"<br>");
    document.writeln("LastName = ",last_name ,"<br>");
    document.writeln("Mobile= ",mobile ,"<br>");
    document.writeln("Email = ", email, "<br>");
    document.writeln("Password = ", pass, "<br>");
}
