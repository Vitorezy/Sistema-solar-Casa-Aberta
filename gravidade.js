var planeta_select = document.getElementById("planeta_select");
var pesokginput = document.getElementById("pesokginput");
var pesoresult = document.getElementById("pesoresult");
var btncalcular = document.getElementById("btncalcular");

btncalcular.addEventListener("click", () => {
  if (planeta_select.value == "terra") {
    pesoresult.innerHTML = pesokginput.value + "Kg";
  } else if (planeta_select.value == "mercurio") {
    pesoresult.innerHTML = pesokginput.value * 0.37 + "Kg";
  } else if (planeta_select.value == "venus") {
    pesoresult.innerHTML = pesokginput.value * 0.88 + "Kg";
  } else if (planeta_select.value == "marte") {
    pesoresult.innerHTML = pesokginput.value * 0.38 + "Kg";
  } else if (planeta_select.value == "jupiter") {
    pesoresult.innerHTML = pesokginput.value * 2.64 + "Kg";
  } else if (planeta_select.value == "saturno") {
    pesoresult.innerHTML = pesokginput.value * 1.15 + "Kg";
  } else if (planeta_select.value == "urano") {
    pesoresult.innerHTML = pesokginput.value * 1.17 + "Kg";
  } else if (planeta_select.value == "netuno") {
    pesoresult.innerHTML = pesokginput.value * 1.18 + "Kg";
  }
});
