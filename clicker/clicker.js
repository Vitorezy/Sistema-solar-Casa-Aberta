var num = 0;

var obj_clicker = document.getElementById("obj_clicker");


//FUNÇÃO DE CLIQUE NO PLANETA
function obj_click() { 
    num += 1;

    var tamanho = document.getElementById("tamanho");
    
    var nivel = document.getElementById("nivel");
    
    //DEFINIÇÃO DOS NIVEIS E MUDANÇA DE PLANETA
    tamanho.innerHTML = num;      
    //automatic Granny upgrade to 2x
    if(num >= 0 ){
        nivel.innerHTML = "PLUTAO";
        const obj = document.getElementById("obj");
        obj.src = "images/plutao.png";
        var plutao = document.getElementById('plutao')
        plutao.style.scale = "100%";
    }

    if(num >= 10 ){
        num += 5;
        nivel.innerHTML = "LUA";
        const obj = document.getElementById("obj");
        obj.src = "images/lua.png";
        var lua = document.getElementById('lua')
        lua.style.scale = "100%";
    }

    if(num >= 20 ){
        num += 10;
        nivel.innerHTML = "TERRA";
        const obj = document.getElementById("obj");
        obj.src = "images/terra.png";
        var terra = document.getElementById('terra')
        terra.style.scale = "100%";
    }

    //automatic factory upgrade to 10x
    if(num >= 4880) {
        num += 10;
        nivel.innerHTML = "Factory Level";
        const obj = document.getElementById("obj");
        obj.src = "images/curioso.gif";
        var supernova = document.getElementById('supernova')
        supernova.style.scale = "100%";
    }
}
  