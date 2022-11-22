let map;
let marker;
let center = { lat: -6.888463202449027, lng: -38.558930105104125 };

initMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 16,
  });

  marker = new google.maps.Marker({
    map: map,
    position: center,
    draggable: true,
  });

  map.addListener("click", (evt) => {
    addMarker(evt);
  });

  marker.addListener("position_changed", () => {
    map.setCenter(marker.position);
  });
};

addMarker = (evt) => {
  marker.setPosition(evt.latLng);
};

Salvar = () => {
  const local = {
    nome: document.getElementById("nome").value,
    lat: marker.getPosition().lat(),
    lng: marker.getPosition().lng(),
  };
  fetch("http://localhost:3000/hemonucleos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(local),
  })
    .then((response) => {
      alert("Salvo com sucesso");
    })
    .catch((error) => alert("Falha ao salvar!"));
  console.log(JSON.stringify(local));
};

Lista = () => {
  fetch("http://localhost:3000/hemonucleos/")
    .then((res) => res.json())
    .then((pontos) => {
      marker = new google.maps.Marker({
        map: map,
      });

      pontos.forEach((location) => {
        if (location.geometria) {
          marker.setPosition(
            new google.maps.LatLng(
              location.geometria.coordinates[0],
              location.geometria.coordinates[1]
            )
          );
        }
      });
    });
};
