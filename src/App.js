import React from 'react'

const App = () => {
  React.useEffect(() => {


  }, [])




  function truecaller() {

    function getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          alert("Windows Phone");
      }
  
      if (/android/i.test(userAgent)) {
        alert("Android");
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        alert("iOS");
      }
  
      return "unknown";
  }
    // let min = 100000000000;
    // let max = 123456789598;
    // let result = Math.random() * (max - min) + min;
    // let deeplink = `truecallersdk://truesdk/web_verify?requestNonce=${Math.floor(result)}&partnerKey=ktAmh7b26e72d999c4f42b5a18e12454dee83&partnerName=ockypocky2`
    // window.location.href = deeplink;
    // setTimeout(() => {
    //   if (document.hasFocus()) {
    //     alert("has focus")
    //     // To Check whether Truecaller App is present on device or not
    //     // You can add your logic here    
    //   }
    //   else {
    //     settingFocus(result);
    //   }
    // }, 500);
  }

  function settingFocus(result) {
    setTimeout(() => {
      if (document.hasFocus()) {
        alert(result);
        fetch(`https://ockypockydev.azurewebsites.net/api/v1/user/truecaller_auth/get_token/?req_id=${Math.floor(result)}`).
          then((res) => res.json()).
          then((data) => {
            alert(JSON.stringify(data));  
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