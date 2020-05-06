var check = ['Parijs', '8', 'Ijselmeer'];
var count = 0; 


function Conteroleer() {
    var Frankrijk = document.getElementById('Frankrijk').value;
    var Spin = document.getElementById('Spin').value;
    var Meer = document.getElementById('Meer').value;
    if (Frankrijk == check[0]) {
        document.getElementById('Frankrijk').style.backgroundColor = "green";
        count += 1;
    } else {
        document.getElementById('Frankrijk').style.backgroundColor = "red";
    }
    if (Spin == check[1]) {
        document.getElementById('Spin').style.backgroundColor = "green";
        count += 1;
    } else {
        document.getElementById('Spin').style.backgroundColor = "red";
    }
    if (Meer == check[2]){
        document.getElementById('Meer').style.backgroundColor = "green";
        count += 1;
    } else {
        document.getElementById('Meer').style.backgroundColor = "red";
    }
    if (count > 3) {
        count = 0;
    }
    document.getElementById('score').innerHTML = "Jouw score is:" + count;
    console.log(count);

}