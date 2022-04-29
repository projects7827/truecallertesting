import React from 'react'

const App = () => {
  var req_nonce = 123456789598;  // random number of length 8 to 64 characters

  function truecaller() {
    alert("pt");
var url=`truecallersdk://truesdk/web_verify?requestNonce=${req_nonce}&partnerKey=IFspJbde6cb8b59a74d28953031a1f34ff29d&partnerName=ockypocky&lang=LANGUAGE_LOCALE&title=TITLE_STRING_OPTION&skipOption=FOOTER_CTA_STRING`

  }

  return (
    <>
      <button onClick={truecaller}>truecaller</button>
    </>
  )
}

export default App