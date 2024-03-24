import HeroiconsReact from "https://esm.sh/@heroicons/react";

//ACTIVE SIDEBAR SINISTRA.
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    let j = 0;
    while (j < list.length) {
      list[j++].classList.remove('active');
    }
    list[i].classList.add('active');
  })
}
