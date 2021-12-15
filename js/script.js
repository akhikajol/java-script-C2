
// alert
function textalrt(){
   alert("wellcome to ss");
}

 function textChg(){
    document.getElementById('p').innerHTML = "hello ssb";
 }
// class name
 function textChgt(){
    document.getElementsByClassName('cl')[2].innerHTML = "hello";
 }
//  date
function textChd(){
   document.getElementById('da').innerHTML = Date();
}
// var data 
function textPart(){
   var data = "wellcome to ss "
   document.getElementById('var').innerHTML = data.repeat(4)
}
// img change 
function imgOne(){
   document.getElementById('img').src = "./img/html.png";
}
function imgTwo(){
   document.getElementById('img').src = "./img/css.png";
}



