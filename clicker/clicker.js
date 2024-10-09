var num = 0;

//FUNÇÃO DE CLIQUE NO PLANETA
function obj_click() { 

    //DECLARAÇÃO DAS VARIÁVEIS
    var obj_clicker = document.getElementById("obj_clicker");
    var obj = document.getElementById("obj");
    var conquistas = document.getElementById("conquistas");
    var tamanho = document.getElementById("tamanho");
    var nivel = document.getElementById("nivel");
    num += 1;


    //DEFINIÇÃO DOS NIVEIS E MUDANÇA DE PLANETA
    tamanho.innerHTML = num;      
    if(num >= 0 ){
        nivel.innerHTML = "PLUTAO";
        obj.src = "images/plutao.png";
        var plutao = document.getElementById('plutao')
        plutao.style.scale = "100%";
    }

    if(num >= 20 ){
        nivel.innerHTML = "LUA";
        obj.src = "images/lua.png";
        var lua = document.getElementById('lua')
        lua.style.scale = "100%";
        obj.style.width = "350px";
        obj.style.filter = "drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.20)) saturate(150%)";
    }

    if(num >= 50 ){
        num += 2;
        nivel.innerHTML = "MERCURIO";
        obj.src = "images/mercurio.png";
        var mercurio = document.getElementById('mercurio')
        mercurio.style.scale = "100%";
        obj.style.width = "300px";
        obj.style.filter = "drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.13)) saturate(150%)";
    }
    
    if(num >= 150 ){
        num += 2;
        nivel.innerHTML = "MARTE";
        obj.src = "images/marte.png";
        obj.style.width = "700px";
        obj.style.filter = "drop-shadow(0px 0px 2px rgba(255, 255, 255)) drop-shadow(0px 0px 30px rgba(255, 60, 0, 35%)) saturate(150%)";
        var marte = document.getElementById('marte')
        marte.style.scale = "100%";
        conquistas.scrollTop = "500";
    }

    if(num >= 300 ){
        num += 2;
        nivel.innerHTML = "VÊNUS";
        obj.src = "images/venus.png";
        obj.style.width = "300px";
        obj.style.filter = "drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.13)) saturate(150%)";
        var venus = document.getElementById('venus')
        venus.style.scale = "100%";
    }

    if(num >= 500 ){
        num += 15;
        nivel.innerHTML = "TERRA";
        obj.src = "images/terra.png";
        obj.style.width = "400px";
        obj.style.filter = "drop-shadow(0px 0px 2px rgba(255, 255, 255)) drop-shadow(0px 0px 30px rgba(0, 110, 255, 35%)) saturate(150%)";
        var terra = document.getElementById('terra')
        terra.style.scale = "100%";
    }

    if(num >= 1500 ){
        num += 10;
        nivel.innerHTML = "URANO";
        obj.src = "images/urano.png";
        obj.style.filter = "drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.13)) saturate(150%)";
        var urano = document.getElementById('urano')
        urano.style.scale = "100%";
    }

    if(num >= 2500 ){
        num += 30;
        nivel.innerHTML = "NETUNO";
        obj.src = "images/netuno.png";
        var netuno = document.getElementById('netuno')
        netuno.style.scale = "100%";
        conquistas.scrollTop = "3000";
    }

    if(num >= 5000 ){
        num += 10;
        nivel.innerHTML = "SATURNO";
        obj.src = "images/saturno.png";
        var saturno = document.getElementById('saturno')
        saturno.style.scale = "100%";
        obj.style.width = "1200px";
        obj.style.filter = "drop-shadow(0px 0px 100px rgba(255, 255, 255, 0.20)) saturate(150%)";
    }

    if(num >= 8000 ){
        num += 1350;
        nivel.innerHTML = "JUPITER";
        obj.src = "images/jupiter.png";
        var jupiter = document.getElementById('jupiter')
        jupiter.style.scale = "100%";
        obj.style.width = "450px";
    }

    if(num >= 100000 ){
        nivel.innerHTML = "SOL";
        obj.src = "images/sol.gif";
        var sol = document.getElementById('sol')
        sol.style.scale = "100%";
        obj.style.width = "700px";
        obj.style.filter = "drop-shadow(0px 0px 30px rgba(255, 0, 0)) drop-shadow(0px 0px 50px rgba(255, 115, 0, 80%))";
        tamanho.style.top = "75%";
        nivel.style.top = "85%";
        obj_clicker.style.top = "45%";
    }
}
