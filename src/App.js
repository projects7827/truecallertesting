import React from 'react'

const App = () => {


  function truecaller() {
    let min = 100000000000;
    let max = 123456789598;
    let result = Math.random() * (max - min) + min;
    let deeplink = `truecallersdk://truesdk/web_verify?requestNonce=${Math.floor(result)}&partnerKey=ktAmh7b26e72d999c4f42b5a18e12454dee83&partnerName=ockypocky2`
    window.location.href = deeplink;
    setTimeout(function () {
     
      if (document.hasFocus()) {
        // To Check whether Truecaller App is present on device or not
        // You can add your logic here    
      }
      else {
        // Truecaller app present on the device and the profile overlay opens
        // The user clicks on verify & you'll receive the user's access token to fetch the profile on your 
        // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
        fetch(`https://ockypockydev.azurewebsites.net/api/v1/user/truecaller_auth/get_token/?req_id=${Math.floor(result)}`).then((res) => res.json()).then((data) => {
          document.write(JSON.stringify(data));
        })
        alert(Math.floor(result))
      }
    }, 1000);
   
  }
  return (
    <>
      <button onClick={truecaller}>truecaller</button>
    </>
  )
}

export default App