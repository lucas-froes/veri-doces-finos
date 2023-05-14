let arrowConteudo = document.querySelectorAll('.cursos-box-area');
let duvidasAccordion = document.querySelectorAll('.duvidas-accordion');
const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

console.log(controls);

controls.forEach(control =>{
   control.addEventListener('click', () =>{
      const isLeft = control.classList.contains("arrow-left");
      if(isLeft){
        currentItem -= 1;
      }else{
        currentItem += 1;
      }
      if(currentItem >= maxItems){
        currentItem = 0;
      }
      if(currentItem < 0){
        currentItem = maxItems - 1;
      }
      items.forEach(item =>{
        item.classList.remove("current-item");

        items[currentItem].scrollIntoView({
          inline:"center",
          behavior:"smooth"
        });
        items[currentItem].classList.add("currrent-item");
      });

      console.log("control clicked", isLeft, currentItem, maxItems);
   });
});


function clickCursos(event){ 
 
  if(event.currentTarget.children[1].classList[2]){
    event.currentTarget.children[1].classList.remove('on-conteudo');
    event.currentTarget.children[2].children[0].src ="img/arrow%20down.svg";
  }
  else{
    event.currentTarget.children[1].classList.add('on-conteudo');
    event.currentTarget.children[2].children[0].src ="img/arrow-up.svg";

  }
  
  arrowConteudo.forEach((click, i) =>{

    if(event.currentTarget != click){
       click.children[1].classList.remove('on-conteudo');
       click.children[2].children[0].src ="img/arrow%20down.svg";
    }
  })
}

function accordion(event){
 
  if(event.currentTarget.children[1].classList[1]){
    event.currentTarget.children[1].classList.remove('on-accordion');
    event.currentTarget.children[0].children[1].children[0].src="img/arrow-down-red.svg";
  }
  else{
    event.currentTarget.children[1].classList.add('on-accordion');
    event.currentTarget.children[0].children[1].children[0].src="img/arrow-up-red.svg";
  }
  duvidasAccordion.forEach((clickAccordion) =>{
    if(event.currentTarget != clickAccordion){
      clickAccordion.children[1].classList.remove('on-accordion');
      clickAccordion.children[0].children[1].children[0].src="img/arrow-down-red.svg";
    }
  });


 
}

arrowConteudo.forEach((cursos) =>{
    cursos.addEventListener('click',clickCursos);
})

duvidasAccordion.forEach((duvida) =>{
  duvida.addEventListener('click', accordion);
})