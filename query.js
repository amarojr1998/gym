function myFunction() {
  var x = document.getElementById("fit");
  if (x.className === "fitness") {
    x.className += " responsive";
  } else {
    x.className = "fitness";
  }
}
