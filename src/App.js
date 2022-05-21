import React from 'react'

const App = () => {


  function truecaller() {
    let min = 100000000000;
    let max = 123456789598;
    let result = Math.random() * (max - min) + min;
    setTimeout(function () {
      if (document.hasFocus()) {
      } else {
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
    let deeplink = `truecallersdk://truesdk/web_verify?requestNonce='12345678000'&partnerKey='ktAmh7b26e72d999c4f42b5a18e12454dee83'&partnerName='ockypocky2'`
    // alert(deeplink);

    window.location.href = deeplink;



  }

  return (
    <>
      <button onClick={truecaller}>truecaller</button>
    </>
  )
}

export default App