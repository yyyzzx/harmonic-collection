const circle=document.querySelector('.circle');
const text=circle.innerText;
circle.innerText='';

for(let i=0;i<text.length;i++){
    let letter=text[i];
    let span=document.createElement('span');
    span.innerText=letter;
    let r=(360/text.length)*i;
    span.style.transform='rotate('+r+'deg)';
    circle.appendChild(span);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




