import React from 'react'

const App = () => {
  var req_nonce = 123456789598;  // random number of length 8 to 64 characters
  function truecaller() {
    setTimeout(function () {
      if (document.hasFocus()) {
        window.location.href = "/NotFound";
      } else {
        alert("successful");
        fetch("https://ockypocky-test.azurewebsites.net/result").then((res) => res.json()).then((value) => {
          JSON.stringify(value);
          const options = {
            method: "GET",
            url: "https://profile4.truecaller.com/v1/default",
            headers: { Authorization: `Bearer ${value.accessToken}` },
          };
          fetch(options).then((res) => { res.json() }).then((res) => {
            JSON.stringify(res);
          })
        })
        // Truecaller app present on the device and the profile overlay opens
        // The user clicks on verify & you'll receive the user's access token to fetch the profile on your 
        // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
      }
    }, 600);
    window.location.href = `truecallersdk://truesdk/web_verify?type=btmsheet&requestNonce=${req_nonce}&partnerKey=IFspJbde6cb8b59a74d28953031a1f34ff29d&partnerName=ockypocky&lang=en&loginPrefix=getdetails&loginSuffix=signin&ctaPrefix=proceedwith&ctaColor=white&ctaTextColor=red&btnShape=round&skipOption=useanothernum`
  }
  return (
    <>
      <button onClick={truecaller}>truecaller</button>
    </>
  )
}

export default App