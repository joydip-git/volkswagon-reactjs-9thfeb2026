function clicked() {
  window.alert("welcome to JS");
}

function addClickHandler() {
  //accessing the button element from DOM tree and storing the reference of the same in a local variable (btn)
  var btn = document.getElementById("btnClick");
  btn.addEventListener("click", clicked);
}


window.addEventListener("DOMContentLoaded", addClickHandler);
