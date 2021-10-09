document.addEventListener('DOMContentLoaded', function(){
    
    //aqui manejo lo es la direcion de la flecha
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    var btnimg = document.getElementById('img1');

    btn1.onclick = function(){
        addTodo("../static/src/icon/1.png");
        color1();
    }

    btn2.onclick = function(){
        addTodo("../static/src/icon/2.png");
        color2();
    }

    btn3.onclick = function(){
        addTodo("../static/src/icon/3.png");
        color3();
    }

    btn4.onclick = function(){
        addTodo("../static/src/icon/4.png");
        color4();
    }

    function addTodo(x){
        btnimg.src = x;
    }

    async function color1(){
        c1.style.background = "#ffff33";
        await new Promise(r => setTimeout(r, 1000));
        c1.style.background = "#08060F";
        
        c2.style.background = "#FFFFFF";
        await new Promise(r => setTimeout(r, 1000));
        c2.style.background = "#08060F";
        
        c3.style.background = "#fc1717";
        await new Promise(r => setTimeout(r, 1000));
        c3.style.background = "#08060F";
        
        c4.style.background = "#176afc";
        await new Promise(r => setTimeout(r, 1000));
        c4.style.background = "#08060F";
        
        c5.style.background = "#fc1717";
        await new Promise(r => setTimeout(r, 1000));
        c5.style.background = "#08060F";
        
        c6.style.background = "#FFFFFF";
        await new Promise(r => setTimeout(r, 1000));
        c6.style.background = "#08060F";
        
        c7.style.background = "#176afc";
        await new Promise(r => setTimeout(r, 1000));
        c7.style.background = "#08060F";
    }

    async function color2(){
        c7.style.background = "#176afc";
        await new Promise(r => setTimeout(r, 1000));
        c7.style.background = "#08060F";

        c6.style.background = "#FFFFFF";
        await new Promise(r => setTimeout(r, 1000));
        c6.style.background = "#08060F";

        c5.style.background = "#fc1717";
        await new Promise(r => setTimeout(r, 1000));
        c5.style.background = "#08060F";

        c4.style.background = "#176afc";
        await new Promise(r => setTimeout(r, 1000));
        c4.style.background = "#08060F";

        c3.style.background = "#fc1717";
        await new Promise(r => setTimeout(r, 1000));
        c3.style.background = "#08060F";

        c2.style.background = "#FFFFFF";
        await new Promise(r => setTimeout(r, 1000));
        c2.style.background = "#08060F";

        c1.style.background = "#ffff33";
        await new Promise(r => setTimeout(r, 1000));
        c1.style.background = "#08060F";
        
    }

    async function color3(){
        c4.style.background = "#176afc";
        await new Promise(r => setTimeout(r, 1000));
        c4.style.background = "#08060F";

        c5.style.background = "#fc1717";
        c3.style.background = "#fc1717";
        await new Promise(r => setTimeout(r, 1000));
        c5.style.background = "#08060F";
        c3.style.background = "#08060F";
        
        c6.style.background = "#FFFFFF";
        c2.style.background = "#FFFFFF";
        await new Promise(r => setTimeout(r, 1000));
        c6.style.background = "#08060F";
        c2.style.background = "#08060F";

        c7.style.background = "#176afc";
        c1.style.background = "#ffff33";
        await new Promise(r => setTimeout(r, 1000));
        c7.style.background = "#08060F";
        c1.style.background = "#08060F";        
    }

    async function color4(){
        c7.style.background = "#176afc";
        c1.style.background = "#ffff33";
        await new Promise(r => setTimeout(r, 1000));
        c7.style.background = "#08060F";
        c1.style.background = "#08060F"; 

        c6.style.background = "#FFFFFF";
        c2.style.background = "#FFFFFF";
        await new Promise(r => setTimeout(r, 1000));
        c6.style.background = "#08060F";
        c2.style.background = "#08060F";

        c5.style.background = "#fc1717";
        c3.style.background = "#fc1717";
        await new Promise(r => setTimeout(r, 1000));
        c5.style.background = "#08060F";
        c3.style.background = "#08060F";

        c4.style.background = "#176afc";
        await new Promise(r => setTimeout(r, 1000));
        c4.style.background = "#08060F";
    }
});