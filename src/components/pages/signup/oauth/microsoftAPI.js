import React from "react";
//=============================================================================
// ## Microsoft Sign Up API
//=============================================================================
async function MicrosoftAPI(authCode) {
  console.log("MicrosoftSend");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    authCode: authCode,
  });
  return await fetch("http://localhost:5012/api/auth0/createusermicrosoft", {
    body: raw,
    headers: myHeaders,
    method: "POST",
  }).then((response) =>
    response.json().then((response) => {
      return response.message;
    })
  );
}

export default MicrosoftAPI;
