var batman = document.getElementById("batman");
var joker = document.getElementById("joker");
var bane = document.getElementById("bane");

batman.addEventListener("click", picLink);
joker.addEventListener("click", picLink);
bane.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}