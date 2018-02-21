$(document).ready(function(){

  var c_atual;

  setInterval(function () {

    if ($('#ID-overviewCounterValue').length) {

      var c = $('#ID-overviewCounterValue').text();

      if(c != c_atual) {
        tihh_setBadge(c);

        //toca som, se o número aumentou
        if(c > c_atual)
          tihh_sound();

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

var audio = new Audio(chrome.extension.getURL('som/bib.wav'));
function tihh_sound(){
  audio.play();
}