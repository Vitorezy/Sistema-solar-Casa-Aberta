let cont_pagina = 0;
var botaoproximo = document.getElementById("btnproximo");
var botaovoltar = document.getElementById("btnvoltar");
botaoproximo.addEventListener("click", () => {
  if (cont_pagina != 9) {
    cont_pagina = cont_pagina + 1;
  } else {
    cont_pagina = 0;
  }
  MudarPágina();
});
botaovoltar.addEventListener("click", () => {
  if (cont_pagina == 0) {
    cont_pagina = 9;
  } else {
    cont_pagina = cont_pagina - 1;
  }
  MudarPágina();
});
var container_botao_nav = document.getElementById("container_botao_nav");
container_botao_nav.addEventListener("click", () => {
  var mudar_pagina_link = document.getElementById("mudar_pagina_link");
  var container_links_nav = document.getElementById("container_links_nav");
  var botaoabrirfecharmenu = document.getElementById("botaoabrirfecharmenu");
  if (mudar_pagina_link.style.height == "17%") {
    mudar_pagina_link.style.height = "6%";
    container_botao_nav.style.top = "50%";
    container_links_nav.style.fontSize = "0rem";
    botaoabrirfecharmenu.src = "images/menuabrirICon.png";
  } else {
    mudar_pagina_link.style.height = "17%";
    container_botao_nav.style.top = "80%";
    container_links_nav.style.fontSize = "2rem";
    botaoabrirfecharmenu.src = "images/fecharIcon.png";
  }
});
function MudarPágina() {
  var nome_planeta = document.getElementById("nome_planeta");
  var imagem_planeta = document.getElementById("imagem_planeta");
  var td_plnNome = document.getElementById("td_plnNome");
  var td_plnVel = document.getElementById("td_plnVel");
  var td_plnMassa = document.getElementById("td_plnMassa");
  var td_plnSat = document.getElementById("td_plnSat");
  var curiosidade_pln = document.getElementById("curiosidade_pln");
  var conteudo_escrito = document.getElementById("conteudo_escrito");

  if (cont_pagina == 3) {
    nome_planeta.innerHTML = "TERRA";
    td_plnNome.innerHTML = "Terra";
    td_plnVel.innerHTML = "29,8";
    td_plnMassa.innerHTML = "1";
    td_plnSat.innerHTML = "1";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 12.74 quilômetros.</li><li>Área da superfície: 510.100.000 km² </li><li>Massa: 5,972 × 10^24 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "A Terra é o quinto maior planeta do Sistema Solar e o único a ter uma camada de gases na atmosfera que garante condições para a existência de vida aqui. 2. Cerca de 70% da superfície do planeta é coberta por água em estado líquido, elemento essencial para a existência de formas de vida.";
    imagem_planeta.src = "images/terra.png";
    imagem_planeta.style.animationDuration = "45s";
  } else if (cont_pagina == 4) {
    nome_planeta.innerHTML = "lua";
    td_plnNome.innerHTML = "Lua";
    td_plnVel.innerHTML = "1,02";
    td_plnMassa.innerHTML = "1,23";
    td_plnSat.innerHTML = "0";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 3.47 quilômetros.</li><li>Área da superfície: 38 milhões²</li><li>Massa: 7,35.1022 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "Acredita-se que a Lua foi criada após um objeto do tamanho de Marte se colidir com a Terra há 4,5 bilhões de anos, segundo a Nasa. Os detritos dessa colisão passaram a orbitar a Terra e eventualmente se uniram para formar nosso satélite.";
    imagem_planeta.src = "images/lua.png";
    imagem_planeta.style.animationDuration = "25s";
  } else if (cont_pagina == 6) {
    nome_planeta.innerHTML = "jupiter";
    td_plnNome.innerHTML = "Júpiter";
    td_plnVel.innerHTML = "13,1";
    td_plnMassa.innerHTML = "318";
    td_plnSat.innerHTML = "61";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 139.8 quilômetros.</li><li>Área da superfície: 6,142 × 10^10 km²</li><li>Massa: 1,898 × 10^27 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "Júpiter possui o dia mais curto do Sistema Solar: ele leva apenas cerca de 10 horas para girar uma volta completa – 14 horas mais rápido do que a rotação média da Terra. Em contraponto, Júpiter faz uma órbita completa ao redor do Sol em cerca de 12 anos terrestres.";
    imagem_planeta.src = "images/jupiter.png";
    imagem_planeta.style.animationDuration = "15s";
  } else if (cont_pagina == 7) {
    nome_planeta.innerHTML = "SATURNO";
    td_plnNome.innerHTML = "Saturno";
    td_plnVel.innerHTML = "9,6";
    td_plnMassa.innerHTML = "95,2";
    td_plnSat.innerHTML = "31";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 116.4 quilômetros.</li><li>Área da superfície: 4,27 × 10^10 km²</li><li>Massa: 5,683 × 10^26 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "Os anéis de Saturno são formados por partículas e fragmentos maiores de rocha e gelo, originárias de asteroides, cometas e luas que foram destruídos pela força gravitacional do planeta. Distribuem-se horizontalmente por até 282.000 km, com espessura variável que pode ir de alguns metros a 1 km, de acordo com a literatura acadêmica.";
    imagem_planeta.src = "images/saturno.png";
    imagem_planeta.style.animationDuration = "18s";
  } else if (cont_pagina == 8) {
    nome_planeta.innerHTML = "URANO";
    td_plnNome.innerHTML = "Urano";
    td_plnVel.innerHTML = "6,8";
    td_plnMassa.innerHTML = "14,6";
    td_plnSat.innerHTML = "23";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 50.72 quilômetros.</li><li>Área da superfície: 8,083 × 10^9 km²</li><li>Massa: 8,681 × 10^25 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "Seu nome foi dado em homenagem a Urano, o deus grego do céu; Um dia em Urano, ou seja, a rotação em seu próprio eixo, dura 17 horas e 14 minutos; É o único planeta do Sistema Solar que gira 90° em relação ao plano de sua órbita, como se estivesse de lado; Até o momento, a Nasa reconhece 27 luas em órbita com Urano.";
    imagem_planeta.src = "images/urano.png";
    imagem_planeta.style.animationDuration = "25s";
  } else if (cont_pagina == 5) {
    nome_planeta.innerHTML = "MARTE";
    td_plnNome.innerHTML = "Marte";
    td_plnVel.innerHTML = "24,1";
    td_plnMassa.innerHTML = "0,108";
    td_plnSat.innerHTML = "2";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 6.779 quilômetros.</li><li>Área da superfície: 144.400.000 km²</li><li>Massa: 6,39 × 10^23 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "O nome Marte é derivado do deus romano da guerra em decorrência de sua coloração avermelhada. As luas Phobos (que significa medo) e Deimos (fobia) receberam o mesmo nome dos cavalos que puxavam a carruagem do deus Ares, o deus da guerra na mitologia grega.";
    imagem_planeta.src = "images/marte.png";
    imagem_planeta.style.animationDuration = "45s";
  } else if (cont_pagina == 1) {
    nome_planeta.innerHTML = "MERCÚRIO";
    td_plnNome.innerHTML = "Mercúrio";
    td_plnVel.innerHTML = "47,9";
    td_plnMassa.innerHTML = "0,055";
    td_plnSat.innerHTML = "0";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 4.879 quilômetros.</li><li>Área da superfície: 74.8km²</li><li>Massa: 3,285 × 10^23 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "Embora a radiação solar, as temperaturas extremas e a proximidade de Mercúrio ao Sol possam levar a acreditar que Mercúrio é o planeta mais quente do Sistema Solar, ele não é. Há outro corpo celeste que o ultrapassa. Graças à sua atmosfera densa e capacidade de contenção de calor, Vênus é considerado o planeta mais quente do Sistema Solar, segundo a Nasa.";
    imagem_planeta.src = "images/mercurio.png";
    imagem_planeta.style.animationDuration = "180s";
  } else if (cont_pagina == 9) {
    nome_planeta.innerHTML = "NETUNO";
    td_plnNome.innerHTML = "Netuno";
    td_plnVel.innerHTML = "5,4";
    td_plnMassa.innerHTML = "17,2";
    td_plnSat.innerHTML = "11";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 49.24 quilômetros.</li><li>Área da superfície: 7,618 × 10^9 km²</li><li>Massa: 1,024 × 10^26 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "É o quarto maior planeta do Sistema Solar. Desde o seu descobrimento, Netuno completou somente 1 órbita em torno do Sol, o que ocorreu entre 1846 e 2011. O campo magnético de Netuno é 27 vezes mais intenso que o da Terra.";
    imagem_planeta.src = "images/netuno.png";
    imagem_planeta.style.animationDuration = "30s";
  } else if (cont_pagina == 2) {
    nome_planeta.innerHTML = "VÊNUS";
    td_plnNome.innerHTML = "Vênus";
    td_plnVel.innerHTML = "35";
    td_plnMassa.innerHTML = "0,815";
    td_plnSat.innerHTML = "0";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 12.10 quilômetros.</li><li>Área da superfície: 460.200.000 km²</li><li>Massa: 4,8685×1024 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "Ele tem o dia mais longo que o ano, sua rotação é no sentido contrário ao da Terra e sua atmosfera é tóxica devido a um efeito estufa descontrolado que dá ao planeta uma cor amarelada e faz com que sua temperatura seja em média em torno de 475° ";
    imagem_planeta.src = "images/venus.png";
    imagem_planeta.style.animationDuration = "600s";
  } else if (cont_pagina == 0) {
    nome_planeta.innerHTML = "SOL";
    td_plnNome.innerHTML = "Sol";
    td_plnVel.innerHTML = "47,9";
    td_plnMassa.innerHTML = "0,055";
    td_plnSat.innerHTML = "X";
    conteudo_escrito.innerHTML =
      "<ul> <li>Diâmetro equatorial: 1.392.700 km.</li><li>Área da superfície: 4,3 milhões de quilômetros</li><li>Massa: 1,989 × 10^30 kg.</li> </ul>";
    curiosidade_pln.innerHTML =
      "Embora a radiação solar, as temperaturas extremas e a proximidade de Mercúrio ao Sol possam levar a acreditar que Mercúrio é o planeta mais quente do Sistema Solar, ele não é. Há outro corpo celeste que o ultrapassa. Graças à sua atmosfera densa e capacidade de contenção de calor, Vênus é considerado o planeta mais quente do Sistema Solar, segundo a Nasa.";
    imagem_planeta.src = "images/sol.png";
    imagem_planeta.style.animationDuration = "0s";
  }
}
