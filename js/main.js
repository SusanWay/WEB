document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('start_form');
    var btn1 = document.getElementById('btn1');

    const form2 = document.getElementById('skills_form');
    var btn2 = document.getElementById('btn2');

    const form3 = document.getElementById('achievements_form');
    var btn3 = document.getElementById('btn3'); 


    btn1.onclick = formSend1;
    btn2.onclick = formSend2;
    btn3.onclick = formSend3;


   async function formSend1(e){

    e.preventDefault();

    
    document.getElementById('start_form').style.display = "flex";
    document.getElementById('start_form').hidden = false;
    document.getElementById('skills_form').style.display = "none";
    document.getElementById('start_form').hidden = true;
    document.getElementById('achievements_form').style.display = "none";
    document.getElementById('achievements_form').hidden = true;

    }


    async function formSend2(e){

        e.preventDefault();

        document.getElementById('start_form').style.display = "none";
        document.getElementById('start_form').hidden = true;
        document.getElementById('skills_form').style.display = "flex";
        document.getElementById('start_form').hidden = false;
        document.getElementById('achievements_form').style.display = "none";
        document.getElementById('achievements_form').hidden = true;

    }


    async function formSend3(e){

        e.preventDefault();

        document.getElementById('start_form').style.display = "none";
        document.getElementById('start_form').hidden = true;
        document.getElementById('skills_form').style.display = "none";
        document.getElementById('start_form').hidden = true;
        document.getElementById('achievements_form').style.display = "flex";
        document.getElementById('achievements_form').hidden = false;

    }
})