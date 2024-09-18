let cont_pagina = 0;
var botaoproximo = document.getElementById("btnproximo");
var botaovoltar = document.getElementById("btnvoltar");
botaoproximo.addEventListener("click", () => {
  if (cont_pagina != 8) {
    cont_pagina = cont_pagina + 1;
  } else {
    cont_pagina = 0;
  }
  MudarPágina();
});
botaovoltar.addEventListener("click", () => {
  if (cont_pagina == 0) {
    cont_pagina = 8;
  } else {
    cont_pagina = cont_pagina - 1;
  }
  MudarPágina();
});
function MudarPágina() {
  var nome_planeta = document.getElementById("nome_planeta");
  var imagem_planeta = document.getElementById("imagem_planeta");
  if (cont_pagina == 0) {
    nome_planeta.innerHTML = "TERRA";
    imagem_planeta.src = "images/terra.png";
    imagem_planeta.style.animationDuration = "60s";
  } else if (cont_pagina == 1) {
    nome_planeta.innerHTML = "LUA";
    imagem_planeta.src = "images/lua.png";
    imagem_planeta.style.animationDuration = "10s";
  } else if (cont_pagina == 2) {
    nome_planeta.innerHTML = "MARTE";
    imagem_planeta.src = "images/marte.png";
    imagem_planeta.style.animationDuration = "10s";
  } else if (cont_pagina == 3) {
    nome_planeta.innerHTML = "SATURNO";
    imagem_planeta.src = "images/saturno.png";
    imagem_planeta.style.animationDuration = "10s";
  } else if (cont_pagina == 4) {
    nome_planeta.innerHTML = "URANO";
    imagem_planeta.src = "images/urano.png";
    imagem_planeta.style.animationDuration = "10s";
  } else if (cont_pagina == 5) {
    nome_planeta.innerHTML = "MARTE";
    imagem_planeta.src = "images/marte.png";
    imagem_planeta.style.animationDuration = "10s";
  } else if (cont_pagina == 6) {
    nome_planeta.innerHTML = "MARTE";
    imagem_planeta.src = "images/marte.png";
    imagem_planeta.style.animationDuration = "10s";
  } else if (cont_pagina == 7) {
    nome_planeta.innerHTML = "MARTE";
    imagem_planeta.src = "images/marte.png";
    imagem_planeta.style.animationDuration = "10s";
  } else if (cont_pagina == 8) {
    nome_planeta.innerHTML = "MARTE";
    imagem_planeta.src = "images/marte.png";
    imagem_planeta.style.animationDuration = "10s";
  }
}
