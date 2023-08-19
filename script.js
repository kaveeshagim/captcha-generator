const captchaTextBox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

//variable to store generated captcha
let captchaText = null;

//function to generate captcha
const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => Math.random() > 0.5 ? char.toUpperCase() : char);
    captchaText = changeString.join(" ");
    captchaTextBox.value = captchaText;
    console.log(captchaText);
};

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
    message.classList.remove("active"); // Hide the message
    message.style.display = "none"; // Hide the message
};

const captchaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled", !captchaInputBox.value);

    if(!captchaInputBox.value) {
        message.classList.remove("active");
 
    }
};

//function to validate the entered the entered captcha
submitBtnClick = () => {
    captchaText = captchaText
    .replace(/\s+/g, '')
    .split("")
    .filter((char) => char !== " ")
    .join("");
    message.classList.add("active");

    //check if the entered captcha text is corect or not
    if(captchaInputBox.value === captchaText){
        message.style.display = "block";
        message.innerText = "Entered captcha is correct";
        message.style.color = "#222620";
    }else{
        message.style.display = "block";
        message.innerText = "Entered captcha is not correct";
        message.style.color = "#ff2525";
    }

    message.classList.add("active"); // Show the message
};


//add event listeners for the refresh button, captchaInputBox
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

//generate a captcha when the page loads
generateCaptcha();