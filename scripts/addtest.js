var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

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