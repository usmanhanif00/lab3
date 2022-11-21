const btn = document.querySelector("#btn"); const fname = document.querySelector("#name");
const rollNo = document.querySelector("#rollNo"); const email =
document.querySelector("#email"); const password =
document.querySelector("#password"); btn.addEventListener("click", (e) =>
{ e.preventDefault(); if (
(fname.value === "" || fname.value === null) &&
(rollNo.value === "" || rollNo.value === null) &&
(email.value === "" || email.value === null)
&&
(password.value === "" || password.value === null)
) {
alert("All fields are empty");
} else if (fname.value === "" || fname.value
=== null) {
alert("Insert Roll No");
} else if (rollNo.value === "" || rollNo.value
=== null) {
alert("Insert Roll No");
} else if (email.value === "" || email.value
=== null) {
alert("Insert email");
} else if (password.value === "" || password.value === null) {
alert("Insert Password");
} else {
btn.style.background = "red";
alert("form is Submitted");
} }); 