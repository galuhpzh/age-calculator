// function to create an element by its ID
function takeElement(id) {
  return document.getElementById(id);
}

// function to create an element by its class name
function setResult(mesaage) {
  takeElement("result").innerHTML = mesaage;
}

// function to calculate age based on birthdate
function calculateAge(birthdate) {
  const now = new Date();
  const birthDate = new Date(birthdate);
  let age = now.getFullYear() - birthDate.getFullYear();

  const notBirtdayYet =
    now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() &&
      now.getDate() < birthDate.getDate());

  if (notBirtdayYet) {
    age--;
  }

  if (age === 0) {
    return "You are newborn🗿!";
  } else if (age < 0) {
    return "You haven't been born yet🫵😂!";
  }

  return age;
}

// function to display the age based on user input
function displayAge(e) {
  e.preventDefault();

  const birthdateInput = takeElement("birthdate").value;
  if (!birthdateInput) return setResult("Please enter your birthdate.");

  const age = calculateAge(birthdateInput);
  if (typeof age === "string") return setResult(age);

  setResult(`You are ${age} years old.`);
}

// add event listener to the button to trigger age calculation
takeElement("calculate").addEventListener("click", displayAge);
