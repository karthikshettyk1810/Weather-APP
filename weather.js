// https://www.accuweather.com/
// f3b4a908036c4fad9f455133243110;
// const prompt = require("prompt-sync")();
function submit() {
  let input = document.getElementById("input").value;
  let api = "f3b4a908036c4fad9f455133243110";
  let show = document.getElementById("show");
  if (input != "") {
    let p = fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api}&q=${input}`
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
