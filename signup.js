const userName = document.getElementById("name");
const company = document.getElementById("company");
const companySize = document.getElementById("size");
const companyLocation = document.getElementById("location");
const number = document.getElementById("number");
const email = document.getElementById("email");
const passwordInput = document.getElementById("passwordInput");
const signBtn = document.getElementById("sign");
const passwordLabel = document.getElementById("passwordLabel");
const passwordRequirments = document.getElementById("passwordReq");

const lengthCheck = document.getElementById("length");
const upperCaseCheck = document.getElementById("uppercase");
const specialCharCheck = document.getElementById("special");
const digitCheck = document.getElementById("digit");

passwordInput.addEventListener("input", (event) => {
  checkPasswordConditions(event);
});
function checkPasswordStrength(str) {
  if (str.length < 8) {
    return false;
  } else if (
    str.length > 8 &&
    hasUppercase(str) &&
    hasSymbol(str) &&
    hasDigit(str)
  ) {
    return true;
  } else {
    return false;
  }
}
function hasUppercase(str) {
  return /[A-Z]/.test(str);
}
function hasSymbol(str) {
  return /[^a-zA-Z0-9\s]/.test(str);
}
function hasDigit(str) {
  return /\d/.test(str);
}
function changePasswordStyle(str) {
  if (hasUppercase(str)) {
    upperCaseCheck.style.color = "green";
  }
  if (str.length > 8) {
    lengthCheck.style.color = "green";
  }
  if (hasSymbol(str)) {
    specialCharCheck.style.color = "green";
  }
  if (hasDigit(str)) {
    digitCheck.style.color = "green";
  }
}

function checkPasswordConditions(event) {
  passwordInput.style.color = "black";
  passwordInput.style.fontWeight = "100";
  let s = event.target.value;
  lengthCheck.style.color = "red";
  upperCaseCheck.style.color = "red";
  specialCharCheck.style.color = "red";
  digitCheck.style.color = "red";
  changePasswordStyle(s);
}

function passwordValidation() {
  passwordInput.value = "Enter a strong Password";
  passwordInput.style.color = "red";
  passwordInput.style.fontWeight = "bolder";
}
function submitFormData() {
  if (!checkPasswordStrength(passwordInput.value)) {
    passwordValidation();
  } else {
    alert("You are signed in successfully");
  }
}
signBtn.addEventListener("click", submitFormData);
