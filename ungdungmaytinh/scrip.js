function inputon1(){
let input1 = parseInt(document.getElementById('addinput1').value);

let input2 = parseInt(document.getElementById('addinput2').value);
let ketqua = input1 + input2;

document.getElementById('idKetqua').innerHTML = 'Kết quả = ' + ketqua;
}


function subtraction(){
    let input1;
    input1 = parseInt(document.getElementById('addinput1').value);
    let input2 = parseInt(document.getElementById('addinput2').value);
    let ketqua = input1 - input2;
    document.getElementById('idKetqua').innerHTML = 'Kết quả = ' + ketqua;
 }

 function Multiplication(){
    let input1;
    input1 = parseInt(document.getElementById('addinput1').value);
    let input2 = parseInt(document.getElementById('addinput2').value);
    let ketqua = input1 * input2;
    document.getElementById('idKetqua').innerHTML = 'Kết quả = ' + ketqua;
 }

 function Division(){
    let input1;
    input1 = parseInt(document.getElementById('addinput1').value);
    let input2 = parseInt(document.getElementById('addinput2').value);
    let ketqua = input1 / input2;
    document.getElementById('idKetqua').innerHTML = 'Kết quả = ' + ketqua;
 }
