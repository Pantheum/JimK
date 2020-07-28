var A = document.getElementById("div-splash");
var B = document.getElementById("div-port");

B.style.display = "none" ;


function Hidefunc() {
  if (A.style.display === "none") {
    A.style.display = "block";
    B.style.display = "none";
  } else {
    A.style.display = "none";
    B.style.display = "block";
  }
}