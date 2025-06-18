const emailInput = document.getElementById("email-input");
const emailList = document.getElementById("email-list");
const emails = [];

function addEmail() {
  const email = emailInput.value.trim();
  if (email && !emails.includes(email)) {
    emails.push(email);
    const item = document.createElement("div");
    item.textContent = email;
    emailList.appendChild(item);
    emailInput.value = "";
  } else if (emails.includes(email)) {
    alert("Email already added.");
  } else {
    alert("Please enter a valid email.");
  }
}

function redirectToDashboard() {
  const email = emailInput.value.trim();
  if (email) addEmail();

  if (emails.length > 0) {
    localStorage.setItem("emails", JSON.stringify(emails));
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter at least one email ID before logging in.");
  }
}
