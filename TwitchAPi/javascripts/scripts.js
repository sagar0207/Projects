$(document).ready(function() {
  // stockar streamers
  var streamers = ["riotgames", "pobelter", "voyboy", "alexich", "hdefkim", "keithmcbrief", "overlordforte", "Kat_Life", "MushIsGosu", "Thalies145", "Flyerkbeklol", "Vertigal", "AnnieBot", "imaqtpie", "freecodecamp", "C9Rush", "BoloDota", "TSM_Bjergsen", "Mijage"]
    //loop pra pegar um streamer e adicionar
  streamers.forEach(function(name) {
    //criar as variaveis dentro da função
    var url = "https://api.twitch.tv/kraken/channels/" + name + "?callback=?";
    var verifyURL = "https://api.twitch.tv/kraken/streams/" + name;
    // get
    $.getJSON(verifyURL, function(data) {
      // verificar se ta online setando  interrogação dois pontos
      var verify = data.stream == null ? "offline" : "online";
      // se online > pegar o nome,logo e status no html om o link
      if (verify == "online") {
        name = data.stream.channel.display_name;
        var logo = data.stream.channel.logo;
        var game = data.stream.game;
        var link = data.stream.channel.url;
        $('#boxcontent').append([
          "<div class='channel'>",
          "<div id='image'>",
          "<img src=" + logo + " />",
          "</div>",
          "<div>",
          "<h1 class='nick'>",
          "<a href=" + link + " target='_blank'>" +
          name + " </a>",
          "</h1>",
          "<p class='playing'>",
          "Playing " + game +
          "</p>",
          "<div class='statusOn'>",
          "<p>",
          "<span style='color:#f03333'>",
          "&#9899;",
          "</span>",
          "LIVE",
          "</p>",
          "</div>",
          "</div>",
          "</div>",
          "<hr>"
        ].join(""));
      } else if (verify == "offline") {
        $.getJSON(url, function(info) {
          console.log(info.name);
          name = info.display_name;
          var logo = info.logo;
          var link = "https://www.twitch.tv/" + info.name + "/profile";
          $('#boxcontent').append([
            "<div class='channel'>",
            "<div id='image'>",
            "<img src=" + logo + " />",
            "</div>",
            "<div>",
            "<h1 class='nick'>",
            "<a href=" + link + " target='_blank'> " +
            name + " </a>",
            "</h1>",
            "<div class='statusOff'>",
            "<p>",
            "OFFLINE",
            "</p>",
            "</div>",
            "</div>",
            "</div>",
            "<hr>"
          ].join(""));
        });
      }

      // criar o search

      $('#search').keyup(function() {
        // examinar  e criar função do texto
        selection = function(text) {
          return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };
        var filter = selection($(this).val());

        $('.channel').each(function() {
          // add hidden pros elements encontrados e retira hidden para os que possuem
          if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).addClass('hidden');
          } else {
            $(this).removeClass('hidden');
          }
        });
      });
    });
  });
});
