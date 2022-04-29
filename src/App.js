import React from 'react'

const App = () => {
  var req_nonce = 123456789598;  // random number of length 8 to 64 characters
  function truecaller() {
      if (document.hasFocus()) {
        // window.location.href = "/NotFound";
        alert("failure ")
      } else {
 
        alert("success ")

        window.location = `truecallersdk://truesdk/web_verify?type=btmsheet&requestNonce=${req_nonce}&partnerKey=QY8jy517b3efdf98d44798e129f973d028a69&partnerName=testing&lang=en&loginPrefix=getdetails&loginSuffix=signin&ctaPrefix=proceedwith&ctaColor=white&ctaTextColor=red&btnShape=round&skipOption=useanothernum`;

    
  }}
  return (
    <>
      <button onClick={truecaller}>truecaller</button>

    </>
  )
}

export default App