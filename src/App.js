import React from 'react'

const App = () => {
  var req_nonce = 123456789598;  // random number of length 8 to 64 characters
  function truecaller() {
    setTimeout(function () {
      if (document.hasFocus()) {
        alert("not found")
      } else {
        alert("successful");
        fetch("https://pt-truecaller.herokuapp.com/").then((res) => {
        console.log(res);  
        return res.json()}).then((value) => {
          alert(JSON.stringify(value));
          alert("done")
          const options = {
            method: "GET",
            url: "https://profile4.truecaller.com/v1/default",
            headers: { Authorization: `Bearer ${value.accessToken}` },
          };
          fetch(options).then((res) => { res.json() }).then((res) => {
            alert(JSON.stringify(res));
          }).catch((err) => { JSON.stringify(err) })

        })
      }
    }, 600);
    window.location.href = `truecallersdk://truesdk/web_verify?requestNonce=${req_nonce}&partnerKey="P0smK41384c5915474009aeaadc01110e27af"&partnerName="truecaller"&lang=en`;
  }

  return (
    <>
      <button onClick={truecaller}>truecaller</button>
    </>
  )
}

export default App