$(document).ready(function(){

  var c_atual;

  setInterval(function () {

    if ($('#ID-overviewCounterValue').length) {

      var c = $('#ID-overviewCounterValue').text();

      if(c != c_atual) {
        tihh_setBadge(c);
        c_atual = c;
      }

    }

  }, 1000);

});

function tihh_setBadge(c){
  var favicon = new Favico({
    type: 'rectangle',
    animation: 'slide'
  });

  favicon.badge(c);
}