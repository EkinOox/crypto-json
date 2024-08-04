window.addEventListener("load", Requete);
var Moneyjson = null; // JSON crypto API
var Nb = 0; // Nombre de cryptomoney
var val = 0; // Valeur courante

function Requete() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState == this.DONE) {
            data = this.responseText;
            // console.log(data);
            Moneyjson = JSON.parse(data);
            val = Math.floor(Math.random() * Moneyjson.result.length);
            alert(val);
            Afficher(Moneyjson);
        }
    });
    xhr.open("GET", "https://happyapi.fr/api/crypto");
    xhr.send(null);
}

function Afficher(DJson) {
    document.querySelector("#name").innerHTML = Moneyjson.result[val].id;
    document.querySelector("#price").innerHTML = Moneyjson.result[val].current_price;

    var Element1 = document.querySelector("#logo")
    var IMG = document.createElement("img");
    IMG.setAttribute("class", "col-lg-12 col-md-12 col-sm-12");
    IMG.setAttribute("id", "imgnew")
    IMG.setAttribute("src", Moneyjson.result[val].image);
    IMG.style.height = "200px";
    IMG.style.width = "200px";
    Element1.appendChild(IMG);

    var Element2 = document.querySelector("#btnprecedent")
    var btn1 = document.createElement("BUTTON");
    btn1.setAttribute("class", "col-lg-6 col-md-6 col-sm-6");
    var texte1 = document.createTextNode("Précédent");
    btn1.appendChild(texte1)
    Element2.appendChild(btn1);

    var Element3 = document.querySelector("#btnsuivant")
    var btn2 = document.createElement("BUTTON");
    btn2.setAttribute("class", "col-lg-6 col-md-6 col-sm-6");
    var texte2 = document.createTextNode("Suivant");
    btn2.appendChild(texte2)
    Element3.appendChild(btn2);
}
document.getElementById("btnprecedent").addEventListener("click", Precedent);
function Precedent() {
    val -= 1;
    document.querySelector("#name").innerHTML = Moneyjson.result[val].id;
    document.querySelector("#price").innerHTML = Moneyjson.result[val].current_price;

    var imgnew = document.querySelector("#imgnew");
    imgnew.setAttribute("src", Moneyjson.result[val].image);
}
document.getElementById("btnsuivant").addEventListener("click", Suivant);
function Suivant() {
    val += 1;
    document.querySelector("#name").innerHTML = Moneyjson.result[val].id;
    document.querySelector("#price").innerHTML = Moneyjson.result[val].current_price;

    var imgnew = document.querySelector("#imgnew");
    imgnew.setAttribute("src", Moneyjson.result[val].image);
}
function Ajour(nb) { }



