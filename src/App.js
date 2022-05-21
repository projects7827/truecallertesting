import React from 'react'

const App = () => {
  React.useEffect(() => {


  }, [])




  function truecaller() {
    let min = 100000000000;
    let max = 123456789598;
    var result = Math.random() * (max - min) + min;
    let deeplink = `truecallersdk://truesdk/web_verify?requestNonce=${Math.floor(result)}&partnerKey=ktAmh7b26e72d999c4f42b5a18e12454dee83&partnerName=ockypocky2`
    window.location.href = deeplink;
    setTimeout(() => {

      if (document.hasFocus()) {
        alert("has focus")
        // To Check whether Truecaller App is present on device or not
        // You can add your logic here    
      }
      else {
        settingFocus();
      }

    }, 500);
  }

  function settingFocus() {
    setTimeout(() => {
      if (document.hasFocus()) {
        alert(Math.floor(result));
        alert("done")
        fetch(`https://ockypockydev.azurewebsites.net/api/v1/user/truecaller_auth/get_token/?req_id=${Math.floor(result)}`).then((res) => res.json()).then((data) => {
          alert(JSON.stringify(data));
        })
      }
      else {
        settingFocus();

      }
    }, 500);
  }

  return (
    <>
      <button onClick={truecaller}>truecaller</button>
    </>
  )
}
export default App