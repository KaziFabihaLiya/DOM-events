console.log("Hello DOM Events");

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
// option 3 : get element 