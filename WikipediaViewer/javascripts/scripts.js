$(document).ready(function () {
  // click aleatório
  $('#random').click(function(){
    window.open('https://en.wikipedia.org/wiki/Special:Random','_blank');
  });
  // função para o enter
  $('#search').keypress(function(e){
    if(e.which == 13) {
      $('li').remove();
      $('#submit').click();
    }
  });

  // clickando no enviar,ele faz o GET e recebe a lista de volta
  $('#submit').click(function() {
    $('li').remove();
    $("ul").fadeOut('fast');
    $.ajax ({
      url:'https://en.wikipedia.org/w/api.php',
      data: {
        action: 'query',
        list: 'search',
        format: 'json',
        srsearch: $('#search').val()
      },
      type:'GET',
      dataType: 'jsonp',
      success: function(data) {
  // pegando o array com o wdata,a data é inserida na lista
        var wdata = data.query.search;
        wdata.forEach(function(info) {
          console.log(encodeURIComponent(info.title));
 //criando a lista
        var box = '<div class="box"><li><a href="https://en.wikipedia.org/wiki/' + encodeURIComponent(info.title) + '" target="_blank"><div>';
        box += '<p>' + info.title + '</p>';
        box += '<p>' + info.snippet + '</p>';
        box += "</a></li></div>";
        $("ul").append(box);
        console.log(wdata);
        $("ul").fadeIn('slow');
        });
      }
    });
  });
});
