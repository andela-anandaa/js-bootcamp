$.ajax(
  {
    url: "http://api.openweathermap.org/data/2.5/weather?q=Nairobi",
    context: document.body
  }
).done(function (data) {
  console.log(data);
  $(".res").append(data.weather[0].description);
});
