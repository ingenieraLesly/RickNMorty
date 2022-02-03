const API = "https://rickandmortyapi.com/api/character";

const getAPI = (url) => {
  console.log("Ingresó");
  return fetch(url) //función fetch permite consumir apis
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error in the API : ", error);
    });
};
//vamos a traer personaje por personaje el json dice que trae de a 20 personajes forEach (ch=character para guardar los personajes)
const fillData = (data) => {
  let html = "";
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${ch.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html; //print 20 cards
};

const pagination = (info) => {
  let html = "";

  info.prev == null ? "disabled" : "";

  info.next == null ? "disabled" : "";

  html += `<li class="page-item ${
    info.prev == null ? "disabled" : ""
  }"><a class="page-link fas fa-chevron-left" onclick="getAPI('${info.prev}')">Prev</a></li>`;
  html += `<li class="page-item ${
    info.next == null ? "disabled" : ""
  }"><a class="page-link fas fa-chevron-right" onclick="getAPI('${info.next}')">Next</a></li>`;


  document.getElementById("pagination").innerHTML = html;
};

getAPI(API); //Al ejecutarse se solicita obtener
//Cuando se ejecuta se envía la variable con la URL y la funcion la recibe, Aqí recibe la url
