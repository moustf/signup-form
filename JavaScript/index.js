// ? Targeting elements start.
const form = document.getElementById("signup");
const textInput = document.querySelector(".text-cont input");
const emailInput = document.querySelector(".email-cont input");
const passwordInput = document.querySelector(".password-cont input");
const confirmPasswordInput = document.querySelector(
  ".confirm-password-cont input"
);
const textApprove = document.querySelector(".text-cont img");
const textClose = document.querySelectorAll(".text-cont img")[1];
const emailApprove = document.querySelector(".email-cont img");
const emailClose = document.querySelectorAll(".email-cont img")[1];
const passwordApprove = document.querySelector(".password-cont img");
const passwordClose = document.querySelectorAll(".password-cont img")[1];
const confirmPasswordApprove = document.querySelector(
  ".confirm-password-cont img"
);
const confirmPasswordClose = document.querySelectorAll(
  ".confirm-password-cont img"
)[1];
const strengthSpan = document.querySelector(".strength");
const strengthLevelSpan = document.querySelector(".strength .level");
const submitBtn = document.querySelector(".signup-btn");
// ? Targeting elements end.

// ? Adding event listener to the text input to listen to the keyboard typing.
textInput.addEventListener("keyup", () => {
  validateUsername(textInput.value);
});

// ? Creating the function which is responsible for validating the username input.
function validateUsername(username) {
  let usernameRegex = /^[a-zA-z]+.+$/g;
  if (usernameRegex.test(username)) {
    textApprove.style.display = "block";
    textClose.style.display = "none";
  } else {
    textApprove.style.display = "none";
    textClose.style.display = "block";
  }
}

// ? Adding event listener to the email input to listen to the keyboard typing.
emailInput.addEventListener("keyup", () => {
  validateEmail(emailInput.value);
});

// ? Creating the function which is responsible for validating the email input.
function validateEmail(email) {
  let emailRegex = /^[a-zA-z0-9]?.*\@[a-zA-z0-9]{1,}\.[a-zA-Z]{1,}$/;
  if (emailRegex.test(email)) {
    emailApprove.style.display = "block";
    emailClose.style.display = "none";
  } else {
    emailApprove.style.display = "none";
    emailClose.style.display = "block";
  }
}

// ? Creating the function which is responsible for prevent form submission.
form.onsubmit = function (e) {
  e.preventDefault();
};

// ? Adding event listener to the password input to listen to the keyboard typing.
passwordInput.addEventListener("keyup", () => {
  validatePassword(passwordInput.value);
  checkStrength(passwordInput.value);
});

// ? Creating the function which is responsible for validating the password input in case of strength.
function validatePassword(password) {
  let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
  // ! Six Characters long, contains a low case letter, contains a capital case letter, and contains a number.
  if (passwordRegex.test(password)) {
    passwordApprove.style.display = "block";
    passwordClose.style.display = "none";
  } else {
    passwordApprove.style.display = "none";
    passwordClose.style.display = "block";
  }
}

// ? Creating the function which is responsible for showing the level of strength in the span.
function checkStrength(password) {
  let firstCheck = /[a-z]+/.test(password);
  let secondCheck = /[A-Z]+/.test(password);
  let thirdCheck = /[0-9]+/.test(password);
  let fourthCheck = /[a-zA-Z0-9]{6,}/.test(password);
  let checksArr = [firstCheck, secondCheck, thirdCheck, fourthCheck];
  let test = checksArr.filter((bool) => bool === true);
  if (test.length > 0) {
    strengthSpan.style.display = "block";
    if (test.length === 1) {
      strengthLevelSpan.textContent = "very weak";
      strengthLevelSpan.style.color = "red";
    } else if (test.length === 2) {
      strengthLevelSpan.textContent = "weak";
      strengthLevelSpan.style.color = "orange";
    } else if (test.length === 3) {
      strengthLevelSpan.textContent = "intermediate";
      strengthLevelSpan.style.color = "blue";
    } else if (test.length === 4) {
      strengthLevelSpan.textContent = "strong";
      strengthLevelSpan.style.color = "green";
    }
  } else {
    strengthSpan.style.display = "none";
  }
}
