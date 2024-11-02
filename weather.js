// https://www.weatherapi.com/
// Generate your API Key by logging into weatherapi website and any other and use it below
// const prompt = require("prompt-sync")();
function submit() {
  let input = document.getElementById("input").value;
  let api = "INSERT YOUR API KEY";
  let show = document.getElementById("show");
  if (input != "") {
    let p = fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api}&q=${input}`
      // above link is for fetching from weatherapi web but you customize by changing it into some other website as per your requirement
      // just change it to api.weatherapi.com to your required site eg - api.exampleapi.com etc..
    );
    p.then((v) => {
      return v.json();
    }).then((v1) => {
      console.log(v1);
      // console.log(Array.from(v1.current));
      // console.log(v1.current.temp_c);
      show.innerHTML = v1.current.temp_c + " Deg";
      input.innerHTML = "";
      // window.alert(v1.current.temp_c);
    });
  } else {
    show.innerHTML = "-- Please Enter City --";
  }
}
