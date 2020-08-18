var position;
var lati;
var longti

var geoSuccess = function (position) {
  startPos = position;
  lati = startPos.coords.latitude;
  longti = startPos.coords.longitude;
};
var postLocation

var getLocation = setInterval(()=>{
  navigator.geolocation.getCurrentPosition(geoSuccess);
  console.log(lati, longti);
  if(lati||longti) {
    postLocation = {
      latitude: lati,
      longtitude: longti
    }
    let promise = $.post("https://5f3bd488fff8550016ae5bfc.mockapi.io/place", postLocation);
    promise.then(
      data => console.log('data ', null),
      error => console.log('error: ', error)
    )
    clearInterval(getLocation);
  }
}, 4000)


// let promise = $.get("")