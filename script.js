/*
var name = prompt("Seu nome!")
alert("Bem vindo " + name)

document.getElementById('ew').innerHTML = `Oi, ${name}`

function noPage(){
    alert("Esta página ainda está em desenvolvimento")
}
*/

/*
var senha = prompt("Senha") 
do{
    if(senha == "12345"){
        break
    } else{
        senha = prompt("Senha incorreta")
    }
}while(true)
*/
var posX = 0
var posY = 0
var Clicked = false
var count = 0;
var obj_count = 0;
var objs = 0;

function select(obj_id){
    Clicked = !Clicked
    obj_count = obj_id;
}


function update(){

    if(Clicked){
        document.getElementById("bory").addEventListener('mousemove', function(event) {
            posX = event.clientX
            posY = event.clientY
        })
       
        
 
        document.getElementById(`${obj_count}`).style.position = 'Absolute'
        document.getElementById(`${obj_count}`).style.left = `${posX - 20}px`
        document.getElementById(`${obj_count}`).style.top = `${posY - 20}px`
        
    }

    objs = document.getElementsByTagName("drag").length;

    console.log(objs)

    for (x = 0; x < objs; x++){
        if(document.getElementsByTagName("drag")[x].id == "null"){
            document.getElementsByTagName("drag")[x].id = `${count}`
            count ++
        }
    }
}