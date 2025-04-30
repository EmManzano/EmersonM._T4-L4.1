function authenticate() {
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  if (!role || !password) {
    console.error("All fields must be filled.");
    messageDiv.textContent = "Please select a role and enter your password.";
    return;
  }

  let valid = false;
  messageDiv.style.color = "#d9534f"; // red for errors

  // Check the selected role using a switch statement.
  switch (role) {
    case "Department Head":
      if (password === "SiEsD3ptH34d") {
        console.log("Welcome, Department Head!");
        valid = true;
      } else {
        console.error("Incorrect password for Department Head.");
      }
      break;
    case "Faculty":
      if (password === "SiEsF4cu1ty") {
        console.log("Welcome, Faculty!");
        valid = true;
      } else {
        console.error("Incorrect password for Faculty.");
      }
      break;

    // Check if the entered password matches the Student Officer's password.
    case "Student Officer":
      if (password === "#CCSOAko") {
        console.log("Welcome, Student Officer!");
        valid = true;
      } else {
        console.warn("Incorrect password for Student Officer.");
      }
      break;
    case "Student":
      if (password === "3SapatNa!") {
        console.log("Welcome, Student!");
        valid = true;
      } else {
        console.warn("Incorrect password for Student.");
      }
      break;
    default:
      console.error("Unknown role.");
      break;
  }

  // Display a success or error message based on the 'valid' flag.
  messageDiv.textContent = valid ? `Login successful. Welcome, ${role}!` : "Invalid password or role.";
  if (valid) {
    messageDiv.style.color = "green";
  }
}
