// const getGeoCoordinates = require('/js/getGeoCoordinates');

async function loginFormHandler(event) {
  event.preventDefault();
  // We need to POST the email and password from the form to our server, so go ahead and grab the data 
  // from the form.
  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('password-login').value.trim();
  
  // Once we have the email and password, make a fetch POST request to the /api/users/logins
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // if all is gravy, render the dashboard view
    if (response.ok) {
      document.location.replace('dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event){
  event.preventDefault();
  // We need to POST first name, last name, email, age, & address going from our sign-up form to the server. 
  // Here we grab the data from our form
  const firstname = document.getElementById('first-name-signup').value.trim();
  const lastname = document.getElementById('last-name-signup').value.trim();
  const email = document.getElementById('email-signup').value.trim();
  const age = parseInt(document.getElementById('age-signup').value.trim());
  const address = document.getElementById('address-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();

  // run the function getGeoCoordinates and pass it the address value
  // const coordObject = await getGeoCoordinates(address);
  // console.log('coordObject is', coordObject);
  // const lat = coordObject.lat;
  // const long = coordObject.long;
  
  // 8800 SW 72nd St, Miami, FL 33173
  // Make a fetch() POST request to the /api/users/ endpoint
  // make sure all fields have values
  if(firstname && lastname && email && age && address && password){
      const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            age,
            address,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      // if all is gravy, render the dashboard view
      if (response.ok) {
        document.location.replace('dashboard');
      } else {
        alert('User input failed validation checks. Please check your input.');
      }
  } else {
    window.alert('Please ensure you provide a value for each field.');
  }
}

document.getElementById('loginSubmitBtn').addEventListener('click', loginFormHandler);
document.getElementById('signupSubmitBtn').addEventListener('click', signupFormHandler);

