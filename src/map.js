let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -17.6487519,lng: -149.5203696},
          zoom: 11
    });
}

export{initMap};