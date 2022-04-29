import React from 'react'

const App = () => {
  var req_nonce = 123456789598;  // random number of length 8 to 64 characters

  function truecaller() {
    alert("pt");
var url=`truecallersdk://truesdk/web_verify?requestNonce=${req_nonce}&partnerKey=QY8jy517b3efdf98d44798e129f973d028a69&partnerName=testing&lang=LANGUAGE_LOCALE&title=TITLE_STRING_OPTION&skipOption=FOOTER_CTA_STRING`

  }

  return (
    <>
      <button onClick={truecaller}>truecaller</button>
    </>
  )
}

export default App