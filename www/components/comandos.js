$(document).on('click','#tab1', function(){
  navigator.vibrate(1000);
});

$(document).on('click','#tab3', function(){
  function mapa(position){
    navigator.notification.beep(1);
      L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

      var map = L.mapquest.map('map', {
      center: [-24.121976, -46.678703],
      layers: L.mapquest.tileLayer('map'),
      zoom: 15
      });
      L.marker([-24.121976, -46.678703], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup('Denver, CO').addTo(map);

        L.circle([-24.121976, -46.678703], { radius: 200 }).addTo(map);

      map.addControl(L.mapquest.control());
    };

    navigator.geolocation.getCurrentPosition(mapa);
});

// window.onload = function mapa(position){
//     navigator.notification.beep(1);
//       L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

//       var map = L.mapquest.map('map', {
//       center: [-24.121976, -46.678703],
//       layers: L.mapquest.tileLayer('map'),
//       zoom: 15
//       });
//       L.marker([-24.121976, -46.678703], {
//           icon: L.mapquest.icons.marker(),
//           draggable: false
//         }).bindPopup('Denver, CO').addTo(map);

//         L.circle([-24.121976, -46.678703], { radius: 200 }).addTo(map);

//       map.addControl(L.mapquest.control());
//       navigator.geolocation.getCurrentPosition(mapa);
//     };

$(document).on('click','#face', function(){
  var ref = cordova.InAppBrowser.open('https://www.facebook.com/etecab/?eid=ARA3XuA3sv1h-k6l5sVH3dyq7gjlK0XDc34BeWN5L8ic0V6mResPUtb-MQENLV-x_J94uSiUmGb6od0Y', '_blank', 'location=yes');
});
$(document).on('click','#vestibulinho', function(){
  var ref = cordova.InAppBrowser.open('https://www.vestibulinhoetec.com.br/home/', '_blank', 'location=yes');
});
$(document).on('click','#escola', function(){
  var ref = cordova.InAppBrowser.open('http://eteab.com.br/cms/', '_blank', 'location=yes');
});
$(document).on('click','#inscricao', function(){
  var ref = cordova.InAppBrowser.open('https://www.vestibulinhoetec.com.br/candidato/dados-acesso.asp', '_blank', 'location=yes');
});
$(document).on('click','#edital', function(){
  var ref = cordova.InAppBrowser.open('https://www.vestibulinhoetec.com.br/documentos/', '_blank', 'location=yes');
});