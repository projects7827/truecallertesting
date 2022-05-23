import React from 'react'

const App = () => {
  React.useEffect(() => {


  }, [])




  function truecaller() {
    let min = 100000000000;
    let max = 123456789598;
    let result = Math.random() * (max - min) + min;
    let deeplink = `truecallersdk://truesdk/web_verify?requestNonce=${Math.floor(result)}&partnerKey=ktAmh7b26e72d999c4f42b5a18e12454dee83&partnerName=ockypocky2`
    window.location.href = deeplink;
    setTimeout(() => {
      if (document.hasFocus()) {
        alert("has focus")
        // To Check whether Truecaller App is present on device or not
        // You can add your logic here    
      }
      else {
        settingFocus(result);
      }
    }, 500);
  }

  function settingFocus(result) {
    setTimeout(() => {
      if (document.hasFocus()) {
        alert(result);
        fetch(`https://ockypockydev.azurewebsites.net/api/v1/user/truecaller_auth/get_token/?req_id=${Math.floor(result)}`).
          then((res) => res.json()).
          then((data) => {
            console.log(data.end_point)
            console.log(data.access_token)

            let myHeaders = new Headers(
              { 'Content-Type': 'text/xml' },
              { 'Accept': "application/json" },
              { "Content-Type": "application/json" },
              { "Access-Control-Allow-Methods": "GET, POST, OPTIONS" },
              { "Access-Control-Allow-Origin": "*" },
              { "Access-Control-Allow-Credentials": "true" },
              { "Authorization": `Bearer ${data.access_token}` }
            );
            const opt = {
              mode: "cors",
              headers: myHeaders
            }
            fetch("https://profile4-noneu.truecaller.com/v1/default", opt).then((res) => res.json()).then((data) => {
              console.log(data);
            }).catch((err) => {
              console.log(err);
            })
          })
      }
      else {
        settingFocus(result);
      }
    }, 500);
  }

  return (
    <>
      <button onClick={truecaller}>truecaller</button>
      {/* <button onClick={click}>click</button> */}
    </>
  )
}
export default App