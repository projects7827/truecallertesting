import React from 'react'

const App = () => {


  function truecaller() {
    let min = 100000000000;
    let max = 123456789598;
    let result = Math.random() * (max - min) + min;
    setTimeout(function () {
      fetch(`https://ockypockydev.azurewebsites.net/api/v1/user/truecaller_auth/get_token/?req_id=${Math.floor(result)}`).then((res) => res.json()).then((data) => {
        document.write(JSON.stringify(data));
      })
      alert(result)
    }, 1000);
    let deeplink = `truecallersdk://truesdk/web_verify?requestNonce=${Math.floor(result)}&partnerKey=ktAmh7b26e72d999c4f42b5a18e12454dee83&partnerName=ockypocky2`
    window.location.href = deeplink;
  }
  return (
    <>
      <button onClick={truecaller}>truecaller</button>
    </>
  )
}

export default App