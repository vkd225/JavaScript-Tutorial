var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}

function addMore() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.creteTextNode(inputValue);

  li.appendChild(t);
  if(inputValue == ''){
    alert("Text Missing");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  
  document.getElementById("myInput").value="";

  var span = document.createElement("Span");
  var txt = document.creteTextNode("\u00D7");
  span.appendChild(txt);
  li.appendChild(span);

  for (i= 0; i<close.length; i++){
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display = "none";

    }

  }

}