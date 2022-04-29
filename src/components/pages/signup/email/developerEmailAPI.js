import React from "react";
//=============================================================================
// ## SES Email Developer
//=============================================================================
async function DeveloperEmailAPI(
  email,
  developerName,
  marketingName,
  codeSnippet
) {
  console.log("Running Fast");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    email: email,
    developerName: developerName,
    marketingName: marketingName,
    codeSnippet: codeSnippet,
  });
  return await fetch("http://localhost:5012/api/ses/developeremail", {
    body: raw,
    headers: myHeaders,
    method: "POST",
  }).then((response) => console.log(response));
}

export default DeveloperEmailAPI;
