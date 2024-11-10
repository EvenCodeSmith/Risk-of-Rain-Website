document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const successMessage = document.getElementById('success-message');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents form submission

            // Get input values
            const username = document.getElementById('username').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const build = document.getElementById('build').value;

            // Log the values to the console
            console.log(`Username: ${username}`);
            console.log(`Datum: ${date}`);
            console.log(`Zeit: ${time}`);
            console.log(`Build: ${build}`);

            // Display success message
            successMessage.style.display = 'block';
            successMessage.style.opacity = '1';

            // Hide message after 10 seconds with fade-out effect
            setTimeout(() => {
                successMessage.style.opacity = '0';
            }, 10000);

            // Completely hide the message after the fade-out transition (1 second here)
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 11000);

            // Reset the form
            form.reset();
        });
    } else {
        console.error('Formular nicht gefunden');
    } 
});

document.addEventListener("DOMContentLoaded", onContentLoaded);
 
function onContentLoaded() {
  const reservationForm = document.getElementById("form-container");
  reservationForm.onsubmit = onSubmit;
}
 
function putState(message) {
  alert(message);
}
 
function onSubmit(event) {
  let errorMessage = "";
 
  event.preventDefault();
 
  const form = document.getElementById("form-container");
  if (form.username.value.trim() === "") {
    errorMessage += "Benutzername wurde noch nicht angegeben<br />";
  }
 
  if (form.email.value.trim() === "") {
    errorMessage += "E-Mail wurde noch nicht angegeben <br />";
  }

  if (form.vorname.value.trim() === "") {
    errorMessage += "Vorname wurde noch nicht angegeben<br />";
  }

  if (form.nachname.value.trim() === "") {
    errorMessage += "Nachname wurde noch nicht angegeben<br />";
  }
 
  if (errorMessage !== "") {
    putState(errorMessage);
    return false;
  }
 
  return confirm("Möchtest du dieses Formular senden?");
}
 
function onReset(event) {}
 
function putState(mytext) {
  document.getElementById("status").innerHTML = mytext;
}
 