import React from 'react'

const App = () => {


  function truecaller() {
    let min = 100000000000;
    let max = 123456789598;
    let result = Math.random() * (max - min) + min;
    setTimeout(function () {
      if (document.hasFocus()) {
        alert("not found")
      } else {
        alert("success");
        // fetch("https://pt-truecaller.herokuapp.com/reply").then((res) => {
        // console.log(res);  
        // return res.json()}).then((value) => {
        //   alert(JSON.stringify(value));
        //   alert("done")
        //   const options = {
        //     method: "GET",
        //     url: "https://profile4.truecaller.com/v1/default",
        //     headers: { Authorization: `Bearer ${value.accessToken}` },
        //   };
        //   fetch(options).then((res) => { res.json() }).then((res) => {
        //     alert(JSON.stringify(res));
        //   }).catch((err) => { JSON.stringify(err) })

        // })
      }
    }, 2000);
    let deeplink = `truecallersdk://truesdk/web_verify?requestNonce=123456789598&partnerKey="P0smK41384c5915474009aeaadc01110e27af"&partnerName="truecaller"&lang=en`
    // alert(deeplink);
     alert(Math.floor(result));

    window.location.href = deeplink;



  }

  return (
    <>
      <button onClick={truecaller}>truecaller</button>
    </>
  )
}

export default App