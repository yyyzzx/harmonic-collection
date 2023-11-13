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

  function sortTable(idx){
    var otable=document.querySelector('table'),
        obody=otable.tBodies[0],
        otr=obody.rows,
        tarr=[];
    for(var i=1;i<otr.length;i++){
        tarr[i-1]=otr[i];
    }
    if(obody.sorCol==idx){
        tarr.reverse();
    }else{
        tarr.sort(function(tr1,tr2){
            var value1=tr1.cells[idx].innerHTML;
            var value2=tr2.cells[idx].innerHTML;
            if(!isNaN(value1)&&!isNaN(value2)){
                return value1-value2;
            }else{
                return value1.localeCompare(value2);
            }
        })
    }
    var fragment=document.createDocumentFragment();
    for(var i=0;i<tarr.length;i++){
        fragment.appendChild(tarr[i]);
    }
    obody.appendChild(fragment);
    obody.sorCol=idx;
}


