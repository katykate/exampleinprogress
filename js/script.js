
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-clicked');
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null; 
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
var output = document.getElementById('info') 
  for (var i = 0; i < output.length; i++) {
    output[i].onclick 
  }

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        //var response = JSON.parse(xhttp.responseText);
        //console.log(response.blocks[0].heading);
      
        var response = JSON.parse(xhttp.responseText);
        var blocks = response.blocks;

        var output ='';
        for(var i = 0; i < blocks.length; i++) {
        output += blocks[i].heading;
        }
        document.getElementById('title').innerHTML = output;

        var output ='';
        for(var i = 0; i < blocks.length; i++) {
        output += blocks[i].content;
        }
        document.getElementById('info').innerHTML = output;
      }
    };

xhttp.open("GET","http://design.propcom.co.uk/buildtest/accordion-data.json", true);
xhttp.send();

