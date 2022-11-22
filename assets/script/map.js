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
