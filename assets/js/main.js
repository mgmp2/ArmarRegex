
 var pas1   = document.getElementById("pas-1");
 var pas2   = document.getElementById("pas-2");
 var btn   = document.getElementById("registrar");

window.addEventListener("load", function(e){
  e.preventDefault();
  pas2.addEventListener("blur", function(){
    (pas1.value != pas2.value) ?  btn.setAttribute("disabled", "true") : btn.removeAttribute("disabled");
  }) });
