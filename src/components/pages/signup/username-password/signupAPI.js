import React from "react";
//=============================================================================
// ## Auth0 SIGN UP API
//=============================================================================
async function SignUp(email, given_name, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    email: email,
    given_name: given_name,
    password: password,
  });
  return await fetch("http://localhost:5012/api/auth0/createuserpassword", {
    body: raw,
    headers: myHeaders,
    method: "POST",
  }).then((response) =>
    response.json().then((response) => {
      return response.message;
    })
  );
}

export default SignUp;
