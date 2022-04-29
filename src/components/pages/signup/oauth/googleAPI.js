import React from "react";
//=============================================================================
// ## Google Sign Up API
//=============================================================================
async function GoogleAPI(authCode) {
  console.log("GoogleSend");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    authCode: authCode,
  });
  return await fetch("http://localhost:5012/api/auth0/createusergoogle", {
    body: raw,
    headers: myHeaders,
    method: "POST",
  }).then((response) =>
    response.json().then((response) => {
      return response.message;
    })
  );
}

export default GoogleAPI;
