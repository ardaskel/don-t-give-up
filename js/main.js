/*var Drugi = document.getElementById("drugi");
var Suma = document.getElementById("suma");


Pierwszy.addEventListener("input", add);
Drugi.addEventListener("input", add);

function add(){
  var one = parseFloat(Pierwszy.value) || 0;
  var two = parseFloat(Drugi.value) || 0 ;
  Suma.innerHTML = one + two;


}
*/

var pierwszy = document.getElementById("pierwszy");
var drugi = document.getElementById("drugi");
var trzeci = document.getElementById("trzeci");


/*
pierwszy.addEventListener("click",function(){
  if(PierwszyPic.className === "hide"){
    PierwszyPic.className = "";
  }else{
    PierwszyPic.className = "hide";
  }
})


drugi.addEventListener("click",function(){
  if(DrugiPic.className === "hide"){
    DrugiPic.className = "";
  }else{
    DrugiPic.className = "hide";
  }
})


trzeci.addEventListener("click",function(){
  if(TrzeciPic.className === "hide"){
    TrzeciPic.className = "";
  }else{
    TrzeciPic.className = "hide";
  }
})

*/

pierwszy.addEventListener("click",picLink);
drugi.addEventListener("click",picLink);
trzeci.addEventListener("click",picLink);


function picLink(){
  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if(pic.className === "hide"){
    pic.className = "";
  }else {
    pic.className = "hide";
  }
}



var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for(var i=0;i<items.length; i++){
  items[i].addEventListener("click",editItem);
  inputs[i].addEventListener("blur",updateItem);


}
function editItem(){
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0,input.value.length);

}

function updateItem (){
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}
