//  carrega o  script  depois  que  a  pagina  for carregada
$(document).ready(function() {
 //  descobre   a  cidade   do  cliente   pelo  ip
  $.get('http://ip-api.com/json', function(response) {
    var city = response.city;
    var country = response.country;
    $('#country').html(country + ',');
    $('#city').html(city);
    // link  do  api +  cidade  que foi  descoberta  +  key
    var link = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=900dc6f89ec177d87777e4595b3ab421';
    $.ajax({
      url: link,
      type: "GET",
      dataType: 'jsonp',
      success: function(data) {

        // caminho do  dominio
      var mainF = Math.round((data.main.temp - 273) * ( 9 / 5 ) + 32)
      var mainC = Math.round(data.main.temp - 273);
      var maxC = Math.round(data.main.temp_max - 273) + '°C';
      var maxF = Math.round((data.main.temp_max - 273) * ( 9 / 5 ) + 32) + '°F'
      var minC = Math.round(data.main.temp_min - 273) + '°C'
      var minF = Math.round((data.main.temp_min - 273) * ( 9 / 5 ) + 32) + '°F'
        $('#number').text(mainC);
        $('#max').text(maxC)
        $('#min').text(minC)

    // botao C para F

      $('#CtoF').on('click',function() {
        var n = $('#number').text();
        if ( n == mainC) {
         $('#number').text(mainF);
         $('#CtoF').text('°F');
         $('#max').text(maxF);
         $('#min').text(minF);
         n =  $('#number').text();
       } else if ( n == mainF) {
         $('#number').text(mainC);
         $('#CtoF').text('°C');
         $('#max').text(maxC);
         $('#min').text(minC);
         n =  $('#number').text();
       };

      })
      // icon
      getBack ()
      console.log (data.weather[0].main)
      function getBack () {
        switch (data.weather[0].main) {
          case 'Thunderstorm':
            $('body').css({'background-color': '#990099'});
            $('img').attr("src", 'http://i64.tinypic.com/24c6x3k.png');
            break;
          case 'Drizzle':
            $('body').css({'background-color': '#8ac7db'});
            $('img').attr("src", 'http://i68.tinypic.com/xrevd.png');
            break;
          case 'Rain':
            $('body').css({'background-color': '#4d4dff'});
            $('img').attr("src", 'http://i68.tinypic.com/2m2zvd0.png');
            break;
          case 'Clear':
            $('body').css({'background-color': '#ffff33'});
            $('img').attr("src", 'http://i66.tinypic.com/16geg3r.png');
            break;
          case 'Clouds':
            $('body').css({'background-color': 'grey'});
            $('img').attr("src", 'http://i67.tinypic.com/2nsbzvt.png');
            break;
          case 'Snow':
            $('body').css({'background-color': '#bfbfbf'});
            $('img').attr("src", 'http://i66.tinypic.com/2pu0twp.png');
            break;
          }
        }
}
    });
  })
});
