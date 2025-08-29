greet();
function greet() {
    let username = prompt("Please enter your name:");
    if (username) {
        document.getElementById('username').innerText = username;
    }
}

function validateForm() {
    let name = document.getElementById('name-input').value.trim();
    let email = document.getElementById('email-input').value.trim();
    let phoneNumber = document.getElementById('phone-number-input').value.trim();
    let message = document.getElementById('message-input').value.trim();

    if (name === "" || email === "" || phoneNumber === "" || message === "") {
        alert("Form must be filled out");
        return false;
    } else {
        alert("Thank you, " + name + " have a great day" + "!");

        //Answer Shown
        document.getElementById('form-answers').style.display = "block";
        document.getElementById('answers-list').innerHTML = `
            <li><b>Name:</b> ${name}</li>
            <li><b>Email:</b> ${email}</li>
            <li><b>Phone Number:</b> ${phoneNumber}</li>
            <li><b>Message:</b> ${message}</li>
        `;

        // clear the form fields:
        document.getElementById('name-input').value = "";
        document.getElementById('email-input').value = "";
        document.getElementById('phone-number-input').value = "";
        document.getElementById('message-input').value = "";
    }
}