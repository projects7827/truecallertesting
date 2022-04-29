import React from 'react'

const App = () => {
  var req_nonce = 123456789598;  // random number of length 8 to 64 characters
  function truecaller() {

    window.location = `truecallersdk://truesdk/web_verify?
        requestNonce=${req_nonce}
        &partnerKey="QY8jy517b3efdf98d44798e129f973d028a69"
        &partnerName="testing"
        &lang=en`;

    setTimeout(function () {

      if (document.hasFocus()) {
        alert("success")
        // Truecaller app not present on the device and you redirect the user 
        // to your alternate verification page
      } else {
        alert("fail")

        // Truecaller app present on the device and the profile overlay opens
        // The user clicks on verify & you'll receive the user's access token to fetch the profile on your 
        // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
      }
    }, 600);


  }
  return (
    <>
      <button onClick={truecaller}>truecaller</button>

    </>
  )
}

export default App