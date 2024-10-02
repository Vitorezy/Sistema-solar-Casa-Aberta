var btncalcular = document.getElementById("btncalcular");

btncalcular.addEventListener("click", () => {
  var planeta_select = document.getElementById("planeta_select");
  var pesokginput = document.getElementById("pesokginput");
  var pesoresult = document.getElementById("pesoresult");
  var input_idade = document.getElementById('input_idade').value
  var labelidaderesult = document.getElementById('idaderesult')
  if (planeta_select.value == "terra") {
    pesoresult.innerHTML = pesokginput.value + "Kg";
    labelidaderesult.innerHTML = input_idade + " Anos"
  } else if (planeta_select.value == "mercurio") {
    pesoresult.innerHTML = (pesokginput.value * 0.37).toFixed(2) + "Kg";
    labelidaderesult.innerHTML = (input_idade * 4.16191562144).toFixed(2) + " Anos"
  } else if (planeta_select.value == "venus") {
    pesoresult.innerHTML = (pesokginput.value * 0.88).toFixed(2) + "Kg";
    labelidaderesult.innerHTML = (input_idade * 1.62554517134).toFixed(2) + " Anos"
  } else if (planeta_select.value == "marte") {
    pesoresult.innerHTML = (pesokginput.value * 0.38).toFixed(2) + "Kg";
    labelidaderesult.innerHTML = (input_idade * 0.53).toFixed(2) + " Anos"
  } else if (planeta_select.value == "jupiter") {
    pesoresult.innerHTML = (pesokginput.value * 2.64).toFixed(2) + "Kg";
    labelidaderesult.innerHTML = (input_idade * 0.084).toFixed(2) + " Anos"
  } else if (planeta_select.value == "saturno") {
    pesoresult.innerHTML = (pesokginput.value * 1.15).toFixed(2) + "Kg";
    labelidaderesult.innerHTML = (input_idade * 0.033).toFixed(2) + " Anos"
  } else if (planeta_select.value == "urano") {
    pesoresult.innerHTML = (pesokginput.value * 1.17).toFixed(2) + "Kg";
    labelidaderesult.innerHTML = (input_idade * 0.0011).toFixed(2) + " Anos"
  } else if (planeta_select.value == "netuno") {
    pesoresult.innerHTML = (pesokginput.value * 1.18).toFixed(2) + "Kg";
    labelidaderesult.innerHTML = (input_idade * 0,004).toFixed(2) + " Anos"
  }
});
