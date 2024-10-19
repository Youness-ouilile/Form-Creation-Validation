document.addEventListener('DOMContentLoaded' , function(){

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(fram){

        fram.preventDefault();


        const username = document.getElementById('username').Value.trim();
        const email = document.getElementById('email').Value.trim();
        const password = document.getElementById('password').Value.trim();
        var isValid = true ;
        const messages = [];
        if(username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters.");
        }
        if(!email.include('@')||!email.include('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }
        if(password.length < 8 ) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }
        feedbackDiv.style.display = "block";
        if(isValid){
            feedbackDiv.textContent("Registration successful!");
            feedbackDiv.style.color = "#28a745";
        }else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }


    });
    
});
